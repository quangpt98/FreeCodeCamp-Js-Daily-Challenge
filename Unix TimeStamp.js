function getDayOfWeek(timestamp) {
  //Datum von milisekunden holen
  const datestamp = new Date(timestamp);

  //Tag von Datum indexing
  const indexTag = datestamp.getDay();

  //Array Tag von Einer Woche Definieren
  const wochenTag = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag']
  //Tag von Array indexing
  const dayStamp = wochenTag[indexTag];
  return dayStamp;
  
}

console.log(getDayOfWeek(1775492249000))