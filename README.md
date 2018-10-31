# react-native typescript boilerplate

- [Getting started](#getting-started)
- [Testing](#testing)
- [Pre-commit](#pre-commit)
- [Scripts](#scripts)
- [Visual Studio Code](#visual-studio-code)
- [What's next?](#what-s-next-)
- [PRs](#prs)

## Getting started

This project has both `yarn-lock.json`and `npm-lock.json` so you may use the package manager of your choice (author of this boilerplate suggests using `yarn`).

1. Make sure you have `expo-cli` and `typescript` installed globally.
2. Clone this repository using
```bash
git clone --depth 1 https://github.com/burtek/react-native-typescript-boilerplate
rm -rf react-native-typescript-boilerplate/.git
# this is sample CircleCI config used by me
# you may want to keep this as a boilerplate config
rm -rf react-native-typescript-boilerplate/.circleci
```
3. Remove `package-lock.json`  or `yarn.lock`, whichever you feel you aren't gonna use
3. Run `yarn` or `npm install` as per your choice
4. Start coding!

## Testing

This boilerplate is setup to use `jest` as test-runner. Jest uses `ts-jest` to load source files, so that it tests the typescript source files rather than built javascript files.

## Pre-commit

This boilerplate has pre-commit hook setup. The pre-commit hook would build and test your code before committing it so that there is never broken code in your git repository. The hooks runner is husky, which can be configured in `.huskyrc`.

Should you need to commit broken code, use git's `--no-verify` flag to skip the hook.

Husky can be uninstalled bu running `yarn remove husky` (or `npm uninstall husky`).

## Scripts

Script | Description
---|---
start|Start expo dev server
android|Start expo dev server for android
ios|Start expo dev server for ios
eject|Eject from expo SDK, see https://docs.expo.io/versions/latest/expokit/eject
test|Run tests
lint|Run `tslint --fix`
compile|Run typescript compiler (`tsc`)
clean|Remove `./build` folder
build|Re-compile project (`clean` followed by `compile`)
watch|Same as `build` but using `--watch` flag for `tsc`
watchAndRunAndroid|Running `watch` and `android` simultaneously
watchAndRunIOS|Running `watch` and `ios` simultaneously
watchAndStart|Running `watch` and `start` simultaneously

## Visual Studio Code

There are few extensions recommendations from boilerplate's author, as well as some default folder settings. Feel free to browse and amend to your needs them (`./.vscode`).

## What's next?

With Babel 7's ability to understand Typescript, I will probably be moving this from using `tsc` and `react-native-typescript-transformer` towards using Babel 7 on it's own. There is still https://github.com/expo/expo/issues/2164 to keep in mind.

If you can provide a working fork of this repo using babel's capabilities rather than `tsc` and the transformer mentioned above, feel free to send me a PR and I'd be more than happy to merge it (ofc not before testing it myself).

## PRs

If you feel there is something I missed in this boilerplate - either an issue or a feature, feel free to create a PR with proposal.
