//JSON iteration using for in loop
var student ={
    "firstName": "shenaz",
    "lastName": "sheik",
    "age": 24,
    "gender": "female",
    "Education":"BE Civil",
    "CGPA":8.45,
}
for(var a in student){
    console.log(a,student[a])
}

//JSON iteration using for of loop
var student =[{
    "firstName": "shenaz",
    "lastName": "sheik",
    "age": 24,
    "gender": "female",
    "Education":"BE Civil",
    "CGPA":8.45,
}]
for(var a of student){
    console.log(a,student[a])
}
//JSON itertion using for loop

var student =[{
    "firstName": "shenaz",
    "lastName": "sheik",
    "age": 24,
    "gender": "female",
    "Education":"BE Civil",
    "CGPA":8.45,
}]
for(var i=0;i<student.length;i++){
console.log(student[i])
}

//JSON iteration using forEach
var student ={
    "firstName": "shenaz",
    "lastName": "sheik",
    "age": 24,
    "gender": "female",
    "Education":"BE Civil",
    "CGPA":8.45,
}
const keys = Object.keys(student)
keys.forEach(key =>{
    console.log(key,student[key])
})





