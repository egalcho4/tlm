const 
  myForm       = document.forms['my-form']  // form name pada tag html form

 ,table        = document.querySelector('#myTable tbody')


, sur       = JSON.parse(localStorage.getItem('sur') || '[]')

, dataArr      = JSON.parse(localStorage.getItem('dataArr') || '[]');

var selectedRow = null;
var number = 0;





sur.forEach(row=>{
    let newRow = table.insertRow();
newRow.insertCell().textContent = row.no = ++number;
           
        
  
            newRow.insertCell().textContent = row.sub;
            newRow.insertCell().textContent = row.sec;
            //newRow.insertCell().textContent = row.dt;
            
            newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" style="color:red">delete<i class="fas fa-times"></i></a>`; 
});
function onformsubmit() {
	if (selectedRow == null) {
         
            sur.push(Object.fromEntries(new FormData(myForm).entries()));
            
            localStorage.setItem('sur', JSON.stringify(sur));
            document.getElementById
('id01').style.display="none";

            refresh();
            body();
            let newRow = table.insertRow();
            
            newRow.insertCell().textContent = myForm.no.value = ++number;
           
        
  
            newRow.insertCell().textContent = myForm.sub.value;
            newRow.insertCell().textContent = myForm.sec.value;
            //newRow.insertCell().textContent = myForm.dt.value;
            
            newRow.insertCell().innerHTML = `<a onClick="onDelete(this)" style="color:red">delete<i class="fas fa-times"></i></a>`;
}
}
function refresh(){
	document.querySelector('#fname').innerHTML="";
document.querySelector('#lname').innerHTML="";
document.querySelector('#dt').innerHTML="";

	
}


var modal = document.getElementById
('id01');




window.onclick = function(event) {
    if (event.target == modal) {
     modal.style.display = "none";
    }
}
