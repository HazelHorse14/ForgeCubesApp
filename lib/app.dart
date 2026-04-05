import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:forgecubes/home.dart';
import 'package:forgecubes/models/auth.dart';
import 'package:forgecubes/models/theme.dart';
import 'package:provider/provider.dart';

import 'package:intl/locale.dart' as l;

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final auth = Provider.of<AuthModel>(context);
    final theme = Provider.of<ThemeModel>(context);

    final LocaleListResolutionCallback localeListResolutionCallback =
        (locales, supportedLocales) {
          // 1. user set locale
          // 2. system locale
          try {
            if (theme.locale != null) {
              final intlLocale = l.Locale.parse(theme.locale!);
              locales = [
                Locale.fromSubtags(
                  languageCode: intlLocale.languageCode,
                  countryCode: intlLocale.countryCode,
                  scriptCode: intlLocale.scriptCode,
                ),
                ...locales!,
              ];
            }
          } catch (err) {
            print(err);
          }

          // 3. if none match, use the default
          return supportedLocales.firstWhere((l) => l.languageCode == 'en');
        };

    return Container(
      key: auth.rootKey,
      child: theme.theme == AppThemeType.cupertino
          ? CupertinoApp(
              theme: CupertinoThemeData(brightness: theme.brightness),
              home: Home(),

              localeListResolutionCallback: localeListResolutionCallback,
            )
          : MaterialApp(
              theme: ThemeData(
                brightness: theme.brightness,
                primaryColor: theme.brightness == Brightness.dark
                    ? null
                    : Colors.white,
                scaffoldBackgroundColor: theme.palette.background,
                pageTransitionsTheme: PageTransitionsTheme(
                  builders: {
                    TargetPlatform.android: ZoomPageTransitionsBuilder(),
                  },
                ),
                colorScheme: ColorScheme.fromSwatch().copyWith(
                  secondary: theme.palette.primary,
                ),
              ),
              home: Home(),

              localeListResolutionCallback: localeListResolutionCallback,
            ),
    );
  }
}
