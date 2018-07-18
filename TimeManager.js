'use strict';

const Data = require('../../../src/Data');

/**
    * Counts the passage of the Days of our Lives
    * @property {JSON} config
    * @property {Map<string,int>} time_current
    * @property {Map<string,int>} date_current
 */
class TimeManager {
    constructor() {
        this.config = Data.parseFile(__dirname + '../config.json');
        this.time_current = new Map();
        this.date_current = new Map();
        this.time_interval;
    }
    
    initialize() {
        // Check for a saved file
        // Load saved file or default to 1st config options
        this.defaultBeginning();
        this.startTime();
    }
    
    startTime(){
        time_interval = setInterval(() => {
            this.incrementTime(0);
            }, this.config.baseInterval * 1000);
    }
    
    stopTime(){
        clearInterval(time_interval);
    }
    
    defaultBeginning(){
        this.config.timeUnits.forEach(unit => {
            this.time_current.set(unit, 0);
        });
        this.config.dateUnits.forEach(unit => {
            this.date_current.set(unit, 1);
        });
    }
    
    loadTime(){
        
    }
    
    saveTime(){
        
    }
    
    getTimeByIndex(unit_index){
        let unit = this.config.timeUnits[unit_index];
        return this.time_current.get(unit);
    }
    
    setTimeByIndex(unit_index, unit_value){
        let unit = this.config.timeUnits[unit_index];
        this.time_current.set(unit, unit_value);
    }
    
    getDateByIndex(unit_index){
        let unit = this.config.dateUnits[unit_index];
        return this.date_current.get(unit);
    }
    
    setDateByIndex(unit_index, unit_value){
        let unit = this.config.dateUnits[unit_index];
        this.date_current.set(unit, unit_value);
    }
    
    incrementTime(unit_index){
        // Increment smallest unit of time
        let unit = this.config.timeUnits[unit_index];
        let value = this.time_current.get(unit) + 1;
        this.time_current.set(unit, value);
        // Check if it has reached its max
        // Increment next smallest unit... and so on
        // Determine if the date needs to be incremented (or exists)
    }
    
    incrementDate(){
        // Similar to increment time
    }

    addTimeBasedEmit(){
        
    }
    
    removeTimeBasedEmit(){
        
    }

}

module.exports = TimeManager;



