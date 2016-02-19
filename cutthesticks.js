// cuthesticks.js
// https://www.hackerrank.com/challenges/cut-the-sticks/submissions/code/17555256
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    while (arr.length >= 1) {
        console.log(arr.length);
        arr = arr.map(Number).sort(function(a,b) {return a-b});
        var min = arr.shift();
        arr = arr.map(el => el-min);
        arr = arr.filter(el => el>0);
    }
}
