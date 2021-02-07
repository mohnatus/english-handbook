import list from './list';
import { Verb } from './verb';

export default list.map((verb) => new Verb(verb));
