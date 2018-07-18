'use strict';

module.exports = (srcPath) => {
    const Broadcast = require(srcPath + 'Broadcast');

    return {
        usage: 'time',
        command: state => (args, player) => {
            const timekeeper = state.TimeKeeper;
            return Broadcast.sayAt(player, 'Current time: ' + timekeeper.config.timeUnits[0] + '-' + timekeeper.getTimeByIndex(0));
        }
    };
};





