# E book
React application that helps you to add pages of you book. Interactive editor helps you to add pages the way you need. App have option for `CREATE`, `UPDATE` and `DELETE`.
### Installation
Install the packages using
>npm i

To start the server
>npm start

To build for production
>npm build

To see live version click [here](https://e-book-app.netlify.app/)

## Folders
#### Components
---
Contains all the components for the app
#### Layout
---
Contains main layout of the app. Routing is redirected to appropriate pages here
#### redux
---
This folder contains all files related to the redux
## Basic workflow
- Users is initially routed to `InitialLayout` if there is no data, otherwise redirected to `ViewLayout` with first page.
- User can create new pages from the first page itself.
- User can edit or delete pages from the top.
- All data is stored in `local storage` so that user can use the app later without losing data.