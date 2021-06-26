function setUp() {
    var beige = document.getElementsByClassName("connect");
    console.log(beige);

    var barge = document.getElementsByTagName("div");
    console.log(barge);

    var div = barge[3].getElementsByTagName("h2");
    console.log(div);

    var diva = barge[4].getElementsByTagName("h2");
    console.log(diva);

    var back = document.getElementsByTagName("body");
    console.log(back); 


    //Fylo SignIn Functionality
    var page = document.getElementById("nextpage");
    function Bamer() {
        location.assign("signin.html");
    }

    page.onmousedown = function() {
        page.style.fontSize = "20px";
    }
    page.onmouseup = function() {
        page.style.fontSize = "23px";
    }

    page.onclick = function() {
        setTimeout(Bamer, 1000);
    }

    
}



window.onload = function() {
    setUp();
}