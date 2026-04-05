import 'package:flutter/material.dart';
import 'package:forgecubes/models/auth.dart';
import 'package:forgecubes/models/gitlab.dart';
import 'package:forgecubes/scaffolds/list_stateful.dart';
import 'package:forgecubes/widgets/app_bar_title.dart';
import 'package:forgecubes/widgets/issue_item.dart';
import 'package:forgecubes/widgets/label.dart';
import 'package:provider/provider.dart';

class GlMergeRequestsScreen extends StatelessWidget {
  final String id;
  final String? prefix;
  GlMergeRequestsScreen(this.id, {this.prefix});

  @override
  Widget build(BuildContext context) {
    return ListStatefulScaffold<GitlabIssue, int>(
      title: AppBarTitle("mergeRequests"),
      fetch: (page) async {
        page = page ?? 1;
        final res = await context.read<AuthModel>().fetchGitlabWithPage(
          '/projects/$id/merge_requests?state=opened&page=$page',
        );
        return ListPayload(
          cursor: res.cursor,
          hasMore: res.hasMore,
          items: (res.data as List)
              .map((v) => GitlabIssue.fromJson(v))
              .toList(),
        );
      },
      itemBuilder: (p) => IssueItem(
        isPr: true,
        author: p.author!.username,
        avatarUrl: p.author!.avatarUrl,
        commentCount: p.userNotesCount,
        subtitle: '#' + p.iid.toString(),
        title: p.title,
        updatedAt: p.updatedAt,
        labels: p.labels!.isEmpty
            ? null
            : Wrap(
                spacing: 4,
                runSpacing: 4,
                children: [
                  for (var label in p.labels!)
                    MyLabel(name: label, cssColor: '#428BCA'),
                ],
              ),
        // url: '/gitlab/projects/${p.projectId}/merge_requests/${p.iid}',
        url: '$prefix/merge_requests/${p.iid}', // TODO:
      ),
    );
  }
}
