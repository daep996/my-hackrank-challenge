import java.util.List;
import java.util.Arrays;

class Result {
    // Maximo comun divisor
    private static int mcd(int x, int y) {
        while (y != 0) {
            int temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    // Mínimo comun multiplo
    private static int mcm(int x, int y) {
        return (x * y) / mcd(x, y);
    }

    /*
     * Complete the 'getTotalX' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY a
     *  2. INTEGER_ARRAY b
     */
    public static int getTotalX(List<Integer> a, List<Integer> b) {
        // Write your code here
        int lmcm = a.stream().reduce(1, (acc, val) -> mcm(acc, val));
        int mcdB = b.stream().reduce(b.get(0), (acc, val) -> mcd(acc, val));
        
        int count = 0;
        for (int i = lmcm; i <= mcdB; i += lmcm) {
            if (mcdB % i == 0) {
                count++;
            }
        }
        return count;
    }
}

public class BetweenTwoSets {
    public static void main(String[] args) {
        // Test cases
        List<Integer> test1A = Arrays.asList(2, 6);
        List<Integer> test1B = Arrays.asList(24, 36);
        System.out.printf("getTotalX([2, 6], [24, 36]): %d%n", Result.getTotalX(test1A, test1B)); // 2

        List<Integer> test2A = Arrays.asList(2, 4);
        List<Integer> test2B = Arrays.asList(16, 32, 96);
        System.out.printf("getTotalX([2, 4], [16, 32, 96]): %d%n", Result.getTotalX(test2A, test2B)); // 3
    }
}