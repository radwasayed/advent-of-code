const fs = require('fs');
const read = fs.readFile('day1-input.txt', (err, data) => {
    if(err){
        console.log(err)
    } else {
        let frequencyArr = data.toString().split('\n').map(function(item) {
            return parseInt(item, 10);
        });
        fs.writeFile('day1-input.txt', frequencyArr, err => {
            if (err) {
                console.log(err)
            }
        })
    }
});


