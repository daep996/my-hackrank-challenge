function timeConversion(s) {
    // Write your code here
    const isAM = s.slice(-2) === 'AM'
    if (isAM) {
        const is12 = s.slice(0, 2) === '12'
        if(is12) {
            return `00${s.slice(2, -2)}`
        }
        return s.slice(0, -2)
    }
    let strHour = s.slice(0, 2)
    const strRest = s.slice(2, -2)
    const hour = parseInt(strHour) === 12 ? 12 : parseInt(strHour) + 12
    strHour = hour === 0 ? '00' : hour.toString()
    return `${strHour.concat(strRest)}`
}

timeConversion('07:05:45AM') // 07:05:45
timeConversion('12:00:00AM') // 00:00:00
timeConversion('12:00:01AM') // 00:00:01

timeConversion('12:00:00PM') // 12:00:00
timeConversion('12:45:54PM') // 12:45:54
timeConversion('07:05:45PM') // 19:05:45