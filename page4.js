//Для стр 4
//Модальное окно регистрации:
let aReg = document.querySelector('#aReg');
let modal2 = document.querySelector('#myModal2');
aReg.addEventListener('click', function(){	
modal2.style.display = 'block';	
});	

let span2 = document.querySelector('#span2');
// Когда пользователь нажимает на <span> (x):
span2.addEventListener('click', function(){
modal2.style.display = "none";
});	
