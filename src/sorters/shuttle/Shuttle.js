import { Sorter } from '../sorter';

class ShuttleSorter extends Sorter {
    sort(arrayToSort) {
        let resultArray = arrayToSort;
        for (let i = 1; i < resultArray.length; i++) {
            if (resultArray[i] < resultArray[i - 1]) {
                resultArray = super.swap(resultArray, i, i - 1);
                for (let z = i - 1; (z - 1) >= 0; z--) {
                    if (resultArray[z] < resultArray[z - 1]) {
                        resultArray = super.swap(resultArray, z, z - 1);
                    } else {
                        break;
                    }
                }
            }
        }
        return resultArray;
    }
}

export default ShuttleSorter;