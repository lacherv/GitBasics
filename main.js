/************ Const & Let **************** */
const pi=3.14
console.log('Univen')

let Team="Barcelona"

console.log(`My fav team is ${Team}`)

/************ Arrow Functions **************** */

 sayHello =()=> {

    console.log(`hello welcome`);
}
sayHello("muny");

sayHello =name1 => {

    console.log(`hello ${name1}`);
}
sayHello("aaron");

sum =(a,b,c)=>

    console.log(`hello ${a} and ${b} and ${c} sum ${a+b+c}`);

sum(1,2,3);

const provinces=["limpopo","gauteng","north west"];
provinces.forEach(( province,  index) =>console.log(`${index + 1}.${province}`))





/************ Map **************** */


let arr=[144,25,48];
let number=arr.map(Math.sqrt);
console.log(number)


/************ Filter **************** */

const Employess = [
    {
        id:1,
        name:'AARON',
        Position:'CEO'
        
    },
    {
        id:2,
        name:'Thovhedzo',
        Position:'COO'
        
    },
    {
        id:3,
        name:'Mulalo',
        Position:'CFO'
        
    },
    {
        id:4,
        name:'David',
        Position:'CEO'
        
    }

]

let t = Employess.filter(element =>{
    return element.name =="AARON";
})

console.log(t);



//console.log(countries.filter(countries.name==south));

/************ Spread **************** */





/************ Destructuring **************** */

let a = () => {
    return [1, 3, 2];
  };
  
  let [one, , two] = a();

let contries=()=> ['south Africa','germany','Zimbabwe','Nigeria']

let [d,e,f,g]=contries()

console.log(d)
console.log(e)
console.log(f)
console.log(g)



let {greet, names} = 
{greet: 'welcome ', names: 'AARON'};

console.log(greet+ names);







/************ Classes **************** */



class Person{ 
    
    constructor(Firstname){

    this.names=Firstname;


    }
    
}
human = new Person('AARON');

console.log(human.names)


/************ Subclasess **************** */

 class Secondnames extends Person{
     constructor(Firstname,Surname){
        super(Firstname)
        this.Surname = Surname;
     }
    

 }
const nAme = new Secondnames("Thobetso"," Munyangane");
console.log(nAme);