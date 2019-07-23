//calculate dayweek
function WeekDay(){
    // var inputYear =document.getElementById("birth").Value;
    // var dateEntered;
    var DD = parseInt(document.getElementById("day").value);
    console.log (DD);
    var MM = parseInt(document.getElementById("month").value);
    console.log (MM);
    var YY = parseInt(document.getElementById("year").value);
    console.log (YY);
    var CC =(YY-1)/100+1;
    var dayWeek =(((CC/4) -2*CC-1)+ ((5*YY/4)) + ((26*(MM+1)/10)) +DD) %7;
    console.log (dayWeek);
    document.getElementById("calculate").innerHTML= Math.round(dayWeek);
    var femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofii","Kwame"];
    
    var choice = document.getElementById("gender").value;
    if (choice === "Male"){
        document.getElementById("demo").innerHTML=maleNames[Math.round(dayWeek)];
        // [Math.round(dayWeek)]; 
    }
    else if (choice === "Female"){
        document.getElementById("demo").innerHTML=femaleNames[Math.round(dayWeek)];
        // [Math.round(dayWeek)];
      
    }else {
        console.log("invalid outuput");
        
   
}
}
    
  
    
    
    