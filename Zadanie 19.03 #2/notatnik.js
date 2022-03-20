//

// windows - przegladarka (uzycie - fetch, localstorage)
	//console.log(window);
	//console.log(window.innerwidth)

//
	console.log(document);

// wyszukiwanie elementów 
	const title = document.querySelector('#title'); // łapanie elementu o id title
	//ClassName #id .className dsa
	console.log(title);

	const titles = document.querySelectorAll('h1'); // zwraca tablice elementów h1
	console.log(titles);

// dodawanie elementów













































// old 2
/*
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector("button").onclick = function(){button();}
});

function button(){
	let tasks = [];
	add();
}


function add(){
	
	
	let task = document.querySelector("input[name='task']").value;
	if(task.length>=2){
		tasks.push(task);
	}
	else console.log("Za krótka tresc zadania");
}

function veryfication(task){
	console.log(task);
}
*/


// OLD
	//let imie = document.querySelector("#imie").value;
	//console.log(imie)
	
	/*
	let plec = document.querySelectorAll("input[name='plec']");
	let zaznaczono = false;
	for(let x of plec){
		
		if(x.checked){
			zaznaczono = true;
			console.log(x.value);
			break;
		}
		
	}
	
	if(zaznaczono == false){
		alert("nie zaznaczono plci");
	}
	
	
	let drink = document.querySelectorAll("input[name='drink']");
	let zaznaczono = false;
	for(let x of drink){
		
		if(x.checked){
			zaznaczono = true;
			console.log(x.value);
		}
		
	}
	
	if(zaznaczono == false){
		alert("nie zaznaczono drink");
	}
	*/