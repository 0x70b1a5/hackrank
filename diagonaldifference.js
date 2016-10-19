//diagonaldifference.js
//https://www.hackerrank.com/challenges/diagonal-difference/submissions/code/17336999
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
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    var priDi = 0, secDi = 0, row = 0;
    while (row < a.length) {
        priDi+=a[row][row];
        secDi+=a[row][a.length-(1+row)];
        row++;
    }
    console.log(Math.abs(priDi-secDi));
}
