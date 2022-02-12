<h1 align="center">Take-Home Coding Exercise - Frontend Software Engineering</h1>

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/richardhyesungo"><img src="https://avatars.githubusercontent.com/u/18966944?v=4" width="100px;" alt=""/><br /><sub><b>Richard O</b></sub></a><br /></td>
  </tr>
</table>

## Overview
1. Kanban Board: https://github.com/richardhyesungo/fetch-frontend-challenge/projects/1
2. [**Tech Stack**](#tech-stack)
3. [**Repo Instructions**](#2-ways-to-run-this-application)
4. [**Possible Improvements**](#possible-improvements-and-additional-features)
5. [**Form Interaction Gif**](#form-interaction-gif)
6. [**Application Design Visual**](#application-design-visual)
7. [**Wireframe Visual**](#wireframe)

## Tech Stack:
1. React via create-react-app
2. JavaScript / TypeScript
3. Jest / Puppeteer
4. CSS / Material UI / Flexbox
5. Axios
6. Prettier

# 2 Ways to Run This Application:
1. Development
2. Production

### Running in development mode
1. Open terminal on local machine
2. Run `git clone git@github.com:richardhyesungo/fetch-frontend-challenge.git`
3. Run `cd fetch-frontend-challenge` to move into the repo folder
4. Run `npm ci` to install dependencies
5. run `npm start`
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running in production mode
1. Requires node and installing serve via npm
 - [Other ways of serving the build](https://create-react-app.dev/docs/deployment/)
2. Open terminal on local machine
3. Run `git clone git@github.com:richardhyesungo/fetch-frontend-challenge.git`
4. Run `cd fetch-frontend-challenge` to move into the repo folder
5. Run `npm ci` to install dependencies
6. Run `npm run build`
7. Run `npm install -g serve`
8. Run `serve -s build` if you have 
9. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run jest/puppeteer tests with `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Possible Improvements and Additional Features
1. Increase test coverage and add unit testing for functions
2. Add logs to track traffic and errors
3. Stronger user input validation - only have empty or not empty validation. Would have checks allowing only A-Z characters, email and password validation
4. Highlight input fields that weren't completed or completed incorrectly
5. More styling and color, better feedback once user is created. Maybe redirect to home page as a logged in user.

## Form Interaction Gif
![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/18966944/152461150-7e4d3396-1692-4b7d-bc65-1aaabaec6512.gif)

## Application Design Visual
![image](https://user-images.githubusercontent.com/18966944/152452278-18b00866-fec1-4b88-80bd-497cf6f73de0.png)

## Wireframe:
![image](https://user-images.githubusercontent.com/18966944/151830661-d737e4e7-92f3-49df-9105-24d900cf0782.png)
