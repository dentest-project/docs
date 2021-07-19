---
sidebar_position: 4
---

# Creating the steps bank

A very handy feature of Dentest is its steps bank. With it, no more pain when it comes to find the right existing steps 
for your scenario.

## Opening the steps drawer

To open the steps bank, click on the _SHOW STEPS_ button: ![](/img/show-steps.png)

The drawer is divided in three parts : a button to create a new step, a filters subdivision, and finally the list of 
existing tags, sorted by adverb (_Givens_, _Whens_ and _Thens_). Each step item is prefixed by an icon representing the 
extra param it needs (none, multiline or table). 

## Creating a new step

In Gherkin, a step is divided in three parts:

- **An adverb**.
    - _Given_: the step will define an initial situation
    - _When_: the step will define an action
    - _Then_: the step will define an expected result
- **A sentence**. A sentence can contain parameters within it.
- **An optional extra parameter**.
    - A paragraph
    - A table
    
### The adverb

Just pick the accurate adverb in the dedicated select box

### The sentence

Type the sentence in the input.

To declare inline parameters, highlight part you want to make variable. The following icon will appear: ![](/img/split-step.png)

Click it, and the input will be splitted to welcome the newly created param. To remove it, just click the cross within 
the corresponding input.

### The extra parameter

Then, select the extra parameter type this step will welcome. When choosing this step in your scenarios, an extra field 
will be created if you don't select the "none" type. Select the right icon for your extra param type:

| Icon                               | Extra parameter type |
| ---------------------------------- | -------------------- |
| ![](/img/step-param-none.png)      | No extra param       |
| ![](/img/step-param-multiline.png) | Paragraph            |
| ![](/img/step-param-table.png)     | Table                |

### Tags

You can add tags to your step. Tags will help you retrieve easily your steps in the steps bank. Choose them wisely

## Updating an existing step

To update an existing step, just click on it in the steps bank. A dialog will open, and you'll be able to edit some 
parts, but not to resplit the step.

## Removing a step

Same, click on it in the bank, and hit the "Delete step" button. A step can not be deleted if it is used somewhere.
