# Hoh-hoh-hoh

## Synopsis

A personalized app that allows you to share wish-lists with others. Named after our group name, Higher-order Hippos, otherwise known as "Hoh."

## Motivation

Brainstorming gift ideas can be time-consuming. Even in our best of efforts, it is never guaranteed our friends will like it. Hoh-hoh-hoh helps you pick out the perfect gift for your loved ones, allowing you to create wish-lists and share them with others.

## That's the plan anyway.

The app is still in its beta phase and needs a lot of work. So far, we have successfully linked our app to a MySQL database and added authentication. We have yet to personalize our user page and add social features (like being able to add friends, share wish-lists and offer to buy gifts for a friend).

## Getting Started

You will need a MySQL database to store user information including wish-lists and items. Simply `npm install` and add a pw.js file in the database folder containing your MySQL password like so:

```
module.exports = 'your_password';
```
