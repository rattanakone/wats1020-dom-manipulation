//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    
  	
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // TODO: Create a function to listen for clicks on the "login" button.
   
$('.login-button').click(function(){ //clicking on the login button
	$('#login-form').hide(); //hiding the form after login button is clicked
	$('.user-info').show(); //showing the user info welcome with their name
	var userInfo = { //data to be populated in user info after it shows
        firstName: 'Jane',
        lastName: 'Doe'
    };
	$('.user-fullname').html(userInfo.firstName + " " + userInfo.lastName); //adding the variable to populate in user info
});
	
    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.          
	
$('.view-details').on('click', function(event){ //  1. When user clicks a "view details" button
	console.log(event);
	var targetElement = event.target;
	var container = targetElement.parentElement.parentElement; // find the parent of that element.
	$(container).find('.details').each(function(index, el){ //  2. Within that parent, find all the elements that have the class `details`.
		if ($(el).is(':visible')){ //  3. Toggle visibility of all the elements within that parent with the class `details`.
			$(el).fadeOut();
			targetElement.innerText = "View Details";  //  4. Change the text of the "view details" button
		} else {
			$(el).fadeIn();
			targetElement.innerText = "Hide Details"; //  to read "hide details" so the user understands they can hide the text again.
		}
	});
});	

    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
	  
	var voteCounts = { // variable for the counters starting at 0 for both buttons
        great: 0,
        greatest: 0,
        total: 0
    };
	
    voteCounts.great = 10; // variable and the class great combined with units of progress bar to increase
$("[data-vote=great]").on('click', function(event){ // button pointed at the data-vote as event listener
	voteCounts.great += 10; // increment for the counter for increase by 10 units when clicked on
    var currentWidth = $(".great-progress").width(voteCounts.great+'%');  // variable for progress bar to increase in width when clicked on 
    console.log(voteCounts.great+'%'); // returned to the console log when clicked on 
    });
	
	voteCounts.greatest = 20; // variable and the class great combined with units of progress bar to increase
$("[data-vote=greatest]").on('click', function(event){ // button pointed at the data-vote as event listener
	voteCounts.greatest += 20; // increment for the counter for increase by 20 units when clicked on
	var currentWidth = $(".greatest-progress").width(voteCounts.greatest+'%'); // variable for progress bar to increase in width when clicked on 
	console.log(voteCounts.great+'%'); // returned to the console log when clicked on 

});
	
});

