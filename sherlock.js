// sherlock adn the beast
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
        var dn = decNum(n);
        switch (dn){
            case 0:
                console.log("-1");
                break;
            default:
                console.log(dn);
                break;
        }
    }
}

function decNum(dig){
    var decent = Math.pow(10,dig)-1;
    while (!isDN(decent)&&decent>0) {
        decent--;
    }
    return decent;
}

function print(x){console.log(x)};
function isDN(num) {
    // check for non-3 & non-5 digits
    //print(num);
    var digits_a = num.toString().split("");
    //print(digits_a);
    var threeOrFive = function (digit) { return (digit == 3 || digit == 5) ? true : false};
    var digit_bools = digits_a.map(threeOrFive);
    //print (digit_bools);
    for (var i=0; i<digit_bools.length;i++) {
      //  print("I'm HERE"+digit_bools[i]);
        if (!digit_bools[i]) return false;
    }
    
    // check number of 3s % 5 == 0 
    // && number of 5s % 3 == 0
    digits_sort = digits_a.sort().join("");
    var threes = /3+/.exec(digits_sort); // --> ["3+"] OR null
    var fives = /5+/.exec(digits_sort); // --> ["5+"] OR null
    if (threes!=null){ 
        if (threes[0]%5 != 0) return false;
    }
    if (fives!=null){
        if (fives[0]%3 != 0) return false;
    }
    return true;
}
