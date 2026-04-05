import 'package:flutter/material.dart';
import 'package:forgecubes/models/auth.dart';
import 'package:forgecubes/models/gitlab.dart';
import 'package:forgecubes/scaffolds/list_stateful.dart';
import 'package:forgecubes/widgets/app_bar_title.dart';
import 'package:forgecubes/widgets/commit_item.dart';
import 'package:provider/provider.dart';

class GlCommitsScreen extends StatelessWidget {
  final String id;
  final String? prefix;
  final String? branch;
  GlCommitsScreen(this.id, {this.prefix, this.branch});

  @override
  Widget build(BuildContext context) {
    return ListStatefulScaffold<GitlabCommit, int>(
      title: AppBarTitle("commits"),
      fetch: (page) async {
        page = page ?? 1;
        final auth = context.read<AuthModel>();
        final res = await auth.fetchGitlabWithPage(
          '/projects/$id/repository/commits?ref_name=$branch&page=$page',
        );
        return ListPayload(
          cursor: res.cursor,
          hasMore: res.hasMore,
          items: (res.data as List)
              .map((v) => GitlabCommit.fromJson(v))
              .toList(),
        );
      },
      itemBuilder: (c) {
        return CommitItem(
          author: c.authorName,
          avatarUrl: null,
          avatarLink: null,
          createdAt: c.createdAt,
          message: c.message,
          url: '$prefix/commit/${c.id}', // TODO:
          // url: '/gitlab/projects/$id/commit/${c.id}', // TODO:
        );
      },
    );
  }
}
