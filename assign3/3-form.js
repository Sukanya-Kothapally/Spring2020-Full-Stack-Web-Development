// Enter your code here
function submitform() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("message").value;
    var checkbox = document.getElementById("checkbox");
    if(checkbox.checked){
        checkbox = "on";
    }else{
        checkbox ="off";
    }
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("comments: " + comment);
    console.log("newsletter: " + checkbox);
};