1. Differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll
   -getElementById finds one element using it's specific id
   -getElementsByClassName finds all the elements of the same spcific class
   -querySelector finds the first element that matches the CSS selector
   -querySelectorAll finds all the elements that matches the CSS selector

2. Create and insert new element into DOM
   -Create a new element by using createElement()
   -Add contents to it.
   -Insert it into the DOM by using document.body.appendChild()

3. Event Bubbling means when one element is clicked, the event occurs and then it moves up to it's parent element, and the same event is occured again. This goes on until it reaches the top of the document.
   The browser sends the event to the clicked element first, after that it is automatically passed to it's parent element. This also goes on until it reachrs the top of the document.
