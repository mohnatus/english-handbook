import { Form } from './form';

function getFormsArrayFromString(str) {
	return str.split(',').map((i) => new Form(i.trim()));
}

function getTranslationsArrayFromString(str) {
	return str.split(';').map((i) => i.trim().toLowerCase());
}

export class Verb {
	constructor(verb) {
		let infinitive = verb[0];

		this.id = infinitive;
    this._id = this.id.toLowerCase();

		this.infinitive = [new Form(infinitive)];
		this.past = getFormsArrayFromString(verb[1]);
		this.pastParticiple = getFormsArrayFromString(verb[2]);
		this.translation = getTranslationsArrayFromString(verb[3]);

    let forms = [
      this.id,
      ...this.past.map(v => v.value),
      ...this.pastParticiple.map(v => v.value),
    ];

    this.maxLength = Math.max(...forms.map(f => f.length));
	}

	check(q) {
		let query = q.trim();
		if (!query) return true;

		query = q.toLowerCase();

    if (this._id.includes(query)) return true;
    if (this.translation.find(t => t.includes(query))) return true;
    if (this.past.find(f => f.check(query))) return true;
    if (this.pastParticiple.find(f => f.check(query))) return true;

    return false;
  }
}
