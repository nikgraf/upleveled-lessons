## Making impossible states impossible

## Variants

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
<Arrow variant="up" />
<Arrow variant="down" />
// <Arrow variant="up" variant="down" />
```

Why can't I have the same prop key twice? Props map to an object and there always only can be one key.

**Exercise** Create a button component which can either be `filled, outline or text`.

## Combining Props

Possible states according to the designer:

- Black solid up
- Black solid down
- Red solid up
- Red solid down
- Red dotted up
- Red dotted down

```js
color: black | red;
lineStyle: solid | dotted;
variant: up | down;
```

```jsx
<Arrow color="black" lineStyle="solid" variant="up" />
<Arrow color="black" lineStyle="solid" variant="down" />
<Arrow color="red" lineStyle="solid" variant="up" />
<Arrow color="red" lineStyle="solid" variant="down" />
<Arrow color="red" lineStyle="dotted" variant="up" />
<Arrow color="red" lineStyle="dotted" variant="down" />
```

```jsx
// oh oh
<Arrow color="black" lineStyle="solid" variant="up" />
<Arrow color="black" lineStyle="solid" variant="down" />
```

```js
lineStyle: solidBlack | solidRed | dottedRed;
variant: up | down;
```

```jsx
<Arrow lineStyle="solidBlack" variant="up" />
<Arrow lineStyle="solidBlack" variant="down" />
<Arrow lineStyle="solidRed" variant="up" />
<Arrow lineStyle="solidRed" variant="down" />
<Arrow lineStyle="dottedRed" variant="up" />
<Arrow lineStyle="dottedRed" variant="down" />
```

Tadaaaaa 🎊

**Conclusion**: Care about you props design! Well design props makes it easier for others and often your future self to use your components as intended.

## When to split up components

There are no clear rules and different people have different preferences.

Let's take https://www.nikgraf.com/courses for example.
Each course uses exactly the same structure. Any ideas?

Yes, let's make a course component and use it. Then we have one abstraction! What are the pros and cons?

Pro:

- Easier to change this one abstraction

Con:

- Harder to grasp if you code is spread over dozens of files containing only couple of lines. You have to get good at navigating the filesystem.
- Locked into a pattern and you build resistance to render single items differently. For exmple if you want to highlight the first and the third with a different background color.

What are simple rules to follow?

1. If you use a snippet multiple times inside one component don't split up.
2. If you use a snippet multiple times inside multiple components then create a component for it.
3. If a component contains non-generic code e.g. props or a conditional then split it up and possible inline it. (e.g. you add logic that on hover only a component with a specific name would hightlight differently, btw might be able to solve via a generic prop)

## Multiple components per file vs only one component per file

In general I recommend one component per file. If you have multiple components in one files why not inline it.
In some cases it makes sense though and it's for you to decide when it's fine. Don't worry everyone is struggling with this!

## key prop explained

1. Render without key + update array => warning
2. Render with number index key + update array => no warning, but broken after updating the array
3. Render with id key + update array => Yay!

**Pro note**: The key prop allows you to return same element/component type, but force React to unmount the previous instance, and mount a new one.

**Pro exercise**: Create a list with a detail view (form) next to the list and whenever you select an item the form update the values to the specific item.

## useEffect

**Code aling** update the title (first on every render, then only when the message count changes)

https://github.com/donavon/hook-flow

**Code along**: online/offline

-> console.log is your friend!!!

show online/offline example

## useRef

Get access to the actual DOM element. When is this useful? For DOM element functionality that's only available via a function call.
Or to bail out of React -> Maps or Charting libs.

**Code along**: create Leaflet component

## Context

What if two components need to share the same state?

For example:

- Theme
- Current language
- Current user

**Code along**: Current user example of profile + chat group people list.

## Bonus: Suspense
