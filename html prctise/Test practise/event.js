function incrementCounter() {
	var spanElement = document.getElementById('counter');
	var count = spanElement.getAttribute('numberOfClicks');
    count++;    
    spanElement.innerText = count;
    spanElement.setAttribute('numberOfClicks', count);
}


// Script calls. adds an event that on 'click'
// Same as putting an onClick = 'function()' into the HTML
document.getElementById('incrementButton').addEventListener('click', incrementCounter);
