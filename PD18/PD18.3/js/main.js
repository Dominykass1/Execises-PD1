const book = {
  name: 'Dievu miskas',
  author: 'Balys Sruoga',
  page: '270',
  getFullName: function(){
console.log(this.name + '' + this.author + this.page);
  }
};

 book.getFullName();