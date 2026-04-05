import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:forgecubes/app.dart';
import 'package:forgecubes/models/code.dart';
import 'package:forgecubes/models/auth.dart';
import 'package:forgecubes/models/theme.dart';
import 'package:forgecubes/router.dart';
import 'package:provider/provider.dart';
import 'package:forgecubes/models/notification.dart';
import 'package:fluro/fluro.dart';
import 'package:flutter/services.dart';
import 'package:sentry_flutter/sentry_flutter.dart';

void main() async {
  await SentryFlutter.init(
    (options) {
      options.dsn =
          'https://006354525fa244289c48169790fa3757@o71119.ingest.sentry.io/5814819';
    },
    // Init your App.
    appRunner: () async {
      final notificationModel = NotificationModel();
      final themeModel = ThemeModel();
      final authModel = AuthModel();
      final codeModel = CodeModel();
      await Future.wait([
        themeModel.init(),
        authModel.init(),
        codeModel.init(),
      ]);

      CommonRouter.routes.forEach((screen) {
        themeModel.router.define(
          CommonRouter.prefix + screen.path,
          handler: Handler(handlerFunc: screen.handler),
        );
      });
      GitlabRouter.routes.forEach((screen) {
        themeModel.router.define(
          GitlabRouter.prefix + screen.path,
          handler: Handler(handlerFunc: screen.handler),
        );
      });
      GithubRouter.routes.forEach((screen) {
        themeModel.router.define(
          GithubRouter.prefix + screen.path,
          handler: Handler(handlerFunc: screen.handler),
        );
      });

      // To match status bar color to app bar color
      SystemChrome.setSystemUIOverlayStyle(
        SystemUiOverlayStyle(statusBarColor: Colors.transparent),
      );

      runApp(
        MultiProvider(
          providers: [
            ChangeNotifierProvider(create: (context) => notificationModel),
            ChangeNotifierProvider(create: (context) => themeModel),
            ChangeNotifierProvider(create: (context) => authModel),
            ChangeNotifierProvider(create: (context) => codeModel),
          ],
          child: MyApp(),
        ),
      );
    },
  );
}
