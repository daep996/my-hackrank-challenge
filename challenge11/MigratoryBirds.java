package challenge11;

import java.util.*;

/*
* Complete the 'migratoryBirds' function below.
*
* The function is expected to return an INTEGER.
* The function accepts INTEGER_ARRAY arr as parameter.
*/

public class MigratoryBirds {
    public static int migratoryBirds(List<Integer> arr) {
        // Write your code here
        Map<Integer, Integer> mapBirds = new HashMap<>();
        for (int bird : arr) {
            mapBirds.put(bird, mapBirds.getOrDefault(bird, 0) + 1);
        }
        int maxFrequency = Collections.max(mapBirds.values());
        return mapBirds.entrySet().stream()
                .filter(entry -> entry.getValue() == maxFrequency)
                .map(Map.Entry::getKey)
                .min(Integer::compareTo)
                .orElse(0);
    }

    public static void main(String[] args) {
        System.out.println(migratoryBirds(Arrays.asList(1, 4, 4, 4, 5, 3))); // 4
        System.out.println(migratoryBirds(Arrays.asList(1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4))); // 3
        System.out.println(migratoryBirds(Arrays.asList(1, 1, 2, 2, 3))); // 1
        System.out.println(migratoryBirds(Arrays.asList(1, 1, 0, 0, 3))); // 0
    }
}
