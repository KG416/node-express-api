# 🌿 node REST API

A CRUD rest api built with *node.js* & *express*.

## Prerequisites

You need to have [NodeJS](https://nodejs.org/en/) installed.

## Installation

- Clone the repo
- In a terminal, run `npm install`
- To start the node server, run `npm run dev`

## Test endpoints

**To test endpoints with `REST Client`**

1. Install VS Code extention `REST Client`
2. Make sure the node server is running (see installation above).
3. In `test.rest`, click "Send request" on the corresponding request you want to send. This opens a new tab with the response. *Remember to enter a valid id when sending `PUT` and `DELETE` requests, check in `products.json` to find a valid id.*

## Tools

### [uuid](https://www.npmjs.com/package/uuid)

For creating id's.

### [Nodemon](https://www.npmjs.com/package/nodemon) (optional)

To avoid having to restart the node server after making changes.

### [REST Client](https://www.npmjs.com/package/uuid) (optional)

To test requests directly in VS Code.

## Code organisation

The code is organized using the MVC pattern (minus view, not needed for this project). [What is MVC?](https://www.youtube.com/watch?v=DUg2SWWK18I&ab_channel=WebDevSimplified)

**The folder structure is as follows:**

- data - dummy data in the form of products
- controllers
- models
- routes
- utils

## Inspiration

[Web Dev Simplified](https://www.youtube.com/watch?v=fgTGADljAeg)

[Net Ninja](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)