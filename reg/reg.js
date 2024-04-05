const myform = document.forms['my-form'] // form name pada tag html form, 
,table = document.querySelector('#myTable tbody'), 


dat = JSON.parse(localStorage.getItem('sreg') || '[]'),
dataArr = JSON.parse(localStorage.getItem('dataArr') || '[]'),
st10 = JSON.parse(localStorage.getItem('st10') || '[]'),
st2 = JSON.parse(localStorage.getItem('st2') || '[]'),
st3 = JSON.parse(localStorage.getItem('st3') || '[]'),
st4 = JSON.parse(localStorage.getItem('st4') || '[]'),
st5 = JSON.parse(localStorage.getItem('st5') || '[]'),
st6 = JSON.parse(localStorage.getItem('st6') || '[]'),
st7 = JSON.parse(localStorage.getItem('st7') || '[]'),
st8 = JSON.parse(localStorage.getItem('st8') || '[]'),
st9 = JSON.parse(localStorage.getItem('st9') || '[]');

const csvFile = document.getElementById("csvFile");
const myForm1 = document.getElementById("myForm1");
	
var selectedRow = null
var number = 0
function backup(td) {
	row = td.parentElement.parentElement;
	var index = row.rowIndex-1;
	document.getElementById('id07').style.display="block";
	/*var syb=document.getElementById('bank');
	syb.addEventListener("click",()=>{
		*/
	
	if(index==0){
	
	myForm1.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();
	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		localStorage.setItem("dataArr", JSON.stringify(data));
		alert("your data saved successful");
	}

	reader.readAsText(input);
	});
	}else if(index==1){
		
			myForm1.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();
	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		localStorage.setItem("st2", JSON.stringify(data));
		alert("your data saved successful");
	}

	reader.readAsText(input);
	});
		
	}
	else if(index==2){
			myForm1.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();
	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		localStorage.setItem("st3", JSON.stringify(data));
		alert("your data saved successful");
	}

	reader.readAsText(input);
	});
	}else if(index==4){
			myForm1.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();
	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		localStorage.setItem("st4", JSON.stringify(data));
		alert("your data saved successful");
	}

	reader.readAsText(input);
	});
	}else if(index==5){
			myForm1.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();
	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		localStorage.setItem("st5", JSON.stringify(data));
		alert("your data saved successful");
	}

	reader.readAsText(input);
	});
	}else if(index==6){
			myForm1.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();
	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		localStorage.setItem("st6", JSON.stringify(data));
		alert("your data saved successful");
	}

	reader.readAsText(input);
	});
	}else if(index==7){
			myForm1.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();
	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		localStorage.setItem("st8", JSON.stringify(data));
		alert("your data saved successful");
	}

	reader.readAsText(input);
	});
	}else if(index==8){
			myForm1.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();
	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		localStorage.setItem("st8", JSON.stringify(data));
		alert("your data saved successful");
	}

	reader.readAsText(input);
	});
	}else if(index==9){
			myForm1.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();
	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		localStorage.setItem("st9", JSON.stringify(data));
		alert("your data saved successful");
	}

	reader.readAsText(input);
	});
	}else if(index==10){
			myForm1.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();
	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		localStorage.setItem("st10", JSON.stringify(data));
		alert("your data saved successful");
	}

	reader.readAsText(input);
	});
	}
	//});
}

function csvToArray(str, delimiter = ",") {


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

	/*function backme(lo){
	myForm1.addEventListener("submit", function (e) {

	e.preventDefault();
	const input = csvFile.files[0];
	const reader = new FileReader();

	reader.onload = function (e) {
		const text = e.target.result;
		const data = csvToArray(text);
		
		localStorage.setItem(lo, JSON.stringify(data));

		alert("your data saved successful");

		//window.location.reload()
	}

	reader.readAsText(input);
	});
};*/
dat.forEach(row => {
	if(selectedRow==null){
	let newRow = table.insertRow()


	newRow.insertCell().textContent = row.no = ++number;
	newRow.insertCell().textContent = row.gr;
	newRow.insertCell().textContent = row.sec;

	newRow.insertCell().textContent = row.sub;

newRow.insertCell().innerHTML = `<a onClick="opend(this)" style="" class="btn text-primary">&#10149;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
newRow.insertCell().innerHTML = `<a onClick="update(this)"style="" class="btn text-success">&#9998;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	
	newRow.insertCell().innerHTML = `<a onClick="onDelete(this)"style="" class="btn text-danger">X<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


//newRow.insertCell().innerHTML = `<a onClick="backup(this)"style="font-size:70px" class="btn text-success ">bup<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

}

})
function form(){
if (selectedRow == null) {

		dat.push(Object.fromEntries(new FormData(myform).entries()));
		localStorage.setItem('sreg', JSON.stringify(dat));
		document.getElementById('id01').style.display = "none";


		let newRow = table.insertRow()

		newRow.insertCell().textContent = myform.no.value = ++number;
		newRow.insertCell().textContent = myform.gr.value;
		newRow.insertCell().textContent = myform.sec.value;

		newRow.insertCell().textContent = myform.sub.value;
		
		
		
newRow.insertCell().innerHTML = `<a onClick="opend(this)" style="" class="btn text-primary">&#10149;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
newRow.insertCell().innerHTML = `<a onClick="update(this)"style="" class="btn text-success">&#9998;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	
	newRow.insertCell().innerHTML = `<a onClick="onDelete(this)"style="" class="btn text-danger">X<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
//newRow.insertCell().innerHTML = `<a onClick="backup(this)"style="font-size:70px" class="btn text-success ">bup<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	}}
	function onDelete(td){
	    if(confirm( "are you sure")){
	        row = td.parentElement.parentElement;
		
		var index=row.rowIndex-1;
		dat.splice(index,1);
		localStorage.setItem("sreg",JSON.stringify(dat));
		
		document.getElementById("myTable").deleteRow(row.rowIndex);
		
		   
	    }
	}
	function opend(td){
row = td.parentElement.parentElement;
		var index=row.rowIndex-1;
		if(index==0){
			window.open("st1.html",'_self');
		
			
		}else if(index==1){
			window.open("st2.html",'_self');
		
			
		}else if(index==2){
			window.open("st3.html",'_self');
		
			
		}else if(index==3){
			window.open("st4.html",'_self');
		
			
		}else if(index==4){
			window.open("st5.html",'_self');
		
			
		}else if(index==5){
			window.open("st6.html",'_self');
		
			
		}else if(index==6){
			window.open("st7.html",'_self');
		
			
		}else if(index==7){
			window.open("st8.html",'_self');
		
			
		}else if(index==8){
			window.open("st9.html",'_self');
		
			
		}else if(index==9){
			window.open("st10.html",'_self');
		
			
		}else{
			document.getElementById('id09').style.display="block";
		var don=document.getElementById('warn');
		
	
	don.innerHTML=	"our system only handle 10 subjects sorry dear";

			
		}
	}
	
	
	function update(td){
document.getElementById('id02').style.display='block';

	row = td.parentElement.parentElement;
  var index = row.rowIndex - 1;
  var bn=dat[index];
  var sec= document.querySelector('#sec');
  sec.setAttribute("value",bn.sec);
var sub=document.querySelector('#sub');
sub.setAttribute("value",bn.sub);
 var gr=document.querySelector('#name');
 gr.setAttribute("value",bn.gr);
  
var sv=document.querySelector('#sup');
sv.addEventListener('click',()=>{
var no=++number;
//var gr=document.querySelector('#gr').value;
 var sec= document.querySelector('#sec').value;
var sub=document.querySelector('#sub').value;
 var gr=document.querySelector('#name').value;
 
 //var m2= document.querySelector('#m2').value;

dat[index]={no,gr,sec,sub};

  
    
      localStorage.setItem("sreg", JSON.stringify(dat));
      document.getElementById('id02').style.display='none';


    alert("updated successfully ");
    
    
});
	}
function add(){
    if(dat.length<10 && dat.length>=0){
        document.getElementById('id01').style.display='block';
    }else{
    	document.getElementById('id09').style.display="block";
		var don=document.getElementById('warn');
		
	
	don.innerHTML=	"our system only handle 10 subjects sorry dear you are reached max number Please delete same rows or subscribe premium by clicking bellow button 👇";
    
    	
    }
}
