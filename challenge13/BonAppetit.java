package challenge13;

import java.util.Arrays;
import java.util.List;

public class BonAppetit {
    /*
     * Complete the 'bonAppetit' function below.
     *
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY bill
     *  2. INTEGER k
     *  3. INTEGER b
     */

    public static void bonAppetit(List<Integer> bill, int k, int b) {
        // Write your code here
        int total = 0;
        for (int i = 0; i < bill.size(); i++) {
            total += bill.get(i);
        }
        int injustTotal = (total - bill.get(k)) / 2;
        if (injustTotal == b) {
            System.out.println("Bon Appetit");
        } else {
            System.out.println(b - injustTotal);
        }
    }

    public static void main(String[] args) {
        bonAppetit(Arrays.asList(3, 10, 2, 9), 1, 12); // 5
        bonAppetit(Arrays.asList(3, 10, 2, 9), 1, 7);  // Bon Appetit
        bonAppetit(Arrays.asList(2, 4, 6), 2, 6);      // 3
        bonAppetit(Arrays.asList(2, 4, 6), 2, 3);      // Bon Appetit
    }
}