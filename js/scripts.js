//calculate dayweek
function weekday(){
    var birthday =document.getElementById("birth").Value;
    var YY = document.getElementById("birth").Value;
    console.log(YY);
    CC = (YY/100)+1;
    console.log (CC);
    var dd=document.getElementById("birth").Value;
    console.log(dd);
    var MM = document.getElementById("birth").Value;
    MM++;
    console.log (MM);
    var days =(((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + dd )% 7;
    var final = math.floor(days);
    var male =document.getElementById("male").Value
   console.log (male);
   //validate input 
    if (final === 0 && male === "male"){
        document.getElementById("get").innerHTML = "Your Akan name is Kwasi";
    }
    else if(final === 1 && male === "male"){
        document.getElementById("get").innerHTML = "Your Akan name is Kwadwo";
    }
    else if(final === 2 && male === "male"){
        document.getElementById("get").innerHTML = "Your Akan name is Kwabena";
    }
    else if(final === 3 && male === "male"){
        document.getElementById("get").innerHTML = "Your Akan name is Kwaku";
    }
    else if(final === 4 && male === "male"){
        document.getElementById("get").innerHTML = "Your Akan name is Yaw";
    }
    else if(final === 5 && male === "male"){
        document.getElementById("get").innerHTML = "Your Akan name is Kofi";
    }
    else if(final === 6 && male === "male"){
        document.getElementById("get").innerHTML = "Your Akan name is Kwame";
    }
    var female=document.getElementById("female").Value
    console.log (female);
    if (final === 0 && female === "female"){
        document.getElementById("get").innerHTML = "Your Akan name is Akosua";
    }
    else if(final === 1 && female === "female"){
        document.getElementById("get").innerHTML = "Your Akan name is Adwoa";
    }
    else if(final === 2 && female === "female"){
        document.getElementById("get").innerHTML = "Your Akan name is Abenaa";
    }
    else if(final === 3 && female  === "female"){
        document.getElementById("get").innerHTML = "Your Akan name is Akua";
    }
    else if(final === 4 && female === "female"){
        document.getElementById("get").innerHTML = "Your Akan name is Yaa";
    }
    else if(final === 5 && female === "female"){
        document.getElementById("get").innerHTML = "Your Akan name is Afua";
    }
    else if(final === 6 && female === "female"){
        document.getElementById("get").innerHTML = "Your Akan name is Ama";
    }
    else {
        document.getElementById("get").innerHTML= "please enter correct birthday";
    }
    return document.getElementById("get").innerHTML;

}
//call function
document.getElementById("calculate").onclick = function() {
    weekday();
};
console.log (weekday); 

