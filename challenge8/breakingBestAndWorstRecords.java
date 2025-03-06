package challenge8;

import java.util.List;
import java.util.Arrays;

public class breakingBestAndWorstRecords {
    public static List<Integer> breakingRecords(List<Integer> scores) {
        int[] result = new int[2];
        int min = scores.get(0);
        int max = scores.get(0);
        for(int i = 1; i < scores.size(); i++) {
            if(scores.get(i) > max) {
                max = scores.get(i);
                result[0]++;
            } else if(scores.get(i) < min) {
                min = scores.get(i);
                result[1]++;
            }
        }
        return Arrays.asList(result[0], result[1]);
    }

    public static void main(String[] args) {
        List<Integer> result = breakingRecords(Arrays.asList(10, 5, 20, 20, 4, 5, 2, 25, 1));
        System.out.println(result.get(0) + " " + result.get(1)); // 2 4
        List<Integer> result2 = breakingRecords(Arrays.asList(3, 4, 21, 36, 10, 28, 35, 5, 24, 42));
        System.out.println(result2.get(0) + " " + result2.get(1)); // 4 0
    }
}