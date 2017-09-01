class Hello{
    private _name:string;
    get name():string{
        return this.name;
    }
    set name(nam:string){
        this.name = nam;
    }
    isValidUser():boolean{
        if(this.name.length<1)
            return false;
        else
            return true;

    }
}
let hello1 = new Hello();
hello1.name = "na";
if(hello1.isValidUser())
    console.log("A valid user");
else
    console.log("An invalid user");