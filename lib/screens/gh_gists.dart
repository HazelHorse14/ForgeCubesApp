import 'package:ferry/ferry.dart';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:forgecubes/graphql/github.var.gql.dart';
import 'package:forgecubes/scaffolds/list_stateful.dart';
import 'package:forgecubes/widgets/app_bar_title.dart';
import 'package:forgecubes/widgets/gists_item.dart';
import 'package:provider/provider.dart';
import 'package:forgecubes/models/auth.dart';

import 'package:forgecubes/graphql/github.data.gql.dart';
import 'package:forgecubes/graphql/github.req.gql.dart';

class GhGistsScreen extends StatelessWidget {
  final String login;
  GhGistsScreen(this.login);

  @override
  Widget build(BuildContext context) {
    return ListStatefulScaffold<GGistsData_user_gists_nodes, String?>(
      title: AppBarTitle("gists"),
      fetch: (page) async {
        final req = GGistsReq(
          (b) => b
            ..vars.login = login
            ..vars.after = page,
        );
        final OperationResponse<GGistsData, GGistsVars?> res = await context
            .read<AuthModel>()
            .gqlClient
            .request(req)
            .first;
        final gists = res.data!.user!.gists;
        return ListPayload(
          cursor: gists.pageInfo.endCursor,
          items: gists.nodes ?? [],
          hasMore: gists.pageInfo.hasNextPage,
        );
      },
      itemBuilder: (v) {
        final filenames = [for (var file in v.files!) file.name];
        // TODO: add gist comments
        return GistsItem(
          description: v.description,
          login: login,
          filenames: filenames,
          language: v.files![0].language!.name,
          avatarUrl: v.owner!.avatarUrl,
          updatedAt: v.updatedAt,
          id: v.name,
        );
      },
    );
  }
}
