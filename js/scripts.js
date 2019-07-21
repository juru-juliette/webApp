function weekday(){
    var birthday =document.getElementById("date").Value;
    var date = new date (birthday);
    var year = date.getfullyear();
    console.log(year);
    var century = (year/100)+1;
    console.log (century);
    var dd= data.getDate();
    console.log(dd);
    var month = getMonth();
    month++;
    console.log (month);
    var days =(((century/4)-2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + dd )% 7;
    var final = math.floor(days);
    var male =['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
   
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
    var female=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
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
    
    
    
    
    
    
} 