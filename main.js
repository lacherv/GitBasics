/************ Const & Let **************** */

/************ Arrow Functions **************** */
let name = 'Kamogelo';
const hey = () => console.log(`Hello ${name}`);
hey();

const  numb = (a,b) => { console.log(`Sum of ${a} and ${b} equals ${a + b}`);} 
numb(2,4);

/************ Foreach **************** */

const provinces = ['Northern Cape','North West','Gauteng'];
provinces.forEach( (province, index ) => console.log(`${index+1}. ${province}`));
/************ Map **************** */

// let no = [4,16,49,16,8,144];
// no.forEach((item,numbers)=> 
//     console.log(`${item+1}. ${numbers.map(Math.sqrt)}`));






/************ Filter **************** */

//filter() creates a new array with elements that fall 
//under a given criteria from an existing array
let no1 = [4,16,49,16,877,99,144];
no1.filter(number=>{
    if(number > 16){
        console.log(number)
    }
})

const abiDeva = [
    { name:'Thobetso',gender:'Male',title:'Mr',Occupation:'Deisgner'},
    { name:'Kamogelo',gender:'Male',title:'Mr',Occupation:'Developers' },
    { name:'MbaliEntle', gender:'Female',title:'Ms',Occupation:'Accountant'},
    { name:'Siyaya',gender:'Female',title:'Ms',Occupation:'Developers'}
]
let group = abiDeva.filter(element => {
   return element.Occupation == "Developers"
    }
    )
console.log(group);
   


/************ Spread **************** */

let gName = ['Kamogelo','Thobetso'];
let newGroup = [...gName,'Chris'];
console.log(newGroup);

/************ Destructuring **************** */

const person ={
    name1:'Kamogelo',
    surname: 'Phaswane',
    gender:'Male',
    address:{
        street: '77 Commisioner',
        city:'Jozi',
        code: '2000'
        
    }
}

const{name1,surname,gender,address}=person;
const{street,city,code}=person.address;

console.log(person.address);

/************ Classes **************** */

class User{
    constructor(_name,_surname,_address){
    this._name = _name;
    this._surname = _surname;
    this._address = _address
    }

}

const kamogelo = new User("Kamogelo","Phaswane","77 Commisioner");
const thobetso = new User("Thobetso","jhksff","55 Elof");
const chris = new User("Chris","Brown","22 Marshall")



console.log(kamogelo);


/************ Subclasess **************** */

class person1 extends User{
    constructor(_name,_surname,_address,cellNumber){
        super(_name,_surname,_address);
        this.cellNumber = cellNumber;
    }
}

const personalDetails = new person1("Kamogelo"," Phaswane"," 77 Commisioner"," 0735360460");
console.log(personalDetails)
