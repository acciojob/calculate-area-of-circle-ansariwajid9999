 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
			radius = parseFloat(radius);

	// Check if the radius is a valid number
	if (!isNaN(radius) && radius > 0) {
	    // Calculate the area
	    let area = calculateCircleArea(radius);
	    
	    // Round the result to two decimal places
	    area = area.toFixed(2);
	    
	    // Display the result
	    console.log(`The area of the circle with radius ${radius} is ${area}`);
	} else {
	    console.log("Please enter a valid positive number for the radius.");
	}
}
calculateArea();
