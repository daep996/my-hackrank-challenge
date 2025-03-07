package challenge9;

import java.util.Arrays;
import java.util.List;

public class TheBirthdayBar {
    public static int birthday(List<Integer> s, int d, int m) {
        int res = 0;
        for (int i = 0; i <= s.size() - m; i++) {
            int sum = s.subList(i, i + m).stream()
                      .mapToInt(Integer::intValue)
                      .sum();
            if (sum == d) {
                res++;
            }
        }
        return res;
    }

    public static void main(String[] args) {
        System.out.println("birthday: " + birthday(Arrays.asList(1, 2, 1, 3, 2), 3, 2)); // 2
        System.out.println("birthday: " + birthday(Arrays.asList(1, 1, 1, 1, 1, 1), 3, 2)); // 0
        System.out.println("birthday: " + birthday(Arrays.asList(4), 4, 1)); // 1
        System.out.println("birthday: " + birthday(Arrays.asList(2,3,4,4,2,1,2,5,3,4,4,3,4,1,3,5,4,5,3,1,1,5,4,3,5,3,5,3,4,4,2,4,5,2,3,2,5,3,4,2,4,3,3,4,3,5,2,5,1,3,1,4,2,2,4,3,3,3,3,4,1,1,4,3,1,5,2,5,1,3,5,4,3,3,1,5,3,3,3,4,5,2), 26, 8)); // 16
    }
}