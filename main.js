// ------------------------- Bai 1
// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str) {
    // viết code ở đây.
    var tach = str.split('');
    var string = '';
    for (var i = tach.length - 1; i >= 0; i--) {
        string += tach[i];
    }
    return string;
}

// ---------------------------- bai 2
// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
    // viết code ở đây
    var tach = str.split('');
    var convert = [];
    convert.push(tach[0].toUpperCase());

    for (var i = 1; i < tach.length; i++) {
        if (tach[i - 1] == ' ') {
            convert.push(tach[i].toUpperCase());
        }
        else {
            convert.push(tach[i]);
        }
    }
    return convert.join('');
}