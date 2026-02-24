1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    Ans: To get a element by its ID we use getElementByID. It gives us a single element having unique ID.

    We use getElementByClassName to get all element having the same class. It gives us a html collection.

    we use querySelector to get the first matching element of a class/tag/ID. It give us a single element.

    we use querySelectorAll to get all the element by its class/tag. It give us a node List.

2. How do you create and insert a new element into the DOM?

   Ans: 
   At first I create a new element by using "document.createElement('element name');" then select the parent by its id/class/tag and append the created element in the tageted parent by using 
   "parent.appenChild('created element');"


3. What is Event Bubbling? And how does it work?

    Ans: 
    When someone click the button the click event does not stay on the button. It travels upward to the parent then to the grandparant and so on until it reaches the last parent. It's called Event Bubbling.

If someone click an inner element, at firts the inner element's event runs then the parent's even runs then the grandparent's event runs and so on.

4. What is Event Delegation in JavaScript? Why is it useful?

    Ans:
    Event delegation is a process where one can adding a event to the parent instead of adding event to the every single child.

    It is very useful because if one have 1000 child then they have no need to added 1000 event listener. They can add only one event listener to the parent.

    No need to add event listener to a new child adding by JavaScript later. They will work automatically.


5. What is the difference between preventDefault() and stopPropagation() methods?

    Ans:
    PreventDefault() stop the browser default behavior.
    stopPropagation stop the event from bubbling up to the parent