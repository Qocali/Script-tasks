const ceaser = (text, key) => {
    const abs = "abcdefghijklmnopqrstuvwxyz"

    var cearse = ""
    for (let i = 0; i < text.length; i++) {
        if (key > 0) {
            if (text[i] >= 'A' && text[i] <= 'Z') {
                cearse += (abs[(abs.indexOf(text[i].toLowerCase())) + key].toUpperCase())
            } else {
                cearse += (abs[(abs.indexOf(text[i])) + key].toLowerCase())
            }
        } else {
            if (text[i] >= 'A' && text[i] <= 'Z') {
                cearse += (abs[(abs.indexOf(text[i].toLowerCase())) - key].toUpperCase())
            } else {
                cearse += (abs[(abs.indexOf(text[i])) - key].toLowerCase())
            }
        }
    }
    return cearse;
}
console.log(ceaser("ATa", 2))