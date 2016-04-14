//Function that takes two values and returns the minimum
function min(a,b){
	if (a<b)
		return a;
	else if (b<a)
		return b;
	else
		return "Both values are equal";
}
console.log(min(2,3));
console.log(min(3,3));
console.log(min(5,8));

