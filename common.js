//Автоматический показ изображений на первой стр.:

/*let image1= document.createElement('img'); */
let image1=document.querySelector('#i1');
console.log(image1);
if (image1){
let div2=document.querySelector('#d2');
/*image.setAttribute('src', 'house.jpg');
div2.appendChild(image);*/

let paths = ['house.jpg', 'cat.JPG', 'flowers2_2.jpg', 'cherry.jpg', 'clowds1.jpg', 'clowds2.jpg', 'field1.jpg', 'fire.jpg',  'flowers1.jpg', 'flowers3_2.jpg', 'pines_2.jpg', 'strawberries_2.jpg', 'flowers4_2.jpg', 'flowers5.jpg', 'road1.jpg', 'flowers6.jpg', 'flowers7.jpg', 'road2.jpg'];

let timerId;
let j=1;
let a=0;//a будет равно 0 только при первом наведении мыши. Чтобы таймер повторно не запускался.
div2.addEventListener('mouseover', function func(){
if (a===0) {
	a=1;
    console.log ('*');
//btn2.textContent = "Остановить показ";
		timerId=setInterval(function(){
		console.log('!');	
		if (j<paths.length){
		image1.setAttribute('src', paths[j]);
		
		j++;
		}
		else {
			j=0;
			image1.setAttribute('src', paths[j]);
			j++;
		}
		console.log (j);
		
		},2000);
	//console.log(timerId)
	}

});
	function clear (){
	clearInterval(timerId);
	btn2.textContent = "Начать показ";
	a=0;
	}
}
	
//стр2
//Модальное окно:

let modal = document.querySelector('#myModal');
//console.log(modal);
if (modal){
let modalImg=document.querySelector('#modalImg');
let images=document.querySelectorAll('.g');//массив! (но не совсем ((
let i=0; //номер img в массиве images
images.forEach((elem,ind)=>{
  elem.addEventListener('click', ()=> i=ind)
});
console.log(i);
for(let img of images){
img.addEventListener('click', function(){	
modal.style.display = 'block';	
modalImg.src = this.src;
//i=images.indexOf(img);	//Uncaught TypeError: images.indexOf is not a function
//captionText.innerHTML = this.alt;
});	
}

// Получить элемент <span>, который закрывает модальный:
let span = document.querySelector('.close');

// Когда пользователь нажимает на <span> (x):
span.addEventListener('click', function(){
modal.style.display = "none";

});	

//слайдер фотогалереи в модальном окне:
let prev=document.querySelector('.prev');//стрелки
let next=document.querySelector('.next');


prev.addEventListener('click', function(){
console.log(i);	 	
if (i>0){
	modalImg.src = images[i-1].src;
		i--;
		}
else 	{
	i=images.length-1;
	modalImg.src = images[i].src;
	}	
});
next.addEventListener('click', function(){
	console.log(i);
if (i<images.length-1){
	modalImg.src = images[i+1].src;
		i++;
		}
else {		
modalImg.src = images[0].src;
 i=0;
} 
});
//console.log(images);
}


//Для стр 4 и личного кабинета
//Модальное окно регистрации:
let aReg = document.querySelector('#aReg');
//console.log(aReg);
if (aReg) {
let modal2 = document.querySelector('#myModal2');
aReg.addEventListener('click', function(){	
modal2.style.display = 'block';	
});	

let span2 = document.querySelector('#span2');
// Когда пользователь нажимает на <span> (x):
span2.addEventListener('click', function(){
modal2.style.display = "none";
});	
}