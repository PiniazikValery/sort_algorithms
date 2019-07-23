import { Sorter } from '../sorter';

class ChoiceSorter extends Sorter {
    sort(arrayToSort) {
        let resultArray = arrayToSort;
        for (let left = 0; left < resultArray.length; left++) {
            let minInd = left;
            for (let i = left; i < resultArray.length; i++) {
                if (resultArray[i] < resultArray[minInd]) {
                    minInd = i;
                }
            }
            resultArray = super.swap(resultArray, left, minInd);
        }
        return resultArray;
    }
}

export default ChoiceSorter;