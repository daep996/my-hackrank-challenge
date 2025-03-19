package challenge16;

public class CountingValleys {
    /*
     * Complete the 'countingValleys' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER steps
     *  2. STRING path
     */
    public static int countingValleys(int steps, String path) {
        // Write your code here
        int valleys = 0;
        int i = 0;
        for (char step : path.toCharArray()) {
            if (step == 'U') {
                valleys++;
            }
            if (step == 'D') {
                valleys--;
            }
            if (valleys == 0 && step == 'U') {
                i++;
            }
        }
        return i;
    }

    public static void main(String[] args) {
        System.out.println(countingValleys(8, "UDDDUDUU")); // 1
        System.out.println(countingValleys(8, "DDUUUUDD")); // 1
        System.out.println(countingValleys(8, "DUDUDUDU")); // 4
        System.out.println(countingValleys(8, "UDUDUDUD")); // 0
        System.out.println(countingValleys(2, "DD")); // 0
    }
}