function func() {
  var arr = [1, 2, 4, 8, 4, 6, 0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      var spliced = arr.splice(i, 1);
      arr.push(spliced[0]);
    }
  }
  console.log(arr);
}
func();
