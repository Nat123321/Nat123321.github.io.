//Модальное окно:
let modal = document.querySelector('#myModal');
let modalImg=document.querySelector('#modalImg');
let images=document.querySelectorAll('.g');//массив!

for(let img of images){
img.addEventListener('click', function(){	
modal.style.display = 'block';	
modalImg.src = this.src;	
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

let i=0; //номер img в массиве images
prev.addEventListener('click', function(){
	
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