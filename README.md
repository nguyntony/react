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
- What is JSX? JSX is essentially shorthand for React.createElement(). JSX is not html, you are able to use the knowledge of html that will then be used by the compiler to translate that to React.createElement(). 
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

What is **compiled with warnings**? A react app has to be interpreted, the dev server is compiling the code, it is taking unfamiliar code then translating it into plain js. It is important to note that interpretation tool that react is using is babel. This interpretation tool allows for further interpretations of things that might not be exclusively js (ie. Importing a svg file). 
[Babel · You can see the interpretations here](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.12&externalPlugins=)

#### What looks familiar?
- Import is just like require (that you see in your node/express app)
- Export default is just like module.exports (that you see in your node/express app)
- The return statement that you see in the app function is JSX. 

## Code breakdown
- component (inside of the App.js) there is an 'App' function and that is considered a component
- elements (inside of the App function), this looks like html and is after the return statement. 
- if you click on the 'view page source',  you will not see the html that is inside of div#root. 
- where is this div#root coming from? It's coming from the public folder, there will be an index.html file inside of the public folder and that html file acts as the shell for your react app.
- inside of this /public/index.html is where you will add the link tag to bring in some css or even include a script cdn for GSAP.
- One thing to note is that you will import your css file into your app, this is not the same as the node/express app where your styles are in the public folder. (More info about this soon)

React creates your DOM elements inside div#root. What this means is that inside of your App.js, the element that you want to appear on the browser will be wrapped around this div id root. 

## How to create a react component 
**Note** when creating a new file, it must be capitalized. 
1. Import react
2. Write your component
3. Export your component

**Note** a react component is a function and a fn can only return one value, that is why you can only have one parent element, what goes inside the return block of the component is considered as an element. A workaround could be an empty tag

#### To use your component
1. Import the file into the file that you wish
2. Call your component like this `<YourComponent></YourComponent>`
Anything that was in that file 'YourComponent' will now be referenced as the above.
- You may see your component call this like `<YourComponent/>`

**Note** The components are very similar to the templates in express, you can modularize your html and then have it imported into the file that will be rendered for each page. 

## How to use props with a react component 
When you are creating component, it is very similar to creating function, with that being said, you are able to pass an argument with this function declaration. You can pass 'props' to this function 

Our attributes in the JSX gets translated as an object with key value pairs.
`<PhotoCard url="hi there" />` the url there is seen as an attribute in JSX. This attribute is accessible if you go into the file where you define the component and you can pass props as an argument and you can `console.log(props)` to see these attributes. (This console statement is before the return statement)

You can use js values in our JSX by wrapping it around curly brackets, so similar to the express app where you will have ${}, you will just use {}.

## How to use sass with react
[Adding a Sass Stylesheet | Create React App](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)

## Connecting the dots
#### If you want to create react components and you want to modularize your project…
1. Create the component in another js react file (ie. A photo card that will be placed inside of photo gallery). In this file you will need to import react, create a functional component (this will look like a fn declaration), inside of the functional component, you will write JSX elements, it is important to note that if you want to pass information from props you will need to pass props as an argument to this functional component and lastly you will export your component.

2. Create another js react file (ie. This will be the photo gallery), this file will do the same as above but you will also import the photo card file. Inside this file you will call on the imported component and you can pass it props. The props will look very similar to html attributes for your component. These props act as objects so that you will be able to call upon the attributes by the attribute name. 

If you wish to map, you can do so here. If you are mapping an array of objects then the values of that object will be assigned to a prop and in your previous file, you will handle that information there by using prop.key 

3. You will need to connect the photo gallery file to the main app.js, so you will need to import that there and you need to make sure to invoke that component inside of the app.js 











