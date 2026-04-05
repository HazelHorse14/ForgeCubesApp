import 'package:ferry/ferry.dart';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:forgecubes/graphql/github.data.gql.dart';
import 'package:forgecubes/graphql/github.req.gql.dart';
import 'package:forgecubes/graphql/github.var.gql.dart';
import 'package:forgecubes/scaffolds/refresh_stateful.dart';
import 'package:forgecubes/widgets/app_bar_title.dart';
import 'package:forgecubes/widgets/object_tree.dart';
import 'package:forgecubes/widgets/table_view.dart';
import 'package:provider/provider.dart';
import 'package:forgecubes/models/auth.dart';

class GhGistsFilesScreen extends StatelessWidget {
  final String id;
  final String login;
  GhGistsFilesScreen(this.login, this.id);

  @override
  Widget build(BuildContext context) {
    return RefreshStatefulScaffold<GGistData_user_gist?>(
      title: AppBarTitle("files"),
      fetch: () async {
        final req = GGistReq(
          (b) => b
            ..vars.login = login
            ..vars.name = id,
        );
        final OperationResponse<GGistData, GGistVars?> res = await context
            .read<AuthModel>()
            .gqlClient
            .request(req)
            .first;
        final gist = res.data!.user!.gist;
        return gist;
      },
      bodyBuilder: (payload, _) {
        return TableView(
          items: payload!.files!.map((v) {
            final uri = Uri(
              path: '/github/$login/gists/$id/${v.name}',
              queryParameters: {'content': v.text},
            ).toString();
            return ObjectTreeItem(
              url: uri,
              type: 'file',
              name: v.name ?? '',
              downloadUrl: null,
              size: v.size,
            );
          }),
        );
      },
    );
  }
}
