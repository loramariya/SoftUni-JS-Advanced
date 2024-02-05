function jsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let output = '<table>\n';
    let firstObj = arr[0];
    output += '<tr>';
    for (const key in firstObj) {
        output += `<th>${escapeHtml(key)}</th>`;
    }
    output += '</tr>\n';

    for (const obj of arr) {
        output += '<tr>';
        for (const key in obj) {
            output += `<td>${escapeHtml(obj[key].toString())}</td>`
        }
        output += '</tr>\n';
    }

    output += '</table>';

    function escapeHtml(text) {
        return text.replace(/[&<>"'\/]/g, (result) => {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                "/": '&#x2F;'
            };
            if (map[result]) {
                return map[result];
            }
            return result;
        })
    }
    return output;
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