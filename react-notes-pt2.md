# react-notes-pt2
#react

## Destructuring Props
[Medium](https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0)
[StackOverFlow ](https://stackoverflow.com/questions/60589914/destructuring-props-in-react)
A neat thing that you can do is destructure your props so that it will allow you to take out the `props.` everywhere and it'll be easier to see your code. 

There seems to be two ways that you can do this:
1. Where you normally pass props, instead of passing props, you can pass an object with the keys that you wish to use and that will bypass the need to do `props.name`
2. You continue to pass in the props to the functional component and create some space before the return block and you can destructure `const {name} = props`

## Render, if it exists
#### Conditional rendering 
`{ props.title && <h3>{props.title}</h3> }` using this syntax this is going to be cleaner and how it reads is that, if the first expression is truth then it will resolve the the second expression, if the first expression is false then it will not do the latter

While this is nice and quick, you may want to use a ternary operator instead of this if there is a second value that you want to show instead of nothing. 

## States
React is optimized to redraw the UI when data changes in response to user interaction, to make this happen react manages data in three separate steps:
1. Component stores state in a variable 
2. State is presented in the ui
3. Update the state when there is user interaction 

Three parts to state in a react component:
1. Constructor that sets up the initial state
2. Helper fn that updates the state
3. Event handler that triggers the helper fn 

#### State 
- refers to the data used by your app. (Ie. In a likes button the state is an integer that can be increased or decreased, in a messaging app, it might be an array of message objects) 
The change of state will always cause a component to re render

You have two ways of managing state:
1. Classes 
2. hooks

#### Classes 
The constructor() runs any time a new instance of your Component is created. The super() is how a class refers to the parent's constructor(). 



We want each card to have its own state (its own memory)

Redux is state management that exists for all components. Every piece of information that you want to have access is stored in redux. (A bigger view of state)

## Use Effect 
Every time that the page is being reloaded, it will run the function that is inside of use effect. UseEffect you will run this 'side effect' exactly once. This is the equivalent of window.onload, this will run once to check if anything needs redrawing in the actual/live DOM on the page. 

This calculation and reconciliation process is known as the react's virtual Dom

When my page loads, I need to put the data that I want from useEffect somewhere, I cannot put that in the component, I need to stash it in some place that will survive a re render. 

## Life Cycle Methods
Mounting, when it mounts. App loads and it mounts itself onto the DOM and it will run through anything that is constructor, this.state, hooks or use effect hooks. 

ComponentDidMount, this will only fire when it is mounted on the DOM and then it renders the JSX, this all happens really quickly. Then it calls the component did mount, it happens after the initial render

If there are use effect, it will do one more render. (That is 2 renders now). 
When this component mounts, get me this data so that I have it ready. This will result in a nasty loop, you will need to pass a second argument to use effect, an empty array. 


