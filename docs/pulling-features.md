---
sidebar_position: 5
---

# Pulling features

The aim of Dentest is to help you go to a more behavior driven approach, by letting non-developers use the web 
platform, and letting developers retrieve everything that has been created, inside the technical project.

How we see the developers journey:

- Pulling the features from Dentest (Gherkin files will be created in the root directory of their choice, following the 
  tree that has been defined on Dentest)
- Implementing the missing steps so that the Gherkin interpreter can match a step to a piece of code
- Implementing the feature to make the tests pass
- Pushing this work on the versioning tool, so that the CI can run the Gherkin features as tests
- Deploying once everything is good


## Before your first pull

### Preparing the project

A `.dentest.yml` file must be created at the root of the project. It can be a different name, we'll see that later, but 
this one is handled by default.

This file must contain the directory in which you want to pull the Gherkin files.

```yaml
dir: features
```

### Retrieving your token

A token must be gathered in order to pull the features. This token is **yours**, and only works for **this project**. 
So, do not commit it.

To retrieve the token, login to Dentest, and go to the project's root page.

Click on this icon (you must have pull rights to see it): ![](/img/pull-token.png)

A dialog will open, with your token in it. Copy it (or click the "Copy" button).

Then, set it as an environment variable named `DENTEST_TOKEN`, or in a `.env` file at the root of your project:

```dotenv
#.env
DENTEST_TOKEN=1ebea2f2-4d36-6938-aa2f-fb602817e47e
```

## Refreshing the pull token

If your token has been compromised, or just to change it, you can do it from Dentest also. Follow the same steps than for 
the token retrieval, and instead copying the token, just click on the following icon: ![](/img/refresh-token.png)

:::caution
The previous token will be revoked, you won't be able to use it after this action 
:::

## Getting the Dentest CLI

Look for the Dentest CLI's releases on Github: https://github.com/dentest-project/cli/releases
In the latest release, download the binary that corresponds to your OS (you can choose between Windows, Mac OS or Linux (AMD64)).

If your OS or architecture is not in the list, just clone the project and build it using Rust Cargo (`cargo build --release`).

Then, rename the binary to `dentest`. If you're on a UNIX-based system, like Mac OS or Linux, just move the renamed 
binary to `/usr/local/bin/dentest`

## Using the Dentest CLI

If you followed all the previous settings, just do, from the root directory of your project:

```bash
dentest pull
```

All the features **that aren't in `Draft` mode** will be pulled inside your project. You can start implementing them!

### Using a different name for the configuration file

As said earlier, you can choose a different name for the configuration file, in replacement of `.dentest.yml`.
If you decide to do so, just pass an option to `dentest` when pulling:

```bash
dentest -c ./specs.yml pull
```

:::info
It can have a different name, but it must be YAML file
:::
