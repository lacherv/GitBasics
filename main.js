/************ Const & Let **************** */

/************ Arrow Functions **************** */
 sayHello =()=> {

    console.log(`hello ${name}`);
}
sayHello("muny");

sayHello =name => {

    console.log(`hello ${name}`);
}
sayHello("aaron");

sum =(a,b,c)=>

    console.log(`hello ${a} and ${b} and ${c} sum ${a+b+c}`);

sum(1,2,3);

const provinces=["limpopo","gauteng",'north west'];
provinces.forEach((province, index) =>console.log(`${index + 1}.${provinces}`))





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



var human=class{
    constructor(name){
    this.name=name;
    }
    };
    const Human = new human ('AARON');

    console.log(Human.name)
    



/************ Subclasess **************** */
