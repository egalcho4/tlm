
function save(){
var text=document.querySelector('.bn').value;
localStorage.setItem("text",text);
alert("saved successfully");
}
var x=setInterval(function(){
	var text=document.querySelector('.bn').value;
    localStorage.setItem("text",text);

	alert("auto saved successfully");
},20000);
function delet(){
	localStorage.removeItem("text");
	alert("removed successfully ");
	
}
var block=document.querySelector('#block');
var txt=[];

function news(){
 var n=	prompt("enter name");
 var lc=localStorage.getItem("textarea");
     txt.push(lc);
	txt.push(n);
	localStorage.setItem("textarea",JSON.stringify(txt));
	alert("added successfully");
	
}
function body(){
/*var tn=localStorage.getItem("textarea")[0];
tn.forEach(row=>{
	alert(tn);
});*/
}
var tex=document.querySelector('.bn');
tex.innerHTML=localStorage.getItem("text");
function print(){
document.querySelector('#save').style.display="none";
   document.querySelector('#print').style.display="none";
document.querySelector('#delete').style.display="none";
window.print();
    var text=document.querySelector('#save');
}
