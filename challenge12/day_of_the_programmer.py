#
# Complete the 'dayOfProgrammer' function below.
# The function is expected to return a STRING.
# The function accepts INTEGER year as parameter.
#

def dayOfProgrammer(year):
    # Write your code here
    if 1700 <= year <= 1917:
        if year % 4 == 0:
            return f"12.09.{year}"
        return f"13.09.{year}"

    if year == 1918:
        return f"26.09.{year}"
    
    if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
        return f"12.09.{year}"
    else:
        return f"13.09.{year}"

if __name__ == '__main__':
    print(dayOfProgrammer(2017))  # 13.09.2017
    print(dayOfProgrammer(2016))  # 12.09.2016
    print(dayOfProgrammer(1800))  # 12.09.1800
    print(dayOfProgrammer(2012))  # 12.09.2012
    print(dayOfProgrammer(1918))  # 26.09.1918