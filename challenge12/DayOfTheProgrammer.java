package challenge12;

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

public class DayOfTheProgrammer {
    public static String dayOfProgrammer(int year) {
        // Write your code here
        if (year >= 1700 && year <= 1917) {
            if (year % 4 == 0) {
                return String.format("12.09.%d", year);
            }
            return String.format("13.09.%d", year);
        }
        
        if (year == 1918) {
            return String.format("26.09.%d", year);
        }
        
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            return String.format("12.09.%d", year);
        } else {
            return String.format("13.09.%d", year);
        }
    }

    public static void main(String[] args) {
        System.out.println(dayOfProgrammer(2017)); // 13.09.2017
        System.out.println(dayOfProgrammer(2016)); // 12.09.2016
        System.out.println(dayOfProgrammer(1800)); // 12.09.1800
        System.out.println(dayOfProgrammer(2012)); // 12.09.2012
        System.out.println(dayOfProgrammer(1918)); // 26.09.1918
    }
}