package challenge5;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Grading {
    public static List<Integer> gradingStudents(List<Integer> grades) {
    // Write your code here
    List<Integer> result = new ArrayList<>();
        for (int valor : grades) {
            if (valor < 38) {
                result.add(valor);
            } else {
                int nextMultipleOfFive = valor % 5 == 0 ? valor + 5 : (valor / 5) * 5 + 5;
                int num = nextMultipleOfFive - valor < 3 ? nextMultipleOfFive : valor;
                result.add(num);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        gradingStudents(Arrays.asList(73, 67, 38, 33)); // [75, 67, 40, 33]
    }
}
