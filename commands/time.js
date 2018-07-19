'use strict';

module.exports = (srcPath) => {
    const Broadcast = require(srcPath + 'Broadcast');

    return {
        usage: 'time',
        command: state => (args, player) => {
            const timekeeper = state.TimeKeeper;
            let time_string = 'Current time: ';
            for (var x = timekeeper.config.timeUnits.length-1; x >= 0; x--){
                let temp_time = timekeeper.getTimeByIndex(x);
                // zero padding
                if(temp_time.toString().length == 1){
                    temp_time = "0" + temp_time;    
                }
                time_string += temp_time;
                if(x>0){
                    time_string += ":";
                }
            }
            return Broadcast.sayAt(player, time_string);
        }
    };
};




