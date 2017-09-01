var Hello = (function () {
    function Hello() {
    }
    Object.defineProperty(Hello.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (nam) {
            this.name = nam;
        },
        enumerable: true,
        configurable: true
    });
    Hello.prototype.isValidUser = function () {
        if (this.name.length < 1)
            return false;
        else
            return true;
    };
    return Hello;
}());
var hello1 = new Hello();
hello1.name = "na";
if (hello1.isValidUser())
    console.log("A valid user");
else
    console.log("An invalid user");
