function townPopulation(input) {

    const result = {};

    for (let line of input) {
        const tokens = line.split(' <-> ');
        const name = tokens[0];
        const population = Number(tokens[1]);

        if (result.hasOwnProperty(name) == false) {
            result[name] = 0;
        }

        result[name] += population;
    }

    for (let [name, population] of Object.entries(result)) {
        console.log(name, ':', population);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);