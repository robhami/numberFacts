
let ddStick="";
let userInputVal="";
let obj={};

function getFact () {
	console.log(ddStick);
	userInputVal=userInput.value;
	console.log(userInputVal);

	try {
		// if (ddStick==="") 
		// 	throw ("Fact Type Not Selected");

		if (userInputVal==="") 
		throw ("Number not entered");
		
		if (userInputVal===NaN) 
		throw ("Not a number");

		}

	catch(err) {
		alert ("Errors: " + err)
	}

		getAPI(ddStick);
}



function dropDown (ddSelect, buttToChange) {
	console.log("ddSelect: ", ddSelect, "buttToChange: ", buttToChange);
	// set ddStick var to text of dropdown id selected		
	ddStick = document.getElementById(ddSelect).id;
	console.log("ddStick: ",ddStick);
	//change button value to ddStick text & value
	buttToChange.textContent = ddStick;
	
	// getAPI(ddStick);
}


function getAPI (ddStick) {

	let url= 'http://numbersapi.com/' + userInput.value+'/'+ddStick+'?json';

	console.log(url);

	fetch(url).then(response => 
		
		 response.json())

		 .then(data=>
			obj=data	
		 )	
 		.then(() => 
 			addResult(obj)
		)
}

function addResult(obj) {
	let resultText= obj.text;
	console.log(resultText);
	console.log(result.textContent);
	document.getElementById("result").textContent=resultText;
	
}