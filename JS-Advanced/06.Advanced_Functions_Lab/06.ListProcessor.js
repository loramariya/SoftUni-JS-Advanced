function listProcessor(commands) {
    let collection = [];

    const innerObject = {
        add: function(string) {
            collection.push(string);
        },
        remove: function (string) {
            collection = collection.filter(item => item !== string);
        },
        print: function(){
            console.log(collection.join(","));
        }
    };

    for(const command of commands) {
        const [action, param] = command.split(" ");
        innerObject[action](param);
    }
}

const commands = ['add hello', 'add again', 'remove hello', 'add again', 'print'];
listProcessor(commands);