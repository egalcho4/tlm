# Tlm_android_app
# Introduction
Teacher load Minimizer is software project developed by only javascript,html,css and it easily converted to android app
or host to and static web hostenger this app helps any one to store his student information on localstorage and manupulate those data easily offline
and the basic function of this project are:
1 Resgistration 
2 Mark Management
3 Attendance Control
4 Rank student
5 Generate Report
6 Final save data as csv file
This is little about Tlm project 


## Installation
To use this software you have to build it as android app or web app
To convert apk file use android studio web view widget
Or clone this project and click on 
```bash 
Index.html
```
#don’t forgot this 
If you change browser you will lose your data
## Usage
```bash 
Sample html code
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
	<div class="data-intery">
		<form action="" method="" name="form" onsubmit="return submite()">
			<label>username</label>
			<input type="text" name="username">
			<label>first name</label>
			<input type="text" name="fname">
			<label>laste name</label>
			<input type="text" name="lname">
			<button type="submit">add new record</button>
		</form>
	</div>
	<div class="output">
		<table>
			<thead>
				<th>add same thing</th>
			</thead>
			<tbody></tbody>
		</table>
	</div>

</body>
</html>
```

```bash 
Const datastored=JSON.parse(localstorage.getItem(‘datastored’ ||’[]’));
//We get data from local storage like this
Const form=document.forms[‘form_name’],
//we get form data by using this format
Function submite(){
datastored.push(Object.fromEntries(new FormData(form).entries()));
//first we push data like this to insert new array element before saving to database
localStorage.setItem(‘datastored’,JSON.stringfiey(datastored’));
// now our data saved successfully
}
//for output
Const table=document.queryselector(‘table tbody’);
Datastored.forEach(row=>{
Let newrow=table.insertRow();
newrow.insertNewCell().textContent=row.usename;
newrow.insertNewCell().textContent=row.fname;
newrow.insertNewCell().textContent=row.lname;


})
```
##

## Background



## License

[MIT](https://choosealicense.com/licenses/mit/)
MIT License

Copyright (c) 2024 egalcho4

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
