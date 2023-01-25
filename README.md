oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g build-stuff-jan-26
$ build-stuff-jan-26 COMMAND
running command...
$ build-stuff-jan-26 (--version)
build-stuff-jan-26/0.0.0 win32-x64 node-v16.13.0
$ build-stuff-jan-26 --help [COMMAND]
USAGE
  $ build-stuff-jan-26 COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g build-stuff-jan-26
$ build-stuff-jan-26 COMMAND
running command...
$ build-stuff-jan-26 (--version)
build-stuff-jan-26/0.0.0 win32-x64 node-v16.13.0
$ build-stuff-jan-26 --help [COMMAND]
USAGE
  $ build-stuff-jan-26 COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g build-stuff-jan-26
$ build-stuff-jan-26 COMMAND
running command...
$ build-stuff-jan-26 (--version)
build-stuff-jan-26/0.0.0 win32-x64 node-v16.13.0
$ build-stuff-jan-26 --help [COMMAND]
USAGE
  $ build-stuff-jan-26 COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g build-stuff-jan-26
$ build-stuff-jan-26 COMMAND
running command...
$ build-stuff-jan-26 (--version)
build-stuff-jan-26/0.0.0 win32-x64 node-v16.13.0
$ build-stuff-jan-26 --help [COMMAND]
USAGE
  $ build-stuff-jan-26 COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g oclif-hello-world
$ oex COMMAND
running command...
$ oex (--version)
oclif-hello-world/0.0.0 darwin-x64 node-v16.13.1
$ oex --help [COMMAND]
USAGE
  $ oex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`build-stuff-jan-26 hello PERSON`](#build-stuff-jan-26-hello-person)
* [`build-stuff-jan-26 hello world`](#build-stuff-jan-26-hello-world)
* [`build-stuff-jan-26 help [COMMANDS]`](#build-stuff-jan-26-help-commands)
* [`build-stuff-jan-26 migrate-react-18 [PATH]`](#build-stuff-jan-26-migrate-react-18-path)
* [`build-stuff-jan-26 migrate-react-18 filter PACKAGEJSONPATH`](#build-stuff-jan-26-migrate-react-18-filter-packagejsonpath)
* [`build-stuff-jan-26 migrate-react-18 needs-migration [PATH]`](#build-stuff-jan-26-migrate-react-18-needs-migration-path)
* [`build-stuff-jan-26 plugins`](#build-stuff-jan-26-plugins)
* [`build-stuff-jan-26 plugins:install PLUGIN...`](#build-stuff-jan-26-pluginsinstall-plugin)
* [`build-stuff-jan-26 plugins:inspect PLUGIN...`](#build-stuff-jan-26-pluginsinspect-plugin)
* [`build-stuff-jan-26 plugins:install PLUGIN...`](#build-stuff-jan-26-pluginsinstall-plugin-1)
* [`build-stuff-jan-26 plugins:link PLUGIN`](#build-stuff-jan-26-pluginslink-plugin)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin-1)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin-2)
* [`build-stuff-jan-26 plugins update`](#build-stuff-jan-26-plugins-update)
* [`build-stuff-jan-26 simple-example`](#build-stuff-jan-26-simple-example)
* [`build-stuff-jan-26 upgrade-eslint [PATH]`](#build-stuff-jan-26-upgrade-eslint-path)
* [`build-stuff-jan-26 upgrade-eslint filter PACKAGEJSONPATH`](#build-stuff-jan-26-upgrade-eslint-filter-packagejsonpath)
* [`build-stuff-jan-26 upgrade-eslint needs-migration [PATH]`](#build-stuff-jan-26-upgrade-eslint-needs-migration-path)

## `build-stuff-jan-26 hello PERSON`

Say hello

```
USAGE
  $ build-stuff-jan-26 hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/antetmc2/build-stuff-jan-26/blob/v0.0.0/dist/commands/hello/index.ts)_

## `build-stuff-jan-26 hello world`

Say hello world

```
USAGE
  $ build-stuff-jan-26 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ build-stuff-jan-26 hello world
  hello world! (./src/commands/hello/world.ts)
```

## `build-stuff-jan-26 help [COMMANDS]`

Display help for build-stuff-jan-26.

```
USAGE
  $ build-stuff-jan-26 help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for build-stuff-jan-26.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.0/src/commands/help.ts)_

## `build-stuff-jan-26 migrate-react-18 [PATH]`

Migrates the projects to React 18.x by installing the dependencies

```
USAGE
  $ build-stuff-jan-26 migrate-react-18 [PATH] [-h]

ARGUMENTS
  PATH  [default: ./] Path to project

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Migrates the projects to React 18.x by installing the dependencies

EXAMPLES
  $ build-stuff-jan-26 migrate-react-18 ~/test-projects/example-02
```

_See code: [dist/commands/migrate-react-18/index.ts](https://github.com/antetmc2/build-stuff-jan-26/blob/v0.0.0/dist/commands/migrate-react-18/index.ts)_

## `build-stuff-jan-26 migrate-react-18 filter PACKAGEJSONPATH`

Check files in project

```
USAGE
  $ build-stuff-jan-26 migrate-react-18 filter [PACKAGEJSONPATH] [-h]

ARGUMENTS
  PACKAGEJSONPATH  [default: ./package.json] Path to the "package.json" file

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Check files in project

EXAMPLES
  $ build-stuff-jan-26 migrate-react-18:filter ~/test-projects/example-02/package.json
```

## `build-stuff-jan-26 migrate-react-18 needs-migration [PATH]`

Checks if project was migrated

```
USAGE
  $ build-stuff-jan-26 migrate-react-18 needs-migration [PATH] [-h]

ARGUMENTS
  PATH  [default: ./] Path to project

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Checks if project was migrated

EXAMPLES
  $ build-stuff-jan-26 migrate-react-18:needs-migrate ~/test-projects/example-02
```

## `build-stuff-jan-26 plugins`

List installed plugins.

```
USAGE
  $ build-stuff-jan-26 plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ build-stuff-jan-26 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.2.2/src/commands/plugins/index.ts)_

## `build-stuff-jan-26 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ build-stuff-jan-26 plugins add

EXAMPLES
  $ build-stuff-jan-26 plugins:install myplugin 

  $ build-stuff-jan-26 plugins:install https://github.com/someuser/someplugin

  $ build-stuff-jan-26 plugins:install someuser/someplugin
```

## `build-stuff-jan-26 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ build-stuff-jan-26 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ build-stuff-jan-26 plugins:inspect myplugin
```

## `build-stuff-jan-26 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ build-stuff-jan-26 plugins add

EXAMPLES
  $ build-stuff-jan-26 plugins:install myplugin 

  $ build-stuff-jan-26 plugins:install https://github.com/someuser/someplugin

  $ build-stuff-jan-26 plugins:install someuser/someplugin
```

## `build-stuff-jan-26 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ build-stuff-jan-26 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ build-stuff-jan-26 plugins:link myplugin
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins update`

Update installed plugins.

```
USAGE
  $ build-stuff-jan-26 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `build-stuff-jan-26 simple-example`

Simple example of building the migration job by using the abstract class

```
USAGE
  $ build-stuff-jan-26 simple-example [-h]

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Simple example of building the migration job by using the abstract class

EXAMPLES
  $ build-stuff-jan-26 simple-example
```

_See code: [dist/commands/simple-example/index.ts](https://github.com/antetmc2/build-stuff-jan-26/blob/v0.0.0/dist/commands/simple-example/index.ts)_

## `build-stuff-jan-26 upgrade-eslint [PATH]`

Adds the "lint:fix" command if missing in the projects

```
USAGE
  $ build-stuff-jan-26 upgrade-eslint [PATH] [-h]

ARGUMENTS
  PATH  [default: ./] Path to project

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Adds the "lint:fix" command if missing in the projects

EXAMPLES
  $ build-stuff-jan-26 upgrade-eslint ~/test-projects/example-01
```

_See code: [dist/commands/upgrade-eslint/index.ts](https://github.com/antetmc2/build-stuff-jan-26/blob/v0.0.0/dist/commands/upgrade-eslint/index.ts)_

## `build-stuff-jan-26 upgrade-eslint filter PACKAGEJSONPATH`

Check files in project

```
USAGE
  $ build-stuff-jan-26 upgrade-eslint filter [PACKAGEJSONPATH] [-h]

ARGUMENTS
  PACKAGEJSONPATH  [default: ./package.json] Path to the "package.json" file

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Check files in project

EXAMPLES
  $ build-stuff-jan-26 upgrade-eslint:filter ~/test-projects/example-01/package.json
```

## `build-stuff-jan-26 upgrade-eslint needs-migration [PATH]`

Checks if project was migrated

```
USAGE
  $ build-stuff-jan-26 upgrade-eslint needs-migration [PATH] [-h]

ARGUMENTS
  PATH  [default: ./] Path to project

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Checks if project was migrated

EXAMPLES
  $ build-stuff-jan-26 upgrade-eslint:needs-migration ~/test-projects/example-01
```
<!-- commandsstop -->
* [`build-stuff-jan-26 hello PERSON`](#build-stuff-jan-26-hello-person)
* [`build-stuff-jan-26 hello world`](#build-stuff-jan-26-hello-world)
* [`build-stuff-jan-26 help [COMMANDS]`](#build-stuff-jan-26-help-commands)
* [`build-stuff-jan-26 plugins`](#build-stuff-jan-26-plugins)
* [`build-stuff-jan-26 plugins:install PLUGIN...`](#build-stuff-jan-26-pluginsinstall-plugin)
* [`build-stuff-jan-26 plugins:inspect PLUGIN...`](#build-stuff-jan-26-pluginsinspect-plugin)
* [`build-stuff-jan-26 plugins:install PLUGIN...`](#build-stuff-jan-26-pluginsinstall-plugin-1)
* [`build-stuff-jan-26 plugins:link PLUGIN`](#build-stuff-jan-26-pluginslink-plugin)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin-1)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin-2)
* [`build-stuff-jan-26 plugins update`](#build-stuff-jan-26-plugins-update)
* [`build-stuff-jan-26 simple-example`](#build-stuff-jan-26-simple-example)
* [`build-stuff-jan-26 upgrade-eslint [PATH]`](#build-stuff-jan-26-upgrade-eslint-path)
* [`build-stuff-jan-26 upgrade-eslint filter PACKAGEJSONPATH`](#build-stuff-jan-26-upgrade-eslint-filter-packagejsonpath)
* [`build-stuff-jan-26 upgrade-eslint needs-migration [PATH]`](#build-stuff-jan-26-upgrade-eslint-needs-migration-path)

## `build-stuff-jan-26 hello PERSON`

Say hello

```
USAGE
  $ build-stuff-jan-26 hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/antetmc2/build-stuff-jan-26/blob/v0.0.0/dist/commands/hello/index.ts)_

## `build-stuff-jan-26 hello world`

Say hello world

```
USAGE
  $ build-stuff-jan-26 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ build-stuff-jan-26 hello world
  hello world! (./src/commands/hello/world.ts)
```

## `build-stuff-jan-26 help [COMMANDS]`

Display help for build-stuff-jan-26.

```
USAGE
  $ build-stuff-jan-26 help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for build-stuff-jan-26.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.0/src/commands/help.ts)_

## `build-stuff-jan-26 plugins`

List installed plugins.

```
USAGE
  $ build-stuff-jan-26 plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ build-stuff-jan-26 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.2.2/src/commands/plugins/index.ts)_

## `build-stuff-jan-26 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ build-stuff-jan-26 plugins add

EXAMPLES
  $ build-stuff-jan-26 plugins:install myplugin 

  $ build-stuff-jan-26 plugins:install https://github.com/someuser/someplugin

  $ build-stuff-jan-26 plugins:install someuser/someplugin
```

## `build-stuff-jan-26 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ build-stuff-jan-26 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ build-stuff-jan-26 plugins:inspect myplugin
```

## `build-stuff-jan-26 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ build-stuff-jan-26 plugins add

EXAMPLES
  $ build-stuff-jan-26 plugins:install myplugin 

  $ build-stuff-jan-26 plugins:install https://github.com/someuser/someplugin

  $ build-stuff-jan-26 plugins:install someuser/someplugin
```

## `build-stuff-jan-26 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ build-stuff-jan-26 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ build-stuff-jan-26 plugins:link myplugin
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins update`

Update installed plugins.

```
USAGE
  $ build-stuff-jan-26 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `build-stuff-jan-26 simple-example`

Simple example of building the migration job by using the abstract class

```
USAGE
  $ build-stuff-jan-26 simple-example [-h]

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Simple example of building the migration job by using the abstract class

EXAMPLES
  $ build-stuff-jan-26 simple-example
```

_See code: [dist/commands/simple-example/index.ts](https://github.com/antetmc2/build-stuff-jan-26/blob/v0.0.0/dist/commands/simple-example/index.ts)_

## `build-stuff-jan-26 upgrade-eslint [PATH]`

Adds the "lint:fix" command if missing in the projects

```
USAGE
  $ build-stuff-jan-26 upgrade-eslint [PATH] [-h]

ARGUMENTS
  PATH  [default: ./] Path to project

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Adds the "lint:fix" command if missing in the projects

EXAMPLES
  $ build-stuff-jan-26 upgrade-eslint ~/test-projects/example-01
```

_See code: [dist/commands/upgrade-eslint/index.ts](https://github.com/antetmc2/build-stuff-jan-26/blob/v0.0.0/dist/commands/upgrade-eslint/index.ts)_

## `build-stuff-jan-26 upgrade-eslint filter PACKAGEJSONPATH`

Check files in project

```
USAGE
  $ build-stuff-jan-26 upgrade-eslint filter [PACKAGEJSONPATH] [-h]

ARGUMENTS
  PACKAGEJSONPATH  [default: ./package.json] Path to the "package.json" file

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Check files in project

EXAMPLES
  $ build-stuff-jan-26 upgrade-eslint:filter ~/test-projects/example-01/package.json
```

## `build-stuff-jan-26 upgrade-eslint needs-migration [PATH]`

Checks if project was migrated

```
USAGE
  $ build-stuff-jan-26 upgrade-eslint needs-migration [PATH] [-h]

ARGUMENTS
  PATH  [default: ./] Path to project

FLAGS
  -h, --help  show CLI help

DESCRIPTION
  Checks if project was migrated

EXAMPLES
  $ build-stuff-jan-26 upgrade-eslint:needs-migration ~/test-projects/example-01
```
<!-- commandsstop -->
* [`build-stuff-jan-26 hello PERSON`](#build-stuff-jan-26-hello-person)
* [`build-stuff-jan-26 hello world`](#build-stuff-jan-26-hello-world)
* [`build-stuff-jan-26 help [COMMANDS]`](#build-stuff-jan-26-help-commands)
* [`build-stuff-jan-26 plugins`](#build-stuff-jan-26-plugins)
* [`build-stuff-jan-26 plugins:install PLUGIN...`](#build-stuff-jan-26-pluginsinstall-plugin)
* [`build-stuff-jan-26 plugins:inspect PLUGIN...`](#build-stuff-jan-26-pluginsinspect-plugin)
* [`build-stuff-jan-26 plugins:install PLUGIN...`](#build-stuff-jan-26-pluginsinstall-plugin-1)
* [`build-stuff-jan-26 plugins:link PLUGIN`](#build-stuff-jan-26-pluginslink-plugin)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin-1)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin-2)
* [`build-stuff-jan-26 plugins update`](#build-stuff-jan-26-plugins-update)

## `build-stuff-jan-26 hello PERSON`

Say hello

```
USAGE
  $ build-stuff-jan-26 hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/antetmc2/build-stuff-jan-26/blob/v0.0.0/dist/commands/hello/index.ts)_

## `build-stuff-jan-26 hello world`

Say hello world

```
USAGE
  $ build-stuff-jan-26 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ build-stuff-jan-26 hello world
  hello world! (./src/commands/hello/world.ts)
```

## `build-stuff-jan-26 help [COMMANDS]`

Display help for build-stuff-jan-26.

```
USAGE
  $ build-stuff-jan-26 help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for build-stuff-jan-26.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.0/src/commands/help.ts)_

## `build-stuff-jan-26 plugins`

List installed plugins.

```
USAGE
  $ build-stuff-jan-26 plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ build-stuff-jan-26 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.2.2/src/commands/plugins/index.ts)_

## `build-stuff-jan-26 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ build-stuff-jan-26 plugins add

EXAMPLES
  $ build-stuff-jan-26 plugins:install myplugin 

  $ build-stuff-jan-26 plugins:install https://github.com/someuser/someplugin

  $ build-stuff-jan-26 plugins:install someuser/someplugin
```

## `build-stuff-jan-26 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ build-stuff-jan-26 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ build-stuff-jan-26 plugins:inspect myplugin
```

## `build-stuff-jan-26 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ build-stuff-jan-26 plugins add

EXAMPLES
  $ build-stuff-jan-26 plugins:install myplugin 

  $ build-stuff-jan-26 plugins:install https://github.com/someuser/someplugin

  $ build-stuff-jan-26 plugins:install someuser/someplugin
```

## `build-stuff-jan-26 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ build-stuff-jan-26 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ build-stuff-jan-26 plugins:link myplugin
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins update`

Update installed plugins.

```
USAGE
  $ build-stuff-jan-26 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
* [`build-stuff-jan-26 hello PERSON`](#build-stuff-jan-26-hello-person)
* [`build-stuff-jan-26 hello world`](#build-stuff-jan-26-hello-world)
* [`build-stuff-jan-26 help [COMMANDS]`](#build-stuff-jan-26-help-commands)
* [`build-stuff-jan-26 plugins`](#build-stuff-jan-26-plugins)
* [`build-stuff-jan-26 plugins:install PLUGIN...`](#build-stuff-jan-26-pluginsinstall-plugin)
* [`build-stuff-jan-26 plugins:inspect PLUGIN...`](#build-stuff-jan-26-pluginsinspect-plugin)
* [`build-stuff-jan-26 plugins:install PLUGIN...`](#build-stuff-jan-26-pluginsinstall-plugin-1)
* [`build-stuff-jan-26 plugins:link PLUGIN`](#build-stuff-jan-26-pluginslink-plugin)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin-1)
* [`build-stuff-jan-26 plugins:uninstall PLUGIN...`](#build-stuff-jan-26-pluginsuninstall-plugin-2)
* [`build-stuff-jan-26 plugins update`](#build-stuff-jan-26-plugins-update)

## `build-stuff-jan-26 hello PERSON`

Say hello

```
USAGE
  $ build-stuff-jan-26 hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/antetmc2/build-stuff-jan-26/blob/v0.0.0/dist/commands/hello/index.ts)_

## `build-stuff-jan-26 hello world`

Say hello world

```
USAGE
  $ build-stuff-jan-26 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ build-stuff-jan-26 hello world
  hello world! (./src/commands/hello/world.ts)
```

## `build-stuff-jan-26 help [COMMANDS]`

Display help for build-stuff-jan-26.

```
USAGE
  $ build-stuff-jan-26 help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for build-stuff-jan-26.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.0/src/commands/help.ts)_

## `build-stuff-jan-26 plugins`

List installed plugins.

```
USAGE
  $ build-stuff-jan-26 plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ build-stuff-jan-26 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.2.2/src/commands/plugins/index.ts)_

## `build-stuff-jan-26 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ build-stuff-jan-26 plugins add

EXAMPLES
  $ build-stuff-jan-26 plugins:install myplugin 

  $ build-stuff-jan-26 plugins:install https://github.com/someuser/someplugin

  $ build-stuff-jan-26 plugins:install someuser/someplugin
```

## `build-stuff-jan-26 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ build-stuff-jan-26 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ build-stuff-jan-26 plugins:inspect myplugin
```

## `build-stuff-jan-26 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ build-stuff-jan-26 plugins add

EXAMPLES
  $ build-stuff-jan-26 plugins:install myplugin 

  $ build-stuff-jan-26 plugins:install https://github.com/someuser/someplugin

  $ build-stuff-jan-26 plugins:install someuser/someplugin
```

## `build-stuff-jan-26 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ build-stuff-jan-26 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ build-stuff-jan-26 plugins:link myplugin
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ build-stuff-jan-26 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ build-stuff-jan-26 plugins unlink
  $ build-stuff-jan-26 plugins remove
```

## `build-stuff-jan-26 plugins update`

Update installed plugins.

```
USAGE
  $ build-stuff-jan-26 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
* [`oex hello PERSON`](#oex-hello-person)
* [`oex hello world`](#oex-hello-world)
* [`oex help [COMMAND]`](#oex-help-command)
* [`oex plugins`](#oex-plugins)
* [`oex plugins:inspect PLUGIN...`](#oex-pluginsinspect-plugin)
* [`oex plugins:install PLUGIN...`](#oex-pluginsinstall-plugin)
* [`oex plugins:link PLUGIN`](#oex-pluginslink-plugin)
* [`oex plugins:uninstall PLUGIN...`](#oex-pluginsuninstall-plugin)
* [`oex plugins update`](#oex-plugins-update)

## `oex hello PERSON`

Say hello

```
USAGE
  $ oex hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oclif/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oex hello world`

Say hello world

```
USAGE
  $ oex hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `oex help [COMMAND]`

Display help for oex.

```
USAGE
  $ oex help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oex.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `oex plugins`

List installed plugins.

```
USAGE
  $ oex plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oex plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `oex plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oex plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oex plugins:inspect myplugin
```

## `oex plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oex plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ oex plugins add

EXAMPLES
  $ oex plugins:install myplugin 

  $ oex plugins:install https://github.com/someuser/someplugin

  $ oex plugins:install someuser/someplugin
```

## `oex plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oex plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ oex plugins:link myplugin
```

## `oex plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oex plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oex plugins unlink
  $ oex plugins remove
```

## `oex plugins update`

Update installed plugins.

```
USAGE
  $ oex plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
