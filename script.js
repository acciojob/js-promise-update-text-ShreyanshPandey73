//your JS code here. If required.
//your JS code here. If required.
function sayHello(){
	return new Promise((resolve) =>{
		setTimeout(() => {
			resolve("Hello, world!");
		}, 1000);
	});
}
const output = document.getElementById("output");
sayHello().then((result) =>
	{
		output.textContent = result;
	});
