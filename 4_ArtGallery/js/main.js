

var $billBoard= $('<div id="billBoard"></div>');
var $image= $('<img>');
var $title= $('<h4></h4>');

$("body").append($billBoard);
$billBoard.append($title);
$billBoard.append($image);

$image.hide(); // If I didn't black period in the center of the page.

$("#artgallery img").click(function(event){
	event.preventDefault();
	var imgSource= $(this).attr("src");
	$image.attr("src", imgSource);
	$image.fadeIn("slow"); //Only wanted to fade once when clicked
	$billBoard.show();
	$('body').animate({scrollTop: '1000px'}); /*some images were bigger than others. 
	I don't want the user to scroll all the way down to see image*/

var titleText = $(this).attr("title");
$title.text(titleText);
});



//**Game-Plan**

//create a blown-up image (billBoard) element on page --- also I want to hide the billBoard until img is clicked.


//On click event, I want the image of clicked to show that billBoard
	//Show that clicked image on that billBoard
		//get attributes of image of clicked and set it to the billboard img
	//I want to also show the title of the image
		//get atrributes of image clicked and show it on billboard 		

	//when another image is clicked it gets that new image in the billboard

