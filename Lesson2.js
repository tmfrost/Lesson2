function check1(a){
    var a;    
    if (a === undefined){
        return true;
    } else {
        return false;
    }
}

function check2(a){
    var a;
    if (a === null){
        return true;
    } else {
        return false;
    }
}


 function check3(a){
    var a;
    if (a === NaN){
        return true;
    } else {
        return false;
    }
}

console.log(check1(4));



        
    function checkEmptyObj(object) {
            for (var key in object)
                if (object.hasOwnProperty(key))
                 return false;

            return true;
        }
        

var EmpObj = {};
console.log(checkEmptyObj(EmpObj));


function mapForObj(obj, str) {
    var newObj = {};
    for(var key in obj) { 
       newObj[key] = obj[key];
       newObj[key] = newObj[key] + str;
    }
    console.log(newObj);
    return newObj;
}

var myObj = {value: 2, string: "Строчка"};
mapForObj(myObj, " - изменено");
console.log(myObj);


function randomChisl(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
  console.log( randomChisl(3,10));

  function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
 
    if (a == null || typeof(a) != "object" ||
        b == null || typeof(b) != "object")
    {
        return false;
    }
 
    var propertiesInA = 0, propertiesInB = 0;
    for (var property in a) {
        propertiesInA += 1;
    }
    for (var property in b) {
        propertiesInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;        
        }
    }        
    return propertiesInA == propertiesInB;
}
var a = {k1: 'one', k2: 'two', str: "str"};
var b = {k1: 'two', k2: 'one', str: "str"};

console.log( deepEqual(a,b));

function deleteProp(obj, prop){
    var newObj = {};
    for(var key in obj) { 
        if(obj[key]===prop){
        newObj[key] = obj[key];
        }
        else {
            delete obj[key];
        }
     }
     return newObj;
}

var Obj1 = {k1: 'one', k2: 'two'};
console.log(deleteProp(Obj1, "two"));