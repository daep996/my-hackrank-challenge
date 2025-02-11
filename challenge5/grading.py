import math

def gradingStudents(grades):
    # Write your code here
    result = []
    for valor in grades:
        if valor < 38:
            result.append(valor)
        else:
            nextMultipleOfFive = valor + 5 if valor % 5 == 0 else (math.floor(valor / 5) * 5) + 5
            if nextMultipleOfFive - valor < 3:
                result.append(nextMultipleOfFive)
            else:
                result.append(valor)
    return result

if __name__ == '__main__':
    gradingStudents([73, 67, 38, 33]) # [75, 67, 40, 33]