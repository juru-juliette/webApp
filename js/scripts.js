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
    var female=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    if (final === 0 && male === "male"){
        document.getElementById("demo").innerHTML = "Your Akan name is Kwasi";
    }
    else if(final === 1 && male === "male"){
        document.getElementById("demo").innerHTML = "Your Akan name is Kwadwo";
    }
    
} 