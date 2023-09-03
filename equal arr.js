function equal(Arr1, Arr2){
    if(Arr1.length !== Arr2.length){
        return false;
    }
    for(let i=0; i<Arr1.length; i++){
        if(Arr1[i] !== Arr2[i]){
            return false;
        }
    }
    return true;
}
const A1 = [1,2,3,4,0];
const B1 = [1,2,3,4,0];
console.log(equal(A1,B1));

const A2 = [1, 2, 3, 4, 5];
const B2 = [11, 22, 33, 44];
console.log(areArraysEqual(A2, B2)); 









