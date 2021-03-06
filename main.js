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

// --------------------------- bai 10
// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b) {
    // viết code ở đây.
    let result = (Math.abs(a - 100) > Math.abs(b - 100)) ? b : a;
    return result;
}

// ---------------------------bai 11
/* Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
  Nếu có 1 số âm và một số dương thì trả về true. 
  Các trường hợp khác trả về false. 
  Số 0 là số không âm cũng không dương
  Tham số:
  - number1: số nguyên thứ nhất
  - number2: số nguyên thứ hai
*/

function checkInt(number1, number2) {
    // viết code ở đây.	
    if (number1 < 0 && number2 > 0 || number1 > 0 && number2 < 0) return true;
    return false;
}

// ------------------------------ bai 12
/*
Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
Example: 
n = 20 // return 14
n = 5 // return 8

*/
function difference(n) {
    // viết code ở đây.
    let result = Math.abs(n - 13);
    if (n > 13) return result * 2;
    return result;
}

// ------------------- bai 13
/* Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
*/

function pyString(String) {
    // viết code ở đây.
    if (String.startsWith('Py') == true) return String;
    return `Py${String}`;
}


// ------------------------- bai 14
/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    // viết code ở đây.	
    var strArr = str.split("");
    for (var i = 0; i < str.length; i++) {
        strArr[i] = String.fromCharCode(str.charCodeAt(i) + 1);
    }
    return strArr.join("");
}

// -------------------------- bai 15
// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n) {
    // viết code ở đây.
    let start = str.slice(0, n);
    let tach = str.split('');
    tach.reverse();
    let result = [];
    for (let i = n - 1; i >= 0; i--) {
        console.log(tach[i]);
        result.push(tach[i]);

    }
    let end = result.join('');
    return `${start}${end}`
}
// -------------------------- bai 16
/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
    // write code here.
    var kq = [], j = 1, temp = [];

    for (var i = 0; i < arr.length; i++) {
        if (j <= size) {
            temp.push(arr[i]);
            j++;
        }
        if (j > size || i == arr.length - 1) {
            j = 1;
            kq.push(temp);
            temp = [];
        }
    }
    return kq;
}

// ----------------------------- bai 17
/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
function maxOfSumChain(arr, k) {
    // write code here.
    arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (i == k - 1) break;
    }
    return sum;
}


// ---------------------------- bai 18
/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    // 1 : dem so lan xuat hien
    occurrences = arr.reduce((obj, item) => {
        if (item in obj) {
            obj[item]++; // = value
        } else {
            obj[item] = 1;
        }
        // console.log(item);
        // console.log(obj);
        return obj;
    }, {});
    // console.log(occurrences) ;

    // 2: push so lan xuat hien vao mang
    let result = [];
    for (let key in occurrences) {
        result.push(occurrences[key]);
    }
    // console.log(result);

    // 3: tim max
    let maxArr = Math.max(...result);
    // console.log(maxArr);

    // 4: push vao mang moi cai key cua max
    let resultMax = [];
    for (let key in occurrences) {
        if (occurrences[key] === maxArr) {
            resultMax.push(parseInt(key));
        }
    }
    return resultMax;
}


// ----------------------------- bai 19
/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
    // Viết code tại đây!
    let test = 0;
    // console.log(str2.length)
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1.charAt(i)) !== -1) {
            console.log(str2.indexOf(str1.charAt(i)))
            test++;
        }
    }
    // console.log(test)
    if (test === str1.length) return true;
    return false;
}


// ---------------------------- bai 20
/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr) {
    // Viết code tại đây
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let result = max - min;
    return result;
}