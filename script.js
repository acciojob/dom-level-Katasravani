//your JS code here. If required.
// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the element with id 'level'
    const targetElement = document.getElementById('level');

    // Check if the target element exists
    if (targetElement) {
        // Initialize the DOM level count to 0
        let domLevel = 0;

        // Iterate through the parent nodes until the root html element
        let parentNode = targetElement.parentNode;
        while (parentNode && parentNode.nodeName !== 'HTML') {
            domLevel++;
            parentNode = parentNode.parentNode;
        }

        // Display the DOM level using alert
        alert('The level of the element is: ' + domLevel);
    } else {
        // Display an alert if the target element is not found
        alert('Element with id "level" not found.');
    }
});
