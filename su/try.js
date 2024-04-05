const
myForm = document.forms['my-form'] 
,sbform = document.forms['sbform'] ,

table = document.querySelector('#myTable tbody'),
sur = JSON.parse(localStorage.getItem('sur') || '[]'),
mrk = JSON.parse(localStorage.getItem('rank') || '[]'),
sb=JSON.parse(localStorage.getItem('sr2')||'[]'),
dataArr = JSON.parse(localStorage.getItem('dataArr') || '[]');
var sn=localStorage.getItem("mna");
var selectedRow = null;
var number = 0;
var rank = 0;

mrk.sort(function(a, b) {
	return b.av-a.av;
})

function subform(){

	
	sb.push(Object.fromEntries(new FormData(sbform).entries()));
    	
    localStorage.setItem('sr2',JSON.stringify(sb));
	alert("saved successfully");
	document.querySelector('#id04').style.display="none";


	
	
	
}
mrk.forEach(row=> {
	let newRow = table.insertRow();

	newRow.insertCell().textContent = row.no = ++number;



	newRow.insertCell().textContent = row.fname;
	newRow.insertCell().textContent = row.lname;
	newRow.insertCell().textContent =mark1= row.mark1;

	newRow.insertCell().textContent =mark2= row.mark2;
	newRow.insertCell().textContent =mark3= row.mark3;
	newRow.insertCell().textContent =mark4= row.mark4;
	newRow.insertCell().textContent =mark5= row.mark5;
	if(sn==5){
	    var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5);

	newRow.insertCell().textContent = sum;
	var av = sum/sn;

	newRow.insertCell().textContent = av;

	
	}

else if(sn==6){
		
	newRow.insertCell().textContent = mark6=row.mark6;
var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6);
	newRow.insertCell().textContent = sum;
	var av = sum/sn;

	newRow.insertCell().textContent = av;

	
	
}else if(sn==7){
	newRow.insertCell().textContent = mark6=row.mark6;

	
	newRow.insertCell().textContent =mark7= row.mark7;
	var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7);
	newRow.insertCell().textContent = sum;
	var av = sum/sn;

	newRow.insertCell().textContent = av;


}else if(sn==8){
	newRow.insertCell().textContent = mark6=row.mark6;

	
	newRow.insertCell().textContent =mark7= row.mark7;

	newRow.insertCell().textContent =mark8= row.mark8;
	var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8);
	newRow.insertCell().textContent = sum;
	var av = sum/sn;

	newRow.insertCell().textContent = av;

	
}else if(sn==9){
	newRow.insertCell().textContent = mark6=row.mark6;

	
	newRow.insertCell().textContent =mark7= row.mark7;

	newRow.insertCell().textContent =mark8= row.mark8;


	newRow.insertCell().textContent =mark9= row.mark9;
	var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9);
	newRow.insertCell().textContent = sum;
	var av = sum/sn;

	newRow.insertCell().textContent = av;

	
}else if(sn==10){
	newRow.insertCell().textContent = mark6=row.mark6;

	
	newRow.insertCell().textContent =mark7= row.mark7;

	newRow.insertCell().textContent =mark8= row.mark8;


	newRow.insertCell().textContent =mark9= row.mark9;

	newRow.insertCell().textContent =mark10= row.mark10;
	var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10);

	newRow.insertCell().textContent = sum;
	var av = sum/sn;

	newRow.insertCell().textContent = av;

	
}else if(sn==11){
	newRow.insertCell().textContent = mark6=row.mark6;

	
	newRow.insertCell().textContent =mark7= row.mark7;

	newRow.insertCell().textContent =mark8= row.mark8;


	newRow.insertCell().textContent =mark9= row.mark9;

	newRow.insertCell().textContent =mark10= row.mark10;


	newRow.insertCell().textContent =mark11 =row.mark11;
	var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)
	+parseFloat(mark10)+parseFloat(mark11);

	newRow.insertCell().textContent = sum;
	var av = sum/sn;

	newRow.insertCell().textContent = av;

	
}else if(sn==12){
	newRow.insertCell().textContent = mark6=row.mark6;

	
	newRow.insertCell().textContent =mark7= row.mark7;

	newRow.insertCell().textContent =mark8= row.mark8;


	newRow.insertCell().textContent =mark9= row.mark9;

	newRow.insertCell().textContent =mark10= row.mark10;


	newRow.insertCell().textContent =mark11 =row.mark11;

	
	newRow.insertCell().textContent =mark12= row.mark12;
	var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9);
	+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);

	newRow.insertCell().textContent = sum;
	var av = sum/sn;

	newRow.insertCell().textContent = av;

	
}
	
	

	
	



newRow.insertCell().textContent = ++rank;




	newRow.insertCell().innerHTML = `<a onClick="update(this)" class="btn btn-success">update<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


	newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger">delete<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

});
function myFunction() {
document.getElementById("myDropdown")
.classList.toggle("show");
}

function onformsubmit() {
if(vldate()){
	if (selectedRow == null) {
		atr();
		mrk.push(Object.fromEntries(new FormData(myForm).entries()));

		localStorage.setItem('rank', JSON.stringify(mrk));
		document.getElementById('id01').style.display = "none";
        alert("saved successfully");
		//refresh();
		body();
		let newRow = table.insertRow();

		newRow.insertCell().textContent = myForm.no.value = ++number;



		newRow.insertCell().textContent = myForm.fname.value;
		newRow.insertCell().textContent = myForm.lname.value;
		newRow.insertCell().textContent =  myForm.mark1.value;
		newRow.insertCell().textContent =  myForm.mark2.value;
		newRow.insertCell().textContent =  myForm.mark3.value;
		newRow.insertCell().textContent =  myForm.mark4.value;

		newRow.insertCell().textContent =  myForm.mark5.value;
		if(sn==5){
		    var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value);
		    
	
		newRow.insertCell().textContent = sum;
		var av = sum/sn;

	newRow.insertCell().textContent = av;

		
		}
	else	if(sn==6){
		newRow.insertCell().textContent = myForm.mark6.value;
		
			var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value);
			
	
		newRow.insertCell().textContent = sum;
		var av = sum/sn;

	newRow.insertCell().textContent = av;

		
		}else if(sn==7){
		newRow.insertCell().textContent =  myForm.mark6.value;
		
		newRow.insertCell().textContent = myForm.mark7.value;
		var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value);
		
	
		newRow.insertCell().textContent = sum;
		var av = sum/sn;

	newRow.insertCell().textContent = av;

			}else if(sn==8){
		newRow.insertCell().textContent =  myForm.mark6.value;
		
		newRow.insertCell().textContent =  myForm.mark7.value;
	
		newRow.insertCell().textContent = myForm.mark8.value;
		var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value);
	
		newRow.insertCell().textContent = sum;
		
		var av = sum/sn;

	newRow.insertCell().textContent = av;

		}else if(sn==9){
		newRow.insertCell().textContent =  myForm.mark6.value;
		
		newRow.insertCell().textContent = myForm.mark7.value;
	
		newRow.insertCell().textContent =  myForm.mark8.value;

		newRow.insertCell().textContent =  myForm.mark9.value;
			var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value);
	
		newRow.insertCell().textContent = sum;
		var av = sum/sn;

	newRow.insertCell().textContent = av;

				}else if(sn==10){
		newRow.insertCell().textContent = myForm.mark6.value;
		
		newRow.insertCell().textContent =  myForm.mark7.value;
	
		newRow.insertCell().textContent =  myForm.mark8.value;

		newRow.insertCell().textContent =  myForm.mark9.value;

		newRow.insertCell().textContent =  myForm.mark10.value;
			var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value)+parseFloat(myForm.mark10.value);
	
		newRow.insertCell().textContent = sum;
		
		var av = sum/sn;

	newRow.insertCell().textContent = av;

		}else if(sn==11){
		newRow.insertCell().textContent =  myForm.mark6.value;
		
		newRow.insertCell().textContent =  myForm.mark7.value;
	
		newRow.insertCell().textContent =  myForm.mark8.value;

		newRow.insertCell().textContent =  myForm.mark9.value;

		newRow.insertCell().textContent =  myForm.mark10.value;
	
		newRow.insertCell().textContent =  myForm.mark11.value;
			var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value)+parseFloat(myForm.mark10.value)+parseFloat(myForm.mark11.value );
	
		newRow.insertCell().textContent = sum;
var av = sum/sn;

	newRow.insertCell().textContent = av;

		}else if(sn==12){
		newRow.insertCell().textContent =  myForm.mark6.value;
		
		newRow.insertCell().textContent =  myForm.mark7.value;
	
		newRow.insertCell().textContent =  myForm.mark8.value;

		newRow.insertCell().textContent =  myForm.mark9.value;

		newRow.insertCell().textContent =  myForm.mark10.value;
	
		newRow.insertCell().textContent =  myForm.mark11.value;

		newRow.insertCell().textContent =  myForm.mark12.value;
	var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value)+parseFloat(myForm.mark10.value)+parseFloat(myForm.mark11.value)+parseFloat(myForm.mark12.value );
	
		newRow.insertCell().textContent = sum;
		var av = sum/sn;

	newRow.insertCell().textContent = av;

		
}
newRow.insertCell().textContent = ++rank;


			newRow.insertCell().innerHTML = `<a onClick="update(this)" class="btn btn-success">update<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


		newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger">delete<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	}
	
	refresh();
}
	
}
function atr() {
	var av = document.querySelector('#av');
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


	var sum = parseFloat(mark11)+parseFloat(mark12)+parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10);
	
	var a = sum/12;
	av.setAttribute("value", a);

}
function refresh() {
	document.querySelector('#fname').innerHTML = "";
	document.querySelector('#lname').innerHTML = "";
	document.querySelector('.mark1').innerHTML = "";
document.querySelector('.mark2').innerHTML = "";
	document.querySelector('.mark3').innerHTML = "";
	document.querySelector('.mark4').innerHTML = "";
document.querySelector('.mark5').innerHTML = "";
document.querySelector('.mark6').innerHTML = "";
	document.querySelector('.mark7').innerHTML = "";
	document.querySelector('.mark8').innerHTML = "";

document.querySelector('.mark9').innerHTML = "";
document.querySelector('.mark10').innerHTML = "";
	document.querySelector('.mark11').innerHTML = "";
	document.querySelector('.mark12').innerHTML = "";

}


var modal = document.getElementById('id01');




window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function body() {
	
	
	if(sn==null){
		alert("pleas select number of exam that your student taken by clicking on red button or snumber then you got plus sign button");
	
		document.querySelector('#hid1').style.display="none";
var bk=document.querySelector('#hid0');
bk.setAttribute("class","blinck btn ");
	}
	if(mrk==null){
		alert("pleas select number of subjects that your student taken by clicking on red button or snumber then you got plus sign button");
	
		//document.querySelector('#hid1').style.display="none";
var bk=document.querySelector('.lu');
bk.setAttribute("class","bg-danger");
	}
	
		sb.forEach(row=>{
			
	var l1 = document.querySelector('.l1').innerHTML=row.sb1;
	var l2 = document.querySelector('.l2').innerHTML=row.sb2;
	var l3 = document.querySelector('.l3').innerHTML=row.sb3;
	var l4 = document.querySelector('.l4').innerHTML=row.sb4;
	var l5 = document.querySelector('.l5').innerHTML=row.sb5;
	var l6 = document.querySelector('.l6').innerHTML=row.sb6;
	var l7 = document.querySelector('.l7').innerHTML=row.sb7;
    var l8 = document.querySelector('.l8').innerHTML=row.sb8;
	var l9 = document.querySelector('.l9').innerHTML=row.sb9;
	var l10 = document.querySelector('.l10').innerHTML=row.sb10;
	var l11= document.querySelector('.l11').innerHTML=row.sb11;
	var l12 = document.querySelector('.l12').innerHTML=row.sb12;
	 	var l1 = document.querySelector('.lt1').innerHTML=row.sb1;
	var l2 = document.querySelector('.lt2').innerHTML=row.sb2;
	var l3 = document.querySelector('.lt3').innerHTML=row.sb3;
	var l4 = document.querySelector('.lt4').innerHTML=row.sb4;
	var l5 = document.querySelector('.lt5').innerHTML=row.sb5;
	var l6 = document.querySelector('.lt6').innerHTML=row.sb6;
	var l7 = document.querySelector('.lt7').innerHTML=row.sb7;
    var l8 = document.querySelector('.lt8').innerHTML=row.sb8;
	var l9 = document.querySelector('.lt9').innerHTML=row.sb9;
	var l10 = document.querySelector('.lt10').innerHTML=row.sb10;
	var l11= document.querySelector('.lt11').innerHTML=row.sb11;
	var l12 = document.querySelector('.lt12').innerHTML=row.sb12;
	  
	  
var l1 = document.querySelector('.lp1').innerHTML=row.sb1;
	var l2 = document.querySelector('.lp2').innerHTML=row.sb2;
	var l3 = document.querySelector('.lp3').innerHTML=row.sb3;
	var l4 = document.querySelector('.lp4').innerHTML=row.sb4;
	var l5 = document.querySelector('.lp5').innerHTML=row.sb5;
	var l6 = document.querySelector('.lp6').innerHTML=row.sb6;
	var l7 = document.querySelector('.lp7').innerHTML=row.sb7;
    var l8 = document.querySelector('.lp8').innerHTML=row.sb8;
	var l9 = document.querySelector('.lp9').innerHTML=row.sb9;
	var l10 = document.querySelector('.lp10').innerHTML=row.sb10;
	var l11= document.querySelector('.lp11').innerHTML=row.sb11;
	var l12 = document.querySelector('.lp12').innerHTML=row.sb12;

		})
		
	var mark6 = document.querySelector('#mark6');
	var mark7 = document.querySelector('#mark7');
	var mark8 = document.querySelector('#mark8');
	var mark9 = document.querySelector('#mark9');
	var mark10 = document.querySelector('#mark10');
	var mark11 = document.querySelector('#mark11');
	var mark12 = document.querySelector('#mark12');
    var l6 = document.querySelector('#l6');
	var l7 = document.querySelector('#l7');
	var l8 = document.querySelector('#l8');
	var l9 = document.querySelector('#l9');
	var l10 = document.querySelector('#l10');
	var l11 = document.querySelector('#l11');
	var l12 = document.querySelector('#l12');
     
    var mk6 = document.querySelector('#mk6');
	var mk7 = document.querySelector('#mk7');
	var mk8 = document.querySelector('#mk8');
	var mk9 = document.querySelector('#mk9');
	var mk10 = document.querySelector('#mk10');
	var mk11 = document.querySelector('#mk11');
	var mk12 = document.querySelector('#mk12');
var s5 = document.querySelector('.s5');
var s6 = document.querySelector('.s6');
var s7 = document.querySelector('.s7');
var s8 = document.querySelector('.s8');
var s9 = document.querySelector('.s9');
var s10 = document.querySelector('.s10');
var s11 = document.querySelector('.s11');

var sb5 = document.querySelector('.sb5');
var sb6 = document.querySelector('.sb6');
var sb7 = document.querySelector('.sb7');
var sb8 = document.querySelector('.sb8');
var sb9 = document.querySelector('.sb9');
var sb10 = document.querySelector('.sb10');
var sb11 = document.querySelector('.sb11');



	if(sn==5){
   mark6.setAttribute("type","hidden");
mark7.setAttribute("type","hidden");
mark8.setAttribute("type","hidden");
mark9.setAttribute("type","hidden");
mark10.setAttribute("type","hidden");
mark11.setAttribute("type","hidden");
mark12.setAttribute("type","hidden");

l6.style.display="none";
l7.style.display="none";
l8.style.display="none";
l9.style.display="none";
l10.style.display="none";
l11.style.display="none";
l12.style.display="none";
mk6.style.display="none";
mk7.style.display="none";
mk8.style.display="none";
mk9.style.display="none";
mk10.style.display="none";
mk11.style.display="none";
mk12.style.display="none";
s5.style.display="none";
sb5.style.display="none";

	}else if(sn==6){
		s6.style.display="none";
mark7.setAttribute("type","hidden");
mark8.setAttribute("type","hidden");
mark9.setAttribute("type","hidden");
mark10.setAttribute("type","hidden");
mark11.setAttribute("type","hidden");
mark12.setAttribute("type","hidden");

sb6.style.display="none";
l7.style.display="none";
l8.style.display="none";
l9.style.display="none";
l10.style.display="none";
l11.style.display="none";
l12.style.display="none";

mk7.style.display="none";
mk8.style.display="none";
mk9.style.display="none";
mk10.style.display="none";
mk11.style.display="none";
mk12.style.display="none";


	}else if(sn==7){
		s7.style.display="none";
mark8.setAttribute("type","hidden");
mark9.setAttribute("type","hidden");
mark10.setAttribute("type","hidden");
mark11.setAttribute("type","hidden");
mark12.setAttribute("type","hidden");
sb7.style.display="none";

l8.style.display="none";
l9.style.display="none";
l10.style.display="none";
l11.style.display="none";
l12.style.display="none";

mk8.style.display="none";
mk9.style.display="none";
mk10.style.display="none";
mk11.style.display="none";
mk12.style.display="none";


	}else if(sn==8){
		s8.style.display="none";
		mark9.setAttribute("type","hidden");
mark10.setAttribute("type","hidden");
mark11.setAttribute("type","hidden");
mark12.setAttribute("type","hidden");
sb8.style.display="none";
l9.style.display="none";
l10.style.display="none";
l11.style.display="none";
l12.style.display="none";

mk9.style.display="none";
mk10.style.display="none";
mk11.style.display="none";
mk12.style.display="none";


	}else if(sn==9){
	s9.style.display="none";
mark10.setAttribute("type","hidden");
mark11.setAttribute("type","hidden");
mark12.setAttribute("type","hidden");
sb9.style.display="none";

l10.style.display="none";
l11.style.display="none";
l12.style.display="none";

mk10.style.display="none";
mk11.style.display="none";
mk12.style.display="none";

}else if(sn==10){
	s10.style.display="none";
	mark11.setAttribute("type","hidden");
mark12.setAttribute("type","hidden");
sb10.style.display="none";
l11.style.display="none";
l12.style.display="none";



mk11.style.display="none";
mk12.style.display="none";


}else if(sn==11){
	s11.style.display="none";
mark12.setAttribute("type","hidden");
sb11.style.display="none";

l12.style.display="none";
mk12.style.display="none";

}
}
function onDelete(td) {
	if (confirm('are you sure to delate this data')) {
		row = td.parentElement.parentElement;
		var index = row.rowIndex-1;
		mrk.splice(index, 1);
		localStorage.setItem('rank', JSON.stringify(mrk));

		document.getElementById("myTable").deleteRow(row.rowIndex);


		alert("deleted successful ");
	}

}

function print() {
	var tb = document.querySelector('table');
	document.querySelector('#hid').style.display = "none";
	document.querySelector('#hid1').style.display = "none";
	document.querySelector('#hid2').style.display = "none";
	document.querySelector('#hid0').style.display = "none";
    document.querySelector('#set').style.display = "none";

	tb.setAttribute("class", "table table-condensed table-striped table-hover bg-white");
tb.setAttribute("style","")
	window.print();
}
function dlt() {
	var pas = prompt("enter your password");

	var ppas = localStorage.getItem("pas");
	if (pas == ppas) {
		localStorage.removeItem("rank");
		alert("table deleted successfully ");
	} else {
		alert("inccorect password");
	}
}
var sp = document.querySelector('#sup');
sp.addEventListener('click', ()=> {
	var sn = document.querySelector('#sn').value;
	localStorage.setItem('mna', sn);
	alert("your are set number of subjects that taken by your students are "+sn+" and saved successfully");
	document.querySelector('#id03').style.display = "none";

});
function update(td) {
	body();
	document.getElementById('id02').style.display = "block";
	
	row = td.parentElement.parentElement;
	var index = row.rowIndex - 1;
	var dt=mrk[index];
	    var fnameb = document.querySelector('.fnameb');
	    fnameb.setAttribute("value",dt.fname);
		
		var lnameb = document.querySelector('.lbn');
		lnameb.setAttribute("value",dt.lname);
		
		var mark1b = document.querySelector('.markbn');
		mark1b.setAttribute("value",dt.mark1);
		
		var mark2b = document.querySelector('.markb2');
		mark2b.setAttribute("value",dt.mark2);
		
		var mark3b = document.querySelector('.markb3');
		mark3b.setAttribute("value",dt.mark3);
		
		var mark4b = document.querySelector('.markb4');
		mark4b.setAttribute("value",dt.mark4);
		
		var mark5b = document.querySelector('.markb5');
		mark5b.setAttribute("value",dt.mark5);
		
		var mark6b = document.querySelector('.markb6');
		mark6b.setAttribute("value",dt.mark6);
		
		var mark7b = document.querySelector('.markb7');
		mark7b.setAttribute("value",dt.mark7);
		
		var mark8b = document.querySelector('.markb8');
		mark8b.setAttribute("value",dt.mark8);
		
		var mark9b = document.querySelector('.markb9');
		mark9b.setAttribute("value",dt.mark9);
		
		var mark10b = document.querySelector('#markb10');
		mark10b.setAttribute("value",dt.mark10);
		
		var mark11b = document.querySelector('.markb11');
		mark11b.setAttribute("value",dt.mark11);
		
		var mark12b = document.querySelector('.markb12');
		mark12b.setAttribute("value",dt.mark12);
		
    
	var sv = document.querySelector('#sbmt');
	sv.addEventListener('click', ()=> {
		if(upvldate()){
		var fname = document.querySelector('.fnameb').value;
		var lname = document.querySelector('.lbn').value;
		var mark1 = document.querySelector('.markbn').value;
		var mark2 = document.querySelector('.markb2').value;
		var mark3 = document.querySelector('.markb3').value;
		var mark4 = document.querySelector('.markb4').value;
		var mark5 = document.querySelector('.markb5').value;
		var mark6 = document.querySelector('.markb6').value;
		var mark7 = document.querySelector('.markb7').value;
		var mark8 = document.querySelector('.markb8').value;
		var mark9 = document.querySelector('.markb9').value;
		var mark10 = document.querySelector('#markb10').value;
		var mark11 = document.querySelector('.markb11').value;
		var mark12 = document.querySelector('.markb12').value;
      var sum=parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)
     +parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);
		var av=sum/sn;
		mrk[index] = {av,fname, lname, mark1, mark2, mark3, mark4, mark5, mark6, mark7, mark8, mark9, mark10, mark11, mark12};



		localStorage.setItem("rank", JSON.stringify(mrk));
		document.getElementById('id02').style.display = "none";

		alert("updated successfully");

}uprefresh();	});
}

function vldate(){
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
if(mark1>=0&&mark1<=100&&mark2>=0&&mark2<=100&&mark3>=0&&mark3<=100&&mark4>=0&&mark4<=100&&mark4>=0&&mark4<=100&&mark6>=0&&mark6<=100&&mark7>=0&&mark7<=100&&mark8>=0&&mark8<=100&&mark9>=0&&mark9<=100&&mark10>=0&&mark10<=100&&mark11>=0&&mark11<=100&&mark12>=0&&mark12<=100){
		
	return true;
	
}else{
alert("you entered mark is not valid mark must be between 0 and 100 Please check again");

	return false;
}

}
function upvldate(){
	var mark1 = document.querySelector('.markbn').value;
	var mark2 = document.querySelector('.markb2').value;
	var mark3 = document.querySelector('.markb3').value;
	var mark4 = document.querySelector('.markb4').value;
	var mark5 = document.querySelector('.markb5').value;
	var mark6 = document.querySelector('.markb6').value;
	var mark7 = document.querySelector('.markb7').value;
	var mark8 = document.querySelector('.markb8').value;
	var mark9 = document.querySelector('.markb9').value;
	var mark10 = document.querySelector('.markb10').value;
	var mark11 = document.querySelector('.markb11').value;
	var mark12 = document.querySelector('.markb12').value;
//var sum=parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);

if(mark1>=0&&mark1<=100&&mark2>=0&&mark2<=100&&mark3>=0&&mark3<=100&&mark4>=0&&mark4<=100&&mark4>=0&&mark4<=100&&mark6>=0&&mark6<=100&&mark7>=0&&mark7<=100&&mark8>=0&&mark8<=100&&mark9>=0&&mark9<=100&&mark10>=0&&mark10<=100&&mark11>=0&&mark11<=100&&mark12>=0&&mark12<=100){
		
	return true;
	
}else{
alert("you entered mark is not valid mark must be between 0 and 100 Please check again");

	return false;
}

}
function refresh() {
	//document.querySelector('#fname').innerHTML = "";
	//document.querySelector('#lname').innerHTML = "";
	document.querySelector('.mark1').value = "0";
document.querySelector('.mark2').value  = "0";
	document.querySelector('.mark3').value = "0";
	document.querySelector('.mark4').value = "0";
document.querySelector('.mark5').value = "0";
document.querySelector('.mark6').value = "0";
	document.querySelector('.mark7').value= "0";
	document.querySelector('.mark8').value = "0";

document.querySelector('.mark9').value = "0";
document.querySelector('.mark10').value= "0";
	document.querySelector('.mark11').value = "0";
	document.querySelector('.mark12').value = "0";

}
function uprefresh() {
	//document.querySelector('#fname').innerHTML = "";
	//document.querySelector('#lname').innerHTML = "";
	document.querySelector('.markbn').value = "0";
document.querySelector('.markb2').value  = "0";
	document.querySelector('.markb3').value = "0";
	document.querySelector('.markb4').value = "0";
document.querySelector('.markb5').value = "0";
document.querySelector('.markb6').value = "0";
	document.querySelector('.markb7').value= "0";
	document.querySelector('.markb8').value = "0";

document.querySelector('.markb9').value = "0";
document.querySelector('.markb10').value= "0";
	document.querySelector('.markb11').value = "0";
	document.querySelector('.markb12').value = "0";

}
