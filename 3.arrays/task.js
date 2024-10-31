function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	return arr1.every((value, index) => {
		return value === arr2[index]
	});
}

function getUsersNamesInAgeRange(users, gender) {
	if (users.length === 0) return 0;
	let filtredUsers = users.filter(user => user.gender === gender);
	if (filtredUsers.length === 0) return 0;
	let ages = filtredUsers.map(user => user.age);
	return ages.reduce((acc, age) => acc + age) / filtredUsers.length;
}