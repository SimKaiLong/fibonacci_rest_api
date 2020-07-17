const express = require('express');
const router = express.Router();

/* GET Fibonacci Sequence */
router.get('/', function(req, res, next) {
    const num_elements = req.body.elements
    if (1 <= num_elements && num_elements <= 100) {
        const fibonacci = fibonacciSeries(num_elements-1);
        const result_array = {
            "fibonacci": fibonacci,
            "sorted": [...fibonacci].sort((a, b) => a % 2 - b % 2 || b - a)
        }
        res.send(result_array);
    } else {
        res.status("400").send("Invalid range of values")
    }
});

const fibonacciSeries = function (n) {
    // Return single element array
    if (n === 0){
        return [0]
    }
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
        arr.push(arr[i - 2] + arr[i -1])
    }
    return arr
};

module.exports = router;