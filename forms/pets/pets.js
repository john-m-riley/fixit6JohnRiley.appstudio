let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
console.log(`${petNames}`)

let withMarmaduke = petNames.push('Marmaduke')

let choice = prompt("Choose one of the following actions:\n 1 Remove Vinny \n 2 Remove Marty \n 3 Add Nancy \n 4 Add your name \n 5 Find location of Riley \n 6 Find location of Cindy \n 7 show the Marmaduke array")
switch(choice) {
case(Choice="1"):
  let deleteVinny=petNames.splice([5])
  alert(`The action taken was: Remove Vinny from the array \n The remaining data are: ${petNames}.`);
  break;

case(choice="2"):
  let deleteMarty= petNames.splice([3])
  alert(`The action taken was: Remove Marty from the array \n The remaining data are: ${petNames}.`);
  break;

case(choice="3"):
  let addNancy= petNames.unshift('Nancy')
  alert(`The action taken was: Add Nancy to the front of the array \n The remaining data are: ${petNames}.`);
  break;

case(choice="4"):
let userName=prompt("Enter your name: ")
alert(`The action taken was: Add user name ${petNames.push((userName))} to the end of the array \n The remaining data are: ${petNames}.`);
break;

case(choice="5"):
let rileyIndex= petNames.indexOf('Riley')
alert(`The action taken was: Riley is located at ${rileyIndex} in the array \n The remaining data are: ${petNames}.`);
break;

case(choice="6"):
let cindyIndex= petNames.indexOf('Cindy')
alert(`The action taken was: Cindy is located at ${cindyIndex} in the array \n The remaining data are: ${petNames}.`);
break;

case(choice="7"):
alert(`The action taken was: You chose the array ${withMarmaduke} \n The remaining data are: ${petNames}.`);
break;

default:
alert('See ya later!');
} 

