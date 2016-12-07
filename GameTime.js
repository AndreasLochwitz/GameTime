
class GameTime {

  // Konstruktor
  constructor(startHours, startMinutes, displayId) {
    this.hours = startHours;
    this.minutes = startMinutes;
    this.displayId = displayId;
    this.timerId = null;
    this.displayTime()
  }

  // Startet die automatische Aktualisierung der Zeit
  startTime() {
    var self = this;
    if (this.timerId === null) {
      this.timerId = setInterval(function() {
        self.updateTime();
      }, 1000);
    }
  }

  // Stoppt die automatische Aktualisierung der Zeit
  stopTime() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  // Aktualisiert die Zeit (Variablen hochzaehlen)
  updateTime() {
    this.minutes++;
    if (this.minutes === 60) {
      this.hours++;
      if (this.hours === 24) {
        this.hours = 0;
      }
      this.minutes = 0;
    }
    this.displayTime();
  }

  // Zeigt die aktuelle Zeit an
  displayTime() {
    var outputElem = document.getElementById(this.displayId),
        timeString = this.prefixTime(this.hours) + ":" + this.prefixTime(this.minutes);
    outputElem.innerHTML = timeString;

  }

  // Hilfsfunktion - fuegt eine "0" ein wenn minutesOrHours kleiner als 10 ist
  prefixTime(minutesOrHours) {
    if (minutesOrHours < 10) {
      return "0" + minutesOrHours;
    }
    return "" + minutesOrHours;
  }

}
