///checking sum zero - problem 1
// [-5, -4, -3 ,-2, 0 , 2,4,6,8] ->input
// [-4,4] ->output;

function getnumber(array){
    for(let number of array){
        for(let j=1;j<array.lenght ; j++){
            if(number + array[j] ===0){
                return[number , array[j]];
            }
        }
    }
}

 const result=getnumber([-5, -4, -3 ,-2, 0 , 2,4,6,8]);
 console.log(result);

OR //to reduce time complexity


function getArray(array){
    let left=0;
    let right=array.length-1;

    while(left<right){
        sum= array[left]+array[right];
        if(sum==0){
                return [array[left],array[right]];
        }
        else if(sum>0){
            right--;
        }
        else {
            left++;
        }
    }
 }
 const result=getArray([-5, -4, -3 ,-2, 0 , 2,4,6,8]);
 console.log(result);
