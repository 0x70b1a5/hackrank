//sherlocksquares.js
//https://www.hackerrank.com/challenges/sherlock-and-squares/submissions/code/17572898
function processData(input) {
    //Enter your code here
    var ar = input.split('/n')[0].split('\n'),
        t = ar.shift();
    
    for (var i=0; i<t; i++) {
        var ab = ar.shift().split(" "),
            a = Number(ab[0]), b = Number(ab[1]),
            k = 0;
        
        for (var j=a; j<=b; j++){
            if (Math.sqrt(j)%2==0 || (Math.sqrt(j)-1)%2==0) {
                k++;
                j = Math.pow((Math.sqrt(j)+1),2)-1;
            }
        }
        
        console.log(k)
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
	