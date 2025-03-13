package challenge15;

public class DrawingBook {
    /*
    * Complete the 'pageCount' function below.
    *
    * The function is expected to return an INTEGER.
    * The function accepts following parameters:
    *  1. INTEGER n
    *  2. INTEGER p
    */
    public static int pageCount(int n, int p) {
        // Write your code here
        if (n == 1 || n == p) return 0;
        int turnedPagesFromStart = p / 2;
        int turnedPagesFromEnd = n / 2 - turnedPagesFromStart;
        return Math.min(turnedPagesFromStart, turnedPagesFromEnd);
    }

    public static void main(String[] args) {
        System.out.println(pageCount(6, 2)); // 1
        System.out.println(pageCount(5, 4)); // 0
        System.out.println(pageCount(6, 5)); // 1
    }
}