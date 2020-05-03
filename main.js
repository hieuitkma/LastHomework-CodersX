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

// ---------------------------bai 8
// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n 
// giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu
// n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n) {
    // viết code ở đây.
    if (n == undefined) {
        return array.slice(0, 1);
    }
    else if (n > 0) {
        return array.slice(0, n);
    }
    else {
        return [];
    }
}

// -------------------------------- bai 9
//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

function omitCharAt(str, n) {
    // viết code ở đây.	
    let tach = str.split('');
    console.log(tach);
    for (let i = 0; i < tach.length; i++) {
        tach.splice(n, 1);
        return tach.join('');
    }
}