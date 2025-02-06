public class Staircase {
    public static void staircase(int n) {
        int hash = n;
        StringBuilder rta = new StringBuilder();
        for (int i = 0; i < n; i++) {
            char[] x = new char[n];
            java.util.Arrays.fill(x, ' ');
            java.util.Arrays.fill(x, hash - 1, n, '#');
            rta.append(new String(x)).append("\n");
            hash--;
        }
        System.out.print(rta.toString());
    }

    public static void main(String[] args) {
        staircase(7);
    }
}