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
        this.config = Data.parseFile(__dirname + '/../config.json');
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
        this.time_interval = setInterval(() => {
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
        let new_value = this.getTimeByIndex(unit_index)+1;
        if (new_value > this.config.timeMax[unit]){
            new_value = 0;
            if(unit_index == this.config.timeUnits.length-1){
                //incrementDate(0);
            } else {
                this.incrementTime(unit_index+1);
            }
        }
        this.setTimeByIndex(unit_index, new_value);
    }
    
    incrementDate(unit){
        // let new_value = current value +1
        // let unit_increments = config.unit.increments []
        let reset_unit = false;
        // if unit.increments
            //foreach => unit_to_inc
                // if unit_to_inc has cycles && new_value > unit_to_inc.current_cycle.length
                     // if unit_to_inc resets unit
                        // reset_unit = true;
                    // increment (unit_to_inc)
// This will set larger units first, not sure if that will
// cause issues will time based events later
// Example: Dec 31, 1999 turns to Dec 31, 2000 then Jan 31, 2000 then Jan 01, 2000
// The date should probably be set all at once, but multiple events might need to fire
            // end for loop
        // if reset_unit
            // new_value = unit_base
        // else if unit resets itself
            // check for unit.length or # of cycles
            // if new_value > length 
                // new_value = unit_base
        // setDate (unit, new_value)
    }

    addTimeBasedEmit(){
        
    }
    
    removeTimeBasedEmit(){
        
    }

}

module.exports = TimeManager;





