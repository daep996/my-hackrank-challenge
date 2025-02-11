function gradingStudents(grades) {
    // Write your code here
    let result = [];
    for (let valor of grades) {
        if (valor < 38) {
            result.push(valor);
        } else {
            const nextMultipleOfFive = valor % 5 === 0 ? valor + 5 : (Math.floor(valor / 5) * 5) + 5
            const num = nextMultipleOfFive - valor < 3 ? nextMultipleOfFive : valor
            result.push(num)
        }
    }
    return result
}

gradingStudents([73, 67, 38, 33]); // [75, 67, 40, 33]