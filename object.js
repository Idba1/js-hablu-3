// Constructor to object

function myInfo(yourName, village, phoneNo){
    this.yourName = yourName;
    this.village = village;
    this.phoneNo = phoneNo;
}

let newObj = new myInfo("Idba", "Dhaka", +8801222222);
console.log(newObj);