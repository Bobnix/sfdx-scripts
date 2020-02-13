sfdx-scripts
============

A simple way to use the sfdx command line tools with one time use scripts

[![Version](https://img.shields.io/npm/v/sfdx-scripts.svg)](https://npmjs.org/package/sfdx-scripts)
[![CircleCI](https://circleci.com/gh/Bobnix/sfdx-scripts/tree/master.svg?style=shield)](https://circleci.com/gh/Bobnix/sfdx-scripts/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/Bobnix/sfdx-scripts?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sfdx-scripts/branch/master)
[![Codecov](https://codecov.io/gh/Bobnix/sfdx-scripts/branch/master/graph/badge.svg)](https://codecov.io/gh/Bobnix/sfdx-scripts)
[![Greenkeeper](https://badges.greenkeeper.io/Bobnix/sfdx-scripts.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/Bobnix/sfdx-scripts/badge.svg)](https://snyk.io/test/github/Bobnix/sfdx-scripts)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-scripts.svg)](https://npmjs.org/package/sfdx-scripts)
[![License](https://img.shields.io/npm/l/sfdx-scripts.svg)](https://github.com/Bobnix/sfdx-scripts/blob/master/package.json)

<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g sfdx-scripts
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
sfdx-scripts/0.0.1 linux-x64 node-v12.4.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx script:run [-f <string>] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-scriptrun--f-string--v-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx script:run [-f <string>] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

runs a node script with the current sfdx credentails

```
USAGE
  $ sfdx script:run [-f <string>] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -f, --file=file                                                                   node script to run

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  -v, --targetdevhubusername=targetdevhubusername                                   username or alias for the dev hub
                                                                                    org; overrides default dev hub org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx script:run -u test@org.com -f sample.js
       The Output Of The Sample Script
```
<!-- commandsstop -->
