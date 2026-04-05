import 'package:fluro/fluro.dart';
import 'package:forgecubes/screens/bb_commits.dart';
import 'package:forgecubes/screens/bb_issue.dart';
import 'package:forgecubes/screens/bb_issue_comment.dart';
import 'package:forgecubes/screens/bb_issue_form.dart';
import 'package:forgecubes/screens/bb_object.dart';
import 'package:forgecubes/screens/bb_repo.dart';
import 'package:forgecubes/screens/bb_issues.dart';
import 'package:forgecubes/screens/bb_pulls.dart';
import 'package:forgecubes/screens/bb_user.dart';
import 'package:forgecubes/screens/code_theme.dart';
import 'package:forgecubes/screens/ge_blob.dart';
import 'package:forgecubes/screens/ge_commit.dart';
import 'package:forgecubes/screens/ge_commits.dart';
import 'package:forgecubes/screens/ge_contributors.dart';
import 'package:forgecubes/screens/ge_files.dart';
import 'package:forgecubes/screens/ge_issue.dart';
import 'package:forgecubes/screens/ge_issue_comment.dart';
import 'package:forgecubes/screens/ge_issue_form.dart';
import 'package:forgecubes/screens/ge_issues.dart';
import 'package:forgecubes/screens/ge_pull.dart';
import 'package:forgecubes/screens/ge_pulls.dart';
import 'package:forgecubes/screens/ge_repo.dart';
import 'package:forgecubes/screens/ge_repos.dart';
import 'package:forgecubes/screens/ge_search.dart';
import 'package:forgecubes/screens/ge_tree.dart';
import 'package:forgecubes/screens/ge_user.dart';
import 'package:forgecubes/screens/ge_users.dart';
import 'package:forgecubes/screens/gh_commits.dart';
import 'package:forgecubes/screens/gh_contributors.dart';
import 'package:forgecubes/screens/gh_events.dart';
import 'package:forgecubes/screens/gh_files.dart';
import 'package:forgecubes/screens/gh_gists_files.dart';
import 'package:forgecubes/screens/gh_org_repos.dart';
import 'package:forgecubes/screens/gh_releases.dart';
import 'package:forgecubes/screens/gl_commit.dart';
import 'package:forgecubes/screens/gl_issue_form.dart';
import 'package:forgecubes/screens/gl_starrers.dart';
import 'package:forgecubes/screens/go_commits.dart';
import 'package:forgecubes/screens/go_issues.dart';
import 'package:forgecubes/screens/go_object.dart';
import 'package:forgecubes/screens/go_orgs.dart';
import 'package:forgecubes/screens/go_repo.dart';
import 'package:forgecubes/screens/go_repos.dart';
import 'package:forgecubes/screens/go_user.dart';
import 'package:forgecubes/screens/go_users.dart';
import 'package:forgecubes/screens/gt_commits.dart';
import 'package:forgecubes/screens/gt_issue.dart';
import 'package:forgecubes/screens/gt_issue_comment.dart';
import 'package:forgecubes/screens/gt_issue_form.dart';
import 'package:forgecubes/screens/gt_issues.dart';
import 'package:forgecubes/screens/gt_object.dart';
import 'package:forgecubes/screens/gt_orgs.dart';
import 'package:forgecubes/screens/gt_repo.dart';
import 'package:forgecubes/screens/gt_repos.dart';
import 'package:forgecubes/screens/gt_status.dart';
import 'package:forgecubes/screens/gt_user.dart';
import 'package:forgecubes/screens/gl_blob.dart';
import 'package:forgecubes/screens/gl_commits.dart';
import 'package:forgecubes/screens/gl_group.dart';
import 'package:forgecubes/screens/gl_issue.dart';
import 'package:forgecubes/screens/gl_issues.dart';
import 'package:forgecubes/screens/gl_members.dart';
import 'package:forgecubes/screens/gl_merge_requests.dart';
import 'package:forgecubes/screens/gl_project.dart';
import 'package:forgecubes/screens/gl_tree.dart';
import 'package:forgecubes/screens/gl_user.dart';
import 'package:forgecubes/screens/gh_issue.dart';
import 'package:forgecubes/screens/gh_issue_form.dart';
import 'package:forgecubes/screens/gh_issues.dart';
import 'package:forgecubes/screens/gt_users.dart';
import 'package:forgecubes/screens/login.dart';
import 'package:forgecubes/screens/gh_object.dart';
import 'package:forgecubes/screens/gh_pulls.dart';
import 'package:forgecubes/screens/gh_repos.dart';
import 'package:forgecubes/screens/gh_repo.dart';
import 'package:forgecubes/screens/settings.dart';
import 'package:forgecubes/screens/gh_user.dart';
import 'package:forgecubes/screens/gh_users.dart';
import 'package:forgecubes/screens/gh_orgs.dart';
import 'package:forgecubes/screens/gh_gists.dart';
import 'package:forgecubes/screens/gh_gist_object.dart';
import 'package:forgecubes/screens/gh_compare.dart';

class RouterScreen {
  String path;
  HandlerFunc handler;
  RouterScreen(this.path, this.handler);
}

class CommonRouter {
  static const prefix = '';
  static final routes = [
    CommonRouter.codeTheme,
    CommonRouter.login,
    CommonRouter.settings,
  ];
  static final codeTheme = RouterScreen('/choose-code-theme', (
    context,
    parameters,
  ) {
    return CodeThemeScreen();
  });
  static final login = RouterScreen(
    '/login',
    (context, parameters) => LoginScreen(),
  );
  static final settings = RouterScreen(
    '/settings',
    (context, parameters) => SettingsScreen(),
  );
}

class GithubRouter {
  static const prefix = '/github';
  static final routes = [
    GithubRouter.user,
    GithubRouter.repo,
    GithubRouter.issueAdd,
    GithubRouter.issues,
    GithubRouter.pulls,
    GithubRouter.issue,
    GithubRouter.pull,
    GithubRouter.commits,
    GithubRouter.object,
    GithubRouter.stargazers,
    GithubRouter.watchers,
    GithubRouter.contributors,
    GithubRouter.files,
    GithubRouter.gistFiles,
    GithubRouter.gistObject,
    GithubRouter.compare,
    GithubRouter.releases,
  ];
  static final user = RouterScreen('/:login', (context, parameters) {
    final login = parameters['login']!.first;
    final tab = parameters['tab']?.first;
    switch (tab) {
      case 'followers':
        return GhFollowers(login);
      case 'following':
        return GhFollowing(login);
      case 'people':
        return GhMembers(login);
      case 'stars':
        return GhStars(login);
      case 'repositories':
        return GhRepos(login);
      case 'orgrepo':
        return GhOrgReposScreen(login);
      case 'organizations':
        return GhUserOrganizationScreen(login);
      case 'gists':
        return GhGistsScreen(login);
      case 'events':
        return GhEventsScreen(login);
      default:
        return GhUser(login);
    }
  });
  static final repo = RouterScreen('/:owner/:name', (context, parameters) {
    if (parameters['ref'] == null) {
      return GhRepoScreen(
        parameters['owner']!.first,
        parameters['name']!.first,
      );
    } else {
      return GhRepoScreen(
        parameters['owner']!.first,
        parameters['name']!.first,
        branch: parameters['ref']!.first,
      );
    }
  });
  static final gistObject = RouterScreen('/:login/gists/:id/:file', (
    context,
    parameters,
  ) {
    return GistObjectScreen(
      parameters['login']!.first,
      parameters['id']!.first,
      parameters['file']!.first,
      raw: parameters['raw']?.first,
      content: parameters['content']!.first,
    );
  });
  static final gistFiles = RouterScreen('/:login/gists/:id', (
    context,
    parameters,
  ) {
    return GhGistsFilesScreen(
      parameters['login']!.first,
      parameters['id']!.first,
    );
  });
  static final issueAdd = RouterScreen('/:owner/:name/issues/new', (
    context,
    parameters,
  ) {
    return GhIssueFormScreen(
      parameters['owner']!.first,
      parameters['name']!.first,
    );
  });
  static final issues = RouterScreen(
    '/:owner/:name/issues',
    (context, parameters) =>
        GhIssuesScreen(parameters['owner']!.first, parameters['name']!.first),
  );
  static final pulls = RouterScreen(
    '/:owner/:name/pulls',
    (context, parameters) =>
        GhPullsScreen(parameters['owner']!.first, parameters['name']!.first),
  );
  static final issue = RouterScreen(
    '/:owner/:name/issues/:number',
    (context, parameters) => GhIssueScreen(
      parameters['owner']!.first,
      parameters['name']!.first,
      int.parse(parameters['number']!.first),
    ),
  );
  static final pull = RouterScreen(
    '/:owner/:name/pull/:number',
    (context, parameters) => GhIssueScreen(
      parameters['owner']!.first,
      parameters['name']!.first,
      int.parse(parameters['number']!.first),
    ),
  );
  static final files = RouterScreen(
    '/:owner/:name/pull/:number/files',
    (context, parameters) => GhFilesScreen(
      parameters['owner']!.first,
      parameters['name']!.first,
      int.parse(parameters['number']!.first),
    ),
  );
  static final compare = RouterScreen(
    '/:owner/:name/compare/:before/:head',
    (context, parameters) => GhComparisonScreen(
      parameters['owner']!.first,
      parameters['name']!.first,
      parameters['before']!.first,
      parameters['head']!.first,
    ),
  );
  static final commits = RouterScreen(
    '/:owner/:name/commits/:branch',
    (context, parameters) => GhCommits(
      parameters['owner']!.first,
      parameters['name']!.first,
      branch: parameters['branch']!.first,
    ),
  );
  static final object = RouterScreen('/:owner/:name/blob/:ref', (
    context,
    parameters,
  ) {
    return GhObjectScreen(
      parameters['owner']!.first,
      parameters['name']!.first,
      parameters['ref']!.first,
      path: parameters['path']?.first,
      raw: parameters['raw']?.first,
    );
  });
  static final stargazers = RouterScreen('/:owner/:name/stargazers', (
    context,
    parameters,
  ) {
    return GhStargazers(parameters['owner']!.first, parameters['name']!.first);
  });
  static final watchers = RouterScreen('/:owner/:name/watchers', (
    context,
    parameters,
  ) {
    return GhWachers(parameters['owner']!.first, parameters['name']!.first);
  });
  static final contributors = RouterScreen('/:owner/:name/contributors', (
    context,
    parameters,
  ) {
    return GhContributorsScreen(
      parameters['owner']!.first,
      parameters['name']!.first,
    );
  });
  static final releases = RouterScreen('/:owner/:name/releases', (
    context,
    parameters,
  ) {
    return GhReleasesScreen(
      parameters['owner']!.first,
      parameters['name']!.first,
    );
  });
}

class GitlabRouter {
  static const prefix = '/gitlab';
  static final routes = [
    GitlabRouter.user,
    GitlabRouter.group,
    GitlabRouter.blob,
    GitlabRouter.tree,
    GitlabRouter.project,
    GitlabRouter.starrers,
    GitlabRouter.issues,
    GitlabRouter.mergeRequests,
    GitlabRouter.commits,
    GitlabRouter.commit,
    GitlabRouter.projectMembers,
    GitlabRouter.groupMembers,
    GitlabRouter.issueAdd,
    GitlabRouter.issue,
  ];
  static final user = RouterScreen(
    '/user/:id',
    (context, parameters) => GlUserScreen(int.parse(parameters['id']!.first)),
  );
  static final group = RouterScreen(
    '/group/:id',
    (context, parameters) => GlGroupScreen(int.parse(parameters['id']!.first)),
  );
  static final blob = RouterScreen(
    '/projects/:id/blob/:ref',
    (context, parameters) => GlBlobScreen(
      int.parse(parameters['id']!.first),
      parameters['ref']!.first,
      path: parameters['path']?.first,
    ),
  );
  static final tree = RouterScreen(
    '/projects/:id/tree/:ref',
    (context, parameters) => GlTreeScreen(
      int.parse(parameters['id']!.first),
      parameters['ref']!.first,
      path: parameters['path']?.first,
    ),
  );
  static final project = RouterScreen('/projects/:id', (context, parameters) {
    if (parameters['branch'] == null) {
      return GlProjectScreen(int.parse(parameters['id']!.first));
    } else {
      return GlProjectScreen(
        int.parse(parameters['id']!.first),
        branch: parameters['branch']!.first,
      );
    }
  });
  static final starrers = RouterScreen(
    '/projects/:id/starrers',
    (context, parameters) =>
        GlStarrersScreen(int.parse(parameters['id']!.first)),
  );
  static final issues = RouterScreen(
    '/projects/:id/issues',
    (context, parameters) => GlIssuesScreen(
      parameters['id']!.first,
      prefix: parameters['prefix']!.first,
    ),
  );
  static final mergeRequests = RouterScreen(
    '/projects/:id/merge_requests',
    (context, parameters) => GlMergeRequestsScreen(
      parameters['id']!.first,
      prefix: parameters['prefix']!.first,
    ),
  );
  static final commits = RouterScreen('/projects/:id/commits', (
    context,
    parameters,
  ) {
    if (parameters['branch'] == null) {
      return GlCommitsScreen(
        parameters['id']!.first,
        prefix: parameters['prefix']!.first,
      );
    } else {
      return GlCommitsScreen(
        parameters['id']!.first,
        prefix: parameters['prefix']!.first,
        branch: parameters['branch']!.first,
      );
    }
  });
  static final commit = RouterScreen(
    '/projects/:id/commit/:sha',
    (context, parameters) =>
        GlCommitScreen(parameters['id']!.first, sha: parameters['sha']!.first),
  );
  static final projectMembers = RouterScreen(
    '/projects/:id/members',
    (context, parameters) =>
        GlMembersScreen(int.parse(parameters['id']!.first), 'projects'),
  );
  static final groupMembers = RouterScreen(
    '/groups/:id/members',
    (context, parameters) =>
        GlMembersScreen(int.parse(parameters['id']!.first), 'groups'),
  );
  static final issue = RouterScreen('/projects/:id/issues/:iid', (
    context,
    parameters,
  ) {
    return GlIssueScreen(
      int.parse(parameters['id']!.first),
      int.parse(parameters['iid']!.first),
    );
  });
  static final issueAdd = RouterScreen('/projects/:id/issues/new', (
    context,
    parameters,
  ) {
    return GlIssueFormScreen(int.parse(parameters['id']!.first));
  });
}

