import logo from './logo.svg';
import './App.css';


function App() {
  class Human{
     
     gender="Male";
    
    printGender = () => {
      console.log(this.gender);
    }
  }
  class Person extends Human{
  
     name="Mehul";
    
    printMyName = () => {
      console.log(this.name);
    }
  }
  
  
  const person = new Person();
  person.printMyName();
  person.printGender();
  const numbers = [1,2,3];
  console.log("old array " + numbers);
  const newNumbers = [4,5,...numbers];
  console.log("New array  " + newNumbers);


  const mehul = {
    name:"mehul"
  };
  const poraniya = {
    ...mehul,
    age:16
  }
  console.log(poraniya);

  const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  //Check the result object in the console:
  console.log(myUpdatedVehicle);

// Rest Operator

const filter = (...args) => {
  return args.filter(el => el === "mehul"); 
  }
console.log(filter("Max","rox","mehul"));
}

// Destructruing
const no = [7,8,6];
const [num1, num2] = no;
const doubleNumArray = no.map((num) => {
  return num * 2;
});
console.log(doubleNumArray);
console.log(num1, num2);
export default App;
