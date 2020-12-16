function pageLoad(){
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
console.log("itt vagyok");
	let rootE = document.getElementById("root");

	let myObjects = [
		{
		tag: "h1",
		content: "Kriszta"
		},
		{
		tag: "p",
		content: "frontend developer"
		}
	];

	console.log(myObjects);
		// this we use for choose items or objects
		// for (let index = 0; index < myObjects.length; index++) {
		// }

		// for object elements by each
		//console.log(myObjects.length);

	for (myObject of myObjects) {
		//console.log(myObject);
		//console.log(myObject.tag);

		//write "Krszta frontend developer" h1 Kriszta
		rootE.insertAdjacentHTML("beforeend", `
			<${myObject.tag}>${myObject.content}</${myObject.content}>
		`);
	}

		//or: inner.HTML de az nem jó, mert mindíg újrarendeleli az oldalt, meg hosszabb megírni
		// let newTag = document.createElement(myObject.tag);
    //     newTag.innerHTML = myObject.content;
		//     root.appendChild(newTag);

	rootE.addEventListener("click", function (){
		rootE.classList.toggle("clicked");
	});

}
window.addEventListener("load", pageLoad);
