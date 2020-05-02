## Tube app

Web app to view YouTube videos. A personal YouTube API key is required to run this project.

App requires following environment variables, either inserted to system or injected from terminal:

* YOUTUBE_API_KEY=yourkeyhere
* NODE_ENV=development

Use following in production only, since development versions of front and back will clash otherwise
* PORT=5000 

Example, when injecting from terminal:

`NODE_ENV='development' YOUTUBE_API_KEY='yourkeyhere' PORT='5000' npm run startServer`

In the project root directory, you can run:

### `npm run installAll`

Install all dependencies to client and server.

### `npm run startDev`

Starts both client and server. Client runs on http://localhost:3000 and uses local server to proxy YouTube API requests. Server runs on http://localhost:5000. Client hot reload included.

### `npm run startServer`

Starts server only. Server runs on http://localhost:5000. If client has been built, it is available through server as well. Changes to client aren't reloaded without client rebuild.

### `npm run startClient`

Starts client only. Client runs on http://localhost:3000. Requests to YouTube API not possible without local server running.

### `npm run buildClient`

Builds production version of the client. Can be used through server, without starting client separately.

### Running on production

First build a production version of the client. Then move only the following files and folders to server:

* api/
* public/
* app.js
* package-lock.json
* package.json
* README.md (for instructions, optional)

Run commands on root folder:
`npm install`
`NODE_ENV='production' YOUTUBE_API_KEY='yourkeyhere' PORT='5000' npm run startServer`



