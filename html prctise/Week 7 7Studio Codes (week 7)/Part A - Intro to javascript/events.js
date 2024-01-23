// Function declarations
function incrementCounter() {
	 var spanElement = document.getElementById('counter'); //First get the element, then the attribute is what you increment
	var count = spanElement.getAttribute('numberOfClicks');
    count++;    
    spanElement.innerText = count;//Reinsert the text//
    spanElement.setAttribute('numberOfClicks', count);//Update the variable attached to the text//
}

function toggleVisibility() {
    var chartImage = document.getElementById('chart1');
    if (chartImage.style.display === "none") {
        chartImage.style.display = "block"; //block is like show it as a square, different style types can google em//
    } else {
        chartImage.style.display = "none";
    }
}

// Script calls. Can always look up more evemt listener types to get deeper insight 
document.getElementById('incrementButton').addEventListener('click', incrementCounter);
document.getElementById('chartToggle').addEventListener('click', toggleVisibility);