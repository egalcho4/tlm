/*var d=document.querySelector('#ad');
var con=document.querySelector('#con');
d.addEventListener('click',()=>{
var sec=parseInt(prompt("it's for admin only okey"));
if(sec==24){
	d.setAttribute("href","adv.html");
}else{
	alert("you are note admin");
}
});
var nm=localStorage.getItem("un");
if(nm=="egalcho"){
d.style.display="block";
}
con.addEventListener('click',()=>{
var sec=parseInt(prompt("it's for admin only okey"));
if(sec==24){
	con.setAttribute("href","cdis.html");
}else{
	alert("you are note admin");
}
});
var nm=localStorage.getItem("un");
if(nm=="egalcho"){
con.style.display="block";
}

var docu=document.querySelector('#post');
docu.addEventListener('click',()=>{
var sud=prompt("prove if you are admin");
if(sud!="egalcho39"){
alert("this place is for only admin don't try agian");
}else{
	window.open("post.html",'_blanck')
}
});*/
//setInterval(function(){
    

    
//},10)
function myFunction() {
	document.getElementById("myDropdown")
	.classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document
		.getElementsByClassName
		("dropdown-content");

		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];

			if (openDropdown.classList.contains
				('show')) {

				openDropdown.classList.remove('show');
			}
		}
	}
}
function openNav() {
	document.getElementById("mySidenav").style.width = "300px";


}

function closeNav() {
	document.getElementById("mySidenav")
	.style.width = "0";
}

function myFunction() {
	document.getElementById("myDropdown")
	.classList.toggle("show");
}


window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document
		.getElementsByClassName
		("dropdown-content");

		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains
				('show')) {

				openDropdown.classList.remove('show');

			}
		}
	}
}
const proform = document.forms['proform'],
proforme = document.forms['proforme'],
proforma = document.forms['proforma'],
 table = document.querySelector('#myTable tbody'),
 table1 = document.querySelector('#myTable1 tbody');
const tablo = document.querySelector('#myTablo tbody');

var i = 1;

const pro = JSON.parse(localStorage.getItem('pro') || '[]');
const pro1 = JSON.parse(localStorage.getItem('pro1') || '[]');
const evp = JSON.parse(localStorage.getItem('event') || '[]');

var pr = document.querySelector('#prog');
pr.addEventListener('click', ()=> {
	document.querySelector('#form').style.display = "block";


});
var evtext=document.getElementById("ol");
function formevent(ev) {
	evp.push(Object.fromEntries(new FormData(proforme).entries()))
	
	localStorage.setItem("event", JSON.stringify(evp));
	alert("saved successfully");
	document.getElementById('evfrm').style.display = "none";
	
var newRow = tablo.insertRow();
	newRow.insertCell().textContent = i++;

	
newRow.insertCell().textContent = proforme.evtext.value;


	newRow.insertCell().innerHTML = '<span onclick="removeme(this)" style="color:red">X</span>';

	

	//newRow.insertCell().innerHTML = '<button onclick="program(this)" style="color:red">X</button>';

	//proform.reset();
	//window.location.reload();


}
evp.forEach(row=> {
		var newRow = tablo.insertRow();
	newRow.insertCell().textContent = i++;

	
newRow.insertCell().textContent = row.evtext;


	newRow.insertCell().innerHTML = '<span onclick="removeme(this)" style="color:red">X</span>';



});

function form(ev) {
	pro.push(Object.fromEntries(new FormData(proform).entries()))
	localStorage.setItem("pro", JSON.stringify(pro));
	alert("saved successfully");
	document.getElementById('id01').style.display = "none";
	var newRow = table.insertRow();
	newRow.insertCell().textContent = i++;

	newRow.insertCell().textContent = proform.wday.value;
	newRow.insertCell().textContent = proform.pro.value;
	newRow.insertCell().textContent = proform.sec.value;
	newRow.insertCell().textContent = proform.time.value;
	newRow.insertCell().textContent = proform.date.value;
newRow.insertCell().textContent = proform.how.value;



	newRow.insertCell().innerHTML = '<span onclick="program(this)" style="color:red">X</span>';

	proform.reset();


}
function forma(ev) {
	pro1.push(Object.fromEntries(new FormData(proforma).entries()))
	localStorage.setItem("pro1", JSON.stringify(pro1));
	alert("saved successfully");
	document.getElementById('id02').style.display = "none";
	var newRow = table1.insertRow();
	newRow.insertCell().textContent = i++;

	newRow.insertCell().textContent = proforma.wday.value;
	
	newRow.insertCell().textContent = proforma.sec.value;
	newRow.insertCell().textContent = proforma.pro.value;
newRow.insertCell().textContent = proforma.how.value;



	newRow.insertCell().innerHTML = '<span onclick="programa(this)" style="color:red">X</span>';

	proform.reset();
	//window.location.reload();


}
pro.forEach(row=> {
	var newRow = table.insertRow();
	newRow.insertCell().textContent = i++;

	newRow.insertCell().textContent = row.wday;
		
	newRow.insertCell().textContent = row.sec;
	newRow.insertCell().textContent = row.time;
	newRow.insertCell().textContent = row.date;
newRow.insertCell().textContent = row.pro;


	newRow.insertCell().innerHTML = '<span onclick="program(this)" style="color:red">X</span>';



});
//setInterval(function(){
    

pro1.forEach(row=> {
	var newRow = table1.insertRow();
	newRow.insertCell().textContent = i++;

	newRow.insertCell().textContent = row.wday;
		
	newRow.insertCell().textContent = row.sec;

newRow.insertCell().textContent = row.pro;
newRow.insertCell().textContent = row.how;


	newRow.insertCell().innerHTML = '<span onclick="programa(this)" style="color:red">X</span>';



});
//},0);
/*setInterval(function(){
var crd=document.getElementById('crd');
var cdb=document.getElementById('cdb');
var crda=document.getElementById('crda');
var div=parseInt(window.innerHeight);
var homr=document.getElementById('homr');
homr.style.maxHeight=window.innerHeight-350+"px";
    homr.style.minHeight=window.innerHeight-350+"px";

var dc=div*0.25;
//console.log(dc)
crd.style.maxHeight=div-(div*0.25)+"px";
crd.style.minHeight=div-(div*0.25)+"px";
crda.style.maxHeight=div-(div*0.25)+"px";
cdb.style.maxHeight=div-(div*0.25)+"px";
cdb.style.minHeight=div-(div*0.18)+"px";
    //console/.log(window.innerHeight);
},0)*/
var hom1=document.getElementById("hom1");
var hom2=document.getElementById("hom2");
var hash=document.getElementById("hash");
var pl=document.getElementById("pl");
var pp=document.getElementById("pp");
var home2=document.getElementById("home2");
var former=document.getElementById("former");
var center=document.getElementById("center");
var frog=document.getElementById("prog");
var tm=document.getElementById("tm");
var prog1=document.getElementById("prog1");
var right=document.getElementById("right");
var help=document.getElementById('pp3')
var helpd=document.getElementById('helpd')
function help(){
	window.open("help.html","_self")

}
help.addEventListener('click',()=>{
	window.open("help.html","_self")
})
hom1.addEventListener('click',()=>{

//hom1.setAttribute("style","transform:scale(1);z-index:1;transition:1s;float:left;background-color:white")
pl.setAttribute("style","float:left;margin-left:20%;")
pp.setAttribute("style","float:right;margin-right:30px;")
center.style.display="none";
former.style.display ="block";
right.style.display ="none";
tm.style.display="block";
home2.style.display ="none";
prog1.setAttribute("style","display:none");
hom2.setAttribute("style","float:left;margin-left:0px;")

frog.setAttribute("style","color:red;margin-left:40%");

hom2.setAttribute("style","float:left;margin-left:0px;")

frog.setAttribute("style","color:red;margin-left:40%");

hash.setAttribute("id","hash1");
})

pl.addEventListener('click',()=>{
var crda=document.getElementById('crda');
var div=parseInt(window.innerHeight);
crda.style.maxHeight=div-(div*0.25)+"px";
crda.style.minHeight=div-(div*0.25)+"px";
center.style.display="block";
former.style.display ="none";
right.style.display ="none";
tm.style.display="block";
home2.style.display ="none";

prog1.setAttribute("style","color:red;margin-left:40%");
hom2.setAttribute("style","float:left;margin-left:0px;")

frog.setAttribute("style","display:none");
 //pl.setAttribute("style","transform:scale(1);z-index:1;transition:1s;float:right;background-color:white;color:black")
hom1.setAttribute("style","float:left;margin-left:20%")
pp.setAttribute("style","float:right;margin-right:30px;")

prog1.setAttribute("style","color:red;margin-left:40%");
hom2.setAttribute("style","float:left;margin-left:0px;")

frog.setAttribute("style","display:none");
 //pl.setAttribute("style","transform: scale(1);z-index: 1;transition: 1s;float: left;background-color:white")
 hom1.setAttribute("style","float:left;margin-left:20%")
pp.setAttribute("style","float:right;margin-right:30px;")


hash.setAttribute("id","hash1");
})
pp.addEventListener('click',()=>{
 //pp.setAttribute("style","transform: scale(1);z-index: 1;transition: 1s;float: left;background-color:white")

hom1.setAttribute("style","float:left;margin-left:20%")
pl.setAttribute("style","float:left;margin-left:40%;")
hom2.setAttribute("style","float:left;margin-left:20%")

pl.setAttribute("style","float:left;margin-left:20%;")
hom2.setAttribute("style","float:left;margin-left:0px")


center.style.display="none";
former.style.display ="none";
tm.style.display="none";
frog.style.display="none";
prog1.style.display ="none";
right.style.display ="block";
hash.setAttribute("id","hash1");

home2.style.display ="none";
})
hom2.addEventListener('click',()=>{
var homr=document.getElementById('homr');
homr.style.maxHeight=window.innerHeight-350+"px";
    homr.style.minHeight=window.innerHeight-350+"px";


// hom2.setAttribute("style","transform: scale(1);z-index: 1;transition: 1s;float: left;background-color:white")

 hom1.setAttribute("style","float:left;margin-left:150px;")
pl.setAttribute("style","float:left;margin-left:20%;")


 hom1.setAttribute("style","float:left;margin-left:20%")
pl.setAttribute("style","float:left;margin-left:20%;")

center.style.display="none";
former.style.display ="none";
tm.style.display="none";
frog.style.display="none";
prog1.style.display ="none";
right.style.display ="none";
home2.style.display ="block";
hash.setAttribute("id","hash1");

})
function body() {
//console/.log("hello world");
var tab=document.getElementById('myTable');
    tab.style.maxHeight=window.innerHeight-200+"px";
    tab.style.minHeight=window.innerHeight-200+"px";
var homr=document.getElementById('homr');
homr.style.maxHeight=window.innerHeight-200+"px";
    homr.style.minHeight=window.innerHeight-200+"px";

	var sn = localStorage.getItem("mn");
	var sb = localStorage.getItem("sn");
	if (sn != null || sb != null) {
		var a1 = document.querySekector('#a1');
		var a2 = document.querySekector('#a2');
		a1.setAttribute("onclick", "");
		a2.setAtribute("onclick", "");
		var a3 = document.querySekector('#a3');
		var a4 = document.querySekector('#a4');
		a3.setAttribute("onclick", "");
		a4.setAtribute("onclick", "");
	}

}
function refresh() {
	document.querySelector('#wday').innerHTML = "";
	document.querySelector('#pro').innerHTML = "";
	document.querySelector('#time').innerHTML = "";
	document.querySelector('#date').innerHTML = "";


}
function program(td) {
	if (confirm('are you sure to delate this data')) {
		row = td.parentElement.parentElement;
		var index = row.rowIndex-1;
		pro.splice(index, 1);
		localStorage.setItem("pro", JSON.stringify(pro));
		document.getElementById("myTable").deleteRow(row.rowIndex);
		alert("deleted successfully");
	}
	//hapusDataLocal(td.parentElement.parentElement);
}
function removeme(td) {
	if (confirm('are you sure to delate this data')) {
		row = td.parentElement.parentElement;
		var index = row.rowIndex-1;
		evp.splice(index, 1);
		localStorage.setItem("event", JSON.stringify(evp));
		document.getElementById("myTablo").deleteRow(row.rowIndex);
		alert("deleted successfully");
	}
	//hapusDataLocal(td.parentElement.parentElement
	    }
function programa(td) {
	if (confirm('are you sure to delate this data')) {
		row = td.parentElement.parentElement;
		var index = row.rowIndex-1;
		pro1.splice(index, 1);
		localStorage.setItem("pro1", JSON.stringify(pro1));
		document.getElementById("myTable1").deleteRow(row.rowIndex);
		alert("deleted successfully");
	}
	//hapusDataLocal(td.parentElement.parentElement);
}

window.onload = function() {
	getTime();
}
function getTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	// add a zero in front of numbers<10
	//m=checkTime(m);
	//s=checkTime(s);
	document.getElementById('h1').innerHTML = h+":"+m+":"+s;
	setTimeout(function() {
		getTime()}, 1000);
}
//setInterval("getTime()",1000);//another way
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
var modal = document.getElementById('id01');


window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
var s1 = localStorage.getItem("s1");
var sn = localStorage.getItem("sn");
var rb = localStorage.getItem("rb");
var mn = localStorage.getItem("mn");
var mn2 = localStorage.getItem("mn2");
var subj = localStorage.getItem("subj");

var mark = localStorage.getItem("mark");
var mrk = localStorage.getItem("mrk");
var dataArr = localStorage.getItem("dataArr");

function window1() {
	if (s1 == null && sn == null && rb == null && mn == null || mn2 == null && subj == null && mark == null && mrk == null && dataArr == null) {
		alert('welcome to our teacher load minimuizer(miila) app solution, please click on register button and  add section to go to your  register student workspace,eg first click on plus sign and add section one up to ten that you want to manage, then you will get open button and click on it and navigate to the section that you want to register student , and remember student name that registered at frist section is concurrently used in the attendance and mark management page eg at registration the section that registered at first row will be displayed at attendance and mark page ,  dear user you will get this messege only you are first time user');

	}

}
function window2() {
	if (s1 == null && sn == null && rb == null && mn == null || mn2 == null && subj == null && mark == null && mrk == null && dataArr == null) {
		alert('welcome to our teacher load minimuizer(miila) app solution when you navigate to following page you will get  plus sign button and click on it to add the section that you want to manage when add your section you will get open button and click on it after you proced to your work space you will see more botton and click on it and blinck button apeared click on it and set number of test or assisment that you want to give after you assign it you will get plus sign at top left corner click it and add mark remember when you add mark system give error message when you enter double or decimal number to solve this after you add integer number click on update button and correct it thank you you will get this massage only that you are frist time user of our app');

	}


}function window3() {
	if (s1 == null && sn == null && rb == null && mn == null || mn2 == null && subj == null && mark == null && mrk == null && dataArr == null) {
		alert('welcome dear user you are trying to use attendance system to use this system first please register student before you procced b/c you may mis same functionality or remember  for each student to add this click on absent button infront of target student you will see increase number at nab this means number of absent if you want to get details click sign under detail button thank you dear user you will get this message only you are first time user');

	}


}
function window4() {
	if (s1 == null && sn == null && rb == null && mn == null || mn2 == null && subj == null && mark == null && mrk == null && dataArr == null) {
		alert('welcome dear new user you are procced to use student rank system when you goto this page you will get more at top right corner and click on it after you have to click on  blincking button  and set number of subject that your students take, do not forgot to set number of subject that your student take we will let you min 2 max 12 subject thank you dear you will get this message only you are first time user');

	}

}
function myFunctiona() {
	document.getElementById("myDropdowna")
	.classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtna')) {

		var dropdowns = document
		.getElementsByClassName
		("dropdown-contenta");

		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];

			if (openDropdown.classList.contains
				('show')) {

				openDropdown.classList.remove('show');
			}
		}
	}
}
const dararr=JSON.parse(localStorage.getItem('quest1') || '[]')
	,helpform=document.forms['helpform'];
	var ans=document.getElementById("ans")
	var ans1=document.getElementById("ans1")
	var typ=document.getElementById("typ")
	var inph=document.getElementById('inph');
	function removeitem(){
		localStorage.removeItem("quest1")
	}
inph.addEventListener("keyup",()=>{
var n=document.getElementById("tyev")
n.style.display="block"



})
	//setInterval(function(){
		dararr.forEach(row=>{
			var ul=document.createElement("ul")
			ul.style.listStyleType="none"
			var ul1=document.createElement("ul")
			ul1.style.listStyleType="none"
var left=document.createElement("li")
left.setAttribute("style","border:1px solid white;border-radius:20px;")

left.style.marginLeft="20px"
left.style.color="blue"

left.innerHTML="<br>"+row.quest
var right=document.createElement("li")
right.setAttribute("style","border:1px solid white;border-radius:20px ")

right.style.marginLeft="10px"
right.style.color="green"
right.innerHTML=row.anser


ul.append(left)


ul.append(right)
ans.appendChild(ul)
//ans.appendChild(ul1)
		})

	//},1000)

	function getanswer(){
		var inph=document.getElementById('inph').value
		var anser=document.getElementById('anser');

		if(inph=="help"){
			var an="how to ask questions?<br> how i create class<br> how i register student<br> how i take student "
			anser.setAttribute("value",an)
			
		}else{
			var an="samething want wrong"
			anser.setAttribute("value",an)
		}
setanser();
		
		

	}
	function setanser(){
dararr.push(Object.fromEntries(new FormData(helpform).entries()));
		localStorage.setItem('quest1', JSON.stringify(dararr));
		
	}