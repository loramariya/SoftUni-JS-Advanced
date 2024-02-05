function createAssemblyLine() {
    function hasClima(obj) {
        const template = {
            temp: 21,
            tempSettings: 21,
            adjustTemp: function adjustTemp() {
                if (obj.temp < obj.tempSettings) obj.temp++;
                else if (obj.temp > obj.tempSettings) obj.temp--;
            },
        };
        Object.assign(obj, template);
    }
    function hasAudio(obj) {
        obj.currentTrack = { name: null, artist: null };

        obj.nowPlaying = function nowPlaying() {
            if (obj.currentTrack !== null) {
                console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
            }
        };

        return obj;
    }
    function hasParktronic(obj) {
        obj.checkDistance = function checkDistance(distance) {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            }
            else if (distance >= 0.1 && distance < 0.25) {
                console.log("Beep! Beep!");
            }
            else if (distance >= 0.25 && distance < 0.5) {
                console.log("Beep!");
            }
        };
        return obj;
    }
    return {
        hasClima,
        hasAudio,
        hasParktronic,
    };
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();

console.log(myCar.temp);
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2)

console.log(myCar)