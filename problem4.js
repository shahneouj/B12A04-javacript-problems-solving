function isSame(arr1, arr2) {
  let match = 0;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid"
  } else if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      match++;
    }
  }
  if (match == arr1.length) {
    return true
  } else {
    return false
  };
}
isSame([1, 4, 5], [1, 4, 5]);
