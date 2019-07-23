class Sorter {
    swap(array, ind1, ind2) {
        let resultArray = array;
        let tmp = resultArray[ind1];
        resultArray[ind1] = resultArray[ind2];
        resultArray[ind2] = tmp;
        return resultArray;
    }
}

export default Sorter;