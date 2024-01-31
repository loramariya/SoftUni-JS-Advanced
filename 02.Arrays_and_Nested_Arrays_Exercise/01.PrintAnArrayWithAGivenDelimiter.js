function printArray(arr, separator) {
    const result = arr.join(separator);
    console.log(result);
}

printArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-')
printArray(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_')