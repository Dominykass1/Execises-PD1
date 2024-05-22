const student = {
  name: 'Edgaras',
  lastName: 'Valansevicius',
  age: '100',
  getFullName: function(){
console.log(this.name + '' + this.lastName + this.adress);
  }
};
 student.adress = 'Vilnius';
 student.getFullName();