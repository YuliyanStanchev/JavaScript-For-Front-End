function Product3Numbers(arr) {
    let x = Number(arr[0]);
    let y = Number(arr[1]);
    let z = Number(arr[2]);

    let countNegativeNumbers = 0;

    for (let item of arr) {
        if (item < 0) {
            countNegativeNumbers ++;
        }
        if ( item == 0 ) {
            return "Positive";
        }
    }

    if (countNegativeNumbers % 2 != 0 && countNegativeNumbers != 0) {
        return "Negative"
    }
    else {
        return "Positive"
    }
}