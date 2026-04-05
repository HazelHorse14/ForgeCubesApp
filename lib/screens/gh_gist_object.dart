import 'package:flutter/material.dart';
import 'package:forgecubes/scaffolds/common.dart';
import 'package:forgecubes/utils/utils.dart';
import 'package:forgecubes/widgets/app_bar_title.dart';
import 'package:forgecubes/widgets/blob_view.dart';
import 'package:forgecubes/widgets/action_entry.dart';

class GistObjectScreen extends StatelessWidget {
  final String login;
  final String id;
  final String file;
  final String? raw;
  final String? content;

  GistObjectScreen(this.login, this.id, this.file, {this.raw, this.content});

  @override
  Widget build(BuildContext context) {
    return CommonScaffold(
      title: AppBarTitle(file),
      action: ActionEntry(iconData: Ionicons.cog, url: '/choose-code-theme'),
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: BlobView(file, text: content),
      ),
    );
  }
}
