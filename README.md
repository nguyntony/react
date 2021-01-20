# React
#react

## Terms
- Element
- Component
- Props
- Keys

## How is JSX different from HTML?
- className vs class
- must have closing tags
- must start with a capital letter
- `.map` to produce elements requires a `key` prop

## Questions 
- What is JSX?
- Is a React element the same thing as a DOM element?
- What's the difference between a Component and an Element?

## Creating React app
[Reference to Creating React App](https://github.com/facebook/create-react-app)
- write this code in the terminal inside of the directory of where you would like your app  `npx create-react-app {directory name}`

#### React commands
- `npm start` this is going to be like nodemon for your react code.
- `npm run build` this is where you create files for your express app. The build step will create an optimized files that you will put in your express /public directory 
- `npm test`
- `npm run eject`

When Chris mentions ajax, what does he mean? 

#### Inside the React app
You will have a package.json; it will have the scripts that appear in the terminal when you create the react app. There are also a node modules directory and git directory as well.

**Note** When creating a react app, it will automatically create a .git directory so make sure to NOT nest this creation inside of another git directory. 

#### Editing the App.js
This file is inside of the `src` directory. When you save this file, the react dev server will load the browser, watch for changes and reload your changes.

What is **compiled with warnings**? A react app has to be interpreted, the dev server is compiling the code, it is taking unfamiliar code then translating it into plain js. 

#### What looks familiar?
- Import is just like require (that you see in your node/express app)
- Export default is just like module.exports (that you see in your node/express app)
- The return statement that you see in the app function is JSX. 

## Code breakdown
- component (inside of the App.js) there is an 'App' function and that is considered a component
- elements (inside of the App function), this looks like html and is after the return statement. 
- if you click on the 'view page source',  you will not see the html that is inside of div#root. 

React creates your DOM elements inside div#root. What this means is that inside of your App.js, the element that you want to appear on the browser will be wrapped around this div id root. 

## How to create a react component 
**Note** when creating a new file, it must be capitalized. 
1. Import react
2. Write your component
3. Export your component

#### To use your component
1. Import the file into the file that you wish
2. Call your component like this `<YourComponent></YourComponent>`
Anything that was in that file 'YourComponent' will now be referenced as the above.
- You may see your component call this like `<YourComponent/>`

**Note** The components are very similar to the templates in express, you can modularize your html and then have it imported into the file that will be rendered for each page. 







