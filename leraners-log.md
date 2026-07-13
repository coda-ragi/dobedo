## 12-07-2026

# Intial Intro 

### What is a TUI? 

A TUI means Text User Interface.

It is a program that runs in the terminal and shows interactive screens using text, boxes, colors, and keyboard input instead of a graphical window UI.

Examples:

terminal apps like htop
Git tools
package managers with menus
interactive CLIs
In short: a TUI is a “terminal-based app interface” rather than a mouse-driven graphical interface.

### How is it built?

A TUI is usually built with:

- a terminal library, such as Ink, React, or blessed
- a runtime that updates the screen repeatedly
- keyboard input handling for interactions

In this project, the TUI is built by rendering text to the terminal with Ink. The flow is roughly:

1. the app creates a component tree
2. Ink renders it to the terminal
3. the app updates state
4. the terminal output is refreshed

### About INK 

Ink provides the same component-based UI building experience that React offers in the browser, but for command-line apps. It uses Yoga to build Flexbox layouts in the terminal, so most CSS-like properties are available in Ink as well. If you are already familiar with React, you already know Ink.

Since Ink is a React renderer, all features of React are supported. Head over to the React website for documentation on how to use it. Only Ink's methods are documented in this readme.


## Concepts for the day 

### what is a Hook? 


A hook is simply a special function that lets your component use React's internal features. 
- useState() : Persistent memory

> useState doesn't store state inside your component. It gives your component access to state that React stores outside the component, and calling the setter tells React to update that state and render the component again.

- useEffect() : Run side effects after rendering

### Why Hooks Must Always Be Called in Order?

Imagine this:
```js
const [count] = useState(0);

if (count > 5) {
    useState("hello");
}

const [darkMode] = useState(false);
```
- when the if runs: 

Hook #1 → count

Hook #2 → hello

Hook #3 → darkMode

- When the if doesn't run:

Hook #1 → count

Hook #2 → darkMode

Now darkMode accidentally gets the state that belonged to "hello".

Everything shifts.

This is why React says:

Always call hooks in the same order.


> NOTE - Dev-Dependencies are the packages required to develop the application.
>
>> Whereas dependencies are just the packages required to run the application.

### Structure of a js project 

- package.json - project manifest( what your project needs)
- node_modules - holds all the dependencies and there dependencies...
- package_lock.json - save exacts versions of dependencies for reproducible installs 
- src - your source code 

### what does react really do? 

React doesn't create HTML elements 

```jsx
 <Text> Hello </Text>
```
it transforms them into something like 

```js
React.createElement(Text, null, "Hello")
```
***react creates decriptions***

**React Renderers: react never draws anythings instead**
> React --> Renderer --> Platform(Browser/Terminal/Native Views)
>
>> So a React component's basically a js function that returns a description of the UI. 

---

# 13-07-2026

## JavaScript Concepts Overview for reference 

### Foundations

- JavaScript: A high-level scripting language, standardized as ECMAScript, used for interactive web development and server-side programming.
- V8 Engine: A high-performance engine that uses Just-in-Time (JIT) compilation to execute JavaScript code efficiently.
- Variables: Data containers declared using let (reassignable), const (immutable), or the legacy var.
- Dynamic Typing: The language determines data types at runtime rather than requiring explicit type definitions.

### Functions & Scope

- Lexical Environment: The scope rules that determine where variables are accessible (Global, Local, or Block scope).
- Higher-Order Functions: Functions that accept other functions as arguments or return them as output.
- Closures: A mechanism where an inner function retains access to its outer function's scope even after the outer function has executed.
- 'this' Keyword: A reference that changes based on how a function is invoked.
- Arrow Functions: A concise, anonymous function syntax that does not possess its own 'this' context.

### Objects & Data

- Prototypal Inheritance: Objects inheriting directly from other objects via a prototype chain.
- Classes: Syntactic sugar built on top of prototypal inheritance to structure object-oriented code.
- Built-in Structures: Includes Arrays (indexed collections), Maps (key-value pairs), and memory-efficient versions like WeakMap and WeakSet.
- Garbage Collection: Automatic memory management that deallocates objects no longer in use.

### Asynchronous JavaScript

- Event Loop: A non-blocking model that allows single-threaded JavaScript to handle multiple tasks concurrently.
- Callbacks: Functions passed as arguments to be executed later, often leading to "callback hell" if nested excessively.
- Promises: Objects representing the eventual completion (or failure) of an asynchronous operation.
- Async/Await: Syntactic sugar that allows writing asynchronous code that reads like synchronous code.
- Web & Modern Development
- DOM (Document Object Model): The tree structure representing the UI, allowing JavaScript to manipulate HTML elements.
- Declarative/Reactive UI: Modern frameworks update the UI automatically based on changing data states.
- Module Bundlers: Tools like Vite or Webpack that package code for production deployment.
- TypeScript/ESLint: Static analysis tools used to improve code quality and catch errors early.


