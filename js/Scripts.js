//calculate dayweek
function WeekDay(){
    var birthday = document.getElementById("birth").value; 
    var data = new Date (birthday);
    var YY = data.getFullYear();
    console.log(YY);
    CC = (YY/100)+1;
    console.log(CC);
    var MM = data.getMonth();
    MM++;
    console.log(MM);
    var DD = data.getDate();
    console.log(DD);
    var genderm = document.getElementById("male").value;
    console.log(genderm);
    var genderf = document.getElementById ("female").value;
    console.log(genderf);
    var Array = new Array["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
    document.getElementById("demo").innerHTML = Array[0];
        var day =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
        var answer = Math.floor(day);
       //validate input 
         if(answer === 0 && genderm === "Male"){
        document.getElementById("demo").innerHTML = "Your Akan name is Kwasi";
             
    }
          else if (answer === 0 && genderm === "Male")
     {
    document.getElementById("demo").innerHTML = "Your Akan name is Kwadwo";
    
    }
    else if(answer === 2 && genderm === "Male")
    {
    document.getElementById("demo").innerHTML = "Your Akan name is Kwabena";
    
    }
    else if(answer === 3 && genderm === "Male"){
    document.getElementById("demo").innerHTML = "Your Akan name is Kwaku";
    
    }
    else if(answer === 4 && genderm === "Male"){
    document.getElementById("demo").innerHTML = "Your Akan name is Yaw";
    
    }
    else if(answer === 5 && genderm === "Male"){
    document.getElementById("demo").innerHTML = "Your Akan name is Kofii";
    
    }
    else if(answer === 6 && genderm === "Male"){
    document.getElementById("demo").innerHTML = "Your Akan name is Kwame";
    
    }     
      else if(answer === 0 && genderf === "Female")
      {
         document.getElementById("demo").innerHTML = "Your Akan name is Akosua" ;
         
      }
          else if(answer === 1 && genderf === "Female") {
          document.getElementById("demo").innerHTML = "Your Akan name is Adwoa"; 
      }
      else if(answer === 2 && genderf === "Female"){
          document.getElementById("demo").innerHTML = "Your Akan name is Abenaa";  
      }
      else if(answer === 3 && genderf === "Female"){
          document.getElementById("demo").innerHTML = "Your Akan name is Akua"; 
      }
      else if(answer === 4 && genderf === "Female"){
          document.getElementById("demo").innerHTML = "Your Akan name is Yaa"; 
      }
      else if(answer === 5 && genderf === "Female"){
          document.getElementById("demo").innerHTML = "Your akan name is Afua"; 
      }
      else if(answer === 6 && genderf === "Female"){
          document.getElementById("demo").innerHTML = "Your Akan name is Ama"; 
      }
         
      else{
          document.getElementById("demo").innerHTML ="Please enter correct date of birth and gender";
      }
      return document.getElementById("demo").innerHTML;
    }
    console.log(WeekDay);
    
    