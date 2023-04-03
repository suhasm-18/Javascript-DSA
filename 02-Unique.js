//Count Unique Numbers
//
//out put-> 8
//condition
//i=0,j=0
//(array[i]!==array[j]
// 1. i+1
// 2.  array[i]=array[j]
function uni(array){
    if(array.length>0){
        let i=0;
        for(let j=1;j<array.length;j++){
            if(array[i]!==array[j]){
            i++;
            array[i]=array[j];
            }
        }
        return i+1;
    }
    else{
        throw new Error("array is Empty");
    }
}
const nnn=uni([1,1,2,2,3,4,4,5,6,7,8,8]);
console.log(nnn);


//Time Complexity linear O(n);
