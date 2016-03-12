
$(document).ready(function() {


$('#form-container').submit(function() {
	var $translated= $('#translated');
	var wordStr = $('#word').val();

for ( var i=1; i < wordStr.length; i++) {
	if (wordStr[0] == "a" || wordStr[0] == "e" || wordStr[0] == "i" || wordStr[0] == "o" || wordStr[0] == "u") {
		$translated.text(wordStr + "" + "way");
		return false;
	}

	else if (wordStr[i] == "a" || wordStr[i] == "e" || wordStr[i] == "i" ||wordStr[i] == "o" || wordStr[i] == "u" ) {
		var splitStr= wordStr.substr(0,i);
		var newStr= wordStr.substr(i,wordStr.length) + splitStr + "" + "ay";
		$translated.text(newStr);
		return false;
	}
}


return false;
});


});
