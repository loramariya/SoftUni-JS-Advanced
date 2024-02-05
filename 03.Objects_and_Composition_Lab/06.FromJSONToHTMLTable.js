function jsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let output = '<table>\n';
    let firstObj = arr[0];
    output += '<tr>';
    for (const key in firstObj) {
        output += `<th>${key}</th>`;
    }
    output += '</tr>\n';

    for (const obj of arr) {
        output += '<tr>';
        for (const key in obj) {
            output += `<td>${obj[key]}</td>`
        }
        output += '</tr>\n';
    }

    output += '</table>';

    console.log(escapeHtml(output));

    function escapeHtml(arr) { 
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'}
    };
};

`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`