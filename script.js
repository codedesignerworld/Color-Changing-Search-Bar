function myFunc() {
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);	
	$(".search").css("border-color", "rgb("+r+","+g+","+b+")");
	$(".search").css("color", "rgb("+r+","+g+","+b+")");
}