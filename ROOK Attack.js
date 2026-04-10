/*Gegeben sind zwei Zeichenfolgen, die die Positionen zweier Türme auf einem Schachbrett angeben. Stelle fest, ob sie sich gegenseitig angreifen können.

Ein Standard-Schachbrett ist 8×8 groß, wobei die Spalten von A bis H (von links nach rechts) und die Reihen von 1 bis 8 (von unten nach oben) nummeriert sind.

Es sieht wie folgt aus:

A8B8C8D8E8F8G8H8
A7B7C7D7E7F7G7H7
A6B6C6D6E6F6G6H6
A5B5C5D5E5F5G5H5
A4B4C4D4E4F4G4H4
A3B3C3D3E3F3G3H3
A2B2C2D2E2F2G2H2
A1B1C1D1E1F1G1H1

Türme können sich horizontal oder vertikal beliebig viele Felder weit bewegen.
Befinden sie sich also in derselben Reihe oder Spalte, können sie sich gegenseitig angreifen.
*/

function rookAttack(rook1, rook2) {
 //Str einzelnen extrahieren in Array
    const arrayRook1 = rook1.split("");
    const arrayRook2 = rook2.split("");

    // Array wert zugreifen Buchstaben Veritkal und Zahlen = Horizontal
    const columnr1 = arrayRook1[0];
    const rowr1 = arrayRook1[1];
    const columnr2 = arrayRook2[0];
    const rowr2 = arrayRook2[1];

    // Einzelne Werte von Vertikla und Horizontal vergleichen
    if(columnr1 === columnr2 || rowr1 === rowr2){
      return true;
    }else {
      return false;
    }
}
  console.log(rookAttack("A1","A8"));
