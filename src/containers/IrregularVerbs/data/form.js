import {transcriptions} from './transcriptions';

export class Form {
	constructor(value) {
		this.value = value;
		this.transcription = transcriptions[value] || '';

		this._value = this.value.toLowerCase();
		this._transcription = this.transcription.toLowerCase();
	}

	check(query) {
		query = query.toLowerCase();
		return (
			this._value.includes(query) || this._transcription.includes(query)
		);
	}
}
