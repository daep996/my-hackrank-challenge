package challenge10;

import java.util.Arrays;
import java.util.List;

public class DivisibleSumPairs {
    public static int divisibleSumPairs(int n, int k, List<Integer> ar) {
        // Write your code here
        int numPairs = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i < j) {
                    if ((ar.get(i) + ar.get(j)) % k == 0) {
                        numPairs++;
                    }
                }
            }
        }
        return numPairs;
    }

    public static void main(String[] args) {
        System.out.println(divisibleSumPairs(6, 5, Arrays.asList(1, 2, 3, 4, 5, 6))); // 3
        System.out.println(divisibleSumPairs(6, 3, Arrays.asList(1, 3, 2, 6, 1, 2))); // 5
    }
}