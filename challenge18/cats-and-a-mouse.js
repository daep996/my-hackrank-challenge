// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    if (Math.abs(x - z) === Math.abs(y - z))
        return 'Mouse C'
    if(Math.abs(z - x) < Math.abs(z - y) )
        return 'Cat A'
    else
        return 'Cat B'
}
console.log(catAndMouse(1, 2, 3)) // Cat B
console.log(catAndMouse(1, 3, 2)) // Mouse C
/*
console.log(`catAndMouse(22,75,70) : ${catAndMouse(22,75,70)}`) // Cat B
console.log(`catAndMouse(33,86,59) : ${catAndMouse(33,86,59)}`) //Cat A
console.log(`catAndMouse(47,29,89) : ${catAndMouse(47,29,89)}`) //Cat A
console.log(`catAndMouse(18,19,82) : ${catAndMouse(18,19,82)}`) //Cat B
console.log(`catAndMouse(84,17,18) : ${catAndMouse(84,17,18)}`) //Cat B
console.log(`catAndMouse(100,11,55) : ${catAndMouse(100,11,55)}`) //Cat B
console.log(`catAndMouse(37,57,75) : ${catAndMouse(37,57,75)}`) //Cat B
console.log(`catAndMouse(47,30,6) : ${catAndMouse(47,30,6)}`) //Cat B
console.log(`catAndMouse(40,68,50) : ${catAndMouse(40,68,50)}`) //Cat A
console.log(`catAndMouse(26,37,31) : ${catAndMouse(26,37,31)}`) //Cat A
console.log(`catAndMouse(93,49,20) : ${catAndMouse(93,49,20)}`) //Cat B
console.log(`catAndMouse(84,78,31) : ${catAndMouse(84,78,31)}`) //Cat B
console.log(`catAndMouse(80,57,86) : ${catAndMouse(80,57,86)}`) //Cat A
console.log(`catAndMouse(57,94,55) : ${catAndMouse(57,94,55)}`) //Cat A
console.log(`catAndMouse(21,80,4) : ${catAndMouse(21,80,4)}`) //Cat A
console.log(`catAndMouse(1,68,67) : ${catAndMouse(1,68,67)}`) //Cat B
console.log(`catAndMouse(74,91,23) : ${catAndMouse(74,91,23)}`) //Cat A
console.log(`catAndMouse(85,66,80) : ${catAndMouse(85,66,80)}`) //Cat A
console.log(`catAndMouse(21,95,58) : ${catAndMouse(21,95,58)}`) //Mouse C
console.log(`catAndMouse(86,69,77) : ${catAndMouse(86,69,77)}`) //Cat B
console.log(`catAndMouse(31,2,46) : ${catAndMouse(31,2,46)}`) //Cat A
console.log(`catAndMouse(45,94,99) : ${catAndMouse(45,94,99)}`) //Cat B
console.log(`catAndMouse(7,66,36) : ${catAndMouse(7,66,36)}`) //Cat A
console.log(`catAndMouse(63,34,33) : ${catAndMouse(63,34,33)}`) //Cat B
console.log(`catAndMouse(75,92,65) : ${catAndMouse(75,92,65)}`) //Cat A
console.log(`catAndMouse(90,45,54) : ${catAndMouse(90,45,54)}`) //Cat B
console.log(`catAndMouse(12,9,10) : ${catAndMouse(12,9,10)}`) //Cat B
console.log(`catAndMouse(43,56,51) : ${catAndMouse(43,56,51)}`) //Cat B
console.log(`catAndMouse(92,20,56) : ${catAndMouse(92,20,56)}`) //Mouse C
console.log(`catAndMouse(97,12,67) : ${catAndMouse(97,12,67)}`) //Cat A
console.log(`catAndMouse(17,38,86) : ${catAndMouse(17,38,86)}`) //Cat B
console.log(`catAndMouse(85,94,20) : ${catAndMouse(85,94,20)}`) //Cat A
console.log(`catAndMouse(6,81,53) : ${catAndMouse(6,81,53)}`) //Cat B
console.log(`catAndMouse(77,27,54) : ${catAndMouse(77,27,54)}`) //Cat A
console.log(`catAndMouse(62,25,37) : ${catAndMouse(62,25,37)}`) //Cat B
console.log(`catAndMouse(56,70,63) : ${catAndMouse(56,70,63)}`) //Mouse C
console.log(`catAndMouse(49,32,16) : ${catAndMouse(49,32,16)}`) //Cat B
console.log(`catAndMouse(4,61,39) : ${catAndMouse(4,61,39)}`) //Cat B
console.log(`catAndMouse(92,30,61) : ${catAndMouse(92,30,61)}`) //Mouse C
console.log(`catAndMouse(41,59,81) : ${catAndMouse(41,59,81)}`) //Cat B
console.log(`catAndMouse(100,66,83) : ${catAndMouse(100,66,83)}`) //Mouse C
console.log(`catAndMouse(16,16,16) : ${catAndMouse(16,16,16)}`) //Mouse C
console.log(`catAndMouse(81,70,30) : ${catAndMouse(81,70,30)}`) //Cat B
console.log(`catAndMouse(11,33,22) : ${catAndMouse(11,33,22)}`) //Mouse C
console.log(`catAndMouse(35,98,18) : ${catAndMouse(35,98,18)}`) //Cat A
console.log(`catAndMouse(43,62,48) : ${catAndMouse(43,62,48)}`) //Cat A
console.log(`catAndMouse(84,54,69) : ${catAndMouse(84,54,69)}`) //Mouse C
console.log(`catAndMouse(73,72,86) : ${catAndMouse(73,72,86)}`) //Cat A
console.log(`catAndMouse(34,82,49) : ${catAndMouse(34,82,49)}`) //Cat A
console.log(`catAndMouse(16,83,62) : ${catAndMouse(16,83,62)}`) //Cat B
console.log(`catAndMouse(57,50,53) : ${catAndMouse(57,50,53)}`) //Cat B
console.log(`catAndMouse(36,49,88) : ${catAndMouse(36,49,88)}`) //Cat B
console.log(`catAndMouse(5,80,42) : ${catAndMouse(5,80,42)}`) //Cat A
console.log(`catAndMouse(20,86,47) : ${catAndMouse(20,86,47)}`) //Cat A
console.log(`catAndMouse(43,40,41) : ${catAndMouse(43,40,41)}`) //Cat B
console.log(`catAndMouse(72,12,42) : ${catAndMouse(72,12,42)}`) //Mouse C
console.log(`catAndMouse(16,43,29) : ${catAndMouse(16,43,29)}`) //Cat A
console.log(`catAndMouse(11,35,23) : ${catAndMouse(11,35,23)}`) //Mouse C
console.log(`catAndMouse(12,63,37) : ${catAndMouse(12,63,37)}`) //Cat A
console.log(`catAndMouse(84,78,55) : ${catAndMouse(84,78,55)}`) //Cat B
console.log(`catAndMouse(17,90,78) : ${catAndMouse(17,90,78)}`) //Cat B
console.log(`catAndMouse(28,10,84) : ${catAndMouse(28,10,84)}`) //Cat A
console.log(`catAndMouse(39,96,67) : ${catAndMouse(39,96,67)}`) //Cat A
console.log(`catAndMouse(22,84,53) : ${catAndMouse(22,84,53)}`) //Mouse C
console.log(`catAndMouse(49,77,63) : ${catAndMouse(49,77,63)}`) //Mouse C
console.log(`catAndMouse(77,82,55) : ${catAndMouse(77,82,55)}`) //Cat A
console.log(`catAndMouse(17,53,35) : ${catAndMouse(17,53,35)}`) //Mouse C
console.log(`catAndMouse(79,31,55) : ${catAndMouse(79,31,55)}`) //Mouse C
console.log(`catAndMouse(7,56,31) : ${catAndMouse(7,56,31)}`) //Cat A
console.log(`catAndMouse(2,7,4) : ${catAndMouse(2,7,4)}`) //Cat A
console.log(`catAndMouse(99,82,60) : ${catAndMouse(99,82,60)}`) //Cat B
console.log(`catAndMouse(20,17,18) : ${catAndMouse(20,17,18)}`) //Cat B
console.log(`catAndMouse(1,98,49) : ${catAndMouse(1,98,49)}`) //Cat A
console.log(`catAndMouse(91,66,13) : ${catAndMouse(91,66,13)}`) //Cat B
console.log(`catAndMouse(95,23,1) : ${catAndMouse(95,23,1)}`) //Cat B
console.log(`catAndMouse(87,59,73) : ${catAndMouse(87,59,73)}`) //Mouse C
console.log(`catAndMouse(10,10,56) : ${catAndMouse(10,10,56)}`) //Mouse C
console.log(`catAndMouse(61,54,59) : ${catAndMouse(61,54,59)}`) //Cat A
console.log(`catAndMouse(62,94,78) : ${catAndMouse(62,94,78)}`) //Mouse C
console.log(`catAndMouse(49,29,37) : ${catAndMouse(49,29,37)}`) //Cat B
console.log(`catAndMouse(87,79,83) : ${catAndMouse(87,79,83)}`) //Mouse C
console.log(`catAndMouse(72,1,42) : ${catAndMouse(72,1,42)}`) //Cat A
console.log(`catAndMouse(42,34,38) : ${catAndMouse(42,34,38)}`) //Mouse C
console.log(`catAndMouse(52,82,98) : ${catAndMouse(52,82,98)}`) //Cat B
console.log(`catAndMouse(29,12,43) : ${catAndMouse(29,12,43)}`) //Cat A
console.log(`catAndMouse(81,50,97) : ${catAndMouse(81,50,97)}`) //Cat A
console.log(`catAndMouse(80,17,43) : ${catAndMouse(80,17,43)}`) //Cat B
console.log(`catAndMouse(88,38,40) : ${catAndMouse(88,38,40)}`) //Cat B
console.log(`catAndMouse(41,55,84) : ${catAndMouse(41,55,84)}`) //Cat B
console.log(`catAndMouse(48,91,69) : ${catAndMouse(48,91,69)}`) //Cat A
console.log(`catAndMouse(11,74,23) : ${catAndMouse(11,74,23)}`) //Cat A
console.log(`catAndMouse(84,68,76) : ${catAndMouse(84,68,76)}`) //Mouse C
console.log(`catAndMouse(4,51,80) : ${catAndMouse(4,51,80)}`) //Cat B
console.log(`catAndMouse(51,85,39) : ${catAndMouse(51,85,39)}`) //Cat A
console.log(`catAndMouse(37,74,55) : ${catAndMouse(37,74,55)}`) //Cat A
console.log(`catAndMouse(15,65,54) : ${catAndMouse(15,65,54)}`) //Cat B
console.log(`catAndMouse(57,14,56) : ${catAndMouse(57,14,56)}`) //Cat A
console.log(`catAndMouse(43,61,56) : ${catAndMouse(43,61,56)}`) //Cat B
console.log(`catAndMouse(9,79,35) : ${catAndMouse(9,79,35)}`) //Cat A
console.log(`catAndMouse(4,44,44) : ${catAndMouse(4,44,44)}`) //Cat B
*/