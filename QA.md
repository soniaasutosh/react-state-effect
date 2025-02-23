## 1. What is React.js, and what problem does it solve?

        React as a Javacripts SPA Framework which used to develop dynmic and interactive web application.

## 2. What are the key features of React.js?

        1. Component-Based Architecture
            UI is divided into reusable and independent components. (Try to develop Pure Component)
            Components can be functional or class-based.
            Even if using thridparty library MUI;bootstap. Always follow wrapper component
        2. Virtual DOM
            React creates a lightweight copy of the actual DOM (Virtual DOM).
            It updates only the changed parts instead of re-rendering the entire UI, improving performance.
        3. JSX (JavaScript XML)
            Allows writing HTML-like syntax inside JavaScript.
            Makes code more readable and easier to write.
        4. Unidirectional Data Flow
            Data flows from parent components to child components via props.
            Helps in maintaining a predictable and manageable data structure.
        5. State Management
            Components can manage their own state using the useState hook (for functional components) or this.state (for class components).
            React also supports external state management libraries like Redux, Zustand, and Recoil.
        6. React Hooks
            Introduced in React 16.8, hooks allow functional components to use state and lifecycle features without needing class components.
            Common hooks: useState, useEffect, useContext, useReducer, etc.
        7. React Router
            Enables navigation between different views in a React application.
            Supports dynamic routing and nested routes.
        8. Lifecycle Methods (for Class Components)
            Methods like componentDidMount, componentDidUpdate, and componentWillUnmount manage component behavior during different phases.
        9. Context API
            Provides a way to pass data deeply through the component tree without using props (prop drilling).
            Useful for themes, authentication, and global state management.
        10. Server-Side Rendering (SSR) with Next.js
            Improves performance and SEO by rendering pages on the server before sending them to the client.
        11. Progressive Web App (PWA) Support
            React applications can be turned into PWAs, offering features like offline support and push notifications.
        12. React Concurrent Mode & Suspense
            Enhances UI responsiveness by rendering tasks in a non-blocking way.
            Suspense allows components to wait for async data before rendering.
        13. React Fiber
            A complete rewrite of React's reconciliation algorithm for better performance.
            Improves UI responsiveness and smooth animations.
        14. Portals
            Allows rendering child components outside their parent hierarchy, useful for modals, tooltips, and popups.

## Explain the Virtual DOM in React.js and how it improves performance.

Answer Above

## What is JSX in React.js, and why is it used?

Anser Above

## How does data flow in React.js applications?

Answer Above

## What are components in React.js, and how do they work?

Anser Above

## What is the difference between functional and class components in React.js?

In Note.md

## What are props and state in React.js, and how are they different?

In Note.md

## How do you handle events in React.js?

    In React, event handling is similar to HTML
    ⋅1. Handling Events with Inline Function
    ⋅2. Handling Events with Event Handler Function - (futher use callback)
    ⋅3. Passing Arguments in Event Handlers - (leverfaging inline)
    ⋅4. Preventing Default Behavior - (On Form Submit; prevent web application submission behavior)

## Explain the concept of lifting state up in React.js.

    The parent manages the state and passes it down as props.
    Useful for forms, controlled components, and synchronized UI updates.

## What is the purpose of keys in React lists?

    help in performance; prevening re-rending for unchanges elememts

## How do you manage state in React.js applications?

    answer above

## What are controlled and uncontrolled components in React.js?

    A controlled component is a form element where React fully controls the value via state.
    An uncontrolled component manages its own state using the DOM (get value using Ref or document.getElementBy)

## Explain the significance of useEffect() hook in React.js.

note.md

## How do you handle routing in React.js applications?

above answer

## What are higher-order components (HOCs) in React.js, and how do you use them?

    A Higher-Order Component (HOC) is a function that takes a component and returns a new enhanced component

```
         const withLogger = (WrappedComponent) => {
            return (props) => {
                console.log("Props received:", props);
                return <WrappedComponent {...props} />;
            };
        };

```

## What is Redux, and how does it relate to React.js?

**Redux** is a state management library for JavaScript applications, commonly used with **React.js** to manage global state efficiently.

#### **How Redux Works in React:**

1. **Store** – Centralized state container.
2. **Actions** – Plain objects that describe state changes.
3. **Reducers** – Pure functions that update the state based on actions.
4. **Dispatch** – Triggers actions to modify the state.
5. **Selectors** – Retrieve specific data from the store.

#### **Why Use Redux with React?**

✅ **Manages complex state** across components.  
✅ **Avoids prop drilling** by providing a **global state**.  
✅ **Predictable state updates** using pure functions (reducers).

## Explain the concept of context api in React.js and when it's useful.

**The Context API in React is a built-in state management tool that allows you to share data globally across components without prop drilling.**

**How Context API Works:**

1. Create a Context – Defines a global state.
2. Provide the Context – Wraps components to share data.
3. Consume the Context – Access data in child components.

## What are React hooks, and why were they introduced?

above answer

## How do you optimize performance in React.js applications?

1. Use React.memo for Component Re-Renders
2. Use useCallback & useMemo
3. Code Splitting & Lazy Loading
4. Virtualization for Large Lists (React-Window, React-Virtualized)
5. Optimize Rendering with Key Props
6. Reduce Unnecessary State & Props
7. Optimize Images & Assets

## What is the purpose of useCallback() and useMemo() hooks in React.js, and when would you use them?

answer above

## Explain the differences between shallow rendering and full rendering in React testing.

When testing React components, there are two primary rendering approaches: Shallow Rendering and Full Rendering.

## What is server-side rendering (SSR) in React.js, and why might you choose to use it?

answer above

## How do you handle forms in React.js, and what are controlled and uncontrolled components in this context?

answer above

## What are portals in React.js, and when would you use them?

answer above

## Describe the React lifecycle methods and their purposes. How have they changed with the introduction of hooks?

answer node.md

## How do you handle authentication and authorization in a React.js application?

Authetication is to identify the person/user
authorization is the priviliges of the authenticated persion -
priviliges CRUD; usung function like hadAuthrity() function controll application behiviour and feature
eg. DEPARTMENT_CREATE, DEPARTMENT_READ, DEPARTMENT_UPDATE, DEPARTMENT_DELETE
