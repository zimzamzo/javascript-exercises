const reverseString = function( string ) {
    
    array = string.split('');

    array.reverse();

    let output = '';

    for (const L of array) {
        output += L;
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
