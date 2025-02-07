package challenge3;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class BirthdayCakeCandles {
    public static int birthdayCakeCandles(List<Integer> candles) {
        // Write your code here
        List<Integer> mutableCandles = new ArrayList<>(candles);
        Collections.sort(mutableCandles, Collections.reverseOrder());
        int max = mutableCandles.get(0);
        long count = mutableCandles.stream().filter(candle -> candle == max).count();
        return (int) count;
    }

    public static void main(String[] args) {
        System.out.println(birthdayCakeCandles(List.of(3, 2, 1, 3))); // 2
        System.out.println(birthdayCakeCandles(List.of(4, 4, 1, 3))); // 2
        System.out.println(birthdayCakeCandles(List.of(1, 1, 1, 1))); // 4
    }
}