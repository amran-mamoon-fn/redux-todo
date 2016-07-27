## Installation
Clone the repository and install dependencies.

```
git clone https://github.com/amran-mamoon-fn/redux-todo.git
cd redux-todo
```

```
npm install
npm start
open http://localhost:3000
```

ESLint
```
npm run lint
```

## Why do we need Redux?
Let's think about an ordinary React app. There are components, states, props and API actions. A component calls another components and if you trigger an UI state, view is updated and etc... Finally, the app becomes complex and you cannot control it.

> React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.
>
> Source: https://facebook.github.io/react/docs/why-react.html

We need a state container like Redux. How does Redux solve this problem?
Basically, there is a single store source which is read-only. If you want to make an action like load photos from API, you have to make this using actions and reducers.

There are 3 primary parts of Redux: actions, reducers and store.


### July 28, 2016
- Initial commit.