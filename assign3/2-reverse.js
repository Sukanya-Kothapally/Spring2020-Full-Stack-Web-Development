// Enter your code here
function Reverse(){
    var Number = document.getElementById("input").value;       
        if (Number.length != 8) 
        {
            window.alert("You have entered a " + Number.length + " digit number \nPlease enter a 8 digit number");
        	return;
        }
        else 
        {
      	    Number = Number.split("").reverse().join("");
        	window.alert("Reverse of given number is " + Number);
        }
    }