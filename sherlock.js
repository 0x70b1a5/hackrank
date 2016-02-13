//sherlock.js 
//https://www.hackerrank.com/challenges/sherlock-and-the-beast/submissions/code/17307709
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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var z = n;
        while(z%3!=0) {
            z-=5;
        }
        if (z<0){
            console.log('-1');
        } else {
            var outFives = "";
            for (var i=0;i<z;i++){
                outFives+="5";
            }
            var outThrees = "";
            for (var i=0;i<(n-z);i++){
                outThrees+="3";
            }
            console.log(outFives+outThrees);
        }
    }
}