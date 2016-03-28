define(["require", "exports"], function (require, exports) {
    "use strict";
    function greeter(person) {
        return "Hello, " + person.firstname + " " + person.lastname;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = greeter;
});
