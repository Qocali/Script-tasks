const ceaser = (text, key) => {
    const abs = "abcdefghijklmnopqrstuvwxyz"

    var cearse = ""
    for (let i = 0; i < text.length; i++) {
        if (key > 0) {
            cearse += (abs[(abs.indexOf(text[i].toLowerCase())) + key])
        } else {
            cearse += (abs[(abs.indexOf(text[i].toLowerCase())) - key])
        }
    }
    return cearse;
}
console.log(ceaser("ATA", 2))