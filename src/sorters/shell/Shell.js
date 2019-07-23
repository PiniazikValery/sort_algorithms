import { Sorter } from '../sorter';

class ShellSorter extends Sorter {
    sort(arrayToSort) {
        let resultArray = arrayToSort;
        let gap = Math.round(resultArray.length / 2);

        while (gap > 1) {
            for (let right = 0; right < resultArray.length; right++) {
                for (let c = right - gap; c >= 0; c -= gap) {
                    if (resultArray[c] > resultArray[c + gap]) {
                        resultArray = super.swap(resultArray, c, c + gap);
                    }
                }
            }
            gap = Math.round(gap / 2);
        }
        return resultArray;
    }
}

export default ShellSorter;