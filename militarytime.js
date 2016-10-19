// militarytime.js
// https://www.hackerrank.com/challenges/time-conversion/submissions/code/17373702
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
    var time = readLine(),
        hrs = /\d\d/.exec(time),
        ampm = /[A-Z]+/.exec(time);
    console.log((function(){
        if (ampm[0] == "PM") return (Number(hrs[0]) < 12) ? (Number(hrs) + 12)+time.slice(2,time.length-2) : time.slice(0,time.length-2);
        else return time.slice(0,time.length-2)
    })());
}
