////////////////////////
/////Solution 1 ///////
//////////////////////

function maxOrMin (num1, num2, boo) {
    if (num1 === num2) {
		return "The numbers are equal";
	}
	else if (typeof boo !=="boolean") {
		return "Enter True or False";
	}
	else if (boo === true) {
			return Math.max(num1,num2);
	}
	else if (boo === false) {
		return Math.max(num1,num2);
	}
}

maxOrMin(100,200,"blue");

