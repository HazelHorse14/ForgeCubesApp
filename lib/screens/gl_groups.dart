import 'package:flutter/material.dart';
import 'package:forgecubes/models/auth.dart';
import 'package:forgecubes/models/gitlab.dart';
import 'package:forgecubes/scaffolds/list_stateful.dart';
import 'package:forgecubes/widgets/app_bar_title.dart';
import 'package:forgecubes/widgets/user_item.dart';
import 'package:provider/provider.dart';

class GlGroupsScreenn extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListStatefulScaffold<GitlabGroup, int>(
      title: AppBarTitle("groups"),
      fetch: (page) async {
        page = page ?? 1;
        final auth = context.read<AuthModel>();
        final res = await auth.fetchGitlabWithPage('/groups?page=$page');
        return ListPayload(
          cursor: res.cursor,
          hasMore: res.hasMore,
          items: <GitlabGroup>[for (var v in res.data) GitlabGroup.fromJson(v)],
        );
      },
      itemBuilder: (v) {
        return UserItem.gitlabGroup(
          avatarUrl: v.avatarUrl,
          login: v.path,
          name: v.name,
          bio: Text(v.description ?? ''),
          id: v.id,
        );
      },
    );
  }
}
