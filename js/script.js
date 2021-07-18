function randomColor_hex() {
	let num = Math.floor(Math.random() * 10000);
	let alphbet = ['a', 'b', 'c', 'd', 'e', 'f'];
	let letter1 = alphbet[Math.floor(Math.random() * alphbet.length)];
	let letter2 = alphbet[Math.floor(Math.random() * alphbet.length)];
    let result_hex = '#' +''+ letter1 +''+ letter2 +''+ num;  
	document.body.style.backgroundColor = result_hex;
	document.getElementById("result_hex").innerHTML = result_hex;
}
function randomColor_rgba() {
    let num_red = Math.floor(Math.random() * 255);
    let num_green = Math.floor(Math.random() * 255);
    let num_blue = Math.floor(Math.random() * 255);
    let num_alpha = Math.random() * 1;
    let result_rgba = 'rgba(' + num_red + ', ' + num_green + ', ' + num_blue + ', ' + num_alpha.toFixed(2) + ')';
    document.body.style.backgroundColor = result_rgba;
    document.getElementById("result_rgba").innerHTML = result_rgba;
}