import { Sorter } from '../sorter';

class QuickSorter extends Sorter {
    sort(arrayToSort, leftBorder = 0, rightBorder = arrayToSort.length - 1) {
        let resultArray = arrayToSort;
        let leftMarker = leftBorder;
        let rightMarker = rightBorder;
        let pivot = resultArray[Math.round((leftMarker + rightMarker) / 2)];
        do {
            while (resultArray[leftMarker] < pivot) {
                leftMarker++;
            }
            while (resultArray[rightMarker] > pivot) {
                rightMarker--;
            }
            if (leftMarker <= rightMarker) {
                if (leftMarker < rightMarker) {
                    resultArray = super.swap(resultArray, leftMarker, rightMarker);
                }
                leftMarker++;
                rightMarker--;
            }
        } while (leftMarker <= rightMarker);
        if (leftMarker < rightBorder) {
            resultArray = this.sort(resultArray, leftMarker, rightBorder);
        }
        if (leftBorder < rightMarker) {
            resultArray = this.sort(resultArray, leftBorder, rightMarker);
        }
        return resultArray;
    }
}

export default QuickSorter;