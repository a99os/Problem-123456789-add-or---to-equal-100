const numbers = "123456789";

(function hundred(numbers, i = 1, chek = 1, count = numbers.length, arr = []) {
  if (!count) {
    return "Tamom";
  }
  if (eval(numbers) === 100) {
    if (!arr.includes(numbers)) {
      arr.push(numbers);
      console.log( numbers);
    }
  }
  if (numbers.length > i) {
    if (chek === false || chek == 1) {
      hundred(numbers.slice(0, i) + "+" + numbers.slice(i), i + 2, true, count,arr);
      hundred(numbers.slice(0, i) + "-" + numbers.slice(i), i + 2, true, count,arr);
    }
    if (chek) hundred(numbers, i + 1, false, count,arr);
  }
  if (chek === 1) {
    hundred(numbers, i + 1, 1, count - 1,arr);
  }
})(numbers);
