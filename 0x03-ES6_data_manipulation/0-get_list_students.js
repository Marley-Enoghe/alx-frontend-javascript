
//A function that 
//returns an array of obeject
//each object should have 3 attributes 

export default function  getListStudents (){
return [
  { id: 1, firstName: "Guillaume", location: "San Francisco" },
  { id: 2, firstName: "James", location: "Columbia" },
  { id: 5, firstName: "Serena", location: "San Francisco" }
];
}
console.log(getListStudents());