package challenge2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Mini_max_sum {
    public static void main(String[] args) {
        miniMaxSum(Arrays.asList(1, 2, 3, 4, 5)); // 10 14
        miniMaxSum(Arrays.asList(1, 3, 5, 7, 9)); // 16 24
        miniMaxSum(Arrays.asList(7, 69, 2, 221, 8974)); // 299 9271
        miniMaxSum(Arrays.asList(256741038, 623958417, 467905213, 714532089, 938071625)); // 2063136757 2744467344
    }

    public static void miniMaxSum(List<Integer> arr) {
        List<Long> sumas = new ArrayList<>();
        for (int i = 0; i < arr.size(); i++) {
            List<Long> temp_arr = arr.stream().map(Integer::longValue).collect(Collectors.toList());
            temp_arr.remove(i);
            sumas.add(temp_arr.stream().mapToLong(Long::intValue).sum());
        }
        System.out.println(sumas.stream().min(Long::compareTo).get() + " " + sumas.stream().max(Long::compareTo).get());
    }
}
