define(["require", "exports", 'dojo/parser', 'dojo/_base/array', 'dojo/dom', 'dojo/dom-construct', './greeter', 'dijit/form/Button'], function (require, exports, parser, arr, dom, domConstruct, greeter_1) {
    "use strict";
    var Student = (function () {
        function Student(_a) {
            var firstname = _a.firstname, _b = _a.middleinitial, middleinitial = _b === void 0 ? 'X.' : _b, lastname = _a.lastname;
            this.firstname = firstname;
            this.middleinitial = middleinitial;
            this.lastname = lastname;
            this.fullname = firstname + " " + middleinitial + " " + lastname;
        }
        return Student;
    }());
    var user = new Student({
        firstname: 'Bob',
        middleinitial: 'S.',
        lastname: 'Barker'
    });
    function init() {
        console.log('initializing');
        parser.parse();
        arr.forEach([0, 1, 2], function (num) {
            console.log('num: ' + num);
        });
        console.log(user);
        domConstruct.place("<span>" + greeter_1.default(user) + "</span>", dom.byId('greeting'));
    }
    return {
        init: init
    };
});
