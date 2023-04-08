 function insertele() {
        let arr = [10, 20, 30, 40, 50];
        let newEl = document.getElementById("newEl").value;
        let position = document.getElementById("position").value;
        console.log(arr);
        for (let i = arr.length-1; i >= 0; i--) {
          if (i >= position) {
            arr[i + 1] = arr[i];
            if (i == position) {
              arr[i] = newEl;
            }
          }
        }
        console.log(arr);
      }
