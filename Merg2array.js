 let arr = [10,20,30,40,50,55];
        let arr2 = [1,2,3,4,5,555];
        let arr3=[] ;
        for(let i=0;i<arr.length;i++){
            arr3[i] = arr[i];
        }
        for(i=0;i<arr2.length;i++){
           arr3[arr.length+i] = arr2[i];
        }
        console.log(arr3);
