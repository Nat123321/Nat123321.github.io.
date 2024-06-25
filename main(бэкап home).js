console.log(!);

let div3=document.querySelector('#slider');
let paths = [cat.JPG, cherry.jpg, clowds1.jpg, clowds2.jpg, field1.jpg, fire.jpg, house.jpg, pines.jpg,strawberries.jpg];
function loadImage(path) {
return new Promise(function(resolve,reject){
let image= document.createElement('img');
image.src = path;
image.addEventListener('load', function() {
resolve(image);
//console.log(image.src);
});
image.addEventListener('error', function() {
reject(new Error('image "' + path + '"  load error')); 
});
});
}

for( let path of paths){
loadImage(path).then(function(image) {
div3.appendChild(image);
console.log(path);
}).catch(function(error) {
	console.log(error);
});
}
//
function getSmth(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num * num), 1000)
	});
}


async function func() {
let res1=  await getSmth(2);
let res2=  await getSmth(3);
let res3=  await getSmth(4);
	console.log(res1 + res2 + res3);
}
func();