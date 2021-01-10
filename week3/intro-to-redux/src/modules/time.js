function minutes(time) {
    let minutes = Math.floor(time / 60000)
    return minutes
}

function seconds(time) {
    let seconds = Math.floor((time % 60000) / 1000)
    return seconds
}

module.exports.milliseconds = (time) => {
    let milliseconds = Math.floor(time % 1000)
    return milliseconds
}

module.exports.timerDisplay = (time) => {
    return minutes(time) + ":" + (seconds(time) < 10 ? '0' : '') + seconds(time)
}

module.exports.lapDisplay = (time) => {
    let min = minutes(time)
    let sec = seconds(time)
    let milli = this.milliseconds(time)
    let display = ''
    
    if (min > 0) {
        min > 1 ? display += `${min} Minutes ` : display += `${min} Minute `
    }

    if (sec > 0) {
        sec > 1 ? display += `${sec} Seconds ` : display += `${sec} Second `
    }

    if (milli > 0) {
        milli > 1 ? display += `${milli} Milliseconds` : display += `${milli} Millisecond`
    }

    return display
}
