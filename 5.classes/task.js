class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}
	fix() {
		if (this.state === 100) return;
		const newState = this._state * 1.5;
		if (newState > 100) {
			this._state = 100;
			return;
		}
		if (newState < 0) {
			this._state = 0;
			return;
		}
		this._state = newState;
	}
	set state(value) {
		this._state = value;
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(PrintEditionItem) {
		if (PrintEditionItem.state <= 30) return;
		this.books.push(PrintEditionItem);
	}

	findBookBy(type, value) {
		for (let item of this.books) {
			if (item[type] === value) return item;
		}
		return null;
	}

	giveBookByName(bookName) {
		if (this.findBookBy('name', bookName) !== null) {
			let findBook = this.books.splice(
				this.books.findIndex(book => {
					return book.name === bookName
				}), 1);
			return findBook[0];
		}
		return null;
	}
}


class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark === 2 || mark === 3 || mark === 4 || mark === 5) {
			if (Object.keys(this.marks).includes(subject)) {
				let tmp = this.marks[subject];
				tmp.push(mark);
				this.marks[subject] = tmp;
			} else this.marks[subject] = [mark];
		}
		return;
	}

	getAverageBySubject(subject) {
		if (!Object.keys(this.marks).includes(subject)) return 0;
		else {
			let marks = this.marks[subject];
			let sumMarks = marks.reduce((acc, cur) => acc + cur);
			return sumMarks / marks.length;
		}
	}

	getAverage() {
		const subjects = Object.keys(this.marks);
		if (subjects.length === 0) return 0;
		let sumAvg = 0;
		for (let i = 0; i < subjects.length; i++) {
			sumAvg += this.getAverageBySubject(subjects[i])
		}
		return sumAvg / subjects.length;
	}
}