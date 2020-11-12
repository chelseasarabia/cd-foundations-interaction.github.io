// global variables
let selection = 0

function update() {
	// local variables 
	let options = document.querySelectorAll('.option')
	let title = document.querySelectorAll('h1')
	console.log(options)
	options.forEach(item => item.onclick=function() {
		selection = item.id
		console.log(selection)
		title.innerHTML="I am feeling " + selection
	})
}

update();

selection = 0 

random_number = Math, floor(Math, random()+4)+1

myimage.src = selection+".png"