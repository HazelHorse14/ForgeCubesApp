import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:forgecubes/models/auth.dart';
import 'package:forgecubes/models/gitlab.dart';
import 'package:forgecubes/models/theme.dart';
import 'package:forgecubes/scaffolds/common.dart';
import 'package:forgecubes/utils/utils.dart';
import 'package:provider/provider.dart';

class GlIssueFormScreen extends StatefulWidget {
  final int id;
  GlIssueFormScreen(this.id);

  @override
  _GlIssueFormScreenState createState() => _GlIssueFormScreenState();
}

class _GlIssueFormScreenState extends State<GlIssueFormScreen> {
  var _title = '';
  var _body = '';

  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeModel>(context);
    final auth = Provider.of<AuthModel>(context);
    return CommonScaffold(
      title: Text('Submit an issue'),
      body: Column(
        children: <Widget>[
          Padding(
            padding: CommonStyle.padding,
            child: CupertinoTextField(
              style: TextStyle(color: theme.palette.text),
              placeholder: 'Title',
              onChanged: (v) {
                setState(() {
                  _title = v;
                });
              },
            ),
          ),
          Padding(
            padding: CommonStyle.padding,
            child: CupertinoTextField(
              style: TextStyle(color: theme.palette.text),
              placeholder: 'Body',
              onChanged: (v) {
                setState(() {
                  _body = v;
                });
              },
              maxLines: 10,
            ),
          ),
          CupertinoButton.filled(
            child: Text('Submit'),
            onPressed: () async {
              final res = await auth
                  .fetchGitlab(
                    '/projects/${widget.id}/issues',
                    isPost: true,
                    body: {'description': _body, 'title': _title},
                  )
                  .then((v) {
                    return GitlabIssue.fromJson(v);
                  });
              await theme.push(
                context,
                '/gitlab/projects/${widget.id}/issues/${res.iid}',
                replace: true,
              );
            },
          ),
        ],
      ),
    );
  }
}
