// Virtual DOM
// The Virtual DOM (VDOM) is a lightweight copy of the real DOM. 
// It is a JavaScript object that represents the structure of your web page.

// How it Works
// The UI is rendered and a Virtual DOM is created.
// When data changes, a new Virtual DOM is created.

// Library
// A library is a collection of pre-written code that you can use in your program.
//  You are in control and decide when to call the library.

// Framework
// A framework provides a complete structure for building an application. 
// The framework is in control and calls your code at the appropriate time.

// React
// React is a free, open-source JavaScript library used to build user interfaces (UI), 
// especially for Single Page Applications (SPAs). 
// It was developed by Meta (Facebook).


// Components 
// Component is a small building block of a web page
// components make our code cleaner,reusable and easy to manage
// in components we write code using javascript and html like code called JSX


// Vanilla Javascript is different from react js because react makes the code 
// look cleaner and easier and make dynamic user interfaces. 

// What is VITE ?
// is a modern frontend build tool that helps developers create web applications quickly. 
// It provides a fast development server and an optimized production build.

// Why VITE is Used?
// Before Vite, developers often used tools like Create React App (CRA) or Webpack. As projects grew, 
// starting the development server and rebuilding the application became slower.

// Steps to import and export components
// Step 1: We should create a folder in src as (components)
// step 2: create a file as (component1.jsx)
// 3.first we should import react then create a function as follows..
// 4. import React from "react";
// function ComponentOne() {
//     return(
//         <h1>Hello Adithya</h1>
//     )
// }
// export default ComponentOne; 5.should export the function name(ComponentOne)
// 6. head to app.jsx and import componentone
// 7. and give a tag of componentone as follws <ComponentOne/>


// What is JSX?
// JSX (JavaScript XML) is a syntax extension for JavaScript that 
// lets you write HTML-like code inside JavaScript. 
// React uses JSX to describe what the UI should look like.

// What is virtual DOM and DOM
// DOM :The DOM is the browser's tree-like representation of an HTML document that JavaScript can manipulate.
// Virtual DOM:The Virtual DOM is a lightweight copy of the real DOM that React uses to efficiently update only the changed parts of the UI.
// *React update the virtual DOM first and find the changes,
// and updates only what changes needed in the real DOM
// This makes the app faster and more efficient.



// What are Props (Properties)?
//  Props (Properties) are read-only inputs used to pass data from a parent component 
// to a child component in React.

// Components:Components 
// Component is a small building block of a web page
// components make our code cleaner,reusable and easy to manage
// in components we write code using javascript and html like code called JSX
// A component is a JavaScript function (or class) that returns JSX (HTML-like syntax).

// Two Types of Components
// 1.Functional Components
// These are simple JavaScript functions that return JSX.
// 2.Class Components
// These are ES6 classes that extend React.Component using the render method to return jsx

// Export and ways of export
// Export are two ways default export and named export
// We can export default only once and named export number of times.

// StrictMode :
// StrictMode is a React development feature that wraps 
// components to perform additional checks and warnings. 

// Fragments:A Fragment in React is a special wrapper that lets you group multiple JSX elements 
// without adding an extra HTML element


// props:Props (short for Properties) are used to pass data from a parent component to a child component.
// state:State is used to store and manage data inside a component. When the state changes, 
// React automatically re-renders the component to reflect the updated data.

// Lists:A list is a collection of items that you want to display on the screen. 
// In React, lists are usually rendered using the JavaScript map() method.

// Key:Key is used to identify each element in a list
// Map:map() is an array method that is used to iterate over each element of an array and create a new array.

// Hooks:Hooks are built in special functions that let you use state and other react features in functional components.
// Most Used Hooks in react.
// 1.useState():useState is a React Hook that allows a functional component to store and update state.
// 2.useEffect():useEffect lets us to run code after some component renders
// usEffect : useEffect is a React Hook used to perform side effects in functional components, such as API calls, timers, event listeners, 
// or updating the document title.
// 3.useRef():

// Two Way Binding :
// Two-way binding is a pattern where the UI and the component state stay synchronized. 
// The input field updates the state using onChange, and the state controls the input using the value prop. 
// This ensures that any change in the input updates the state, 
// and any change in the state is reflected back in the UI.

// Nested Components:
// A nested component is a component that is rendered inside another component. 
// It helps organize the UI into smaller, reusable pieces,
//  making the application easier to maintain and reuse.

// props:
// Props (short for Properties) are used to pass data from a parent component to a child component.
// state:
// State is used to store and manage data inside a component. When the state changes,
// React automatically re-renders the component to reflect the updated data.

// Props Destructuring:
// Props destructuring means taking the required values directly from 
// the props object instead of repeatedly writing props.value.

// StateManagement:
// State management in React means storing and managing data that can
//  change over time in your application.

// UseState():
// useState is a React Hook used to create and manage state (data that can change)
//  inside a functional component.
// Syntax for useState : const[state,setState]=useState()

// UseEffect:
// useEffect is a React Hook used to perform side effects in a component.
// Such as
// Fetching data from an API
// Updating the document title
// Using setInterval / setTimeout
// Adding event listeners
// Working with browser APIs
// Running code when a component loads or when state changes


// Ternary Operator:  
// The ternary operator is a shorthand way of writing an if...else statement. 
// In React, it is mainly used to conditionally render JSX based on a condition.
// Syntax : condition? True:False


// Forms:
// A form in React is used to collect user input such as names, emails, passwords, and other data. 
// React handles form data using state (useState) and updates it through event handlers like onChange and onSubmit.

// Prop Drilling:
// Prop drilling is passing props through multiple intermediate components to reach a nested child component,
// even when those intermediate components don't use the props.

// Avoiding Prop Drilling:
// Prop drilling can be avoided by using the React Context 
// API or state management libraries like Redux or Zustand.


// Context API:
// Context API is a React feature that allows you to share data across multiple components without 
// passing props manually through every intermediate component.

