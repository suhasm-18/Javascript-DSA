function insertele(){
            let arr = [10,20,30,40,50,55];
            let item = document.getElementById("item").value;
            let index;
            for(let i=0;i<arr.length;i++){
                //console.log(arr[i]);
                if(arr[i]==item){
                   index=i;
                }
            } 

            console.log(index);
        }
