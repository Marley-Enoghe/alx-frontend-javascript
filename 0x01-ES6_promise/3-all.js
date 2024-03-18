import uploadPhoto from "./utils.js";
import createUser  from "./utils.js"


export default function handleProfileSignup(){
Promise.all([uploadPhoto(), createUser()]).then(
  (result) =>{
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  }, () => {
    console.log('Signup system offline');
  },
);
}