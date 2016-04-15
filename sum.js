function range(start,end,step){
	var newArray=[];
	if (step==null)
		step = 1;
	
	if (step>0){
		for(i=start;i<=end; i+=step){
		newArray.push(i);}
    }
	else{
		for(i=start;i>=end; i+=step){
		newArray.push(i);}
    }
	return newArray;
}
function sum(array){
		var sum=0;
		for(i=0;i<array.length;i+=1){
			sum += array[i];
		}
  	return sum;
}
