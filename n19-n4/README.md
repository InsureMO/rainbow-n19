![Static Badge](https://img.shields.io/badge/InsureMO-777AF2.svg)

# n19/n4

Module to create n2 ClassLoader.

# Entrypoint and Arguments

Entrypoint is `com.insuremo.rainbow.n19n4.BootstrapKt`.

| Arguments                   |                                                                                                                                                                                                                                                                                                                                                                                      |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| n19n4.help                  | Print help, ignoring all other arguments                                                                                                                                                                                                                                                                                                                                             |
| n19n4.verbose               | More logs, an extraordinary amount of more logs!.                                                                                                                                                                                                                                                                                                                                    |
| n19n4.generateTarget        | Generate target, should be one of `jdk`, `groovy` or `other`.                                                                                                                                                                                                                                                                                                                        |
| n19n4.mod2jarTempdir        | Temporary directory for saving the JAR files transformed from JDK modular files.                                                                                                                                                                                                                                                                                                     |
| n19n4.cleanMod2jarTempDir   | Clean the temporary directory for JAR files transformed from JDK modular files.                                                                                                                                                                                                                                                                                                      |
| n19n4.mod2jarTempDirPostDel | Delete temporary JAR files after generation is completed.                                                                                                                                                                                                                                                                                                                            |
| n19n4.classesToLocateJars   | Locate the JAR file by class names, separated by commas. Only one class from each JAR file is needed.<br>If the `generateTarget` is `jdk`, there is no need for location.<br>If the `generateTarget` is `groovy`, the default `groovy.lang.GroovySystem` should be used.<br>If the `generateTarget` is `other`, there are no default values, and custom specifications are required. |
| n19n4.outputDir             | Destination directory for output files.                                                                                                                                                                                                                                                                                                                                              |
| n19n4.cleanOutputDir        | Clean the destination directory before generating files.                                                                                                                                                                                                                                                                                                                             |
| n19n4.outputMode            | Structure of output files, either `tiled` or `package`.                                                                                                                                                                                                                                                                                                                              |
| n19n4.thirdPartyLibName     | Specify the directory for the output files,it is sub folder of `{outputDir}/lib`.<br>This setting will only take effect when the `generateTarget` is set to `other`.                                                                                                                                                                                                                 |
| n19n4.thirdPartyLibs        | Specify the vendors and versions of libs, separated by commas.<br>Format: `[vendor, version [, vendor, version [, vendor, version...]]]`.<br>This setting will only take effect when the `generateTarget` is set to `other`.                                                                                                                                                         |
| n19n4.includedClasses       | Classes that must be included, separated by commas, taking priority over `excludedPackages` and `excludedClasses` declarations.                                                                                                                                                                                                                                                      |
| n19n4.excludedPackages      | Packages that be excluded, separated by commas.                                                                                                                                                                                                                                                                                                                                      |
| n19n4.excludedClasses       | Classes that be excluded, separated by commas.                                                                                                                                                                                                                                                                                                                                       |
| n19n4.generateDocs          | Whether to generate documentation-related content simultaneously.                                                                                                                                                                                                                                                                                                                    |

> Find default value of arguments by `n19n4.help`.

# Create Classloader

## JRE

Only JDK 9 and above versions are supported.

Arguments:

```
n19n4.outputDir=../n19-j17/src
n19n4.generateTarget=jdk
```

## Groovy

Ensure that the Groovy JAR files have been added to the `classpath`.

Arguments:

```
n19n4.outputDir=../n19-g4/src
n19n4.generateTarget=groovy
```

## Other Libs

Ensure that all JAR files have been added to the `classpath`.

```
n19n4.outputDir=../n19-g4/src
n19n4.generateTarget=other
n19n4.thirdPartyLibName=GroovyAnt
n19n4.thirdPartyLibs=groovy-ant,4.0.25
n19n4.classesToLocateJars=groovy.ant.AntBuilder
```