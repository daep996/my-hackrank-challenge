package challenge6;

import java.util.List;
import java.util.stream.Collectors;

public class AppleAndOrange {
    public static void countApplesAndOranges(int s, int t, int a, int b, List<Integer> apples, List<Integer> oranges) {
        List<Integer> applesDistance = apples.stream()
            .map(apple -> apple + a)
            .filter(o -> o >= s && o <= t)
            .collect(Collectors.toList());
            
        List<Integer> orangesDistance = oranges.stream()
            .map(orange -> orange + b)
            .filter(o -> o >= s && o <= t)
            .collect(Collectors.toList());
            
        System.out.println(applesDistance.size() + "\n" + orangesDistance.size());
    }

    public static void main(String[] args) {
        countApplesAndOranges(7, 10, 4, 12, List.of(2, 3, -4), List.of(3, -2, -4)); // 1 2
        countApplesAndOranges(7, 11, 5, 15, List.of(-2, 2, 1), List.of(5, -6)); // 1 1
    }
}
