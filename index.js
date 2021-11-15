class SortedList {
  constructor(items,length) {
   this.items = []
   this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort((a, b) => (a - b));
  }

  get(pos) {

    if (pos > this.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
    
  }

  max() {

    if(this.length===0){
      throw new Error('EmptySortedList');
    }
    return this.items.sort((a, b) => (a - b))[this.length - 1];
    
  }

  min() {
    if (this.items.length===0){
      throw new Error('EmptySortedList');
    }
    return this.items.sort((a, b) => (a - b))[0];
  }

  sum() {
    if (this.length === 0) {
      return 0
    }

    let sumaArray = 0
    this.items.forEach((numero => sumaArray += numero))
    return sumaArray
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items.reduce((a, b) => a + b) / this.length;


  }
}

module.exports = SortedList;
