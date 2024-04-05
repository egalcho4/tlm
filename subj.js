const myform = document.forms['my-form'], table = document.querySelector('#myTable tbody'),
tabler = document.querySelector('#myTabler tbody'),
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

var selectedRow = null
var number = 0
var nb=0

function check(tb){
	document.getElementById('loader').style.display="block";
document.getElementById('prove').style.display="none";

	setTimeout(function() {
		document.getElementById('loader').style.display="none";

document.getElementById('prove').style.display="block";

	}, 4000);
	var ap=tb;
var marko=JSON.parse(localStorage.getItem(ap));
var min=document.getElementById('min1').value;
 var max=document.getElementById('max1').value;
 var perc=document.getElementById('perc');
 var numb=document.getElementById('snmb');
   var bwn=document.getElementById('bwn');
 
   var num=[];
   var total=[];
   var fm=[];
   var nfm=[];
   var max1 =parseInt(max);
   var min1=parseInt(min);


    marko.forEach(row=>{
    if(row.gender=="female"){
        nfm.push(row.av);
       
        
    }
     if(row.sum<=max1 && row.sum>=min1&& row.gender=="female"){
         fm.push(row.sum);
        }
        if(row.sum<=max1 && row.sum>=min1){
            num.push(row.sum);
            
        }
       
    })
    
    //console.log(fm.length )
    //console/.log(nfm.length)
    var tabl=document.querySelector("#repot tbody");
    //for(var i=0;i<2;i++){
		var newrowa=tabl.insertRow()
    	
    newrowa.insertCell().textContent=++nb
    	
    	var pr=num.length;
     var f=fm.length;
	 var male=pr-f;

    	newrowa.insertCell().innerHTML=min+"_"+max;
    	newrowa.insertCell().innerHTML=male;
    	newrowa.insertCell().innerHTML=f;
		newrowa.insertCell().innerHTML=pr
    	


    

}

dat.forEach(row => {
	if (selectedRow == null) {
		let newRow = table.insertRow()


		newRow.insertCell().textContent = row.no = ++number;
		newRow.insertCell().textContent = row.gr;
		newRow.insertCell().textContent = row.sec;

		newRow.insertCell().textContent = row.sub;
		//newRow.insertCell().innerHTML=`<div class="dropdowna" style="float:right;z-index:1"><img src="m.jpeg" alt="" onclick="myFunction()" class="dropbtna" style="width:30px;height:30px;border-radius:50%;margin-left:30px" id="img" /><div id="myDropdown" class="dropdown-content"><a href="home.html">home</a><a href="wus.html">doc</a><a href="about.html">About us</a><a href="#" onclick="window.open('index.html','_self')">logout</a></div></div>`;

		newRow.insertCell().innerHTML = `<a onClick="opend(this)" style="" class="btn text-primary">&#10149;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
		//newRow.insertCell().innerHTML = `<a onClick="update(this)"style="font-size:70px" class="btn text-success">&#9998;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

		newRow.insertCell().innerHTML = `<a onClick="Details(this)"style="" class="btn text-warning ">&#9865;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


		
		//newRow.insertCell().innerHTML = `<a onClick="onDelete(this)"style="font-size:70px" class="btn text-danger">X<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	}

})
var num = 0;
var arr = [];
var ar = [];
var arra = [];
var arrg = [];
var arg = [];
var arrag = [];
function move(test, color, p) {
	var elem = color;
	var width = 1;
	var id = setInterval(frame,
		50);
	function frame() {
		if (width >= p) {
			clearInterval(id);
		} else {
			width++;
			elem.style.height = width + '%';
			elem.innerHTML = width+"%";
			test.setAttribute("style", "border:4px solid black;  border-radius:10px;width:50px;height:100px;");
			color.setAttribute("style", "background-color:red;width:100%")
			color.style.height = p+"%";
		}
	}
}
function move1(test, color, p) {
	var elem = color;
	var width = 1;
	var id = setInterval(frame, 50);
	function frame() {
		if (width >= p) {
			clearInterval(id);
		} else {
			width++;
			elem.style.height = width + '%';
			elem.innerHTML = width+"%";
			test.setAttribute("style", "margin-bottom:0px;border:4px solid black;  border-radius:10px;width:50px;height:100px;");
			color.setAttribute("style", "margin-bottom:0px;background-color:green;width:100%")
			//color1.style.height=p1+"%";
		}
	}
}

function move2(test, color, p) {
	var elem = color;
	var width = 1;
	var id = setInterval(frame, 50);
	function frame() {
		if (width >= p) {
			clearInterval(id);
		} else {
			width++;
			elem.style.height = width + '%';
			elem.innerHTML = width+"%";
			test.setAttribute("style", "border:4px solid black;  border-radius:10px;width:50px;height:100px;");
			color.setAttribute("style", "background-color:yellow;width:100%")

		}
	}
}


function Details(td) {
	var gh = document.getElementById('id04');
	var t1 = document.getElementById('t1');
	var t2 = document.getElementById('t2');
	var t3 = document.getElementById('t3');
	var tg1 = document.getElementById('tg1');
	var tg2 = document.getElementById('tg2');
	var tg3 = document.getElementById('tg3');
	var test = document.getElementById('test');
	var color = document.getElementById('color');
	var test1 = document.getElementById('test1');
	var color1 = document.getElementById('color1');
	var test2 = document.getElementById('test2');
	var color2 = document.getElementById('color2');
var checkma=document.getElementById('checkma');

	gh.style.display = "block";
	row = td.parentElement.parentElement;
	var index = row.rowIndex-1;
	checkma.addEventListener('click',()=>{
		

	if(index==0){
		var ap="dataArr";
		check(ap);
	}else if(index==1){
		var ap="st2";
		check(ap);
	}else if(index==2){
		var ap="st3";
		check(ap);
	}else if(index==3){
		var ap="st4";
		check(ap);
	}else if(index==4){
		var ap="st5";
		check(ap);
	}else if(index==5){
		var ap="st6";
		check(ap);
	}else if(index==6){
		var ap="st7";
		check(ap);
	}else if(index==7){
		var ap="st8";
		check(ap);
	}else if(index==8){
		var ap="st9";
		check(ap);
	}else if(index==9){
		var ap="st10";
		check(ap);
	}
	});
	if (index == 0) {
		dataArr.forEach(row=> {

			if (row.sum >= 75) {
				ar.push(row.sum);
				if (row.gender == "female") {
					arg.push(row.sum);
				}
			} else if (row.sum >= 50 && row.sum < 75) {
				arra.push(row.sum);
				if (row.gender == "female") {
					arrag.push(row.sum);
				}
			} else if (row.sum < 50 && row.sum >= 0) {
				arr.push(row.sum);
				if (row.gender == "female") {
					arrg.push(row.sum);
				}

			}

		})
		t3.innerHTML = arr.length;
		t1.innerHTML = ar.length;
		t2.innerHTML = arra.length;
		tg3.innerHTML = arrg.length;
		tg1.innerHTML = arg.length;
		tg2.innerHTML = arrag.length;
		// console.log(dataArr.length)
		var dt = parseInt(dataArr.length);
		var dar = parseInt(arr.length);
		var p = (dar/dt)*100;
		var dt1 = parseInt(dataArr.length);
		var dar1 = parseInt(ar.length);
		var p1 = (dar1/dt1)*100;
		var dt2 = parseInt(dataArr.length);
		var dar2 = parseInt(arra.length);
		var p2 = (dar2/dt2)*100;
		color.innerHTML = p+"%";
		color1.innerHTML = p1+"%";
		color2.innerHTML = p2+"%";
		//test.setAttribute("style","border-radius:50%;border-bottom:"+p+"% solid blue")
		//test.setAttribute("style","border-radius:50%");

		move2(test2,
			color2,
			p2);

		move1(test1,
			color1,
			p1);
		//color2.style.height=p2+"%";
		move(test,
			color,
			p);




	} else if (index == 1) {
		st2.forEach(row=> {
			let newRow = tabler.insertRow()
			if (row.sum >= 75) {
				ar.push(row.sum);
				if (row.gender == "female") {
					arg.push(row.sum);
				}
			} else if (row.sum >= 50 && row.sum < 75) {
				arra.push(row.sum);
				if (row.gender == "female") {
					arrag.push(row.sum);
				}
			} else if (row.sum < 50 && row.sum >= 0) {
				arr.push(row.sum);
				if (row.gender == "female") {
					arrg.push(row.sum);
				}

			}

		})
		t3.innerHTML = arr.length;
		t1.innerHTML = ar.length;
		t2.innerHTML = arra.length;
		tg3.innerHTML = arrg.length;
		tg1.innerHTML = arg.length;
		tg2.innerHTML = arrag.length;
		// console.log(dataArr.length)
		var dt = parseInt(dataArr.length);
		var dar = parseInt(arr.length);
		var p = (dar/dt)*100;
		var dt1 = parseInt(dataArr.length);
		var dar1 = parseInt(ar.length);
		var p1 = (dar1/dt1)*100;
		var dt2 = parseInt(dataArr.length);
		var dar2 = parseInt(arra.length);
		var p2 = (dar2/dt2)*100;
		color.innerHTML = p+"%";
		color1.innerHTML = p1+"%";
		color2.innerHTML = p2+"%";
		//test.setAttribute("style","border-radius:50%;border-bottom:"+p+"% solid blue")
		//test.setAttribute("style","border-radius:50%");

		move2(test2,
			color2,
			p2);

		move1(test1,
			color1,
			p1);
		//color2.style.height=p2+"%";
		move(test,
			color,
			p);
	} else if (index == 2) {
		st3.forEach(row=> {
			let newRow = tabler.insertRow()
			if (row.sum >= 75) {
				ar.push(row.sum);
				if (row.gender == "female") {
					arg.push(row.sum);
				}
			} else if (row.sum >= 50 && row.sum < 75) {
				arra.push(row.sum);
				if (row.gender == "female") {
					arrag.push(row.sum);
				}
			} else if (row.sum < 50 && row.sum >= 0) {
				arr.push(row.sum);
				if (row.gender == "female") {
					arrg.push(row.sum);
				}

			}

		})
		t3.innerHTML = arr.length;
		t1.innerHTML = ar.length;
		t2.innerHTML = arra.length;
		tg3.innerHTML = arrg.length;
		tg1.innerHTML = arg.length;
		tg2.innerHTML = arrag.length;
		// console.log(dataArr.length)
		var dt = parseInt(dataArr.length);
		var dar = parseInt(arr.length);
		var p = (dar/dt)*100;
		var dt1 = parseInt(dataArr.length);
		var dar1 = parseInt(ar.length);
		var p1 = (dar1/dt1)*100;
		var dt2 = parseInt(dataArr.length);
		var dar2 = parseInt(arra.length);
		var p2 = (dar2/dt2)*100;
		color.innerHTML = p+"%";
		color1.innerHTML = p1+"%";
		color2.innerHTML = p2+"%";
		//test.setAttribute("style","border-radius:50%;border-bottom:"+p+"% solid blue")
		//test.setAttribute("style","border-radius:50%");

		move2(test2,
			color2,
			p2);

		move1(test1,
			color1,
			p1);
		//color2.style.height=p2+"%";
		move(test,
			color,
			p);
	} else if (index == 3) {
		st4.forEach(row=> {
			let newRow = tabler.insertRow()
			if (row.sum >= 75) {
				ar.push(row.sum);
				if (row.gender == "female") {
					arg.push(row.sum);
				}
			} else if (row.sum >= 50 && row.sum < 75) {
				arra.push(row.sum);
				if (row.gender == "female") {
					arrag.push(row.sum);
				}
			} else if (row.sum < 50 && row.sum >= 0) {
				arr.push(row.sum);
				if (row.gender == "female") {
					arrg.push(row.sum);
				}

			}

		})
		t3.innerHTML = arr.length;
		t1.innerHTML = ar.length;
		t2.innerHTML = arra.length;
		tg3.innerHTML = arrg.length;
		tg1.innerHTML = arg.length;
		tg2.innerHTML = arrag.length;
		// console.log(dataArr.length)
		var dt = parseInt(dataArr.length);
		var dar = parseInt(arr.length);
		var p = (dar/dt)*100;
		var dt1 = parseInt(dataArr.length);
		var dar1 = parseInt(ar.length);
		var p1 = (dar1/dt1)*100;
		var dt2 = parseInt(dataArr.length);
		var dar2 = parseInt(arra.length);
		var p2 = (dar2/dt2)*100;
		color.innerHTML = p+"%";
		color1.innerHTML = p1+"%";
		color2.innerHTML = p2+"%";
		//test.setAttribute("style","border-radius:50%;border-bottom:"+p+"% solid blue")
		//test.setAttribute("style","border-radius:50%");

		move2(test2,
			color2,
			p2);

		move1(test1,
			color1,
			p1);
		//color2.style.height=p2+"%";
		move(test,
			color,
			p);
	} else if (index == 4) {
		st5.forEach(row=> {
			let newRow = tabler.insertRow()
			if (row.sum >= 75) {
				ar.push(row.sum);
				if (row.gender == "female") {
					arg.push(row.sum);
				}
			} else if (row.sum >= 50 && row.sum < 75) {
				arra.push(row.sum);
				if (row.gender == "female") {
					arrag.push(row.sum);
				}
			} else if (row.sum < 50 && row.sum >= 0) {
				arr.push(row.sum);
				if (row.gender == "female") {
					arrg.push(row.sum);
				}

			}

		})
		t3.innerHTML = arr.length;
		t1.innerHTML = ar.length;
		t2.innerHTML = arra.length;
		tg3.innerHTML = arrg.length;
		tg1.innerHTML = arg.length;
		tg2.innerHTML = arrag.length;
		// console.log(dataArr.length)
		var dt = parseInt(dataArr.length);
		var dar = parseInt(arr.length);
		var p = (dar/dt)*100;
		var dt1 = parseInt(dataArr.length);
		var dar1 = parseInt(ar.length);
		var p1 = (dar1/dt1)*100;
		var dt2 = parseInt(dataArr.length);
		var dar2 = parseInt(arra.length);
		var p2 = (dar2/dt2)*100;
		color.innerHTML = p+"%";
		color1.innerHTML = p1+"%";
		color2.innerHTML = p2+"%";
		//test.setAttribute("style","border-radius:50%;border-bottom:"+p+"% solid blue")
		//test.setAttribute("style","border-radius:50%");

		move2(test2,
			color2,
			p2);

		move1(test1,
			color1,
			p1);
		//color2.style.height=p2+"%";
		move(test,
			color,
			p);
	} else if (index == 5) {
		st6.forEach(row=> {
			let newRow = tabler.insertRow()
			if (row.sum >= 75) {
				ar.push(row.sum);
				if (row.gender == "female") {
					arg.push(row.sum);
				}
			} else if (row.sum >= 50 && row.sum < 75) {
				arra.push(row.sum);
				if (row.gender == "female") {
					arrag.push(row.sum);
				}
			} else if (row.sum < 50 && row.sum >= 0) {
				arr.push(row.sum);
				if (row.gender == "female") {
					arrg.push(row.sum);
				}

			}

		})
		t3.innerHTML = arr.length;
		t1.innerHTML = ar.length;
		t2.innerHTML = arra.length;
		tg3.innerHTML = arrg.length;
		tg1.innerHTML = arg.length;
		tg2.innerHTML = arrag.length;
		// console.log(dataArr.length)
		var dt = parseInt(dataArr.length);
		var dar = parseInt(arr.length);
		var p = (dar/dt)*100;
		var dt1 = parseInt(dataArr.length);
		var dar1 = parseInt(ar.length);
		var p1 = (dar1/dt1)*100;
		var dt2 = parseInt(dataArr.length);
		var dar2 = parseInt(arra.length);
		var p2 = (dar2/dt2)*100;
		color.innerHTML = p+"%";
		color1.innerHTML = p1+"%";
		color2.innerHTML = p2+"%";
		//test.setAttribute("style","border-radius:50%;border-bottom:"+p+"% solid blue")
		//test.setAttribute("style","border-radius:50%");

		move2(test2,
			color2,
			p2);

		move1(test1,
			color1,
			p1);
		//color2.style.height=p2+"%";
		move(test,
			color,
			p);
	} else if (index == 6) {
		st7.forEach(row=> {
			let newRow = tabler.insertRow()
			if (row.sum >= 75) {
				ar.push(row.sum);
				if (row.gender == "female") {
					arg.push(row.sum);
				}
			} else if (row.sum >= 50 && row.sum < 75) {
				arra.push(row.sum);
				if (row.gender == "female") {
					arrag.push(row.sum);
				}
			} else if (row.sum < 50 && row.sum >= 0) {
				arr.push(row.sum);
				if (row.gender == "female") {
					arrg.push(row.sum);
				}

			}

		})
		t3.innerHTML = arr.length;
		t1.innerHTML = ar.length;
		t2.innerHTML = arra.length;
		tg3.innerHTML = arrg.length;
		tg1.innerHTML = arg.length;
		tg2.innerHTML = arrag.length;
		// console.log(dataArr.length)
		var dt = parseInt(dataArr.length);
		var dar = parseInt(arr.length);
		var p = (dar/dt)*100;
		var dt1 = parseInt(dataArr.length);
		var dar1 = parseInt(ar.length);
		var p1 = (dar1/dt1)*100;
		var dt2 = parseInt(dataArr.length);
		var dar2 = parseInt(arra.length);
		var p2 = (dar2/dt2)*100;
		color.innerHTML = p+"%";
		color1.innerHTML = p1+"%";
		color2.innerHTML = p2+"%";
		//test.setAttribute("style","border-radius:50%;border-bottom:"+p+"% solid blue")
		//test.setAttribute("style","border-radius:50%");

		move2(test2,
			color2,
			p2);

		move1(test1,
			color1,
			p1);
		//color2.style.height=p2+"%";
		move(test,
			color,
			p);
	} else if (index == 7) {
		st8.forEach(row=> {
			let newRow = tabler.insertRow()
			if (row.sum >= 75) {
				ar.push(row.sum);
				if (row.gender == "female") {
					arg.push(row.sum);
				}
			} else if (row.sum >= 50 && row.sum < 75) {
				arra.push(row.sum);
				if (row.gender == "female") {
					arrag.push(row.sum);
				}
			} else if (row.sum < 50 && row.sum >= 0) {
				arr.push(row.sum);
				if (row.gender == "female") {
					arrg.push(row.sum);
				}

			}

		})
		t3.innerHTML = arr.length;
		t1.innerHTML = ar.length;
		t2.innerHTML = arra.length;
		tg3.innerHTML = arrg.length;
		tg1.innerHTML = arg.length;
		tg2.innerHTML = arrag.length;
		// console.log(dataArr.length)
		var dt = parseInt(dataArr.length);
		var dar = parseInt(arr.length);
		var p = (dar/dt)*100;
		var dt1 = parseInt(dataArr.length);
		var dar1 = parseInt(ar.length);
		var p1 = (dar1/dt1)*100;
		var dt2 = parseInt(dataArr.length);
		var dar2 = parseInt(arra.length);
		var p2 = (dar2/dt2)*100;
		color.innerHTML = p+"%";
		color1.innerHTML = p1+"%";
		color2.innerHTML = p2+"%";
		//test.setAttribute("style","border-radius:50%;border-bottom:"+p+"% solid blue")
		//test.setAttribute("style","border-radius:50%");

		move2(test2,
			color2,
			p2);

		move1(test1,
			color1,
			p1);
		//color2.style.height=p2+"%";
		move(test,
			color,
			p);
	} else if (index == 8) {
		st9.forEach(row=> {
			let newRow = tabler.insertRow()
			if (row.sum >= 75) {
				ar.push(row.sum);
				if (row.gender == "female") {
					arg.push(row.sum);
				}
			} else if (row.sum >= 50 && row.sum < 75) {
				arra.push(row.sum);
				if (row.gender == "female") {
					arrag.push(row.sum);
				}
			} else if (row.sum < 50 && row.sum >= 0) {
				arr.push(row.sum);
				if (row.gender == "female") {
					arrg.push(row.sum);
				}

			}

		})
		t3.innerHTML = arr.length;
		t1.innerHTML = ar.length;
		t2.innerHTML = arra.length;
		tg3.innerHTML = arrg.length;
		tg1.innerHTML = arg.length;
		tg2.innerHTML = arrag.length;
		// console.log(dataArr.length)
		var dt = parseInt(dataArr.length);
		var dar = parseInt(arr.length);
		var p = (dar/dt)*100;
		var dt1 = parseInt(dataArr.length);
		var dar1 = parseInt(ar.length);
		var p1 = (dar1/dt1)*100;
		var dt2 = parseInt(dataArr.length);
		var dar2 = parseInt(arra.length);
		var p2 = (dar2/dt2)*100;
		color.innerHTML = p+"%";
		color1.innerHTML = p1+"%";
		color2.innerHTML = p2+"%";
		//test.setAttribute("style","border-radius:50%;border-bottom:"+p+"% solid blue")
		//test.setAttribute("style","border-radius:50%");

		move2(test2,
			color2,
			p2);

		move1(test1,
			color1,
			p1);
		//color2.style.height=p2+"%";
		move(test,
			color,
			p);
	} else if (index == 9) {
		st10.forEach(row=> {
			let newRow = tabler.insertRow()
			if (row.sum >= 75) {
				ar.push(row.sum);
				if (row.gender == "female") {
					arg.push(row.sum);
				}
			} else if (row.sum >= 50 && row.sum < 75) {
				arra.push(row.sum);
				if (row.gender == "female") {
					arrag.push(row.sum);
				}
			} else if (row.sum < 50 && row.sum >= 0) {
				arr.push(row.sum);
				if (row.gender == "female") {
					arrg.push(row.sum);
				}

			}

		})
		t3.innerHTML = arr.length;
		t1.innerHTML = ar.length;
		t2.innerHTML = arra.length;
		tg3.innerHTML = arrg.length;
		tg1.innerHTML = arg.length;
		tg2.innerHTML = arrag.length;
		// console.log(dataArr.length)
		var dt = parseInt(dataArr.length);
		var dar = parseInt(arr.length);
		var p = (dar/dt)*100;
		var dt1 = parseInt(dataArr.length);
		var dar1 = parseInt(ar.length);
		var p1 = (dar1/dt1)*100;
		var dt2 = parseInt(dataArr.length);
		var dar2 = parseInt(arra.length);
		var p2 = (dar2/dt2)*100;
		color.innerHTML = p+"%";
		color1.innerHTML = p1+"%";
		color2.innerHTML = p2+"%";
		//test.setAttribute("style","border-radius:50%;border-bottom:"+p+"% solid blue")
		//test.setAttribute("style","border-radius:50%");

		move2(test2,
			color2,
			p2);

		move1(test1,
			color1,
			p1);
		//color2.style.height=p2+"%";
		move(test,
			color,
			p);
	}
	
}
function form() {
	if (selectedRow == null) {

		dat.push(Object.fromEntries(new FormData(myform).entries()));
		localStorage.setItem('sreg', JSON.stringify(dat));
		document.getElementById('id01').style.display = "none";

		alert("saved successfully ");
		let newRow = table.insertRow()

		newRow.insertCell().textContent = myform.no.value = ++number;
		newRow.insertCell().textContent = myform.gr.value;
		newRow.insertCell().textContent = myform.sec.value;

		newRow.insertCell().textContent = myform.sub.value;



		newRow.insertCell().innerHTML = `<a onClick="opend(this)" style="font-size:50px" class="btn text-primary">&#10149;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`
		newRow.insertCell().innerHTML = `<a onClick="update(this)"style="font-size:50px" class="btn text-success">&#9998;<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`


		newRow.insertCell().innerHTML = `<a onClick="onDelete(this)"style="font-size:50px" class="btn text-danger">X<i class="fas fa-times"></i></a>` // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>`

	}}
function onDelete(td) {
	if (confirm("are you sure")) {
		row = td.parentElement.parentElement;

		var index = row.rowIndex-1;
		dat.splice(index, 1);
		localStorage.setItem("sreg", JSON.stringify(dat));

		document.getElementById("myTable").deleteRow(row.rowIndex);


	}
}
function opend(td) {
	row = td.parentElement.parentElement;
	var index = row.rowIndex-1;

	if (index == 0) {
		window.open("mark.html", '_self');


	} else if (index == 1) {
		window.open("su/s2.html", '_self');


	} else if (index == 2) {
		window.open("su/s3.html", '_self');


	} else if (index == 3) {
		window.open("su/s4.html", '_self');


	} else if (index == 4) {
		window.open("su/s5.html", '_self');


	} else if (index == 5) {
		window.open("su/s6.html", '_self');


	} else if (index == 6) {
		window.open("su/s7.html", '_self');


	} else if (index == 7) {
		window.open("su/s8.html", '_self');


	} else if (index == 8) {
		window.open("su/s9.html", '_self');


	} else if (index == 9) {
		window.open("su/s10.html", '_self');


	} else {
		document.getElementById('id03').style.display="block";
		var don=document.getElementById('warn');
		
	
	don.innerHTML=	"our system only handle 10 subjects sorry dear";
	
		
	}

}


function update(td) {
	document.getElementById('id02').style.display = 'block';

	row = td.parentElement.parentElement;
	var index = row.rowIndex - 1;
	var bn = dat[index];
	var sec = document.querySelector('.sec');
	sec.setAttribute("value", bn.sec);
	var sub = document.querySelector('.sub');
	sub.setAttribute("value", bn.sub);
	var gr = document.querySelector('.name');
	gr.setAttribute("value", bn.gr);
	var sv = document.querySelector('#sup');
	sv.addEventListener('click', ()=> {
		var no=++number;
		//var gr=document.querySelector('#gr').value;
		var sec = document.querySelector('.sec').value;
		var sub = document.querySelector('.sub').value;
		var gr = document.querySelector('.name').value;

		//var m2= document.querySelector('#m2').value;

		dat[index] = {
			no, gr, sec, sub
		};



		localStorage.setItem("sreg", JSON.stringify(dat));
		document.getElementById('id02').style.display = 'none ';


		alert("updated successfully ");



	});
}
function add() {
	if (dat.length < 10 && dat.length >= 0) {
		document.getElementById('id01').style.display = 'block';
	} else {
		alert("you are reached max number Please delete same rows");
	}
}
function langu() {
	if (confirm("this actions may delete all student mark of different section Please take before produced ")) {
		document.querySelector('#id03').style.display = "block";
		var sup = document.querySelector('#sup');
		sup.addEventListener('click', ()=> {
			var type = document.querySelector('#type').value;
			localStorage.setItem('type', type);
			localStorage.removeItem("mrk");
			localStorage.removeItem("s2");
			localStorage.removeItem("s3");
			localStorage.removeItem("s4");
			localStorage.removeItem("s5");
			localStorage.removeItem("s6");
			localStorage.removeItem("s7");
			localStorage.removeItem("s8");
			localStorage.removeItem("s9");

			alert("successful seted");

		});
	}
}