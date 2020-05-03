// ------------------------- Bai 1
// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str) {
    // viết code ở đây.
      var tach = str.split('');
      var string = '';
      for(var i=tach.length-1; i>=0; i--) {
        string += tach[i];
      }
      return string;
  }
  