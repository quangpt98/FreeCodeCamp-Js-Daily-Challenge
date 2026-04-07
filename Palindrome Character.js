function palindromeLocator(str){
    // Str in Array umwandeln und Reverse und wieder als String umwandeln
    const reversed = str.split("").reverse().join("");
    if (str !== reversed){
        return "none";
    }
    // länger von String  
    const längeStr = str.length;
    // Mittere Charakter rausfinden mit abrunden.
    const mittlereIndex = Math.floor(längeStr/2);

    //ungerade zahlen von str länger
    if(längeStr %2 !== 0) {
        return str.slice(mittlereIndex,mittlereIndex +1);
    }else {
        //Gerade Zahlen von str länger
        return str.slice(mittlereIndex -1,mittlereIndex +1)
    }

}

console.log(palindromeLocator("abhhba"));
