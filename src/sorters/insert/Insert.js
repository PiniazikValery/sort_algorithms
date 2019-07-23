class InsertSorter {
    sort(arrayToSort) {
        let resultArray = arrayToSort;
        for (let left = 0; left < resultArray.length; left++) {
            let value = resultArray[left];
            let i = left - 1;
            for (; i >= 0; i--) {
                if (value < resultArray[i]) {
                    resultArray[i + 1] = resultArray[i];
                } else {
                    break;
                }
            }
            resultArray[i + 1] = value;
        }
        return resultArray;
    }
}

export default InsertSorter;