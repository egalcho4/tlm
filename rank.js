const
myForm = document.forms['my-form'], sbform = document.forms['sbform'],
frm = document.forms['myfrm'],
table = document.querySelector('#myTable tbody'),
sur = JSON.parse(localStorage.getItem('sur') || '[]'),
sreg = JSON.parse(localStorage.getItem('sreg') || '[]'),
scc = localStorage.getItem('scc'),

mrk = JSON.parse(localStorage.getItem('rank') || '[]'),
sb = JSON.parse(localStorage.getItem('sr2') || '[]'),
dataArr = JSON.parse(localStorage.getItem('dataArr') || '[]');
var sn = localStorage.getItem("mna");
var selectedRow = null;
var number = 0;
var rank = 0;
var nb=0
mrk.forEach(row=>{
	console.log(row)
		})
setTimeout(function(){
	var td_length=parseInt(sn)+4;
	var per=100/td_length
	var tb=document.querySelectorAll('#myTable th')
	for(var i =0; i<=tb.length;i++){
		tb[i].style.width=per+"%"
	}

	
	 },0)
var sc = document.getElementById('scc');
sreg.forEach(row=> {
	var op = document.createElement("option");
	op.innerHTML = row.gr+" "+row.sec+" "+row.sub;
	op.setAttribute("value", ++number)
	sc.appendChild(op)
});

function report() {
	document.getElementById('id06').style.display = "block";
}

function check() {
	document.getElementById('loader').style.display = "block";
	document.getElementById('prove').style.display = "none";

	setTimeout(function() {
		document.getElementById('loader').style.display = "none";

		document.getElementById('prove').style.display = "block";

	}, 4000);
	var min = document.getElementById('min1').value;
	var max = document.getElementById('max1').value;
	var perc = document.getElementById('perc');
	var numb = document.getElementById('snmb');
	var bwn = document.getElementById('bwn');

	var num = [];
	var total = [];
	var fm = [];
	var nfm = []
	var max1 = parseInt(max);
	var min1 = parseInt(min);
	mrk.forEach(row=> {
		if (row.gender == "female") {
			nfm.push(row.av);


		}
		if (row.av <= max1 && row.av >= min1 && row.gender == "female") {
			fm.push(row.av);
		}
		if (row.av <= max1 && row.av >= min1) {
			num.push(row.av);

		}

	})
	var tabl = document.querySelector("#repot tbody");
	//for(var i=0;i<2;i++){

	var newrowas= tabl.insertRow()
	newrowas.insertCell().textContent=++nb
    	
    	var pr=num.length;
     var f=fm.length;
	 var male=pr-f;

    	newrowas.insertCell().innerHTML=min+"_"+max;
    	newrowas.insertCell().innerHTML=male;
    	newrowas.insertCell().innerHTML=f;
		newrowas.insertCell().innerHTML=pr
    	


	//console.log(fm.length )
	//console/.log(nfm.length)
	/*var bw = document.createElement("div");
	bw.innerHTML = min+"&"+max+"<br><span>female</span><br>"+min+"&"+max;
	bwn.appendChild(bw)
	var per = document.createElement("div");
	var pr = (num.length/mrk.length)*100;
	var f = (fm.length/nfm.length)*100;
	per.innerHTML = parseInt(pr)+"%"+"<br><br>"+parseInt(f)+"%";
	perc.appendChild(per)

	var st = document.createElement("div");
	st.innerHTML = num.length+"<br><br>"+fm.length;
	numb.appendChild(st)*/
}




mrk.sort(function(a, b) {
	return b.av-a.av;
})
window.addEventListener('click', ()=> {
	document.getElementById('mr').style.display = "none"
})
var search = document.getElementById('search');
search.addEventListener('keyup', ()=> {
	var input,
	th,
	filter,
	found,
	table,
	tr,
	td,
	i,
	j;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	th = table.getElementsByTagName("th");

	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td");
		for (j = 0; j < td.length; j++) {
			//th[j].innerHTML.toUpperCase();
			if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
				//th[j].innerHTML.toUpperCase();
				found = true;

			}
		} if (found) {
			tr[i].style.display = ""; found = false;
		} else {
			tr[i].style.display = "none";
			//th[i].style.display = "block";
		}
	}

})
function myfrm() {
	var sgc = document.getElementById('scc').value;
	localStorage.setItem('scc',
		sgc);
	alert("saved successfully");
	document.querySelector('#id05').style.display = "none";
	//window.location.reload();


}
function subform() {


	sb.push(Object.fromEntries(new FormData(sbform).entries()));

	localStorage.setItem('sr2',
		JSON.stringify(sb));
	alert("saved successfully");
	document.querySelector('#id04').style.display = "none";
	window.location.reload();




}
mrk.forEach(row=> {
	let newRow = table.insertRow();

	newRow.insertCell().textContent = row.no = ++number;
	newRow.insertCell().innerHTML = row.firstname
	newRow.insertCell().innerHTML = row.midlename
	newRow.insertCell().textContent = mark1 = row.mark1;
	if (sn == 2) {
		newRow.insertCell().textContent = mark2 = row.mark2;
		var sum = parseFloat(mark1)+parseFloat(mark2);

		newRow.insertCell().textContent = sum;
		var av = sum/sn;
		newRow.insertCell().textContent = av+"%";

	} else if (sn == 3) {
		newRow.insertCell().textContent = mark2 = row.mark2;

		newRow.insertCell().textContent = mark3 = row.mark3;

		//newRow.insertCell().textContent =mark4= row.mark4;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3);

		newRow.insertCell().textContent = sum;
		var av = sum/sn;
		newRow.insertCell().textContent = av+"%";

	} else if (sn == 4) {
		newRow.insertCell().textContent = mark2 = row.mark2;

		newRow.insertCell().textContent = mark3 = row.mark3;

		newRow.insertCell().textContent = mark4 = row.mark4;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4);

		newRow.insertCell().textContent = sum;
		var av = sum/sn;

		newRow.insertCell().textContent = av+"%";

	} else if (sn == 5) {
		newRow.insertCell().textContent = mark2 = row.mark2;

		newRow.insertCell().textContent = mark3 = row.mark3;

		newRow.insertCell().textContent = mark4 = row.mark4;

		newRow.insertCell().textContent = mark5 = row.mark5;

		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5);

		newRow.insertCell().textContent = sum;
		var av = sum/sn;

		newRow.insertCell().textContent = av+"%";


	} else if (sn == 6) {
		newRow.insertCell().textContent = mark2 = row.mark2;

		newRow.insertCell().textContent = mark3 = row.mark3;

		newRow.insertCell().textContent = mark4 = row.mark4;

		newRow.insertCell().textContent = mark5 = row.mark5;

		newRow.insertCell().textContent = mark6 = row.mark6;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6);
		newRow.insertCell().textContent = sum;
		var av = sum/sn;

		newRow.insertCell().textContent = av+"%";



	} else if (sn == 7) {
		newRow.insertCell().textContent = mark2 = row.mark2;

		newRow.insertCell().textContent = mark3 = row.mark3;

		newRow.insertCell().textContent = mark4 = row.mark4;

		newRow.insertCell().textContent = mark5 = row.mark5;

		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7);
		newRow.insertCell().textContent = sum;
		var av = sum/sn;

		newRow.insertCell().textContent = av+"%";


	} else if (sn == 8) {
		newRow.insertCell().textContent = mark2 = row.mark2;

		newRow.insertCell().textContent = mark3 = row.mark3;

		newRow.insertCell().textContent = mark4 = row.mark4;

		newRow.insertCell().textContent = mark5 = row.mark5;

		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;

		newRow.insertCell().textContent = mark8 = row.mark8;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8);
		newRow.insertCell().textContent = sum;
		var av = sum/sn;

		newRow.insertCell().textContent = av+"%";


	} else if (sn == 9) {
		newRow.insertCell().textContent = mark2 = row.mark2;

		newRow.insertCell().textContent = mark3 = row.mark3;

		newRow.insertCell().textContent = mark4 = row.mark4;

		newRow.insertCell().textContent = mark5 = row.mark5;

		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;

		newRow.insertCell().textContent = mark8 = row.mark8;


		newRow.insertCell().textContent = mark9 = row.mark9;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9);
		newRow.insertCell().textContent = sum;
		var av = sum/sn;

		newRow.insertCell().textContent = av+"%";


	} else if (sn == 10) {
		newRow.insertCell().textContent = mark2 = row.mark2;

		newRow.insertCell().textContent = mark3 = row.mark3;

		newRow.insertCell().textContent = mark4 = row.mark4;

		newRow.insertCell().textContent = mark5 = row.mark5;

		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;

		newRow.insertCell().textContent = mark8 = row.mark8;


		newRow.insertCell().textContent = mark9 = row.mark9;

		newRow.insertCell().textContent = mark10 = row.mark10;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10);

		newRow.insertCell().textContent = sum;
		var av = sum/sn;

		newRow.insertCell().textContent = av+"%";


	} else if (sn == 11) {
		newRow.insertCell().textContent = mark2 = row.mark2;

		newRow.insertCell().textContent = mark3 = row.mark3;

		newRow.insertCell().textContent = mark4 = row.mark4;

		newRow.insertCell().textContent = mark5 = row.mark5;

		newRow.insertCell().textContent = mark6 = row.mark6;


		newRow.insertCell().textContent = mark7 = row.mark7;

		newRow.insertCell().textContent = mark8 = row.mark8;


		newRow.insertCell().textContent = mark9 = row.mark9;

		newRow.insertCell().textContent = mark10 = row.mark10;


		newRow.insertCell().textContent = mark11 = row.mark11;
		var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)
		+parseFloat(mark10)+parseFloat(mark11);

		newRow.insertCell().textContent = sum;
		var av = sum/sn;

		newRow.insertCell().textContent = av+"%";


	} else if (sn == 12) {
		newRow.insertCell().textContent = mark2 = row.mark2;

		newRow.insertCell().textContent = mark3 = row.mark3;

		newRow.insertCell().textContent = mark4 = row.mark4;

		newRow.insertCell().textContent = mark5 = row.mark5;

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
		var av = sum/sn;

		newRow.insertCell().textContent = av+"%";


	}








	newRow.insertCell().textContent = ++rank;




	newRow.insertCell().innerHTML = `<a onClick="update(this)"style="" class="btn text-success">&#9998;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


	newRow.insertCell().innerHTML = `<a onClick="onDelete(this)"style="" class="btn text-danger">X<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

});
function myFunction() {
	document.getElementById("myDropdown")
	.classList.toggle("show");
}

function onformsubmit() {
	if (vldate()) {
		if (selectedRow == null) {
			atr();
			mrk.push(Object.fromEntries(new FormData(myForm).entries()));

			localStorage.setItem('rank', JSON.stringify(mrk));
			document.getElementById('id01').style.display = "none";
			alert("saved successfully");
			window.location.reload();
			//refresh();
			body();
			let newRow = table.insertRow();

			newRow.insertCell().textContent = myForm.no.value = ++number;



			newRow.insertCell().textContent = myForm.firstname.value;
			newRow.insertCell().textContent = myForm.midlename.value;
			newRow.insertCell().textContent = myForm.mark1.value;
			//newRow.insertCell().textContent = myForm.mark2.value;



			if (sn == 2) {
				newRow.insertCell().textContent = myForm.mark2.value;

				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value); //+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value);


				newRow.insertCell().textContent = sum;
				var av = sum/sn;

				newRow.insertCell().textContent = av;

			} else if (sn == 3) {
				newRow.insertCell().textContent = myForm.mark2.value;

				newRow.insertCell().textContent = myForm.mark3.value;
				//newRow.insertCell().textContent =mark4= row.mark4;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value);


				newRow.insertCell().textContent = sum;
				var av = sum/sn;

				newRow.insertCell().textContent = av;

			} else if (sn == 4) {
				newRow.insertCell().textContent = myForm.mark2.value;

				newRow.insertCell().textContent = myForm.mark3.value;

				newRow.insertCell().textContent = myForm.mark4.value;

				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value);


				newRow.insertCell().textContent = sum;
				var av = sum/sn;

				newRow.insertCell().textContent = av;

			} else if (sn == 5) {
				newRow.insertCell().textContent = myForm.mark2.value;

				newRow.insertCell().textContent = myForm.mark3.value;

				newRow.insertCell().textContent = myForm.mark4.value;

				newRow.insertCell().textContent = myForm.mark5.value;

				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value);


				newRow.insertCell().textContent = sum;
				var av = sum/sn;

				newRow.insertCell().textContent = av;


			} else if (sn == 6) {
				newRow.insertCell().textContent = myForm.mark2.value;

				newRow.insertCell().textContent = myForm.mark3.value;

				newRow.insertCell().textContent = myForm.mark4.value;

				newRow.insertCell().textContent = myForm.mark5.value;

				newRow.insertCell().textContent = myForm.mark6.value;

				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value);


				newRow.insertCell().textContent = sum;
				var av = sum/sn;

				newRow.insertCell().textContent = av;


			} else if (sn == 7) {
				newRow.insertCell().textContent = myForm.mark2.value;

				newRow.insertCell().textContent = myForm.mark3.value;

				newRow.insertCell().textContent = myForm.mark4.value;

				newRow.insertCell().textContent = myForm.mark5.value;

				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value);


				newRow.insertCell().textContent = sum;
				var av = sum/sn;

				newRow.insertCell().textContent = av;

			} else if (sn == 8) {
				newRow.insertCell().textContent = myForm.mark2.value;

				newRow.insertCell().textContent = myForm.mark3.value;

				newRow.insertCell().textContent = myForm.mark4.value;

				newRow.insertCell().textContent = myForm.mark5.value;

				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;

				newRow.insertCell().textContent = myForm.mark8.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value);

				newRow.insertCell().textContent = sum;

				var av = sum/sn;

				newRow.insertCell().textContent = av;

			} else if (sn == 9) {
				newRow.insertCell().textContent = myForm.mark2.value;

				newRow.insertCell().textContent = myForm.mark3.value;

				newRow.insertCell().textContent = myForm.mark4.value;

				newRow.insertCell().textContent = myForm.mark5.value;

				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;

				newRow.insertCell().textContent = myForm.mark8.value;

				newRow.insertCell().textContent = myForm.mark9.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value);

				newRow.insertCell().textContent = sum;
				var av = sum/sn;

				newRow.insertCell().textContent = av;

			} else if (sn == 10) {
				newRow.insertCell().textContent = myForm.mark2.value;

				newRow.insertCell().textContent = myForm.mark3.value;

				newRow.insertCell().textContent = myForm.mark4.value;

				newRow.insertCell().textContent = myForm.mark5.value;

				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;

				newRow.insertCell().textContent = myForm.mark8.value;

				newRow.insertCell().textContent = myForm.mark9.value;

				newRow.insertCell().textContent = myForm.mark10.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value)+parseFloat(myForm.mark10.value);

				newRow.insertCell().textContent = sum;

				var av = sum/sn;

				newRow.insertCell().textContent = av;

			} else if (sn == 11) {
				newRow.insertCell().textContent = myForm.mark2.value;

				newRow.insertCell().textContent = myForm.mark3.value;

				newRow.insertCell().textContent = myForm.mark4.value;

				newRow.insertCell().textContent = myForm.mark5.value;

				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;

				newRow.insertCell().textContent = myForm.mark8.value;

				newRow.insertCell().textContent = myForm.mark9.value;

				newRow.insertCell().textContent = myForm.mark10.value;

				newRow.insertCell().textContent = myForm.mark11.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value)+parseFloat(myForm.mark10.value)+parseFloat(myForm.mark11.value);

				newRow.insertCell().textContent = sum;
				var av = sum/sn;

				newRow.insertCell().textContent = av;

			} else if (sn == 12) {
				newRow.insertCell().textContent = myForm.mark2.value;

				newRow.insertCell().textContent = myForm.mark3.value;

				newRow.insertCell().textContent = myForm.mark4.value;

				newRow.insertCell().textContent = myForm.mark5.value;

				newRow.insertCell().textContent = myForm.mark6.value;

				newRow.insertCell().textContent = myForm.mark7.value;

				newRow.insertCell().textContent = myForm.mark8.value;

				newRow.insertCell().textContent = myForm.mark9.value;

				newRow.insertCell().textContent = myForm.mark10.value;

				newRow.insertCell().textContent = myForm.mark11.value;

				newRow.insertCell().textContent = myForm.mark12.value;
				var sum = parseFloat(myForm.mark1.value)+parseFloat(myForm.mark2.value)+parseFloat(myForm.mark3.value)+parseFloat(myForm.mark4.value)+parseFloat(myForm.mark5.value)+parseFloat(myForm.mark6.value)+parseFloat(myForm.mark7.value)+parseFloat(myForm.mark8.value)+parseFloat(myForm.mark9.value)+parseFloat(myForm.mark10.value)+parseFloat(myForm.mark11.value)+parseFloat(myForm.mark12.value);

				newRow.insertCell().textContent = sum;
				var av = sum/sn;

				newRow.insertCell().textContent = av;


			}
			newRow.insertCell().textContent = ++rank;


			newRow.insertCell().innerHTML = `<a onClick="update(this)" class="btn btn-success">&#9998;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


			newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" style="font-size:50px" class="btn text-danger">X<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

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
		bk.setAttribute("class", "blinck btn ");
	}
	if (mrk == null) {
		alert("pleas select number of subjects that your student taken by clicking on red button or snumber then you got plus sign button");

		//document.querySelector('#hid1').style.display="none";
		var bk = document.querySelector('.lu');
		bk.setAttribute("class", "bg-danger");
	}

	sb.forEach(row=> {

		var l1 = document.querySelector('.l1').innerHTML = row.sb1;
		var l2 = document.querySelector('.l2').innerHTML = row.sb2;
		var l3 = document.querySelector('.l3').innerHTML = row.sb3;
		var l4 = document.querySelector('.l4').innerHTML = row.sb4;
		var l5 = document.querySelector('.l5').innerHTML = row.sb5;
		var l6 = document.querySelector('.l6').innerHTML = row.sb6;
		var l7 = document.querySelector('.l7').innerHTML = row.sb7;
		var l8 = document.querySelector('.l8').innerHTML = row.sb8;
		var l9 = document.querySelector('.l9').innerHTML = row.sb9;
		var l10 = document.querySelector('.l10').innerHTML = row.sb10;
		var l11 = document.querySelector('.l11').innerHTML = row.sb11;
		var l12 = document.querySelector('.l12').innerHTML = row.sb12;
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
	var mark2 = document.querySelector('#mark2');

	var mark3 = document.querySelector('#mark3');
	var mark4 = document.querySelector('#mark4');
	var mark5 = document.querySelector('#mark5');

	var mark6 = document.querySelector('#mark6');
	var mark7 = document.querySelector('#mark7');
	var mark8 = document.querySelector('#mark8');
	var mark9 = document.querySelector('#mark9');
	var mark10 = document.querySelector('#mark10');
	var mark11 = document.querySelector('#mark11');
	var mark12 = document.querySelector('#mark12');

	var markb2 = document.querySelector('.markb2');

	var markb3 = document.querySelector('.markb3');
	var markb4 = document.querySelector('.markb4');
	var markb5 = document.querySelector('.markb5');

	var markb6 = document.querySelector('.markb6');
	var markb7 = document.querySelector('.markb7');
	var markb8 = document.querySelector('.markb8');
	var markb9 = document.querySelector('.markb9');
	var markb10 = document.querySelector('.markb10');
	var markb11 = document.querySelector('.markb11');
	var markb12 = document.querySelector('.markb12');


	var lp2 = document.querySelector('.lp2');
	var lp3 = document.querySelector('.lp3');
	var lp4 = document.querySelector('.lp4');
	var lp5 = document.querySelector('.lp5');

	var lp6 = document.querySelector('.lp6');
	var lp7 = document.querySelector('.lp7');
	var lp8 = document.querySelector('.lp8');
	var lp9 = document.querySelector('.lp9');
	var lp10 = document.querySelector('.lp10');
	var lp11 = document.querySelector('.lp11');
	var lp12 = document.querySelector('.lp12');


	var l2 = document.querySelector('#l2');
	var l3 = document.querySelector('#l3');
	var l4 = document.querySelector('#l4');
	var l5 = document.querySelector('#l5');

	var l6 = document.querySelector('#l6');
	var l7 = document.querySelector('#l7');
	var l8 = document.querySelector('#l8');
	var l9 = document.querySelector('#l9');
	var l10 = document.querySelector('#l10');
	var l11 = document.querySelector('#l11');
	var l12 = document.querySelector('#l12');
	var mk3 = document.querySelector('#mk3');
	var mk4 = document.querySelector('#mk4');
	var mk5 = document.querySelector('#mk5');

	var mk6 = document.querySelector('#mk6');
	var mk7 = document.querySelector('#mk7');
	var mk8 = document.querySelector('#mk8');
	var mk9 = document.querySelector('#mk9');
	var mk10 = document.querySelector('#mk10');
	var mk11 = document.querySelector('#mk11');
	var mk12 = document.querySelector('#mk12');
	var s2 = document.querySelector('.s3');
	var s3 = document.querySelector('.s3');
	var s4 = document.querySelector('.s4');
	//var s4 = document.querySelector('.s4');

	var s5 = document.querySelector('.s5');
	var s6 = document.querySelector('.s6');
	var s7 = document.querySelector('.s7');
	var s8 = document.querySelector('.s8');
	var s9 = document.querySelector('.s9');
	var s10 = document.querySelector('.s10');
	var s11 = document.querySelector('.s11');
	var sb3 = document.querySelector('.sb3');
	var sb4 = document.querySelector('.sb4');
	var sb4 = document.querySelector('.sb5');
	var sb2 = document.querySelector('.sb2');

	var sb5 = document.querySelector('.sb5');
	var sb6 = document.querySelector('.sb6');
	var sb7 = document.querySelector('.sb7');
	var sb8 = document.querySelector('.sb8');
	var sb9 = document.querySelector('.sb9');
	var sb10 = document.querySelector('.sb10');
	var sb11 = document.querySelector('.sb11');
	var sr2 = document.querySelector('#sr2');

	if (sn == 2) {
		mark6.setAttribute("type", "hidden");
		mark7.setAttribute("type", "hidden");
		mark8.setAttribute("type", "hidden");
		mark9.setAttribute("type", "hidden");
		mark10.setAttribute("type", "hidden");
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");
		mark3.setAttribute("type", "hidden");
		mark4.setAttribute("type", "hidden");
		mark5.setAttribute("type", "hidden");

		markb6.setAttribute("type", "hidden");
		markb7.setAttribute("type", "hidden");
		markb8.setAttribute("type", "hidden");
		markb9.setAttribute("type", "hidden");
		markb10.setAttribute("type", "hidden");
		markb11.setAttribute("type", "hidden");
		markb12.setAttribute("type", "hidden");
		markb3.setAttribute("type", "hidden");
		markb4.setAttribute("type", "hidden");
		markb5.setAttribute("type", "hidden");

		lp3.style.display = "none";
		lp4.style.display = "none";
		lp5.style.display = "none";

		lp6.style.display = "none";
		lp7.style.display = "none";
		lp8.style.display = "none";
		lp9.style.display = "none";
		lp10.style.display = "none";
		lp11.style.display = "none";
		lp12.style.display = "none";

		l3.style.display = "none";
		l4.style.display = "none";
		l5.style.display = "none";
		sr2.style.display = "none";

		l6.style.display = "none";
		l7.style.display = "none";
		l8.style.display = "none";
		l9.style.display = "none";
		l10.style.display = "none";
		l11.style.display = "none";
		l12.style.display = "none";
		mk3.style.display = "none";
		mk4.style.display = "none";
		mk5.style.display = "none";

		mk6.style.display = "none";
		mk7.style.display = "none";
		mk8.style.display = "none";
		mk9.style.display = "none";
		mk10.style.display = "none";
		mk11.style.display = "none";
		mk12.style.display = "none";
		s3.style.display = "none";
		sb2.style.display = "none";

	} else if (sn == 3) {
		mark6.setAttribute("type", "hidden");
		mark7.setAttribute("type", "hidden");
		mark8.setAttribute("type", "hidden");
		mark9.setAttribute("type", "hidden");
		mark10.setAttribute("type", "hidden");
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");
		mark4.setAttribute("type", "hidden");
		mark5.setAttribute("type", "hidden");
		l4.style.display = "none";
		l5.style.display = "none";

		l6.style.display = "none";
		l7.style.display = "none";
		l8.style.display = "none";
		l9.style.display = "none";
		l10.style.display = "none";
		l11.style.display = "none";
		l12.style.display = "none";
		mk4.style.display = "none";
		mk5.style.display = "none";

		mk6.style.display = "none";
		mk7.style.display = "none";
		mk8.style.display = "none";
		mk9.style.display = "none";
		mk10.style.display = "none";
		mk11.style.display = "none";
		mk12.style.display = "none";
		s3.style.display = "none";
		sb3.style.display = "none";


	} else if (sn == 4) {
		markb5.setAttribute("type", "hidden");

		lp5.style.display = "none";

		mark6.setAttribute("type", "hidden");
		mark7.setAttribute("type", "hidden");
		mark8.setAttribute("type", "hidden");
		mark9.setAttribute("type", "hidden");
		mark10.setAttribute("type", "hidden");
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");
		mark5.setAttribute("type", "hidden");

		l6.style.display = "none";
		l5.style.display = "none";
		l7.style.display = "none";
		l8.style.display = "none";
		l9.style.display = "none";
		l10.style.display = "none";
		l11.style.display = "none";
		l12.style.display = "none";
		mk5.style.display = "none";

		mk6.style.display = "none";
		mk7.style.display = "none";
		mk8.style.display = "none";
		mk9.style.display = "none";
		mk10.style.display = "none";
		mk11.style.display = "none";
		mk12.style.display = "none";
		s4.style.display = "none";
		sb4.style.display = "none";

	} else if (sn == 5) {
		mark6.setAttribute("type", "hidden");
		mark7.setAttribute("type", "hidden");
		mark8.setAttribute("type", "hidden");
		mark9.setAttribute("type", "hidden");
		mark10.setAttribute("type", "hidden");
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");

		l6.style.display = "none";
		l7.style.display = "none";
		l8.style.display = "none";
		l9.style.display = "none";
		l10.style.display = "none";
		l11.style.display = "none";
		l12.style.display = "none";
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
		l7.style.display = "none";
		l8.style.display = "none";
		l9.style.display = "none";
		l10.style.display = "none";
		l11.style.display = "none";
		l12.style.display = "none";

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

		l8.style.display = "none";
		l9.style.display = "none";
		l10.style.display = "none";
		l11.style.display = "none";
		l12.style.display = "none";

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
		l9.style.display = "none";
		l10.style.display = "none";
		l11.style.display = "none";
		l12.style.display = "none";

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

		l10.style.display = "none";
		l11.style.display = "none";
		l12.style.display = "none";

		mk10.style.display = "none";
		mk11.style.display = "none";
		mk12.style.display = "none";

	} else if (sn == 10) {
		s10.style.display = "none";
		mark11.setAttribute("type", "hidden");
		mark12.setAttribute("type", "hidden");
		sb10.style.display = "none";
		l11.style.display = "none";
		l12.style.display = "none";



		mk11.style.display = "none";
		mk12.style.display = "none";


	} else if (sn == 11) {
		s11.style.display = "none";
		mark12.setAttribute("type", "hidden");
		sb11.style.display = "none";

		l12.style.display = "none";
		mk12.style.display = "none";

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
	tb.setAttribute("style", "");
	window.print();
}
function remove() {
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
	var dt = mrk[index];
	var fnameb = document.querySelector('.fnameb');
	fnameb.setAttribute("value", dt.firstname);

	var lnameb = document.querySelector('.lbn');
	lnameb.setAttribute("value", dt.lastname);
	var mgender = document.querySelector('#mgender');
	mgender.setAttribute("value", dt.gender);
	var midlename = document.querySelector('.mbn');
	midlename.setAttribute("value",dt.midlename);

	//var sid = document.querySelector('#sid');
	//sid.setAttribute("value",dt.sid);
	//var age= document.querySelector('#age');
	//age.setAttribute("value",dt.age);


	var mark1b = document.querySelector('.markbn');
	mark1b.setAttribute("value", dt.mark1);

	var mark2b = document.querySelector('.markb2');
	mark2b.setAttribute("value", dt.mark2);

	var mark3b = document.querySelector('.markb3');
	mark3b.setAttribute("value", dt.mark3);

	var mark4b = document.querySelector('.markb4');
	mark4b.setAttribute("value", dt.mark4);

	var mark5b = document.querySelector('.markb5');
	mark5b.setAttribute("value", dt.mark5);

	var mark6b = document.querySelector('.markb6');
	mark6b.setAttribute("value", dt.mark6);

	var mark7b = document.querySelector('.markb7');
	mark7b.setAttribute("value", dt.mark7);

	var mark8b = document.querySelector('.markb8');
	mark8b.setAttribute("value", dt.mark8);

	var mark9b = document.querySelector('.markb9');
	mark9b.setAttribute("value", dt.mark9);

	var mark10b = document.querySelector('#markb10');
	mark10b.setAttribute("value", dt.mark10);

	var mark11b = document.querySelector('.markb11');
	mark11b.setAttribute("value", dt.mark11);

	var mark12b = document.querySelector('.markb12');
	mark12b.setAttribute("value", dt.mark12);


	var sv = document.querySelector('#sbmt');
	sv.addEventListener('click', ()=> {
		if (upvldate()) {
			var firstname = document.querySelector('.fnameb').value;
			var lastname = document.querySelector('.lbn').value;
			var mark1 = document.querySelector('.markbn').value;
			var midlename = document.querySelector('#midle').value;
			var sid = document.querySelector('#sid').value;
			var age = document.querySelector('#age').value;

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
			var mgend = document.querySelector('#mgender').value;
			var gender = mgend;
			var sum = parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)
			+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);
			var av = sum/sn;
			var lastname = dt.lastname;
			var sid = dt.sid;
			var age = dt.age;
			var id = 0;
			mrk[index] = {
				id,
				age,
				sid,
				midlename,
				gender,
				sum,
				av,
				firstname,
				lastname,
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
				mark12
			};



			localStorage.setItem("rank", JSON.stringify(mrk));
			document.getElementById('id02').style.display = "none";

			alert("updated successfully");
			//window.location.reload();

		}uprefresh();
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
	if (mark1 >= 0 && mark1 <= 100 && mark2 >= 0 && mark2 <= 100 && mark3 >= 0 && mark3 <= 100 && mark4 >= 0 && mark4 <= 100 && mark4 >= 0 && mark4 <= 100 && mark6 >= 0 && mark6 <= 100 && mark7 >= 0 && mark7 <= 100 && mark8 >= 0 && mark8 <= 100 && mark9 >= 0 && mark9 <= 100 && mark10 >= 0 && mark10 <= 100 && mark11 >= 0 && mark11 <= 100 && mark12 >= 0 && mark12 <= 100) {

		return true;

	} else {
		alert("you entered mark is not valid mark must be between 0 and 100 Please check again");

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
	//var sum=parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8)+parseFloat(mark9)+parseFloat(mark10)+parseFloat(mark11)+parseFloat(mark12);

	if (mark1 >= 0 && mark1 <= 100 && mark2 >= 0 && mark2 <= 100 && mark3 >= 0 && mark3 <= 100 && mark4 >= 0 && mark4 <= 100 && mark4 >= 0 && mark4 <= 100 && mark6 >= 0 && mark6 <= 100 && mark7 >= 0 && mark7 <= 100 && mark8 >= 0 && mark8 <= 100 && mark9 >= 0 && mark9 <= 100 && mark10 >= 0 && mark10 <= 100 && mark11 >= 0 && mark11 <= 100 && mark12 >= 0 && mark12 <= 100) {

		return true;

	} else {
		alert("you entered mark is not valid mark must be between 0 and 100 Please check again");

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



function regupload() {
	var ap = "rank";
	const myForm1 = document.getElementById("myForm1");

	const csvFile = document.getElementById("csvFile");

	const mrk = JSON.parse(localStorage.getItem('rank') || '[]');


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

	myForm1.addEventListener("submit", function (e) {
		e.preventDefault();
		const input = csvFile.files[0];
		const reader = new FileReader();

		reader.onload = function (e) {
			const text = e.target.result;
			const data = csvToArray(text);
			localStorage.setItem('rank', JSON.stringify(data));
			//if(up()){


			//clearInterval(hello);
			//window.location.reload()

			//alert("successifully regitered")
			document.getElementById('id07').style.display = "none";

			document.getElementById('id08').style.display = "block";


		}

		reader.readAsText(input);

	});


}
function success() {
	var ap = "rank";
	const mrk = JSON.parse(localStorage.getItem('rank') || '[]');

	var mark1 = 0,
	mark2 = 0; mark3 = 0,
	mark4 = 0,
	mark5 = 0,
	mark6 = 0,
	mark7 = 0,
	mark8 = 0,
	mark9 = 0,
	mark10 = 0,
	mark11 = 0,
	mark12 = 0;
	for (var i = 0; i < mrk.length; i++) {
		//mark1[i]=0;mark2[i]=0;mark3[i]=0;mark4[i]=0;mark5[i]=0;mark6[i];mark7[i]=0;mark8[i]=0;mark9[i]=0;mark10[i]=0;mark11=[0];mark12=0;
		var firstname =mrk[i].firstname;
		var lastname = mrk[i].lastname;
		var midlename = mrk[i].midlename;
		var sid = mrk[i].sid;
		var age = mrk[i].age;
		var gender = mrk[i].gender;
		var av = 0;
		var sum = 0;
		mrk[i] = {
			firstname,
			lastname,
			midlename,
			sid,
			age,
			gender,
			sum,
			av,
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
			mark12
		}
		localStorage.setItem('rank', JSON.stringify(dataArr));
		document.getElementById('id08').style.display = "none";
		window.location.reload()
	}
}
