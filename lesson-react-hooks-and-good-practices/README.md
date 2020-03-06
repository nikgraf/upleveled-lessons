## Making impossible states impossible

Code-along: Create the Arrow component

```jsx
<Arrow />
<Arrow up />
<Arrow down />
<Arrow up down />
// 🙀
```

vs

```jsx
<Arrow varient="up" />
<Arrow varient="down" />
```

**Exercise** Create a button component which can either be `filled, outline or text`.

**Conclusion**: Care about you props design!

## When to split up components

There are no clear rules and different people have different preferences.

TODO show example of a long component and 3 ways of how to split it up.

What are simple rules to follow?

1. If you use a snippet multiple times inside one component don't split up.
2. If you use a snippet multiple times inside multiple components then create a component for it.
3. If a component contains non-generic code e.g. props or a conditional then split it up and possible inline it.

## Multiple components per file vs only one component per file

In general I recommend one component per file. If you have multiple components in one files why not inline it.
In some cases it makes sense though and it's for you to decide when it's fine. Don't worry everyone is struggling with this!

## key prop explained

## useEffect

-> pdf

**Code along**: online/offline

-> console.log is your friend!!!

show online/offline example

## useRef

**Code along**: create Leaflet component

## Context

## Suspense
