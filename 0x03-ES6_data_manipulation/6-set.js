export default function setFromArray (input) {
if(!Array.isArray(input)) throw new TypeError ('Input must be an array');
 return new set(input) ;
}