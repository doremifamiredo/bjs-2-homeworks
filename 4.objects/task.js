function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (!this.marks) console.log("Student has been expelled.");
	if (this.excluded) return;
	if (!!marks.length) this.marks.push(...marks);
	return;
}

Student.prototype.getAverage = function() {
	if (!this.marks || !this.marks.length) return 0;
	let sumMarks = this.marks.reduce((acc, cur) => acc + cur);
	return sumMarks / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}