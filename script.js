function validation(){
    
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message"); 
    
    var regName = /^[A-Za-z0-9 ]{3,20}$/;
    var regPhone=/^\d{10}$/; 
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    // var regPassword = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;  
    console.log("password",typeof password);
     
    if(name === "" || !regName.test(name))
    {
      message.innerText = "Please enter your name";
    }

    else if (number === "" || !regPhone.test(number)){
      message.innerText = "Please enter valid phone number";
    }
   
    else if(email === "" || !regEmail.test(email)){
      message.innerText = "Please enter valid email id";
    }
    else if( password.length < 8){
        message.innerText = "Please enter valid password";
      }

    // else if(){
    //     message.innerText = "Password should be atleast 8 character";
    // }
    else{
        alert("form submited");
    }
}

