import { ElementType } from 'react';
import * as Icons from '../components/seti-icons';

const extensionMap: Record<string, ElementType> = {
  // Web & JS/TS
  js: Icons.Javascript,
  mjs: Icons.Javascript,
  cjs: Icons.Javascript,
  jsx: Icons.React,
  ts: Icons.Typescript,
  tsx: Icons.React,
  json: Icons.Json,
  html: Icons.Html,
  htm: Icons.Html,
  css: Icons.Css,
  scss: Icons.Sass,
  sass: Icons.Sass,
  less: Icons.Less,
  styl: Icons.Stylus,
  vue: Icons.Vue,
  svelte: Icons.Svelte,
  gql: Icons.Graphql,
  graphql: Icons.Graphql,

  // Languages
  py: Icons.Python,
  java: Icons.Java,
  go: Icons.Go,
  rs: Icons.Rust,
  c: Icons.C,
  cpp: Icons.Cpp,
  cc: Icons.Cpp,
  hpp: Icons.Cpp,
  cs: Icons.CSharp,
  php: Icons.Php,
  rb: Icons.Ruby,
  swift: Icons.Swift,
  kt: Icons.Kotlin,
  kts: Icons.Kotlin,
  dart: Icons.Dart,
  sh: Icons.Shell,
  bash: Icons.Shell,
  zsh: Icons.Shell,
  ps1: Icons.Powershell,
  ex: Icons.Elixir,
  exs: Icons.Elixir,
  clj: Icons.Clojure,
  fs: Icons.FSharp,
  jl: Icons.Julia,
  lua: Icons.Lua,
  pl: Icons.Perl,
  pm: Icons.Perl,
  r: Icons.R,
  zig: Icons.Zig,
  cr: Icons.Crystal,
  elm: Icons.Elm,
  hs: Icons.Haskell,
  hx: Icons.Haxe,
  ml: Icons.Ocaml,
  mli: Icons.Ocaml,
  nim: Icons.Nim,
  re: Icons.Reasonml,
  res: Icons.Rescript,
  scala: Icons.Scala,
  asm: Icons.Asm,
  cu: Icons.Cu,

  // Data & Config
  yml: Icons.Yml,
  yaml: Icons.Yml,
  xml: Icons.Xml,
  csv: Icons.Csv,
  toml: Icons.Config,
  ini: Icons.Config,
  env: Icons.Config,
  db: Icons.Db,
  sql: Icons.Db,
  sqlite: Icons.Db,

  // Documents
  md: Icons.Markdown,
  markdown: Icons.Markdown,
  pdf: Icons.Pdf,
  doc: Icons.Word,
  docx: Icons.Word,
  xls: Icons.Xls,
  xlsx: Icons.Xls,
  tex: Icons.Tex,
  ipynb: Icons.Notebook,

  // Media
  svg: Icons.Svg,
  png: Icons.Image,
  jpg: Icons.Image,
  jpeg: Icons.Image,
  gif: Icons.Image,
  webp: Icons.Image,
  ico: Icons.Favicon,
  mp3: Icons.Audio,
  wav: Icons.Audio,
  flac: Icons.Audio,
  mp4: Icons.Video,
  mov: Icons.Video,
  mkv: Icons.Video,
  avi: Icons.Video,
  
  // Archiving
  zip: Icons.Zip,
  tar: Icons.Zip,
  gz: Icons.Zip,
  rar: Icons.Zip,
  "7z": Icons.Zip,
  
  // Others
  tf: Icons.Terraform,
  prisma: Icons.Prisma,
  lock: Icons.Lock,
  wasm: Icons.Wasm
};

const fileNameMap: Record<string, ElementType> = {
  '.gitignore': Icons.GitIgnore,
  '.gitattributes': Icons.Git,
  '.gitmodules': Icons.Git,
  
  'package.json': Icons.Npm,
  'package-lock.json': Icons.Lock,
  'pnpm-lock.yaml': Icons.Lock,
  'yarn.lock': Icons.Yarn,
  '.npmrc': Icons.Npm,

  'dockerfile': Icons.Docker,
  '.dockerignore': Icons.Docker,
  'docker-compose.yml': Icons.Docker,
  'docker-compose.yaml': Icons.Docker,

  'makefile': Icons.Makefile,
  'cmakelists.txt': Icons.Config,
  'cargo.toml': Icons.Rust,
  'cargo.lock': Icons.Lock,
  'gemfile': Icons.Ruby,
  'gemfile.lock': Icons.Lock,
  'build.gradle': Icons.Gradle,
  'pom.xml': Icons.Maven,

  'tsconfig.json': Icons.Tsconfig,
  'jsconfig.json': Icons.Tsconfig,

  'webpack.config.js': Icons.Webpack,
  'webpack.config.ts': Icons.Webpack,
  'rollup.config.js': Icons.Rollup,
  'rollup.config.ts': Icons.Rollup,
  'vite.config.js': Icons.Vite,
  'vite.config.ts': Icons.Vite,
  'babel.config.js': Icons.Babel,
  'babel.config.json': Icons.Babel,
  '.babelrc': Icons.Babel,
  
  '.eslintrc': Icons.Eslint,
  '.eslintrc.js': Icons.Eslint,
  '.eslintrc.json': Icons.Eslint,
  '.prettierrc': Icons.Settings,
  '.editorconfig': Icons.Editorconfig,

  'gulpfile.js': Icons.Gulp,
  'gruntfile.js': Icons.Grunt,
  'karma.conf.js': Icons.Karma,

  'license': Icons.License,
  'license.md': Icons.License,
  'license.txt': Icons.License,
  'readme.md': Icons.Info,

  'procfile': Icons.Heroku,
  'firebase.json': Icons.Firebase,
  '.firebaserc': Icons.Firebase
};

/**
 * Returns the corresponding React component for a given file or folder.
 * 
 * @param fileName The name of the file or folder (e.g. "index.ts", "src")
 * @param isDirectory Whether the item is a folder
 * @returns React Component (SVG icon)
 */
export function getFileIcon(fileName: string, isDirectory: boolean = false): ElementType {
  const lowerName = fileName.toLowerCase();

  if (isDirectory) {
    if (lowerName === '.git') return Icons.GitFolder;
    if (lowerName === '.github') return Icons.Github;
    return Icons.Folder;
  }

  // Exact file name match
  if (fileNameMap[lowerName]) {
    return fileNameMap[lowerName];
  }

  // Extension match
  const parts = lowerName.split('.');
  if (parts.length > 1) {
    // Handling multi-dot extensions could go here, but taking the last one is standard
    const ext = parts[parts.length - 1];
    if (ext && extensionMap[ext]) {
      return extensionMap[ext];
    }
  }

  // Default fallback
  return Icons.Default;
}
