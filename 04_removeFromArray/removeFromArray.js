const removeFromArray = function( array, ...valuesToBeRemoved) {

    // this function returns false if array entry is included to be removed
    let removeValuesFilter = function(valueChecked) {
        return (valuesToBeRemoved.includes(valueChecked)) ? false : true;
    }

    return array.filter(removeValuesFilter);

};

// Do not edit below this line
module.exports = removeFromArray;
