/*console.log('!');

let div3=document.querySelector('#d3');
let paths = ['house.jpg', 'cat.JPG', 'flowers2.jpg', 'cherry.jpg', 'clowds1.jpg', 'clowds2.jpg', 'field1.jpg', 'fire.jpg',  'flowers1.jpg', 'flowers3.jpg', 'pines.jpg', 'strawberries.jpg', 'flowers4.jpg', 'flowers5.jpg', 'road1.jpg', 'flowers6.jpg', 'flowers7.jpg', 'tree.jpg', 'road2.jpg'];
function loadImage(path) {
return new Promise(function(resolve,reject){
let image= document.createElement('img');
image.src = path;
image.addEventListener('load', function() {
resolve(image);
});
image.addEventListener('error', function() {
	console.log('???');
reject(new Error('image ' + path + ' load error')); 
});
});
}

for( let path of paths){
loadImage(path).then(function(image) {
div3.appendChild(image);
}).catch(function(error) {
	console.log(error);
});
}

let phrases = [
{text: 'дом', image: 'house.jpg'},
{text: 'сад', image: 'flowers6.jpg'} 
];
let div2a=document.querySelector('#d2a');
let div2=document.querySelector('#d2');
function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

div2.addEventListener('mouseover', function () {
	
  let randomElement = getRandomElement(phrases);
  div2a.textContent = randomElement.text;
  div2.style.backgroundImage = 'url' + '(' + randomElement.image + ')';
  console.log(div2.style.backgroundImage);
  
});*/


//Автоматический показ изображений на первой стр.:

//let image= document.createElement('img');
let image1=document.querySelector('#i1');
let div2=document.querySelector('#d2');

let paths = ['house.jpg', 'cat.JPG', 'flowers2_2.jpg', 'cherry.jpg', 'clowds1.jpg', 'clowds2.jpg', 'field1.jpg', 'fire.jpg',  'flowers1.jpg', 'flowers3_2.jpg', 'pines_2.jpg', 'strawberries_2.jpg', 'flowers4_2.jpg', 'flowers5.jpg', 'road1.jpg', 'flowers6.jpg', 'flowers7.jpg', 'road2.jpg'];
/*image.setAttribute('src', 'house.jpg');
div2.appendChild(image);*/

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
	
