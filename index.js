function devideByTwo(input) {
    if(typeof input !== 'number') {
        return "Input must be of type number"
    }
    const result = input / 2
    return result
} 



module.exports = devideByTwo