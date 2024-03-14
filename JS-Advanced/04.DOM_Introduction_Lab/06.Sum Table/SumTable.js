function sumTable() {
    const table = document.querySelectorAll("table tr");
    let total = 0;
    
    for (let i = 1; i < table.length - 1; i++) {
        let cols = table[i].children;
        const lastIndex = cols.length-1;
        let cost = cols[lastIndex].textContent;
        total += Number(cost);       
    }
    
    document.getElementById("sum").textContent = total;
}