//plusminus.js
//https://www.hackerrank.com/challenges/plus-minus/submissions/code/17337283
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
    var n = parseInt(readLine()), pos=0.0, neg=0.0, nil=0.0;
    arr = readLine().split(' ');
    arr = arr.map(function(num){
        num = Number(num);
       // console.log(num);
        if (num>0){
            pos++;
        }else if (num<0){
            neg++;
        } else {
            nil++;
        }});
    arr = [pos/n,neg/n,nil/n];//.map(function(dec) {return Math.round(dec,-6)})
    console.log(arr.join('\n'));
}
