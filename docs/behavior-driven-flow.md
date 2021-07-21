---
sidebar_position: 1
slug: /
---

# Dentest, the Behavior Driven flow using Gherkin syntax

Specifying and implementing features are two different jobs, that shouldn't be done by the same people. 

First of all, if a product need hasn't been well understood, having the same people writing the specs, implementing them, 
and validating they have been respected, something's wrong somewhere. 

Then, people defining product needs and people implementing them are not always using the same words for the same things. 
Which makes the communication harder between the different parties. 

Also, developers often tend to write tests after having implemented their tasks, and there can be a bias. Are they 
implementing tests according to the original business need, or are they testing that **their** implementation works? 
Tests written after the development are more likely to be less relevant than a clear definition from the start.

Luckily, a language called _Gherkin_ provides the perfect syntax to make all the parties work together around features, 
by making them speak the same language, which is the language of your business. Plus, it can help everybody to have the 
feature described before its being implemented, so that the developers can focus on what they're expert in: building your 
product. Last but not least, _Gherkin_ is agnostic from the technology you're using to develop your product, and 
integrates perfectly in the automation tools you're using to validate your development.

_Dentest_ provides the interface that will help all these parties to write, use and read _Gherkin_, and respect the 
following recommended flow:

![](/img/flow.png)
