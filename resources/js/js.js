function save(){
	var title = document.getElementById('textTitle').value;
	var subtitle = document.getElementById('textSubTitle').value;
	var writer = document.getElementById('textWriter').value;
	var book = {title: title, subtitle: subtitle, writer: writer};
	var bookJson = JSON.stringify(book);
	
	window['localStorage'].setItem('bookJson', bookJson);
	document.getElementById('response').innerHTML ="you saved your book";
}
	
function showAnswers (){
	if (window['localStorage'].getItem('bookJson')){
		var book = window['localStorage'].getItem('bookJson');
		var bookJson = JSON.parse(book);
		document.getElementById('response').innerHTML = 'This is the book you are reading: <br>' +
														bookJson.title + '<br>' +
														bookJson.subtitle + '<br>' +      
														bookJson.writer + '<br>' ;
	} else {
		document.getElementById('response').innerHTML = "You don't have books reading yet.";
	}
}

function loadBook(){
	myArray = 6;
	window['localStorage'].setItem('array', myArray);
    console.log(window['localStorage'].getItem('array'));
} 


function saveAuthor(){
	var name = document.getElementById('textName').value;
	var surname = document.getElementById('textSurname').value;
	var author = {name: name, surname: surname};
	var authorJson = JSON.stringify(author);
	
	window['localStorage'].setItem('authorJson', authorJson);
	document.getElementById('response').innerHTML ="You saved your favorite Author";
}
	
function showAuthor(){
	if (window['localStorage'].getItem('authorJson')){
		var author = window['localStorage'].getItem('authorJson');
		var authorJson = JSON.parse(author);
		document.getElementById('response').innerHTML = 'This is your favorite Author: <br><strong>' +
														authorJson.name + ' ' +
														authorJson.surname + '</strong><br>';
	} else {
		document.getElementById('response').innerHTML = "You don't have favorite authors yet.";
	}
}

function loadAuthor(){
	myArray = 6;
	window['localStorage'].setItem('array', myArray);
    console.log(window['localStorage'].getItem('array'));
} 