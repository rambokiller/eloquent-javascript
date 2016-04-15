function reverse(array){
	var newArray=[]
	
	for (i=array.length-1; i>=0; i-=1){
		newArray.push(array.pop());
    }
	return newArray;
}



