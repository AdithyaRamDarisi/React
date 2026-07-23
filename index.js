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

// Components:A component is a JavaScript function (or class) that returns JSX (HTML-like syntax).
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


// 