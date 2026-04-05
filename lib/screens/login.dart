import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:forgecubes/models/auth.dart';
import 'package:forgecubes/models/theme.dart';
import 'package:forgecubes/scaffolds/single.dart';
import 'package:forgecubes/utils/utils.dart';
import 'package:forgecubes/widgets/action_button.dart';
import 'package:forgecubes/widgets/app_bar_title.dart';
import 'package:forgecubes/widgets/text_field.dart';
import 'package:provider/provider.dart';
import '../widgets/link.dart';
import '../widgets/loading.dart';
import '../widgets/avatar.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _tokenController = TextEditingController();
  final _domainController = TextEditingController();

  // For Bitbucket
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  Widget _buildAccountItem(int index) {
    final theme = Provider.of<ThemeModel>(context);
    final auth = Provider.of<AuthModel>(context);
    final account = auth.accounts![index];
    return LinkWidget(
      onTap: () {
        auth.setActiveAccountAndReload(index);
      },
      onLongPress: () {
        theme.showActions(context, [
          ActionItem(
            text: "removeAccount",
            isDestructiveAction: true,
            onTap: (_) {
              auth.removeAccount(index);
            },
          ),
        ]);
      },
      child: Container(
        padding: CommonStyle.padding,
        decoration: BoxDecoration(
          border: Border(bottom: BorderSide(color: theme.palette.border)),
        ),
        child: Row(
          children: <Widget>[
            Avatar(url: account.avatarUrl, size: AvatarSize.large),
            Padding(padding: EdgeInsets.only(left: 10)),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    account.login,
                    style: TextStyle(fontSize: 20, color: theme.palette.text),
                  ),
                  Padding(padding: EdgeInsets.only(top: 6)),
                  Text(
                    account.domain,
                    style: TextStyle(color: theme.palette.secondaryText),
                  ),
                ],
              ),
            ),
            (index == auth.activeAccountIndex)
                ? Icon(Ionicons.checkmark)
                : Container(),
          ],
        ),
      ),
    );
  }

  Widget _buildAddItem({
    IconData? brand,
    required String text,
    Function? onTap,
  }) {
    final theme = Provider.of<ThemeModel>(context);
    return LinkWidget(
      child: Container(
        padding: EdgeInsets.symmetric(vertical: 20),
        decoration: BoxDecoration(
          border: Border(bottom: BorderSide(color: theme.palette.border)),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Icon(Ionicons.add),
            SizedBox(width: 4),
            Icon(brand),
            SizedBox(width: 8),
            Text(text, style: TextStyle(fontSize: 16)),
          ],
        ),
      ),
      onTap: onTap,
    );
  }

  Widget _buildPopup(
    BuildContext context, {
    List<Widget>? notes,
    bool showDomain = false,
  }) {
    return Column(
      children: <Widget>[
        if (showDomain)
          MyTextField(controller: _domainController, placeholder: 'Domain'),
        SizedBox(height: 8),
        MyTextField(placeholder: 'Access token', controller: _tokenController),
        SizedBox(height: 8),
        if (notes != null) ...notes,
      ],
    );
  }

  void showError(err) {
    context.read<ThemeModel>().showConfirm(
      context,
      Text("somethingBadHappens + '$err"),
    );
  }

  @override
  Widget build(BuildContext context) {
    final auth = Provider.of<AuthModel>(context);
    final theme = Provider.of<ThemeModel>(context);
    return SingleScaffold(
      title: AppBarTitle("selectAccount"),
      body: auth.loading
          ? Center(child: Loading())
          : Container(
              child: Column(
                children: [
                  ...List.generate(auth.accounts!.length, _buildAccountItem),
                  _buildAddItem(
                    text: "githubAccount",
                    brand: Ionicons.logo_github,
                    onTap: () async {
                      theme.showActions(context, [
                        ActionItem(
                          text: 'via OAuth',
                          onTap: (_) {
                            auth.redirectToGithubOauth();
                          },
                        ),
                        ActionItem(
                          text: 'via OAuth (Public repos only)',
                          onTap: (_) {
                            auth.redirectToGithubOauth(true);
                          },
                        ),
                        ActionItem(
                          text: 'via Personal token',
                          onTap: (_) async {
                            final result = await theme.showConfirm(
                              context,
                              _buildPopup(
                                context,
                                notes: [
                                  Text(
                                    AppLocalizations.of(
                                      "context",
                                    )!.permissionRequiredMessage,
                                    style: TextStyle(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w400,
                                    ),
                                  ),
                                  SizedBox(height: 8),
                                  Text(
                                    'user, repo, read:org, notifications',
                                    style: TextStyle(
                                      fontSize: 16,
                                      color: theme.palette.primary,
                                    ),
                                  ),
                                ],
                              ),
                            );
                            if (result == true) {
                              try {
                                await auth.loginWithToken(
                                  _tokenController.text,
                                );
                                _tokenController.clear();
                              } catch (err) {
                                showError(err);
                              }
                            }
                          },
                        ),
                      ]);
                    },
                  ),
                  _buildAddItem(
                    text: "gitlabAccount",
                    brand: Ionicons.git_branch_outline,
                    onTap: () async {
                      _domainController.text = 'https://gitlab.com';
                      final result = await theme.showConfirm(
                        context,
                        _buildPopup(
                          context,
                          showDomain: true,
                          notes: [
                            Text(
                              AppLocalizations.of(
                                context,
                              )!.permissionRequiredMessage,
                              style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w400,
                              ),
                            ),
                            SizedBox(height: 8),
                            Text(
                              'api, read_user, read_repository',
                              style: TextStyle(
                                fontSize: 16,
                                color: theme.palette.primary,
                              ),
                            ),
                          ],
                        ),
                      );
                      if (result == true) {
                        try {
                          await auth.loginToGitlab(
                            _domainController.text,
                            _tokenController.text,
                          );
                          _tokenController.clear();
                        } catch (err) {
                          showError(err);
                        }
                      }
                    },
                  ),
                  Container(
                    padding: CommonStyle.padding,
                    child: Text(
                      "longPressToRemoveAccount,
                      style: TextStyle(
                        fontSize: 16,
                        color: theme.palette.secondaryText,
                      ),
                    ),
                  ),
                ],
              ),
            ),
    );
  }
}
