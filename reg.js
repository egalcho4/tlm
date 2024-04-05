const 
  myForm       = document.forms['my-form']  
  
  //myForm2       = document.forms['my-form2'] 

, table        = document.querySelector('#myTable tbody')


, dataArr       = JSON.parse(localStorage.getItem('dataArr') || '[]');


var selectedRow = null
var number = 0
var key,mk;






dataArr.forEach(row=>{
    let newRow = table.insertRow()

    newRow.insertCell().textContent = row.no = ++number
    newRow.insertCell().textContent = row.inputNL
    newRow.insertCell().textContent = row.inputJK
    
    newRow.insertCell().textContent = row.inputNH
    newRow.insertCell().textContent = row.inputA 
newRow.insertCell().textContent = row.inputb 
newRow.insertCell().textContent = row.depa

newRow.insertCell().innerHTML = `<a onClick="onDelete(this)">delete<i class="fas fa-times"></i></a>`
   
	
})

function onFormSubmit() {
    if (validate()) {
        if (selectedRow == null) {
            
            dataArr.push(Object.fromEntries(new FormData(myForm).entries()))
            
            localStorage.setItem('dataArr', JSON.stringify( dataArr ))
            
            
            let newRow = table.insertRow()
            
            newRow.insertCell().textContent = myForm.no.value = ++number
          
            newRow.insertCell().textContent = myForm.inputNL.value
            newRow.insertCell().textContent = myForm.inputJK.value
            newRow.insertCell().textContent = myForm.inputNH.value
            newRow.insertCell().textContent = myForm.inputA.value
            newRow.insertCell().textContent = row.inputb 

            newRow.insertCell().innerHTML = `<a onClick="onDelete(this)">x<i class="fas fa-times"></i></a>` 
           
           // newRow.insertCell().innerHTML = `<a onClick="addmark(this)"><button ><a href="mark.html">add mark</a></button><i class="fas fa-times"></i></a>` 
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
    selectedRow = null;
}

// Function untuk Delete Data
function onDelete(td) {
    if (confirm('are you sure to delate this data')) {
        row = td.parentElement.parentElement;
        document.getElementById("myTable").deleteRow(row.rowIndex);
        //resetForm();
       localstorage.removeItem(dataArr) 
    }
    hapusDataLocal(td.parentElement.parentElement)
}

function hapusDataLocal(dataItem) {    
    dataArr.forEach(function(task, index) {
        if (dataItem.textContent === task ) {            
            dataArr.splice(index, 1);
        }
    });
    localStorage.setItem(dataArr, JSON.stringify(dataArr))
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
function reg(){
	document.querySelector('#form').style.display="block";
	document.querySelector('#myTable').style.display="none";
}