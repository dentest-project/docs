---
sidebar_position: 1
slug: /
---

# What is Dentest?

In Breton, _den_ means _human_. Basically, Dentest is an online platform on which you can write, read and pull **Gherkin** features. 
Really, it's no more than that. But we believe that it was the missing piece to fully embrace
the power of a syntax that has been created to make every actor of a same project speak the same
language. Let us explain why, in three points: what Gherkin already offers as is, what are the painful aspects of it, 
and how Dentest fixes them. 

## The benefits of Gherkin

- **It is human-readable.** Tons of testing frameworks exist, but most of them are made by developers, for developers.
  The true power of Gherkin is that it's not a framework per se, but an easy syntax to write your features in your native language.
  It means that anybody can write or read it, and thus it can be used for **validation** of course, but also
  for **specification** and for **documentation**.
- **It is easy**. Everybody can learn how to write Gherkin in five minutes. Although the syntax has some
  requirements, they are very simple to apprehend.
- **It is cross-languages**. As Gherkin is just a syntax, there is an interpreter in every programming language. No
matter the technology your project has been built with, you can integrate Gherkin.

## The drawbacks of Gherkin

- **It is hard to organize steps**. This is probably the most painful aspect of Gherkin. 
  Steps can be found either by reading their definitions in the code, or by searching in all the features. To 
  know if a step already exists for a given need, it's always a nightmare. Solutions exist, like keeping
  a bank of steps somewhere like in a spreadsheet. But in most cases, projects end up having multiple steps doing the 
  same thing, and the more a project grows, the more it becomes messy.
- **Chosen for its clarity, but only used by developers**. Gherkin features, most of the time, just live in a _features_
  directory, next to the source code. This directory is versioned, with the project, so that tests can be ran in a CI.
  That's great, but it means that only developers deal with Gherkin. They write the features themselves, with technical 
  words because they know the audience will only be their pairs. And that's not a good strategy. Gherkin is meant to be
  read by non-technical people. If the product quality is just in the technical actor's interest, then they should 
  probably use another tool, that would better fit their needs. 
- **Human-readable, but not that easy to read**. Gherkin is a markup language. It has been created so that non-technical 
  people can read it, and they can. But reading a markup, with a fresh eye, can be uncomfortable.

## What are the solutions that Dentest provides to address these drawbacks?

- Dentest provides a **bank of steps**, split in three categories: the _Givens_, the _Whens_ and the _Thens_. 
  This way, it becomes really easy to reuse steps that have been defined in the project. Moreover, each step can carry
  a collection of **tags**, and the bank of steps is filterable according to those tags, to quickly target the
  steps you're looking for.
- Dentest is an online platform, **opened to everyone, not just devs**. Features are meant to be specified by product owners 
  or quality engineers, and not by devs. The developers come in the second part of the process, by pulling the features 
  into their project whenever they're ready.
  Having non-devs writing features ensure a non-technical lexical choice. As the content remains online, every actor in 
  the company will be able to consult the features as a documentation, to know how parts of the application work. The 
  knowledge is shared.
- Features are **readable online**. Exit the markup, so that everyone can read them naturally
