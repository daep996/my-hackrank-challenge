package challenge7;

public class Kangaroo {
    public static String kangaroo(int x1, int v1, int x2, int v2) {
        // Write your code here
        if((v1 == v2 && x1 != x2) || (x1 > x2 && v1 > v2)) {
            return "NO";
        }
        int t = (x1-x2)/(v2-v1);
        return (t > 0 && ((x1 - x2) % (v2 - v1) == 0)) ? "YES" : "NO";
    }

    public static void main(String[] args) {
        System.out.println(kangaroo(0, 3, 4, 2)); // YES
        System.out.println(kangaroo(0, 2, 5, 3)); // NO
    }
}
