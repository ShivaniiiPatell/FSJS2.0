function func() {
  var arr = [1, 2, 4, 4, 8, 4, 6, 0];
  let arr1 = [];
  let arr2 = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i] === 4) {
  //       var spliced = arr.splice(i, 1);
  //       console.log("spliced", spliced);

  //       arr.push(spliced[0]);
  //       console.log("arr---", arr);
  //     }
  //   }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  arrRes = [...arr2, ...arr1];
  console.log(arrRes);
}
func();
