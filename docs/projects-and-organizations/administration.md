---
sidebar_position: 4
---

# Administration

All the administration tasks, either for organizations or projects, can be done at the root page of the entity you'd
like to administrate. Of course, you must be administrator to perform these tasks.

## Renaming

To rename an organization or a project, just click on its title and update it.

:::caution
Changing a title will also change the resource's URL.
:::

## Deleting

To delete an organization or project, click on this icon: ![Delete icon](/img/delete.png)

All of the resource's contents will be permanently deleted, and if it's an organization, all its project will be erased. 
So please ensure you really want to do that. We don't keep any backup, so we won't be able to restore your 
organization or project.

## Changing a project's visibility

A small lock indicates the visibility of your project. Depending on its color and shape, the project is either public, internal or
private. Clicking on the lock will change the visibility.

| Lock                                          | Visibility |
|-----------------------------------------------|------------|
| ![Public lock icon](/img/lock-public.png)     | Public     |
| ![Internal lock icon](/img/lock-internal.png) | Internal   |
| ![Private lock icon](/img/lock-private.png)   | Private    |

## Users

You can access the list of users of your project or organization by clicking on this icon: ![users icon](/img/users.png)

### Adding users

To add new users to your project or organization, just search for their username in the input field at the top of the 
list.

:::info
When you want to add users to an organization's project, you'll only be able to look for the users who belong to the 
organization. Which means that if you want to add to your organization's project a user who is not in the organization, 
you will have to invite this user to the organization first.
:::

In the list of users who belong to your organization or project, you can also change their permissions.

### Users permissions

#### Organization permissions

In the following table, we consider that the user does not explicitely belong to the organization's projects 

| Permission | Not in organization | In organization with no permission | With "create projects" permission | With "write projects" permission | With "admin" permission |
| --- | --- | --- | --- | --- | --- |
| Read public projects content | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: |
| Read internal projects content | :x: | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: |
| Read private projects content | :x: | :x: | :x: | :x: | :x: |
| Create projects (and become admin of them) | :x: | :x: | :ballot_box_with_check: | :x: | :ballot_box_with_check: |
| Rename projects | :x: | :x: | :x: | :x: | :x: |
| Change projects visibility | :x: | :x: | :x: | :x: | :x: |
| Delete projects | :x: | :x: | :x: | :x: | :x: |
| Edit content (features, steps, tags & folders) in public and internal projects | :x: | :x: | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: |
| Administrate the users of public and internal projects | :x: | :x: | :x: | :x: | :x: |
| Pull features of projects | :x: | :x: | :x: | :x: | :x: |
| Rename the organization | :x: | :x: | :x: | :x: | :ballot_box_with_check: |
| Administrate the organization's users | :x: | :x: | :x: | :x: | :ballot_box_with_check: |
| Remove the organization | :x: | :x: | :x: | :x: | :ballot_box_with_check: |

#### Project permissions

The following permissions are valid whether the user is in an organization's project or a standalone one.

| Permission | Not in project | In project with no permission | With "write" permission | With "pull" permission | With "admin" permission |
| --- | --- | --- | --- | --- | --- |
| Read public project content | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: |
| Read private project content | :x: | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: | :ballot_box_with_check: |
| Edit content (features, steps, tags & folders) | :x: | :x: | :ballot_box_with_check: | :x: | :ballot_box_with_check: |
| Administrate the users | :x: | :x: | :x: | :x: | :ballot_box_with_check: |
| Pull features | :x: | :x: | :x: | :ballot_box_with_check: | :x: |
| Rename | :x: | :x: | :x: | :x: | :ballot_box_with_check: |
| Change visibility | :x: | :x: | :x: | :x: | :ballot_box_with_check: |
| Remove | :x: | :x: | :x: | :x: | :ballot_box_with_check: |


### Removing users

To remove users from a project or an organization, click on the following icon in the given user's 
row: ![Leave icon](/img/leave.png) 
