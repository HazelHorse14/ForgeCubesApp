import 'package:flutter/material.dart';
import 'package:forgecubes/scaffolds/single.dart';
import 'package:forgecubes/widgets/app_bar_title.dart';

class NotFoundScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleScaffold(
      title: AppBarTitle("notFoundMessage),
      body: Text("notFoundTextDisplay),
    );
  }
}
