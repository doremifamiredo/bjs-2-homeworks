function getArrayParams(...arr) {
	console.log(arr.length);
	let min = arr[0];
	let max = arr[0];
	let sum = arr[0];
	for (let index = 1; index < arr.length; index++) {
		if (arr[index] < min) min = arr[index];
		if (arr[index] > max) max = arr[index];
		sum += arr[index];
	}
	let avg = +((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (!arr.length) return 0;
	let sum = 0;
	sum = arr.reduce((a, b) => a + b);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (!arr.length) return 0;
	let min = arr[0];
	let max = arr[0];
	for (let index = 1; index < arr.length; index++) {
		if (min > arr[index]) min = arr[index];
		if (max < arr[index]) max = arr[index];
	}
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (!arr.length) return 0;
	let even = 0;
	let odd = 0;
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] % 2 === 0) even += arr[index];
		else odd += arr[index];
	}
	return even - odd;
}


function averageEvenElementsWorker(...arr) {
	if (!arr.length) return 0;
	let sumEven = 0;
	let countEven = 0;
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] % 2 === 0) {
			sumEven += arr[index];
			countEven++;
		}
	}
	return sumEven / countEven;
}

function makeWork(arrOfArr, func) {
	if (!arrOfArr.length) return 0;
	let maxWorkerResult = -Infinity;
	for (let index = 0; index < arrOfArr.length; index++) {
		const result = func(...arrOfArr[index]);
		if (result > maxWorkerResult) maxWorkerResult = result;
	}
	return maxWorkerResult;
}