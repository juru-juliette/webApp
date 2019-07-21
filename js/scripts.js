function weekday(){
    var birthday =document.getElementById("date").Value;
    var data = new date (birthday);
    var YY = date.getfullyear();
    console.log(YY);
    var CC = (YY/100)+1;
    console.log (CC);
    var dd= data.getDate();
    console.log(dd);
    var MM = getMonth();
    MM++;
    console.log (MM);
    var days =(((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + dd )% 7;
    var final = math.floor(days);
    var male =document.getElementById("m").Value
   console.log (male);
    if (final === 0 && male === "male"){
        document.getElementById("demo").innerHTML = "Your Akan name is Kwasi";
    }
    else if(final === 1 && male === "male"){
        document.getElementById("demo").innerHTML = "Your Akan name is Kwadwo";
    }
    else if(final === 2 && male === "male"){
        document.getElementById("demo").innerHTML = "Your Akan name is Kwabena";
    }
    else if(final === 3 && male === "male"){
        document.getElementById("demo").innerHTML = "Your Akan name is Kwaku";
    }
    else if(final === 4 && male === "male"){
        document.getElementById("demo").innerHTML = "Your Akan name is Yaw";
    }
    else if(final === 5 && male === "male"){
        document.getElementById("demo").innerHTML = "Your Akan name is Kofi";
    }
    else if(final === 6 && male === "male"){
        document.getElementById("demo").innerHTML = "Your Akan name is Kwame";
    }
    var female=document.getElementById("f").Value
    console.log (female);
    if (final === 0 && female === "female"){
        document.getElementById("demo").innerHTML = "Your Akan name is Akosua";
    }
    else if(final === 1 && female === "female"){
        document.getElementById("demo").innerHTML = "Your Akan name is Adwoa";
    }
    else if(final === 2 && female === "female"){
        document.getElementById("demo").innerHTML = "Your Akan name is Abenaa";
    }
    else if(final === 3 && female  === "female"){
        document.getElementById("demo").innerHTML = "Your Akan name is Akua";
    }
    else if(final === 4 && female === "female"){
        document.getElementById("demo").innerHTML = "Your Akan name is Yaa";
    }
    else if(final === 5 && female === "female"){
        document.getElementById("demo").innerHTML = "Your Akan name is Afua";
    }
    else if(final === 6 && female === "female"){
        document.getElementById("demo").innerHTML = "Your Akan name is Ama";
    }
    else {
        document.getElementById("demo").innerHTML= "please enter correct birthday";
    }
    return document.getElementById("demo").innerHTML;

}
console.log (weekday); 