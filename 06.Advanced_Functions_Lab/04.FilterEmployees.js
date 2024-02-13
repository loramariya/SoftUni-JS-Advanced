function filterEmployees(data, criteria) {
    const employees = JSON.parse(data);
    const filteredEmployees = [];

    const [key, value] = criteria.split('-');
    for (const employee of employees) {
        if (employee[key] === value) {
            filteredEmployees.push(employee);
        }
    }
    return filteredEmployees.forEach((employee, index) => {
        console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
    });
}
const data = `[
    {
    "id": "1", 
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, 
    {
    "id": "2",    
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {    
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
        "gender": "Male"
    }
]`;
const critria = 'gender-Female';

const filteredEmployees = filterEmployees(data, critria);