def timeConversion(s):
    # Write your code here
    isAM = s[-2:] == 'AM'
    if isAM:
        if s[:2] == '12':
            return '00' + s[2:-2]
        else:
            return s[:-2]
    strHour = s[:2]
    strRest = s[2:-2]
    hour = 12 if int(strHour) == 12 else int(strHour) + 12
    strHour = '00' if hour == 0 else str(hour)
    return strHour + strRest


if __name__ == '__main__':
    timeConversion('07:05:45AM') # 07:05:45
    timeConversion('12:00:00AM') # 00:00:00
    timeConversion('12:00:01AM') # 00:00:01
    timeConversion('12:00:00PM') # 12:00:00
    timeConversion('12:45:54PM') # 12:45:54
    timeConversion('07:05:45PM') # 19:05:45