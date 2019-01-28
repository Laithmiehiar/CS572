var Univserity = /** @class */ (function () {
    function Univserity(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    Univserity.prototype.graduation = function (year) {
        console.log("Graduation " + this.dept + " " + year + " students");
    };
    return Univserity;
}());
var mum = new Univserity("MUM", "Computer Science");
mum.graduation(2019);
