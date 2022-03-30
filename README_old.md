# Vanilla node REST API

A CRUD rest api using no frameworks. Built with *node.js*, *nodemon* & *uuid*.

## Prerequisites

You need to have [NodeJS](https://nodejs.org/en/) installed.

## Installation

- Clone the repo
- In a terminal, run `npm install`
- To start the node server, run `npm run dev`

## Version control (git)

Progress is chronologically divided into different branches. For example `1-project-setup` and `2-node-server`.

## Tools

### [Nodemon](https://www.npmjs.com/package/nodemon)

 To avoid having to restart the node server after making changes.

### [uuid](https://www.npmjs.com/package/uuid)

For creating id's.

## Code organisation

The code is organized using the MVC pattern (minus view, not needed for this project). [What is MVC?](https://www.youtube.com/watch?v=DUg2SWWK18I&ab_channel=WebDevSimplified)

**The folder structure is as follows:**

- data - dummy data in the form of products

- controllers

- models

## Inspiration

This project was created with inspiration from [Traversy Media](https://www.youtube.com/watch?v=_1xa8Bsho6A&ab_channel=TraversyMedia).