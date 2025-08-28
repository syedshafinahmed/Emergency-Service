## 1. Differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- **getElementById** finds one element using its specific id.
- **getElementsByClassName** finds all the elements of the same specific class.
- **querySelector** finds the first element that matches the CSS selector.
- **querySelectorAll** finds all the elements that matches the CSS selector.
<br>

## 2. Create and insert new element into DOM

- Create a new element by using **createElement()**
- Add contents to it.
- Insert it into the DOM by using **document.body.appendChild()**
<br>

## 3. Event Bubbling

- **Event Bubbling** means when one element is clicked, the event occurs and then it moves up to its **parent element**, and the same event occurs again. This goes on until it reaches the top of the document.
- The browser sends the event to the clicked element first. After that, it is automatically passed to its parent element. This also goes on until it reaches the top of the document.
<br>

## 4. Event Delegation

- **Event Delegation** means putting one event listener on a parent element to handle events for all of its child elements.
- It is useful because we don’t have to add separate **listeners** to each child.
<br>

## 5. Differences between preventDefault() and stopPropagation()

- **preventDefault()** prevents the browser's default action, like form submission.
- **stopPropagation()** stops the event bubbling.



   
