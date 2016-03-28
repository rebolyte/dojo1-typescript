/**
 * Our main module.
 */

// https://github.com/schungx/Dojo-TypeScript/blob/master/Manual.md
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/dojo
// https://github.com/dojo/typings/wiki/How-To-Use
// https://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/
// http://www.typescriptlang.org/docs/handbook/compiler-options.html

// Note: do NOT use the 'out' or 'outFile' options in tsconfig.json. This will
// add a name to the beginning of all `define` statements in the AMD modules,
// and Dojo won't be able to `require` any of them.

import * as ready from 'dojo/ready';
import * as parser from 'dojo/parser';
import * as arr from 'dojo/_base/array';
import * as dom from 'dojo/dom';
import * as domConstruct from 'dojo/dom-construct';
import 'dijit/form/Button';

import greeter from './greeter';

class Student {
	firstname: string;
	middleinitial: string;
	lastname: string;
	fullname: string;
	constructor({firstname, middleinitial = 'X.', lastname}) {
		this.firstname = firstname;
		this.middleinitial = middleinitial;
		this.lastname = lastname;
		this.fullname = `${firstname} ${middleinitial} ${lastname}`;
	}
}

// var user = "Typescript";
let user = new Student({
	firstname: 'Bob',
	middleinitial: 'S.',
	lastname: 'Barker'
});

function init() {

	console.log('initializing');

	// Preferred over parseOnLoad
	// https://dojotoolkit.org/documentation/tutorials/1.10/declarative/#instantiating-objects
	parser.parse();

	arr.forEach([0, 1, 2], num => {
		console.log('num: ' + num);
	});

	console.log(user);
	domConstruct.place(`<span>${greeter(user)}</span>`, dom.byId('greeting'));

}

export = {
	init: init
};
