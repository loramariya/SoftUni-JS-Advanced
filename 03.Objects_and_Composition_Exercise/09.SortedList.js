function createSortedList(){
    let sortList = [];

    let result = {
        add: function(el){
            if (typeof(el) !== "number" || isNaN(el)) {
                return
            }

            this._sortList.push(Number(el));
            this._sortList.sort(this._sort);
            this.size = this._sortList.length
        },
        remove: function(index){
            if (index<0 || index >= this.size) {
                return
            }
            this._sortList.splice(index,1);
            this._sortList.sort(this._sort);
            this.size = this._sortList.length;
        },
        get: function(index){
            if(index < 0 || index >= this.size){
                return;
            }
            return this._sortList[index];
        },
        size: sortList.length,
        _sort: function(a,b) {return a-b},
        _sortList: []
    }

    return result
}
let list = createSortedList();

list.add(5);

list.add(6); 

list.add(7); console.log(list.get(1)); list.remove(1); console.log(list.get(1));