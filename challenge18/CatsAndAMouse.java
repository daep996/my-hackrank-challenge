package challenge18;

public class CatsAndAMouse {
    // Complete the catAndMouse function below.
    static String catAndMouse(int x, int y, int z) {
        if (Math.abs(x - z) == Math.abs(y - z)) {
            return "Mouse C";
        } else if (Math.abs(x - z) < Math.abs(y - z)) {
            return "Cat A";
        } else {
            return "Cat B";
        }
    }
}
