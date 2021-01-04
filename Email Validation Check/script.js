function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //이메일형식 문자열

//.match() : 문자열 비교
    if(email.match(pattern)){//일치
        form.classList.add("valid"); //<form id="form" class="valid">
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address in Valid";        
        text.style.color = "#00ff00";//초록색(class="valid")

    }else{//불일치
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#ff0000";//빨간색(class="invalid")
    }
    if(email == ""){//빈칸
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        // text.style.color = "#00ff00";//초록색
    }
}