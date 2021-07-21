---
sidebar_position: 5
---

# Describing a feature

Let's now dig into the essence of Dentest, how to describe features in order to **specify**, **validate** and **document** 
your application.

## Saving

Good to know before starting: feature's contents will be saved only when you click the following icon: ![](/img/save.png)

## Status

You don't want developers to start implementing a feature that is not done specifying. That's why features are created 
with a `Draft` status. While they're in this state, **developers won't be able to pull them in the project**.

Once the feature is ready to be implemented, change the status, by clicking on the status chip, to `Ready to dev`. This 
status indicates to people reading the features as a documentation that this one has not been released yet, but is 
currently under development.

Once the feature has been deployed, just change the status to `Live`. This way, everybody knows that the feature is 
a source of truth.

## Description

Enter the description in the purple area. Usually, a description follows a "user-story style", explaining the who, the 
what and the why of the feature: 

- As a **role**
- I want to **action**
- So that **benefit**

But of course, you can enter what you want in it, even let it empty.

## Tags

Like the steps, features can have a list of tags. This can be useful for your Gherkin interpreter to run only certain 
tests, or to identify some features in some way (like the "flaky" ones for instance).

## Scenarios

A feature is basically a list of scenarios. And a scenario is basically a list of steps.

### Viewer vs writer mode

A scenario is in viewer mode first. To be able to fill in the steps params, reorder steps, edit title or tags, or switch 
its type, you must enter in writer mode, by clicking the following icon: 
![](/img/writer-mode.png)

To go back to the viewer mode, click on the following icon: ![](/img/viewer-mode.png)

### Editing the title

Just click on a scenario's title to edit it.

:::info
A _Background_ scenario doesn't have a title
:::

### Tags

Tags can also be put at the scenario level. This is exactly the same purpose than the features tags.

### Adding steps

You can drag'n'drop steps from the bank of steps. If the steps require params (inline, paragraph or table), 
inputs or text areas will be created accordingly. For the table case, the dimensions of the needed table will be asked 
first.

You can change the adverb to _And_ or _But_, in order to ease the reading.

### Reordering steps.

In writer mode, you can drag'n'drop the scenario's steps to reorder them.

### Reordering scenarios

The scenarios can be reordered by clicking on the _up_ or _down_ arrow buttons 

### Copying a scenario

A whole scenario can be copied by clicking the following icon: ![](/img/copy.png)

### Removing steps or scenarios

To remove a scenario, or just one of its steps, click on the following icon: ![](/img/delete.png)

## Special scenarios

### Background

A _Background_ is a special scenario that will be executed before every other scenario of the feature.
It can be useful to setup a given environment for the whole feature.

To create a _Background_ on Dentest, you can convert the first scenario, from _Scenario_ to _Background_. To do so,
just click on the chip that indicates "Scenario". It will be switched to "Background".

### Scenario Outline

A scenario outline is another special scenario, to which you can specify a list of examples, and the scenario will be 
played as many times as the amount of examples.

To create a scenario outline, just surround any value in the steps params by chevrons (`<status>` for instance).

A new "Examples" table will appear. It will contain as many columns as surrounded values there are, and its header row 
will contain all the surrounded values.

Just fill the "Examples" table with all your test values, and your scenario outline will be set.


