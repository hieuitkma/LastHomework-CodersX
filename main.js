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

// -------------------------------bai 3
// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {
    // viết code ở đây.
    var strArr = filename.split(".");
    return strArr[strArr.length - 1];
}

// ---------------------------- bai 4
// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c) {
    // viết code ở đây.
    return Math.max(a, b, c);
}

// ---------------------------- bai 5
// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str) {
    // viết code ở đây.
    // startsWidth : kiem tra xem chuoi bat dau duoc chi dinh
    console.log(str.startsWith('Java'));
}
startWith('Javascript');

// ---------------------------- bai 6
/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
    let maxDiff = 0;
    for (let i = 0; i < arr.length; i++) {
        //Math.abs trar ve gia tri tuyet doi
        maxDiff = (maxDiff < Math.abs(arr[i] - arr[i + 1])) ? Math.abs(arr[i] - arr[i + 1]) : maxDiff;
    }
    return maxDiff;
}

// -----------------------------bai 7
//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str) {
    // viết code ở đây.
    let countP = 0;
    let countT = 0;
    for (let i = 0; i < str.length; i++) {
        //charAt(): Gia tri cua vi tri can xet
        if (str.charAt(i) == 'p') {
            countP++;
        }
        if (str.charAt(i) == 't') {
            countT++;
        }
    }
    if (countT == countP) return true;
    return false;
}