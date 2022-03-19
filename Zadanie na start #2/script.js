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