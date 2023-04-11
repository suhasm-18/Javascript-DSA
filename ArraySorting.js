<!DOCTYPE html>
<html lang="en">
<head>

    <title>Array Sorting</title>
    <script>
        let arr = [100 , 80 , 55 , 1 , 66 , 0 , 70 , 52];
        for( let i=0 ; i<arr.length ; i++){
            
            for(let j=0 ; j<arr.length  ; j++){
                console.log(arr);
                if(arr[j]>arr[i]){
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
       
    </script>
</head>
<body>
    
</body>
</html>
