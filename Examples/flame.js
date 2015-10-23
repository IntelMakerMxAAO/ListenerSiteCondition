var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function() {

  // Plug the Flame Detector Sensor into D4
  var flame = new five.Sensor.Digital(4);

  // Plug the Piezo module into the
  // Grove Shield's D6 jack.
  var alarm = new five.Piezo(6);

  flame.on("change", function() {
    if (this.value) {
      if (!alarm.isPlaying) {
        alarm.frequency(five.Piezo.Notes.d5, 5000);
      }
    }
  });
});