

function onFormSubmit() {
	   

	if (validate()) {
		var un=document.querySelector('#name').value;
	
		//var gen=document.querySelector('#gender').value;
	
		var pas=document.querySelector('#pssr').value;
	//var key=document.querySelector('#key').value;

		localStorage.setItem('un',un);
		//localStorage.setItem('gen',gen);
		localStorage.setItem('pas',pas);
       //window.open("index.html",'_self');
	window.open("home.html",'_self');
     
     
			alert("you are successful registered ");
           
	}
	
}
function validate(){
	var un=document.querySelector('#name').value;
	
		//var gen=document.querySelector('#gender').value;
	
		var pas1=document.querySelector('#pssr').value;
	
		var pas2=document.querySelector('#psscr').value;
		    var unb=localStorage.getItem("un");
	    var pasd=localStorage.getItem("pas");
	var demo=document.querySelector('#demo');
	  	
	 if(unb==null &&pasd==null){
	  if(un==""){
	  	
	  	demo.style.display="block";
	      demo.innerHTML="username must not empty ";
	     return false;
	  }else if(pas1!=pas2){
	  	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
	      document.querySelector("#demo").innerHTML="password not match";
	     return false;
	  }else if(pas1.length<4){
	  	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
	      document.querySelector("#demo").innerHTML="password length must be 4 character or more";
	     return false;
	  }else if(pas1.match("(?=.*d)")){
	  	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
	      document.querySelector("#demo").innerHTML="password could not be number";
	     return false;
	  }
	  else {
	  	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
	 	document.querySelector("#demo").innerHTML="you are now registered successful now goto login page";
	     return true;
	     }
		}else{
		
		    var un=prompt("enter your old username ");
		   // var pasdg=prompt("enter old password ");
		    if(unb==un){
		    if(un==""){
		    	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
	      document.querySelector("#demo").innerHTML="username must not empty ";
	     return false;
	  }else if(pas1!=pas2){
	  	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
	      document.querySelector("#demo").innerHTML="password not match";
	     return false;
	  }else if(pas1.length<4){
	  	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
	      document.querySelector("#demo").innerHTML="password length must be 4 character or more";
	     return false;
	  }else if(pas1.match("(?=.*d)")){
	  	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
	      document.querySelector("#demo").innerHTML="password could not be number";
	     return false;
	  }else{
	  
	     return true;
	     
	  	
	  }
		    }else if(unb!=un){
		    	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
		        	document.querySelector("#demo").innerHTML="username is not exist ";
	     return false;
		    }else if(pasd!=pasdg){
		    	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
		        	document.querySelector("#demo").innerHTML="password is incorrect ";
	     return false;
		    }
		}
		
		
		
		
}
function onlogin(){
		var un=localStorage.getItem("un");
		
		var pas1=document.querySelector('#pssr').value;
	    var unb=localStorage.getItem("un");
	    var pasd=localStorage.getItem("pas");
      if(pas1==pasd){
      	window.open("home.html",'_self');
      	alert(unb+" "+"you are loged in successfully ");
      }else{
      /*if(un!=unb){
      	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      			document.querySelector('#demo').innerHTML="username not exist ";
	   
	    }else */if(pas1!=pasd){
	    	var demo=document.querySelector('#demo');
	  	demo.style.display="block";
      	
	        document.querySelector('#demo').innerHTML="password not correct ";

	    }
      }}
     
      var dt=new Date();
 var nm= dt.getHours();
 var b=document.querySelector('#b');
 
 if(nm>=18&&nm<=24||nm>1&&nm<6){
   b.innerHTML="good evening dear";

 }else if(nm>=6&&nm<12){
b.innerHTML="good morning dear";
 }else{
b.innerHTML="good afternoon dear";
 }
      
