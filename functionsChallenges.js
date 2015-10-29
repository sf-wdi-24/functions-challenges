function maxOrMin(max, x, y) {
    if (max && x > y) {
        return x
    } else if (max && y > x) {
        return y
    }
}
alert(maxOrMin(true,9,7))






var arr = [1,4,6,8,9,7]
function sillySum (array) {
	var newArr =[]; 
	for (var i = 0; i < array.length; i++) {
		
		 newArr.push(i*array[i]); 

	}
	return newArr }

sillySum(arr)
[0, 4, 12, 24, 36, 35]







var arr = [1,4,6,8,9,7]
function numSquare (array) {
	var newArr =[]; 
	for (var i = 0; i < array.length; i++) {
		
		 newArr.push(array[i++]*array[i++]); 

	}
	return newArr }







	
