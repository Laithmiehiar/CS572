class Univserity{
    name: String;
    dept: String;
    constructor(name:String,dept:String){
        this.name = name;
        this.dept = dept;
    }
   public graduation (year: Number){
        console.log(`Graduation ${this.dept} ${year} students`);
    }
}

let mum = new Univserity("MUM", "Computer Science");
mum.graduation(2019);