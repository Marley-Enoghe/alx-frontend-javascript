export default class Currency  {
constructor (code, name) {
  if (typeof code !== 'string'){
    throw new TypeError ('Code must be a string');
  } else if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }

  this.code = code;
  this.name = name;
}

get name() {
  return this.name;
}

get code() {
  return this.code;
}

set name(name) {
  if(typeof name !== 'string'){
    throw new TypeError('Name must be a string');
  }
  this._name = name;
}

set code(code) {
  if(typeof code !== 'string'){
    throw new TypeError('Code must be a string');
  }
  this._code = code;
}

displayFullCurrency() {
  return `${this._name} (${this._code})`;
}
}