const
myForm = document.forms['my-form'], // form name pada tag html form
myForm2 = document.forms['my-form2'] // form name pada tag html form, table = document.querySelector('#myTable tbody'), table2 = document.querySelector('#myTable1 tbody'), dataArr = JSON.parse(localStorage.getItem('dataArr') || '[]'), mrk = JSON.parse(localStorage.getItem('mrk') || '[]');

var selectedRow = null
var number = 0
var key, mk;



function resetForm() {
	document.getElementById("no").value = "";
	document.getElementById("inputNL").value = "";
	document.getElementById("inputJK").value = "";
	document.getElementById("inputNH").value = "";
	document.getElementById("inputA").value = "";
	selectedRow = null;
}


function onDelete(td) {
	if (confirm('are you sure to delate this data')) {
		row = td.parentElement.parentElement;
		document.getElementById("myTable").deleteRow(row.rowIndex);
		resetForm();
		localStorage.removeItem(dataArr);
	}
	hapusDataLocal(td.parentElement.parentElement)
}

function hapusDataLocal(dataItem) {
	dataArr.forEach(function(task, index) {
		if (dataItem.textContent === task) {
			dataArr.splice(index, 1);
		}
	});
	localStorage.setItem(dataArr,
		JSON.stringify(dataArr))
}

// Function untuk Memvalidasi Data
function validate() {
	isValid = true;
	if (document.getElementById("inputNL").value == "" || document.getElementById("inputJK").value == "" || document.getElementById("inputNH").value == "" || document.getElementById("inputA").value == "") {
		isValid = false;
		alert("please check up your data");
	}
	return isValid;
}

function removeItem() {
	onDelete(td);
	var key = document.getElementById('removeKey').value;
	localStorage.removeItem(key)
	console.log("remove items");
}


var list = document.getElementById("sname");
var list2 = document.getElementById("lname");


function body() {
	changcolor()
	dataArr.forEach(mnr=> {
		var li = document.createElement("option");



		var textNode = document.createTextNode(mnr.inputNL);


		li.appendChild(textNode);

		list.prepend(li);
	})


	dataArr.forEach(mn=> {
		changcolor()
		var li = document.createElement("option");



		var textNode = document.createTextNode(mn.inputJK);


		li.appendChild(textNode);

		list2.prepend(li);
	})
	var mk1 = document.querySelector('#mk1');
	mk1.innerHTML = localStorage.getItem("mark1");
}

function onFormmark() {

	if (selectedRow == null) {

		mrk.push(Object.fromEntries(new FormData(myForm2).entries()))
		localStorage.setItem('mrk', JSON.stringify(mrk))


		let newRow = table.insertRow()

		newRow.insertCell().textContent = myForm2.no.value = ++number
		newRow.insertCell().textContent = myForm2.sname.value
		newRow.insertCell().textContent = myForm2.lname.value

		newRow.insertCell().textContent = myForm2.inputNL.value
		newRow.insertCell().textContent = myForm2.inputJK.value

		newRow.insertCell().textContent = myForm2.inputNH.value
		newRow.insertCell().textContent = myForm2.inputA.value
		newRow.insertCell().innerHTML = `<a onClick="onDelete(this)">x<i class="fas fa-times"></i></a>`
		// newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	}
	resetForm();



}/*
var mk1=document.querySelector('#mk1');
var mk2=document.querySelector('#mk2');
var mk3=document.querySelector('#mk3');

mk1.addEventListener('click',()=>{
  document.querySelector('#mark1').style.display="block";
})


mk1.addEventListener('change',()=>{
  var mark1=document.querySelector('#mark1').value;
  localStorage.setItem('mark1',mark1);
  document.querySelector('#mark1').style.display="none";

  mk1.innerHTML=localStorage.getItem("mark1");
})*/
function reset() {
	var perm = prompt("warnning this action delete all your data including username,password,attendance,program and student mark,are you sure to delete data permenantly if you want enter your password");
	var pass = localStorage.getItem("pas");
	if (perm == pass) {
		localStorage.clear();
		alert("all data deleted successfull");
		window.open("index.html", '_self');
	} else {
		alert("incorrect password ");
		window.open("seting.html");
	}
}
function change() {
	document.querySelector("#id02").style.display = "block";
}
var dg = document.querySelector('#sup');
dg.addEventListener('click', ()=> {
	var un = document.querySelector('#un').value;
	var pas = document.querySelector('#pas').value;
	localStorage.setItem('un', un);
	localStorage.setItem('pas', pas);
	alert("password successfully changed ");
});
function settingsave() {
	var ad = document.querySelector('input[name="ads"]:checked').value;
	//var ad=document.getElementById('ad').value;
	//var ads=document.getElementById('ad').value;
	//if(ad.getAttribute("checked",true)){
	localStorage.setItem("login", ad);
	alert("saved successfully")
	//}

}
function changcolor() {
	var log = localStorage.getItem("login");
	console.log(log)
	if (log == 2) {
		var rem = document.getElementById("remove");
		rem.style.color = "green";
		rem.setAttribute("checked", "True");

	} else {
		document.getElementById("show").style.color = "green"
		var rem = document.getElementById("show");
		rem.setAttribute("checked", "true");


	}
}
setTimeout(function() {
	changcolor()
}, 10);