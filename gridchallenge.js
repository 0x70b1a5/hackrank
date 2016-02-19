// gridchallenge.js
//https://www.hackerrank.com/challenges/grid-challenge/submissions/code/17408556

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
/////////////////////////////////////////

function main() {
    var t = readLine();
    
    for (var c=0;c<t;c++) {
        var g = readLine(), 
            lines = new Array();
        for (var b=0;b<g;b++) lines.push(readLine());
        var rows = lines.map(function(row){return row.split("").sort()}),
            verdict = 'YES';

        //console.log("rows=\n",rows);    

        rowdot:
        for (var i=0;i<g;i++){
            coldot:
            for (var j=i;j<g;j++){
                celdot:
                for (var k=j;k<g;k++){
                    //console.log("i="+i,"j="+j,"k="+k,'\n',rows[i][j],rows[k][j],rows[i][k]);

                    if (rows[i][j] > rows[k][j] || rows[i][j] > rows[i][k]) {
                        verdict= 'NO';
                        break rowdot;
                    }
                }
            }
        }

        console.log(verdict);
    }
} 