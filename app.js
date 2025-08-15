let sentence = "Hello World, I am Bongeka";

//for loop 
 for (let i = 0 ; i < 6; i++) {
    // console.log(sentence[i]); //i stands for index
 }

 let listBook = [
   "treasure island",
   "adventuring again",
   "away together",
   "smuggler's top",
 ];
 let  i = 0; 
  for (;i < 6;) {
    //i stands for index
    // console.log(listBook[i][0]); //will print the first letter for each book 
    i++
  }
let x = ""
  for (x of sentence);{
    console.log(x);
  }
  

    for (x of listBook);{
    console.log(x);
}

let marks = {
    Bongeka: 65,
    Asanda: 45,
    Nokwanda: 76,
    Luyans: 39,
    Owami: 55
}
let mark = ""
for (mark in marks) {
    // console.log(marks[mark]);
}

while (i<6) {
     console.log(sentence[i]);
}