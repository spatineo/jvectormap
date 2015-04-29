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
    nodata: {
      label: '',
      value: ''
  }''
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
  if (!isNaN(value)) {
    for (i=0;i<this.scale.intervals.length;i++) {
      entry = this.scale.intervals[i];
      if ( (entry.min === false || value >= entry.min) && (entry.max === false || value <= entry.max) ) {
        return entry.value;
      }
    }
  }
  return this.scale.nodata.value;
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
  if (this.scale.nodata) {
    ticks.push({
      label: this.scale.nodata.label,
      value: this.scale.nodata.value
    });
  }

  return ticks;
};
