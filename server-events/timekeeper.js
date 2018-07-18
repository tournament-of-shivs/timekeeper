'use strict';

const TimeManager = require("../lib/TimeManager");

module.exports = srcPath => {
  return {
    listeners: {
      startup: state => (commander) => {
        let timeKeeper = new TimeManager();
        state.TimeKeeper = timeKeeper;
        timeKeeper.initialize();
      },

      shutdown: state => function () {
        // no need to do anything special in shutdown
      },
    }
  };
};
