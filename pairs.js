//pairs.js
//https://www.hackerrank.com/challenges/pairs/submissions/code/17304947
function processData(input) {
    //Enter your code here
    var a = input.split("\n"), 
        nk = a[0].split(" "),
        n = nk[0],
        k = nk[1],
        data = a[1].split(" "),
        dict = {},
        tally = 0;
    
    data.map(function(int){
        if(dict[int.toString()]==undefined)
            dict[int.toString()]=1;
    });
    
    for (int in dict) {
        if (dict.hasOwnProperty(Number(int)+Number(k))) tally++;
    }
    
    console.log(tally);
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