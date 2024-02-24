// Constructor to object

function myInfo(yourName, village, phoneNo){
    this.yourName = yourName;
    this.village = village;
    this.phoneNo = phoneNo;
}

let newObj1 = new myInfo("Idba", "Dhaka", +8801222222);
console.log(newObj1);


function myInfo(yourName, village, phoneNo){
    this.yourName = yourName;
    this.village = village;
    this.phoneNo = phoneNo;
    this.showMe = function(){
        console.log(this.yourName);
        console.log(this.village);
        console.log(this.phoneNo);
    }
}

/* let newObj2 = new myInfo("Idba", "Dhaka", +8801222222);
console.log(newObj2); */
let student =new myInfo ("Rifa", "hossennagor", 1001222);
student.showMe();