import { Sorter } from '../sorter';

class BubbleSorter extends Sorter {
    sort(arrayToSort) {
        let resultArray = arrayToSort;
        let needIteration = true;
        while (needIteration) {
            needIteration = false;
            for (let i = 1; i < resultArray.length; i++) {
                if (resultArray[i] < resultArray[i - 1]) {
                    resultArray = super.swap(resultArray, i, i - 1);
                    needIteration = true;
                }
            }
        }
        return resultArray;
    }
}

export default BubbleSorter;