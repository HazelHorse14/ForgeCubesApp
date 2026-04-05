import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:forgecubes/models/github.dart';
import 'package:forgecubes/scaffolds/list_stateful.dart';
import 'package:forgecubes/utils/utils.dart';
import 'package:forgecubes/widgets/app_bar_title.dart';
import 'package:provider/provider.dart';
import 'package:forgecubes/widgets/event_item.dart';
import 'package:forgecubes/models/auth.dart';

class GhEventsScreen extends StatelessWidget {
  final String login;
  GhEventsScreen(this.login);

  @override
  Widget build(context) {
    return ListStatefulScaffold<GithubEvent, int>(
      title: AppBarTitle("events"),
      itemBuilder: (payload) => EventItem(payload),
      fetch: (page) async {
        page = page ?? 1;
        final events = await context.read<AuthModel>().ghClient.getJSON(
          '/users/$login/events?page=$page&per_page=$PAGE_SIZE',
          convert: (dynamic vs) => [for (var v in vs) GithubEvent.fromJson(v)],
        );
        return ListPayload(
          cursor: page + 1,
          hasMore: events.length == PAGE_SIZE,
          items: events,
        );
      },
    );
  }
}
