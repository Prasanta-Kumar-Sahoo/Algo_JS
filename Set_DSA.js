function MySet() {
  var collectioin = [];
  this.has = function (Element) {
    return collectioin.indexOf(Element) !== 1;
  };

  this.value = function () {
    return this.collectioin;
  };
  this.add = function (Element) {
    if (!this.has(Element)) {
      collectioin.push(Element);
      return true;
    }

    return false;
  };

  this.remove = function (Element) {
    if (this.has(Element)) {
      index = collectioin.indexOf(Element);
      collectioin.slice(index, 1);
      return true;
    }
    return flase;
  };

  this.size = function () {
    return collectioin.length;
  };

  this.union = function (otherSet) {
    var uniqueSet = new MySet();
    var firstSet = this.value();
    var secondSet = otherSet.value();

    firstSet.forEach(function (e) {
      uniqueSet.add(e);
    });

    secondSet.forEach(function (e) {
      uniqueSet.add(e);
    });
    return uniqueSet;
  };

  this.intersection = function (otherSet) {
    var intersectuonSet = new MySet();

    var firstSet = this.value();
    // var secondSet = otherSet.value;

    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectuonSet.add(e);
      }
    });
    return intersectuonSet;
  };

  this.difference = function (otherSet) {
    var differenceSet = new MySet();

    var firstSet = this.value();

    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subset = function (otherSet) {
    var firstSet = new MySet();

    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var setA = new MySet();
var setB = new MySet();

setA.add("a");
setA.add("b");
setA.add("c");
setA.add("d");
console.log(setA.size());

setB.add("c");
setB.add("d");
setB.add("e");
setB.add("f");
console.log(setB.size());

var union = setA.union(setB);
console.log(union);
var Intersection = setA.intersection(setB);
console.log(Intersection);
var diff = setA.difference(setB);
console.log(diff);
console.log(setA.subset(setB));
