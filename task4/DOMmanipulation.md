# JavaScript and the HTML DOM

![HTML DOM Tree](./images/pic_htmltree.gif)

## What is the HTML DOM?

The **HTML DOM (Document Object Model)** is a programming interface for HTML.  
When a page loads, the browser creates a structured **tree of objects** representing all elements on the page.  
JavaScript can use the DOM to **access and modify content, structure, and styles** dynamically.

---

## Key Capabilities

With the DOM, JavaScript can:

- Change HTML elements and their attributes
- Update CSS styles
- Add or remove elements and attributes
- React to user actions through events
- Create new events

---

## DOM Structure

- **Core DOM** – For all document types
- **XML DOM** – For XML
- **HTML DOM** – For HTML (focus here)

In the HTML DOM:

- HTML elements are objects
- They have **properties** (values you can get or set)
- They have **methods** (actions you can perform)
- They support **events**

---

## Accessing Elements

### Using `getElementById`

```javascript
document.getElementById("demo").innerHTML = "Hello World!";
```

### Using `querySelector`

```javascript
document.querySelector("#demo").innerHTML = "Hello World!";
```

### Using `querySelectorAll`

```javascript
document.querySelectorAll("p").forEach((p) => {
  p.style.color = "red";
});
```

---

## Modifying Elements

### Using `innerHTML`

```javascript
document.getElementById("demo").innerHTML = "Hello World!";
```

### Using `textContent`

```javascript
document.getElementById("demo").textContent = "Hello World!";
```

### Using `setAttribute`

```javascript
document.getElementById("demo").setAttribute("class", "demo");
```

---

## Creating Elements

### Using `createElement`

```javascript
let p = document.createElement("p");
p.innerHTML = "Hello World!";
document.body.appendChild(p);
```

### Using `appendChild`

```javascript
let p = document.createElement("p");
p.innerHTML = "Hello World!";
document.body.appendChild(p);
```

---

## Removing Elements

### Using `removeChild`

```javascript
let p = document.querySelector("p");
p.remove();
```

### Using `parentNode`

```javascript
let p = document.querySelector("p");
p.parentNode.removeChild(p);
```

---

## Events

Events are actions that happen in the browser, such as a button being clicked or a key being pressed.  
JavaScript can respond to these events by **listening** for them and **responding** to them.

### Using `addEventListener`

```javascript
let button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("Button clicked!");
});
```

### Using `onclick`

```javascript
<button onclick="alert('Button clicked!')">Click Me</button>
```

---

## Event Object

When an event occurs, JavaScript creates an **event object** that contains information about the event.  
This object can be used to **target** the element that triggered the event, and **prevent** the event from happening.

```javascript
button.addEventListener("click", function (event) {
  alert("Button clicked!");
  event.preventDefault();
});
```

---

## Event Bubbling

When an event occurs, it **bubbles** up the DOM tree.  
This means that if an event is triggered on an element, it will also trigger on its parent elements.

```javascript
<div id="parent">
  <div id="child">
    <button>Click Me</button>
  </div>
</div>
```

```javascript
document.getElementById("child").addEventListener("click", function (event) {
  alert("Button clicked!");
  event.stopPropagation();
});
```

---

## Event Capturing

When an event occurs, it **captures** the event before it bubbles up the DOM tree.  
This means that if an event is triggered on an element, it will **not** trigger on its parent elements.

```javascript
<div id="parent">
  <div id="child">
    <button>Click Me</button>
  </div>
</div>
```

```javascript
document.getElementById("child").addEventListener("click", function (event) {
  alert("Button clicked!");
  event.stopPropagation();
});
```

---

## Event Delegation

Event delegation is a technique that allows you to attach an event listener to a parent element, instead of each child element.  
This means that if an event occurs on a child element, it will trigger the event on the parent element.

```javascript
<div id="parent">
  <div id="child">
    <button>Click Me</button>
  </div>
</div>
```

```javascript
document.getElementById("parent").addEventListener("click", function (event) {
  alert("Button clicked!");
});
```

---

## Event Propagation

Event propagation is the process by which an event bubbles up the DOM tree.  
This means that if an event is triggered on an element, it will also trigger on its parent elements.

```javascript
<div id="parent">
  <div id="child">
    <button>Click Me</button>
  </div>
</div>
```

```javascript
document.getElementById("child").addEventListener("click", function (event) {
  alert("Button clicked!");
  event.stopPropagation();
});
```
