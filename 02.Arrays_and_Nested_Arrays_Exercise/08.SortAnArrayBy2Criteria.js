function sortArrayByTwoCriteria(arr) {
    const sortedArr = arr.sort((a,b) => {
        const firstCriteria = a.length - b.length;
        const secondCriteria = a.localeCompare(b);
        return firstCriteria || secondCriteria;
    });

    console.log(sortedArr.join("\n"));
}
sortArrayByTwoCriteria(['alpha','beta','gamma'])
sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default'])