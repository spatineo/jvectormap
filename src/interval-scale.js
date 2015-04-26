/*
  scale: {
    intervals: [
      {
        label: '',
        min: 0,
        max: 0.5,
        value: ''
      },
    ],
    default: ''
  }
 */
jvm.IntervalScale = function(scale){
  this.scale = scale;
};

jvm.IntervalScale.prototype.setScale = function(scale) {
    this.scale = scale;
};

jvm.IntervalScale.prototype.getValue = function(value){
  var entry, i;
  for (i=0;i<this.scale.intervals.length;i++) {
    entry = this.scale.intervals[i];
    if ( (entry.min === false || entry.min <= value) && (entry.max === false || entry.max > value) ) {
      return entry.value;
    }
  }
  return this.scale.default;
};

jvm.IntervalScale.prototype.getTicks = function(){
  var ticks = [],
      entry, i;

  for (i=0;i<this.scale.intervals.length;i++) {
    entry = this.scale.intervals[i];
    ticks.push({
      label: entry.label,
      value: entry.value
    });
  }

  return ticks;
};
