function shout(lowerCase) {
    return lowerCase.toUpperCase();
}

function whisper(upperCase) {
    return upperCase.toLowerCase()
}

function logShout(string) {
    console.log(shout(string))
}

function logWhisper(string) {
    console.log(whisper(string))
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!"
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!"
    } else if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
}