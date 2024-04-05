const
myForm = document.forms['my-form'], sbform = document.forms['sbform'],
markform = document.forms['markform'],
itakeit = document.getElementById('itakeit'),
table = document.querySelector('#myTable tbody'),
table1 = document.querySelector('#table1 tbody'),

sur = JSON.parse(localStorage.getItem('sur') || '[]'),
mrk = JSON.parse(localStorage.getItem('mrk') || '[]'),
sb = JSON.parse(localStorage.getItem('sb2') || '[]'),
tp = JSON.parse(localStorage.getItem('tp1') || '[]'),

dataArr = JSON.parse(localStorage.getItem('st2') || '[]');
var sn = localStorage.getItem("mn2");
var selectedRow = null;
var number = 0;
var rank = 0;
var b = 0;

var tpg = [];
function auto() {}
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
function subform() {


	sb.push(Object.fromEntries(new FormData(sbform).entries()));

	localStorage.setItem('sb1',
		JSON.stringify(sb));
	alert("saved successfully");
	document.querySelector('#id04').style.display = "none";





}
dataArr.sort(function (x, y) {
	let a = x.firstname.toUpperCase(),
	b = y.firstname.toUpperCase();
	return a == b ? 0: a > b ? 1: -1;
});
/*var exam=document.querySelector('.exam');
for (var i = 1; i <= sn; i++) {

	var lb = document.createElement("label");
	lb.setAttribute("class", "form-label")
	lb.innerHTML = " enter "+i+"for mark"+i;
	var inp = document.createElement("input");

	var nam = "exam"+i;
	inp.setAttribute("name", nam);
	inp.setAttribute("id", nam);
	var plac = "Example:1 for mark "+i;
	inp.setAttribute("placeholder", plac);
	inp.setAttribute("class", "form-control")
	inp.style.fontSize = "30px";
	inp.style.border = "3px solid bblack";

	exam.appendChild(lb);
	exam.appendChild(inp)

}
for (var i = 1; i <= sn; i++) {

	var lb = document.createElement("label");
	lb.setAttribute("class", "form-label")
	lb.innerHTML = "persentage of mark"+i;
	var inp = document.createElement("input");

	var nam = "mperc"+i;
	inp.setAttribute("name", nam);
	inp.setAttribute("id", nam);
	var plac = "Enter percent of mark"+i;
	inp.setAttribute("placeholder", plac);
	inp.setAttribute("class", "form-control")
	inp.style.fontSize = "60px";
	inp.style.border = "3px solid bblack";

	itakeit.appendChild(lb);
	itakeit.appendChild(inp)

}*/

dataArr.forEach(row=>{

var status=document.getElementById('status');

	var card=document.createElement("div");
	card.setAttribute("class","card");
	var on="more("+row.no+")";
	card.setAttribute("onclick",on)
	var bod=document.createElement("div");
	bod.setAttribute("class","card-body");
	var span=document.createElement("span");
     
     span.innerHTML=row.firstname+" "+row.midlename+"<br>"+"score "+row.sum+"<br><span class='btn btn-primary' onclick=''>view</span>";	
     bod.appendChild(span)
	card.appendChild(bod)
	status.appendChild(card)
	//function more(td){
//row = td.parentElement.parentElement;
	//var index = row.rowIndex - 1;
	//var dat = dataArr[index];
	//console.log(row.firstname)
//}
	
})
function more(td){
	var more=document.getElementById('more');
	var nma=document.getElementById('nmamk');
	
	document.getElementById('status').style.display="none";
	for(var i=0;i<dataArr.length;i++){
		if(dataArr[i].no==td){
			//more.setAttribute("style","width:60%;height:400px;margin:40px;border-radius:20px;backgroundColor:white")
			nma.innerHTML="👨‍🦱"+dataArr[i].firstname+" "+dataArr[i].midlename+" "+dataArr[i].lastname;
			more.innerHTML="score: "+dataArr[i].sum+"<br>"+"age: "+dataArr[i].age+"<br>Gender: "+dataArr[i].gender+"<br>absent: "+dataArr[i].id+"<br>absent date:"+dataArr[i].left;
		}else{
			//more.innerHTML="sorry no there is same error"
		}
	}
}
function backme(){
	var det=document.getElementById('det');
	var rsid=document.getElementById('status');
det.style.display="none";
rsid.style.display="block";

}
function rightside(){
	var rsid=document.getElementById('rsid');
	var inc=document.getElementById('sidenav');
inc.style.display="none"
	rsid.style.display="block";
	rsid.style.width="90%";
	console.log(rsid.id)
}
var dt = "st2";


function markforma() {
	tp.push(Object.fromEntries(new FormData(markform).entries()));
	tp[0] = tp;
	localStorage.setItem('tp1',
		JSON.stringify(tp));
	alert("saved successfully");
	document.querySelector('#id08').style.display = "none";

}
var search1 = document.getElementById('search1');
search1.addEventListener('keyup', ()=> {
	var input,
	filter,
	found,
	table,
	tr,
	td,
	i,
	j;
	input = document.getElementById("search1");
	filter = input.value.toUpperCase();
	table = document.getElementById("table1");
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
function sidmute() {
	var sid = document.getElementById('sidenav');
	sid.style.display = "block";
	sid.style.width = "80%"
var rsid=document.getElementById('rsid');
	//var inc=document.getElementById('sidenav');
rsid.style.display="none"
}
function getme() {
	//var tda = document.querySelectorAll('td');
	var colo = document.querySelector('#color').checked;
	if (colo == true) {
		var tdr = document.querySelectorAll('tr');

		tdr.forEach(row=> {
			var j = parseInt(sn)+3;
			//console.log(tp[0].mperc1)
			//if/ (row.innerHTML == "<td>") {
			var tda = row.querySelectorAll('td');
			var td = row.querySelectorAll('td');
			for (var i = j; i < td.length; i++) {
				var t = parseInt(td[j].innerHTML)
				td[j].style.width = "50px";
				if (t < 50 && t >= 0) {
					td[j].style.backgroundColor = "#ff9b85";
				} else if (t < 60 && t >= 50) {
					td[j].style.backgroundColor = "yellow";

				} else if (t < 70 && t >= 60) {
					td[j].style.backgroundColor = "lightblue";

				} else if (t < 80 && t >= 70) {
					td[j].style.backgroundColor = "cyan";

				} else if (t < 90 && t >= 80) {
					td[j].style.backgroundColor = "lightgreen";
				} else if (t <= 100 && t >= 90) {
					td[j].style.backgroundColor = "#36e612";
				}
			}
           
			/*for (var l = 2; l <= td.length-2; l++) {
				var k = l-2;
				
				var gh = parseInt(tp[0].mperc+parseInt(k)+1);
				var tf = parseInt(td[l].innerHTML);
				var om = tf/td[2];
				if (om < 0.5 && td[2] > 0) {
					td[l].style.backgroundColor = "#ff9b85";

				} else if (td[l].innerHTML == 0 && gh > 0) {
					td[l].style.backgroundColor = "yellow";

				}
			}*/
		})

	}
}
setInterval(function() {
	//var colo=document.querySelector('#color').checked;
	//if (colo==true) {

	getme()
	gello()
	//}
}, 10);

function gello() {
	var right = document.querySelector('input[name=chb]:checked');
	if (right) {
		var cl = document.getElementById('cl').value;
		var tabel = document.querySelectorAll('#table1 tr');
		tabel.forEach(row=> {


			var tdh = row.querySelectorAll('td')
			//var tdh= row.querySelectorAll('#table1 td');
			for (var k = 3; k <= tdh.length-1; k++) {
				console.log(tdh[k].innerHTML)

				if (tdh[k].innerHTML == 0) {
					tdh[k].style.backgroundColor = cl;
				}
			}
		})
	}
}
function thea(dg) {

	var dg = document.getElementById("exnumber").value;
	var th1 = document.createElement("th");
	th1.setAttribute("scope",
		"col");
	th1.innerHTML = "No";
	var th2 = document.createElement("th");
	th2.setAttribute("scope",
		"col");
	th2.innerHTML = "Fname";
	var th3 = document.createElement("th");
	th3.setAttribute("scope",
		"col");
	th3.innerHTML = "Lname";
	thead.appendChild(th1);
	thead.appendChild(th2);
	thead.appendChild(th3);

	for (var i = 1; i <= dg; i++) {


		var th = document.createElement("th");

		th.setAttribute("scope", "col");

		var as = "asessiment"+i;

		th.innerHTML = as;


		thead.appendChild(th);
	}
}
function checkhere(dg,row){

	
}
function incomplete(dg, row) {
	//sessionStorage.setItem("dg",dg);
	var total=[];
	var chb1=document.querySelector('input[name=chb1]:checked');
	if(chb1){
		if (dg == 1) {
		if (row.mark1 > 0) {
			total.push(row.mark1)
			return true;
		} else {
			return false;
		}
	} else if (dg == 2) {
		if (row.mark1 > 0 && row.mark2 >0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 3) {
		if (row.mark1 > 0 && row.mark2 > 0 && row.mark3 >0) {

			return true;
		} else {
			return false
		}
	} else if (dg == 4) {
		if (row.mark1 > 0 && row.mark2 > 0 && row.mark3 >0 && row.mark4 > 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 5) {
		if (row.mark1 >0 && row.mark2 > 0 && row.mark3 > 0 && row.mark4 > 0 && row.mark5 >0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 6) {
		if (row.mark1 > 0 && row.mark2 >0 && row.mark3> 0 && row.mark4 > 0 && row.mark5 >0 && row.mark6 > 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 7) {
		if (row.mark1 > 0 && row.mark2 > 0 && row.mark3 > 0 && row.mark4 > 0 && row.mark5 > 0 && row.mark6 >0 && row.mark7 > 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 8) {
		if (row.mark1 > 0 && row.mark2 > 0 &&row.mark3 > 0 && row.mark4 >0 && row.mark5 > 0 && row.mark6 > 0 && row.mark7 >0 && row.mark8 > 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 9) {
		if (row.mark1 > 0 && row.mark2 > 0 && row.mark3 > 0 && row.mark4 > 0 && row.mark5 >0 && row.mark6 >0 && row.mark7 >0 && row.mark8 > 0 && row.mark9 > 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 10) {
		if (row.mark1 >0 &&row.mark2 > 0 &&row.mark3 >0 && row.mark4 > 0 && row.mark5 > 0 && row.mark6 > 0 && row.mark7 >0 && row.mark8 >0 &&row.mark9 >0 && row.mark10 > 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 11) {
		if (row.mark1 >0 && row.mark2 > 0 && row.mark3 >0 && row.mark4 >0 && row.mark5 > 0 && row.mark6 > 0 && row.mark7 > 0 && row.mark8 > 0 &&row.mark9 >0 && row.mark10 >0 && row.mark11 > 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 12) {
		if (row.mark1 >0 && row.mark2 >0 && row.mark3 >0 && row.mark4 >0 && row.mark5 >0 && row.mark6 > 0 && row.mark7 > 0 && row.mark8 > 0 && row.mark9 > 0 && row.mark10 > 0 && row.mark11 >0 && row.mark12 > 0) {

			return true;
		} else {
			return false;
		}
	} else {
		alert("your input is invalid")
	}
		
	}else{
	if (dg == 1) {
		if (row.mark1 == 0) {
			return true;
		} else {
			return false;
		}
	} else if (dg == 2) {
		if (row.mark1 == 0 || row.mark2 == 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 3) {
		if (row.mark1 == 0 || row.mark2 == 0 || row.mark3 == 0) {

			return true;
		} else {
			return false
		}
	} else if (dg == 4) {
		if (row.mark1 == 0 || row.mark2 == 0 || row.mark3 == 0 || row.mark4 == 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 5) {
		if (row.mark1 == 0 || row.mark2 == 0 || row.mark3 == 0 || row.mark4 == 0 || row.mark5 == 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 6) {
		if (row.mark1 == 0 || row.mark2 == 0 || row.mark3 == 0 || row.mark4 == 0 || row.mark5 == 0 || row.mark6 == 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 7) {
		if (row.mark1 == 0 || row.mark2 == 0 || row.mark3 == 0 || row.mark4 == 0 || row.mark5 == 0 || row.mark6 == 0 || row.mark7 == 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 8) {
		if (row.mark1 == 0 || row.mark2 == 0 || row.mark3 == 0 || row.mark4 == 0 || row.mark5 == 0 || row.mark6 == 0 || row.mark7 == 0 || row.mark8 == 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 9) {
		if (row.mark1 == 0 || row.mark2 == 0 || row.mark3 == 0 || row.mark4 == 0 || row.mark5 == 0 || row.mark6 == 0 || row.mark7 == 0 || row.mark8 == 0 || row.mark9 == 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 10) {
		if (row.mark1 == 0 || row.mark2 == 0 || row.mark3 == 0 || row.mark4 == 0 || row.mark5 == 0 || row.mark6 == 0 || row.mark7 == 0 || row.mark8 == 0 || row.mark9 == 0 || row.mark10 == 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 11) {
		if (row.mark1 == 0 || row.mark2 == 0 || row.mark3 == 0 || row.mark4 == 0 || row.mark5 == 0 || row.mark6 == 0 || row.mark7 == 0 || row.mark8 == 0 || row.mark9 == 0 || row.mark10 == 0 || row.mark11 == 0) {

			return true;
		} else {
			return false;
		}
	} else if (dg == 12) {
		if (row.mark1 == 0 || row.mark2 == 0 || row.mark3 == 0 || row.mark4 == 0 || row.mark5 == 0 || row.mark6 == 0 || row.mark7 == 0 || row.mark8 == 0 || row.mark9 == 0 || row.mark10 == 0 || row.mark11 == 0 || row.mark12 == 0) {

			return true;
		} else {
			return false;
		}
	} else {
		var dov=document.getElementById("error");
				dov.innerHTML="Please enter exam number from 1 to 12 to get incomplete students ";
			}
}
console.log(total.length)
}
var chexam = document.getElementById('chexam');
var thead = document.getElementById('thead');
dataArr.forEach(row=> {
	let newRow1 = table1.insertRow();
	chexam.addEventListener('click', ()=> {
		var dg = document.getElementById('exnumber').value;


		if (incomplete(dg, row)) {

			newRow1.insertCell().textContent = row.no;

console.log(row.length)

			newRow1.insertCell().textContent = row.firstname;
			newRow1.insertCell().textContent = row.midlename;

			//for(var i=1;i<=dg;i++){
			//var mark+i="mark"+i;
			if (dg == 1) {
				newRow1.insertCell().textContent = row.mark1;
			} else if (dg == 2) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;

			} else if (dg == 3) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;
				newRow1.insertCell().textContent = row.mark3;

			} else if (dg == 4) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;
				newRow1.insertCell().textContent = row.mark3;
				newRow1.insertCell().textContent = row.mark4;

			} else if (dg == 5) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;
				newRow1.insertCell().textContent = row.mark3;
				newRow1.insertCell().textContent = row.mark4;
				newRow1.insertCell().textContent = row.mark5;

			} else if (dg == 6) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;
				newRow1.insertCell().textContent = row.mark3;
				newRow1.insertCell().textContent = row.mark4;
				newRow1.insertCell().textContent = row.mark5;
				newRow1.insertCell().textContent = row.mark6;

			} else if (dg == 7) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;
				newRow1.insertCell().textContent = row.mark3;
				newRow1.insertCell().textContent = row.mark4;
				newRow1.insertCell().textContent = row.mark5;
				newRow1.insertCell().textContent = row.mark6;
				newRow1.insertCell().textContent = row.mark7;

			} else if (dg == 8) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;
				newRow1.insertCell().textContent = row.mark3;
				newRow1.insertCell().textContent = row.mark4;
				newRow1.insertCell().textContent = row.mark5;
				newRow1.insertCell().textContent = row.mark6;
				newRow1.insertCell().textContent = row.mark7;
				newRow1.insertCell().textContent = row.mark8;



			} else if (dg == 9) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;
				newRow1.insertCell().textContent = row.mark3;
				newRow1.insertCell().textContent = row.mark4;
				newRow1.insertCell().textContent = row.mark5;
				newRow1.insertCell().textContent = row.mark6;
				newRow1.insertCell().textContent = row.mark7;
				newRow1.insertCell().textContent = row.mark8;
				newRow1.insertCell().textContent = row.mark9;



			} else if (dg == 10) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;
				newRow1.insertCell().textContent = row.mark3;
				newRow1.insertCell().textContent = row.mark4;
				newRow1.insertCell().textContent = row.mark5;
				newRow1.insertCell().textContent = row.mark6;
				newRow1.insertCell().textContent = row.mark7;
				newRow1.insertCell().textContent = row.mark8;
				newRow1.insertCell().textContent = row.mark7;
				newRow1.insertCell().textContent = row.mark8;

				newRow1.insertCell().textContent = row.mark9;
				newRow1.insertCell().textContent = row.mark10;


			} else if (dg == 11) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;
				newRow1.insertCell().textContent = row.mark3;
				newRow1.insertCell().textContent = row.mark4;
				newRow1.insertCell().textContent = row.mark5;
				newRow1.insertCell().textContent = row.mark6;
				newRow1.insertCell().textContent = row.mark7;
				newRow1.insertCell().textContent = row.mark8;
				newRow1.insertCell().textContent = row.mark9;
				newRow1.insertCell().textContent = row.mark10;
				newRow1.insertCell().textContent = row.mark11;
				//newRow1.insertCell().textContent = row.mark12;



			} else if (dg == 12) {
				newRow1.insertCell().textContent = row.mark1;
				newRow1.insertCell().textContent = row.mark2;
				newRow1.insertCell().textContent = row.mark3;
				newRow1.insertCell().textContent = row.mark4;
				newRow1.insertCell().textContent = row.mark5;
				newRow1.insertCell().textContent = row.mark6;
				newRow1.insertCell().textContent = row.mark7;
				newRow1.insertCell().textContent = row.mark8;
				newRow1.insertCell().textContent = row.mark9;
				newRow1.insertCell().textContent = row.mark10;
				newRow1.insertCell().textContent = row.mark11;
				newRow1.insertCell().textContent = row.mark12;



			} else {
				var dov=document.getElementById("error");
				dov.innerHTML="Please enter exam number from 1 to 12 to get incomplete students ";
			}

		}








		//}
	})
	let newRow = table.insertRow();

	newRow.insertCell().textContent = row.no = ++number;



	newRow.insertCell().textContent = row.firstname;
	newRow.insertCell().textContent = row.midlename;
	newRow.insertCell().textContent = mark1 = row.mark1;

	newRow.insertCell().textContent = mark2 = row.mark2;
	newRow.insertCell().textContent = mark3 = row.mark3;
	newRow.insertCell().textContent = mark4 = row.mark4;
	newRow.insertCell().textContent = mark5 = row.mark5;
	if (sn == 5) {
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5);

		newRow.insertCell().textContent = sum;



	} else if (sn == 6) {

		newRow.insertCell().textContent = mark6 = row.mark6;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6);
		newRow.insertCell().textContent = sum;



	} else if (sn == 7) {
		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7);
		newRow.insertCell().textContent = sum;


	} else if (sn == 8) {
		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;

		newRow.insertCell().textContent = mark8 = row.mark8;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8);
		newRow.insertCell().textContent = sum;


	} else if (sn == 9) {
		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;

		newRow.insertCell().textContent = mark8 = row.mark8;


		newRow.insertCell().textContent = mark9 = row.mark9;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9);
		newRow.insertCell().textContent = sum;


	} else if (sn == 10) {
		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;

		newRow.insertCell().textContent = mark8 = row.mark8;


		newRow.insertCell().textContent = mark9 = row.mark9;

		newRow.insertCell().textContent = mark10 = row.mark10;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10);

		newRow.insertCell().textContent = sum;


	} else if (sn == 11) {
		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;

		newRow.insertCell().textContent = mark8 = row.mark8;


		newRow.insertCell().textContent = mark9 = row.mark9;

		newRow.insertCell().textContent = mark10 = row.mark10;


		newRow.insertCell().textContent = mark11 = row.mark11;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)
		+parseFloat(mark10)+parseFloat(mark11);

		newRow.insertCell().textContent = sum;


	} else if (sn == 12) {
		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;

		newRow.insertCell().textContent = mark8 = row.mark8;


		newRow.insertCell().textContent = mark9 = row.mark9;

		newRow.insertCell().textContent = mark10 = row.mark10;


		newRow.insertCell().textContent = mark11 = row.mark11;


		newRow.insertCell().textContent = mark12 = row.mark12;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9);
		+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);

		newRow.insertCell().textContent = sum;


	}











	newRow.insertCell().innerHTML = `<a onClick="update(this)"style="font-size:50px" class=" text-success">&#9998;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


	//	newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger">delete<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

});
function myFunction() {
	document.getElementById("myDropdown")
	.classList.toggle("show");
}

function onformsubmit() {
	if (vldate()) {
		if (selectedRow == null) {
			atr();
			dataArr.push(Object.fromEntries(new FormData(myForm).entries()));

			localStorage.setItem(dt, JSON.stringify(dataArr));
			document.getElementById('id01').style.display = "none";
			alert("saved successfully");
			//refresh();
			body();
			let newRow = table.insertRow();

			newRow.insertCell().textContent = myForm.no.value = ++number;



			newRow.insertCell().textContent = myForm.fname.value;
			newRow.insertCell().textContent = myForm.midle.value;
			newRow.insertCell().textContent = myForm.mark1.value;
			newRow.insertCell().textContent = myForm.mark2.value;
			newRow.insertCell().textContent = myForm.mark3.value;
			newRow.insertCell().textContent = myForm.mark4.value;

			newRow.insertCell().textContent = myForm.mark5.value;
			if (sn == 5) {
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value);


				newRow.insertCell().textContent = sum;


			} else if (sn == 6) {
				newRow.insertCell().textContent = myForm.mark6.value;

				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value);


				newRow.insertCell().textContent = sum;


			} else if (sn == 7) {
				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value);


				newRow.insertCell().textContent = sum;

			} else if (sn == 8) {
				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;

				newRow.insertCell().textContent = myForm.mark8.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value);

				newRow.insertCell().textContent = sum;


			} else if (sn == 9) {
				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;

				newRow.insertCell().textContent = myForm.mark8.value;

				newRow.insertCell().textContent = myForm.mark9.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value);

				newRow.insertCell().textContent = sum;

			} else if (sn == 10) {
				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;

				newRow.insertCell().textContent = myForm.mark8.value;

				newRow.insertCell().textContent = myForm.mark9.value;

				newRow.insertCell().textContent = myForm.mark10.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value)+parseFloat(myForm.mark10.value);

				newRow.insertCell().textContent = sum;


			} else if (sn == 11) {
				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;

				newRow.insertCell().textContent = myForm.mark8.value;

				newRow.insertCell().textContent = myForm.mark9.value;

				newRow.insertCell().textContent = myForm.mark10.value;

				newRow.insertCell().textContent = myForm.mark11.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value)+parseFloat(myForm.mark10.value)+parseFloat(myForm.mark11.value);

				newRow.insertCell().textContent = sum;

			} else if (sn == 12) {
				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;

				newRow.insertCell().textContent = myForm.mark8.value;

				newRow.insertCell().textContent = myForm.mark9.value;

				newRow.insertCell().textContent = myForm.mark10.value;

				newRow.insertCell().textContent = myForm.mark11.value;

				newRow.insertCell().textContent = myForm.mark12.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value)+parseFloat(myForm.mark10.value)+parseFloat(myForm.mark11.value)+parseFloat(myForm.mark12.value);

				newRow.insertCell().textContent = sum;


			}
			newRow.insertCell().innerHTML = `<a onClick="update(this)"style="font-size:50px" class=" text-success">&#9998;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


			//newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger">delete<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

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

	var a = sum/sn;
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


	if (sn == null) {
		alert("pleas select number of exam that your student taken by clicking on red button or snumber then you got plus sign button");

		document.querySelector('#hid1').style.display = "none";
		var bk = document.querySelector('#hid0');
		bk.setAttribute("class", "blinck btn");
	}
	if (mrk == null) {
		alert("pleas select number of subjects that your student taken by clicking on red button or snumber then you got plus sign button");

		//document.querySelector('#hid1').style.display="none";
		var bk = document.querySelector('.lu');
		bk.setAttribute("class", "bg-danger");
	}

	sb.forEach(row=> {
		/*
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
	 */
		var l1 = document.querySelector('.lt1').innerHTML = row.sb1;
		var l2 = document.querySelector('.lt2').innerHTML = row.sb2;
		var l3 = document.querySelector('.lt3').innerHTML = row.sb3;
		var l4 = document.querySelector('.lt4').innerHTML = row.sb4;
		var l5 = document.querySelector('.lt5').innerHTML = row.sb5;
		var l6 = document.querySelector('.lt6').innerHTML = row.sb6;
		var l7 = document.querySelector('.lt7').innerHTML = row.sb7;
		var l8 = document.querySelector('.lt8').innerHTML = row.sb8;
		var l9 = document.querySelector('.lt9').innerHTML = row.sb9;
		var l10 = document.querySelector('.lt10').innerHTML = row.sb10;
		var l11 = document.querySelector('.lt11').innerHTML = row.sb11;
		var l12 = document.querySelector('.lt12').innerHTML = row.sb12;


		var l1 = document.querySelector('.lp1').innerHTML = row.sb1;
		var l2 = document.querySelector('.lp2').innerHTML = row.sb2;
		var l3 = document.querySelector('.lp3').innerHTML = row.sb3;
		var l4 = document.querySelector('.lp4').innerHTML = row.sb4;
		var l5 = document.querySelector('.lp5').innerHTML = row.sb5;
		var l6 = document.querySelector('.lp6').innerHTML = row.sb6;
		var l7 = document.querySelector('.lp7').innerHTML = row.sb7;
		var l8 = document.querySelector('.lp8').innerHTML = row.sb8;
		var l9 = document.querySelector('.lp9').innerHTML = row.sb9;
		var l10 = document.querySelector('.lp10').innerHTML = row.sb10;
		var l11 = document.querySelector('.lp11').innerHTML = row.sb11;
		var l12 = document.querySelector('.lp12').innerHTML = row.sb12;

	})

	var mark6 = document.querySelector('#mark6');
	var mark7 = document.querySelector('#mark7');
	var mark8 = document.querySelector('#mark8');
	var mark9 = document.querySelector('#mark9');
	var mark10 = document.querySelector('#mark10');
	var mark11 = document.querySelector('#mark11');
	var mark12 = document.querySelector('#mark12');
	/*var l6 = document.querySelector('#l6');
	var l7 = document.querySelector('#l7');
	var l8 = document.querySelector('#l8');
	var l9 = document.querySelector('#l9');
	var l10 = document.querySelector('#l10');
	var l11 = document.querySelector('#l11');
	var l12 = document.querySelector('#l12');
     */
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



	if (sn == 5) {
		mark6.setAttribute("type", "hidden");
		mark7.setAttribute("type", "hidden");
		mark8.setAttribute("type", "hidden");
		mark9.setAttribute("type", "hidden");
		mark10.setAttribute("type", "hidden");
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");

		/*l6.style.display="none";
l7.style.display="none";
l8.style.display="none";
l9.style.display="none";
l10.style.display="none";
l11.style.display="none";
l12.style.display="none";*/
		mk6.style.display = "none";
		mk7.style.display = "none";
		mk8.style.display = "none";
		mk9.style.display = "none";
		mk10.style.display = "none";
		mk11.style.display = "none";
		mk12.style.display = "none";
		s5.style.display = "none";
		sb5.style.display = "none";

	} else if (sn == 6) {
		s6.style.display = "none";
		mark7.setAttribute("type", "hidden");
		mark8.setAttribute("type", "hidden");
		mark9.setAttribute("type", "hidden");
		mark10.setAttribute("type", "hidden");
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");

		sb6.style.display = "none";
		/*l7.style.display="none";
l8.style.display="none";
l9.style.display="none";
l10.style.display="none";
l11.style.display="none";
l12.style.display="none";
*/
		mk7.style.display = "none";
		mk8.style.display = "none";
		mk9.style.display = "none";
		mk10.style.display = "none";
		mk11.style.display = "none";
		mk12.style.display = "none";


	} else if (sn == 7) {
		s7.style.display = "none";
		mark8.setAttribute("type", "hidden");
		mark9.setAttribute("type", "hidden");
		mark10.setAttribute("type", "hidden");
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");
		sb7.style.display = "none";

		/*l8.style.display="none";
l9.style.display="none";
l10.style.display="none";
l11.style.display="none";
l12.style.display="none";
*/
		mk8.style.display = "none";
		mk9.style.display = "none";
		mk10.style.display = "none";
		mk11.style.display = "none";
		mk12.style.display = "none";


	} else if (sn == 8) {
		s8.style.display = "none";
		mark9.setAttribute("type", "hidden");
		mark10.setAttribute("type", "hidden");
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");
		sb8.style.display = "none";
		/*l9.style.display="none";
l10.style.display="none";
l11.style.display="none";
l12.style.display="none";
*/
		mk9.style.display = "none";
		mk10.style.display = "none";
		mk11.style.display = "none";
		mk12.style.display = "none";


	} else if (sn == 9) {
		s9.style.display = "none";
		mark10.setAttribute("type", "hidden");
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");
		sb9.style.display = "none";

		/*l10.style.display="none";
l11.style.display="none";
l12.style.display="none";
*/
		mk10.style.display = "none";
		mk11.style.display = "none";
		mk12.style.display = "none";

	} else if (sn == 10) {
		s10.style.display = "none";
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");
		sb10.style.display = "none";
		/*l11.style.display="none";
l12.style.display="none";
*/


		mk11.style.display = "none";
		mk12.style.display = "none";


	} else if (sn == 11) {
		s11.style.display = "none";
		mark12.setAttribute("type", "hidden");
		sb11.style.display = "none";

		//l12.style.display="none";
		mk12.style.display = "none";

	}
}
/*function onDelete(td) {
	if (confirm('are you sure to delate this data')) {
		row = td.parentElement.parentElement;
		var index = row.rowIndex-1;
		mrk.splice(index, 1);
		localStorage.setItem(dt, JSON.stringify(mrk));

		document.getElementById("myTable").deleteRow(row.rowIndex);


		alert("deleted successful ");
	}

}*/

function printa() {
	/*var tb = document.querySelector('table');
	document.querySelector('#hid').style.display = "none";
	document.querySelector('#hid1').style.display = "none";
	document.querySelector('#hid2').style.display = "none";
	document.querySelector('#hid0').style.display = "none";
    document.querySelector('#set').style.display = "none";

	tb.setAttribute("class", "table table-condensed table-striped table-hover bg-white");
tb.setAttribute("style","")*/

	window.print();
}
function dlt() {
	if (confirm("are you sure to delete this table this action can makes you to lost "))
		var pas = prompt("enter your password");

	var ppas = localStorage.getItem("pas");
	if (pas == ppas) {
		localStorage.removeItem(dt);
		alert("table deleted successfully ");
	} else {
		alert("inccorect password");
	}
}
function snumber() {
	var sn = document.querySelector('#sn').value;
	localStorage.setItem('mn', sn);
	alert("your are set number of subjects that taken by your students are "+sn+" and saved successfully");
	document.querySelector('#id03').style.display = "none";

}
var sp = document.querySelector('#sup');
sp.addEventListener('click', ()=> {
	var sn = document.querySelector('#sn').value;
	localStorage.setItem('mn', sn);
	alert("your are set number of subjects that taken by your students are "+sn+" and saved successfully");
	document.querySelector('#id03').style.display = "none";

});
function update(td) {
	body();
	document.getElementById('id02').style.display = "block";

	row = td.parentElement.parentElement;
	var index = row.rowIndex - 1;
	var dat = dataArr[index];
	var inputNL = document.querySelector('.inputNL');
	inputNL.setAttribute("value", dat.firstname);
	var stmn = document.getElementById('stmn');
	stmn.innerHTML = "Full name "+dat.firstname+" "+dat.midlename
	var inputNH = document.querySelector('.inputNH');
	inputNH.setAttribute("value", dat.lastname);
	var inputJK = document.querySelector('.inputJK');
	inputJK.setAttribute("value", dat.sid);

	var inputA = document.querySelector('.inputA');
	inputA.setAttribute("value", dat.age);
	var gender = document.querySelector('.gender');
	gender.setAttribute("value", dat.gender);
	var midl = document.querySelector('.midle ');
	midl.setAttribute("value", dat.midlename);

	var mark1b = document.querySelector('.markbn');
	mark1b.setAttribute("value", dat.mark1);

	var mark2b = document.querySelector('.markb2');
	mark2b.setAttribute("value", dat.mark2);

	var mark3b = document.querySelector('.markb3');
	mark3b.setAttribute("value", dat.mark3);

	var mark4b = document.querySelector('.markb4');
	mark4b.setAttribute("value", dat.mark4);

	var mark5b = document.querySelector('.markb5');
	mark5b.setAttribute("value", dat.mark5);

	var mark6b = document.querySelector('.markb6');
	mark6b.setAttribute("value", dat.mark6);

	var mark7b = document.querySelector('.markb7');
	mark7b.setAttribute("value", dat.mark7);

	var mark8b = document.querySelector('.markb8');
	mark8b.setAttribute("value", dat.mark8);

	var mark9b = document.querySelector('.markb9');
	mark9b.setAttribute("value", dat.mark9);

	var mark10b = document.querySelector('#markb10');
	mark10b.setAttribute("value", dat.mark10);

	var mark11b = document.querySelector('.markb11');
	mark11b.setAttribute("value", dat.mark11);

	var mark12b = document.querySelector('.markb12');
	mark12b.setAttribute("value", dat.mark12);


	var sv = document.querySelector('#sbmt');
	sv.addEventListener('click', ()=> {
		if (upvldate()) {
			var firstname = document.querySelector('#inputNL').value;
			var lastname = document.querySelector('#inputNH').value;
			var sid = document.querySelector('#inputJK').value;
			var age = document.querySelector('#inputA').value;
			var gender = document.querySelector('#gender').value;
			var id = document.querySelector('#id').value;
			var midlename = document.querySelector('.midle').value;

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
			var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)
			+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);
			var av = sum/sn;
			var id = dat.id
			var left = dat.left;
			dataArr[index] = {
				left,
				id,
				av,
				firstname,
				lastname,
				midlename,
				sid,
				age,
				gender,
				mark1,
				mark2,
				mark3,
				mark4,
				mark5,
				mark6,
				mark7,
				mark8,
				mark9,
				mark10,
				mark11,
				mark12,
				sum
			};



			localStorage.setItem(dt, JSON.stringify(dataArr));
			document.getElementById('id02').style.display = "none";

			alert("updated successfully");

		}//uprefresh();
	});
}

function vldate() {
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
	var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);
	if (sum >= 0 && sum <= 100) {

		return true;

	} else {
		alert("you entered mark is not valid the sum of mark must be between 0 and 100 Please check again");

		return false;
	}

}
function upvldate() {
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
	var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);
	if (sum >= 0 && sum <= 100) {

		return true;

	} else {
		alert("you entered mark is not valid the sum of mark must be between 0 and 100 Please check again");

		return false;
	}

}
function refresh() {
	//document.querySelector('#fname').innerHTML = "";
	//document.querySelector('#lname').innerHTML = "";
	document.querySelector('.mark1').value = "0";
	document.querySelector('.mark2').value = "0";
	document.querySelector('.mark3').value = "0";
	document.querySelector('.mark4').value = "0";
	document.querySelector('.mark5').value = "0";
	document.querySelector('.mark6').value = "0";
	document.querySelector('.mark7').value = "0";
	document.querySelector('.mark8').value = "0";

	document.querySelector('.mark9').value = "0";
	document.querySelector('.mark10').value = "0";
	document.querySelector('.mark11').value = "0";
	document.querySelector('.mark12').value = "0";

}
function uprefresh() {
	//document.querySelector('#fname').innerHTML = "";
	//document.querySelector('#lname').innerHTML = "";
	document.querySelector('.markbn').value = "0";
	document.querySelector('.markb2').value = "0";
	document.querySelector('.markb3').value = "0";
	document.querySelector('.markb4').value = "0";
	document.querySelector('.markb5').value = "0";
	document.querySelector('.markb6').value = "0";
	document.querySelector('.markb7').value = "0";
	document.querySelector('.markb8').value = "0";

	document.querySelector('.markb9').value = "0";
	document.querySelector('.markb10').value = "0";
	document.querySelector('.markb11').value = "0";
	document.querySelector('.markb12').value = "0";

}