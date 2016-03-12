

$('#form-container').submit(function() {
    var $gpaCalc = $('#gpaCalc');
    var $NotNum = $('#NotNum');
    var totalCreditHours = 0;
    var totalGradePoints = 0;


//values for inputs

var creditHoursInputs = document.getElementsByClassName( 'credit-hours' );
var hours = [].map.call(creditHoursInputs, function( input ) {
        return input.value;
    });
for (var i = 0; i < hours.length; i++) {
    totalCreditHours += hours[i] <<0;
}

var gradePointInputs = document.getElementsByClassName( 'grade' );
var gradepoints = [].map.call(gradePointInputs, function( input ) {
      return input.value;
    });

for (var j = 0; j < gradepoints.length && j < hours.length; j++) {
    totalGradePoints += gradepoints[j] * hours[j];
}


//calc

var termGradePointAverage = totalGradePoints.toPrecision(3) /totalCreditHours.toPrecision(3);
$gpaCalc.text(termGradePointAverage.toFixed(2));





//bg-color

    if (isNaN(termGradePointAverage.toFixed(2)) === true) {
        $(".jumbotron").css({'background-color':'white', 'transition': '0.6s ease-in-out'});
        $gpaCalc.text('Please check your values.');
}
  
    else if (termGradePointAverage.toFixed(2) >= 3.50) {
        $(".jumbotron").css({'background-color':'#159C00', 'transition': '0.6s ease-in-out'});
}

    else if (termGradePointAverage.toFixed(2) >= 3.00) {
        $(".jumbotron").css({'background-color':'#6FC900', 'transition': '0.6s ease-in-out'});
}

    else if (termGradePointAverage.toFixed(2) >= 2.50) {
        $(".jumbotron").css({'background-color':'#AFEE00', 'transition': '0.6s ease-in-out'});
}

    else if (termGradePointAverage.toFixed(2) >= 2.00) {
        $(".jumbotron").css({'background-color':'#FFFA06', 'transition': '0.6s ease-in-out'});
}

    else if (termGradePointAverage.toFixed(2) >= 1.50) {
        $(".jumbotron").css({'background-color':'#FFCB00', 'transition': '0.6s ease-in-out'});
}

    else if (termGradePointAverage.toFixed(2) >= 1.00) {
        $(".jumbotron").css({'background-color':'#FF6400', 'transition': '0.6s ease-in-out'});
}

    else {
        $(".jumbotron").css({'background-color':'red', 'transition': '0.6s ease-in-out'});
}

return false;
});



function add_course() {
    var courseNumber = 1;
    courseNumber++;
    var objTo = document.getElementById('courseinfo');
    var newRow = document.createElement("div");

    newRow.innerHTML = '<div class="container"><div class="row"> <div class="col-md-4"><label for="course"> </label><input type="text" id="course" value=""></div><div class="col-md-4"><label for="credit-hours"></label><input type="text" class="credit-hours" value=""></div><div class="col-md-4"><label for="Grade"></label><select class="grade"><option value="4.00">A</option><option value="3.70">A-</option><option value="3.33">B+</option><option value="3.00">B</option><option value="2.70">B-</option><option value="2.30">C+</option><option value="2.00">C</option><option value="1.70">C-</option><option value="1.30">D+</option><option value="1.00">D</option><option value="0.70">D-</option><option value="0.00">F</option></select></div></div>  ';
    
    objTo.appendChild(newRow);

return false;
}


