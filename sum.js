//JavaScript program that returns the sum of an array

function range(start,end){
	var newArray=[];
	for(i=start;i<=end; i+=1){
		newArray.push(i);
	}
	return newArray;
}

function sum(array){
		var sum=0;
		for(i=0;i<array.length;i+=1){
			sum += i;
		}
}
