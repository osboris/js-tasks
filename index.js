const string = "Привет! Как дела?";
const vowels = ["и", "е", "а",];
function getVowels(stringtofilter) {
    let extactedVowels = "";
    for (var i = 0; i < stringtofilter.length; i++) {
        const currentletter = stringtofilter[i].toLowerCase();
        if (vowels.includes(currentletter)) {
            extactedVowels += currentletter;
        }

    }
    return extactedVowels;
}
console.log(getVowels(string));