const
myForm = document.forms['my-form']

//myForm2       = document.forms['my-form2'],
table = document.querySelector('#myTable tbody'),
dataArr = JSON.parse(localStorage.getItem('dataArr') || '[]');

var selectedRow = null
var number = 0
var key, mk;

var ap = "dataArr";

dataArr.sort(function (x, y) {
	let a = x.firstname.toUpperCase(),
	b = y.firstname.toUpperCase();
	return a == b ? 0: a > b ? 1: -1;
});
var search = document.getElementById('search');
search.addEventListener('keyup', ()=> {
	var input, filter, found, table, tr, td, i, j; 
	 input = document.getElementById("search"); 
	filter = input.value.toUpperCase(); 
	table = document.getElementById("myTable"); 
	 tr = table.getElementsByTagName("tr"); 
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td");
		for (j = 0; j < td.length; j++) {
			if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
				found = true;
			}
		} if (found) {
			tr[i].style.display = ""; found = false;
		} else {
			tr[i].style.display = "none";
		}
	}

})

dataArr.forEach(row=> {
let newRow = table.insertRow()

newRow.insertCell().textContent = row.no = ++number
newRow.insertCell().textContent = row.firstname
newRow.insertCell().textContent = row.midlename



newRow.insertCell().textContent = row.lastname
//newRow.insertCell().textContent = row.sid


newRow.insertCell().textContent = row.age

newRow.insertCell().textContent = row.gender

newRow.insertCell().innerHTML = `<a onClick="update(this)" class=" text-success" style="">&#9998;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class=" text-danger">X<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


})

function onformsubmit() {
if (validate()) {
if (selectedRow == null) {
// Menambahkan entri ke LocalStorage :
dataArr.push(Object.fromEntries(new FormData(myForm).entries()));

localStorage.setItem(ap, JSON.stringify(dataArr));
document.getElementById('id01').style.display = 'none';

alert("added successfully");
// Memasukkan Data pada Baris Baru
let newRow = table.insertRow();

newRow.insertCell().textContent = myForm.no.value = ++number;
//localStorage.setItem('keyb',keyb);
newRow.insertCell().textContent = myForm.firstname.value;
newRow.insertCell().textContent = myForm.midlename.value;

newRow.insertCell().textContent = myForm.lastname.value;
//newRow.insertCell().textContent = myForm.sid.value;

newRow.insertCell().textContent = myForm.age.value;

newRow.insertCell().textContent = myForm.gender.value;

newRow.insertCell().innerHTML = `<a onClick="update(this)" class=" text-success" style="">&#9998;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class=" text-danger">X<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

}
resetForm();
}
}


function resetForm() {
document.getElementById("no").value = "";
document.getElementById("inputNL").value = "";
document.getElementById("inputJK").value = "";
document.getElementById("inputNH").value = "";
document.getElementById("inputA").value = "";
document.getElementById('midle').value = "";
selectedRow = null;
}


function onDelete(td) {
if (confirm('are you sure to delate this data')) {
row = td.parentElement.parentElement;
var index = row.rowIndex-1;
dataArr.splice(index, 1);
localStorage.setItem(ap, JSON.stringify(dataArr));

document.getElementById("myTable").deleteRow(row.rowIndex);
alert("deleted successfully");
}

}


function validate() {
isValid = true;
if (document.getElementById("inputNL").value == "" || document.getElementById("inputJK").value == "" || document.getElementById("inputNH").value == "" || document.getElementById("inputA").value == "") {
isValid = false;
alert("please check up your data");
}
return isValid;
}
function reg() {
document.querySelector('#form').style.display = "block";
document.querySelector('#myTable').style.display = "none";
}

function print() {
var dy = document.querySelector('table');
document.querySelector('#hid').style.display = "none";
document.querySelector('#hid1').style.display = "none";
document.querySelector('#hid2').style.display = "none";

//document.querySelector('#st1').innerHTML = "this all students that registered for section one ";

dy.setAttribute("class", "table table-condensed table-striped  table-hover bg-white ");
document.getElementById('id01').style.display = 'none';

window.print();

}

function dlt() {
if (confirm("this action delete entries of table permanently are you sure to do this"

)) {
var pas = prompt("enter your password ");
var sp = localStorage.getItem("pas");
if (sp == pas) {
localStorage.removeItem(ap);
alert("deleted successful ");
} else {
alert("password not correct ");
}}
}
function update(td) {
document.getElementById('id02').style.display = "block";

row = td.parentElement.parentElement;

var index = row.rowIndex - 1;
var dat = dataArr[index];
var mk1 = document.querySelector('#mark1');
mk1.setAttribute("value", dat.mark1);
var mk2 = document.querySelector('#mark2');
mk2.setAttribute("value", dat.mark2);
var mk3 = document.querySelector('#mark3');
mk3.setAttribute("value", dat.mark3);
var mk4 = document.querySelector('#mark4');
mk4.setAttribute("value", dat.mark4);
var mk5 = document.querySelector('#mark5');
mk5.setAttribute("value", dat.mark2);
var mk6 = document.querySelector('#mark6');
mk6.setAttribute("value", dat.mark6);
var mk7 = document.querySelector('#mark7');
mk7.setAttribute("value", dat.mark7);
var mk8 = document.querySelector('#mark8');
mk8.setAttribute("value", dat.mark8);
var mk9 = document.querySelector('#mark9');
mk9.setAttribute("value", dat.mark9);
var mk10 = document.querySelector('#mark10');
mk10.setAttribute("value", dat.mark10);
var mk11 = document.querySelector('#mark11');
mk11.setAttribute("value", dat.mark11);
var mk12 = document.querySelector('#mark12');
mk12.setAttribute("value", dat.mark12);
var av = document.querySelector('#av');
av.setAttribute("value", dat.av);


var inputNL = document.querySelector('.fnam');
inputNL.setAttribute("value", dat.firstname);
var inputNH = document.querySelector('.lnam');
inputNH.setAttribute("value", dat.lastname);
var inputJK = document.querySelector('.sid');
inputJK.setAttribute("value", dat.sid);
var inputA = document.querySelector('.ag');
inputA.setAttribute("value", dat.age);


var gender = document.querySelector('.sex');
gender.setAttribute("value", dat.gender);
var mid = document.querySelector('.mid');
mid.setAttribute("value", dat.midlename);
var id = document.querySelector('.id');
id.setAttribute("value", dat.id);

var sv = document.querySelector('#sup');
sv.addEventListener('click', ()=> {
var firstname = document.querySelector('#fn').value;
var lastname = document.querySelector('#ln').value;
var sid = document.querySelector('#sid').value;
var age = document.querySelector('#ag').value;
//var inputb =document.querySelector('#sec').value;
//var depa =document.querySelector('#gr').value;

var gender = document.querySelector('#gen').value;
var midlename = document.querySelector('.mid').value;
var mark1 = document.querySelector('.mark1').value;
var mark2 = document.querySelector('.mark2').value;
var mark3 = document.querySelector('.mark3').value;
var mark4 = document.querySelector('.mark4').value;
var mark5 = document.querySelector('.mark5').value;
var mark6 = document.querySelector('.mark6').value;

var mark7 = document.querySelector('.mark7').value;
var mark8 = document.querySelector('.mark8').value;
var mark9 = document.querySelector('.mark9').value;
var mark10 = document.querySelector('.mark10').value;

var mark11 = document.querySelector('.mark11').value;
var mark12 = document.querySelector('.mark12').value;
var av = document.querySelector('#av').value;
var id = document.querySelector('.id').value;

var left=dat.left;
var sum=dat.sum;
var mark1=dat.mark1;
var mark2=dat.mark2;
var mark3=dat.mark3;
var mark4=dat.mark4;
var mark5=dat.mark5;
var mark6=dat.mark6;
var mark7=dat.mark7;
var mark8=dat.mark8;
var mark9=dat.mark9;
var mark10=dat.mark10;
var mark11=dat.mark11;
var mark12=dat.mark12;
var no=dat.no;
dataArr[index] = {no,sum,left,av, id, firstname, midlename, lastname, sid, age, gender, mark1, mark2, mark3, mark4, mark5, mark6, mark7, mark8, mark9, mark10, mark11, mark12};




localStorage.setItem(ap, JSON.stringify(dataArr));
//resetForm();
document.getElementById('id02').style.display = "none";

alert("updated successfully");
// resetFormu();
});
}



function regupload(){
	const myForm1 = document.getElementById("myForm1");
	
	const csvFile = document.getElementById("csvFile");

const dataArr= JSON.parse(localStorage.getItem(ap) || '[]');

	
	function csvToArray(str,delimiter = ",") {


		const headers = str.slice(0, str.indexOf("\n")).split(delimiter);


		const rows = str.slice(str.indexOf("\n") + 1).split("\n");

			
			const arr = rows.map(function (row) {
			const values = row.split(delimiter);
			const el = headers.reduce(function (object, header, index) {
				object[header] = values[index];
				return object;
			}, {});
			return el;
		});

		// return the array
		return arr;
	}

	myForm1.addEventListener("submit", function (e) {
		e.preventDefault();
			const input = csvFile.files[0];
		const reader = new FileReader();

		reader.onload = function (e) {
			const text = e.target.result;
			const data = csvToArray(text);
			localStorage.setItem(ap, JSON.stringify(data));
		//if(up()){
   

//clearInterval(hello);
//window.location.reload()

//alert("successifully regitered")
document.getElementById('id07').style.display="none";

			document.getElementById('id08').style.display="block";
		
			
		}

		reader.readAsText(input);
		
	});
	
	
}
function success(){
	const dataArr= JSON.parse(localStorage.getItem(ap) || '[]');

		var mark1=0,mark2=0;mark3=0,mark4=0,mark5=0,mark6=0,mark7=0,mark8=0,mark9=0,mark10=0,mark11=0,mark12=0;
	for(var i=0;i<dataArr.length;i++){
		//mark1[i]=0;mark2[i]=0;mark3[i]=0;mark4[i]=0;mark5[i]=0;mark6[i];mark7[i]=0;mark8[i]=0;mark9[i]=0;mark10[i]=0;mark11=[0];mark12=0;
		var firstname=dataArr[i].firstname;
		var lastname=dataArr[i].lastname;
		var midlename=dataArr[i].midlename;
		var sid=dataArr[i].sid;
		var age=dataArr[i].age;
		var gender=dataArr[i].gender;
		var av=0;
		var sum=0;
		var id=0;
		var left=0;
		dataArr[i]={left,id,firstname,lastname,midlename,sid,age,gender,sum,av, mark1,mark2,mark3,mark4,mark5,mark6,mark7,mark8,mark9,mark10,mark11,mark12}
		localStorage.setItem(ap, JSON.stringify(dataArr));
document.getElementById('id08').style.display="none";
		window.location.reload()
	}
	}