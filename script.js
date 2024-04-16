
function myFunction (){
    var fullName = document.getElementById("fullname").value;
    var userName = document.getElementById("username").value;
    var emailAdd = document.getElementById("email").value;
    var passWord = document.getElementById("password").value;
    var gender__ = document.getElementById("gender").value;
    var hob = document.getElementById("hobbies").value;
    
    document.getElementById("output").innerHTML = "Full Name: " + fullName + "<br>" + "Username: " + userName + "<br>"  + "Email Address: " + emailAdd + "<br>"  + "Password: " + passWord + "<br>" + "Gender: " + gender__ + "<br>" + "Interests: " + hob + "<br>";
    return false;
}

function OnBlurFunc1(){
    var x = document.getElementById("fullname").value;
    if(x==""||x==" "){
        document.getElementById("fullname").style.borderColor = "red";
    }
}

function OnFocusFunc1(){
    var x = document.getElementById("fullname").value;
    if(x!=""||x!=" "){
        document.getElementById("fullname").style.borderColor = "green";
    }
}

function OnBlurFunc2(){
    var y = document.getElementById("username").value;
    if(y==""||y==" "){
        document.getElementById("username").style.borderColor = "red";
    }
}

function OnFocusFunc2(){
    var y = document.getElementById("username").value;
    if(y!=""||y!=" "){
        document.getElementById("username").style.borderColor = "green";
    }
}

function OnBlurFunc3(){
    var z = document.getElementById("email").value;
    if(z==""||z==" "){
        document.getElementById("email").style.borderColor = "red";
    }
}

function OnFocusFunc3(){
    var z = document.getElementById("email").value;
    if(z!=""||z!=" "){
        document.getElementById("email").style.borderColor = "green";
    }
}

function OnBlurFunc4(){
    var a = document.getElementById("password").value;
    if(a==""||a==" "){
        document.getElementById("password").style.borderColor = "red";
    }
}

function OnFocusFunc4(){
    var a = document.getElementById("password").value;
    if(a!=""||a!=" "){
        document.getElementById("password").style.borderColor = "green";
    }
}

function OnBlurFunc5(){
    var b = document.getElementById("hobbies").value;
    if(b==""||b==" "){
        document.getElementById("hobbies").style.borderColor = "red";
    }
}

function OnFocusFunc5(){
    var b = document.getElementById("hobbies").value;
    if(b!=""||b!=" "){
        document.getElementById("hobbies").style.borderColor = "green";
    }
}
