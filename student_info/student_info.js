document.getElementById("name").innerHTML = name;
document.getElementById("marks1").innerHTML = marks1 + "/100";
document.getElementById("marks2").innerHTML = marks2 + "/100";
document.getElementById("marks3").innerHTML = marks3 + "/100";


var total = parseInt(marks1) + parseInt(marks2) + parseInt(marks3);
var perc = (total/300)*100;

function total1(){

	if(isNaN(total)){
		alert("Total Marks can't be determined. One or more subject marks not entered or incorrectly entered.");
	}
	else{
		document.getElementById("total_marks").innerHTML = total;
	}
	
}


function percentage(){

	if(isNaN(total)){
		alert("Percentage Score can't be determined. One or more subject marks not entered or incorrectly entered.");
	}
	else{
		document.getElementById("perc").innerHTML = perc + "%";
	}
	
	
}

function grade(){

	if(isNaN(total)){
		alert("Grade can't be determined. One or more subject marks not entered or incorrectly entered.");
	}
	else{
		if(perc < 40){
		document.getElementById("grade").innerHTML = "Fail";
		}
		else{
		document.getElementById("grade").innerHTML = "Pass";
		}
	}
}
