import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class LambdaSortStrings {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<String> list = new ArrayList<>();

        System.out.println("Enter strings (type 'done' to finish):");

        while (true) {
            System.out.print("Enter string: ");
            String s = sc.nextLine().trim();
            if (s.equalsIgnoreCase("done")) {
                break;
            }
            if (!s.isEmpty()) {
                list.add(s);
            }
        }

        // Sort using a lambda expression (case-insensitive)
        Comparator<String> cmp = (a, b) -> a.compareToIgnoreCase(b);
        list.sort(cmp);

        System.out.println("\nSorted list:");
        for (String s : list) {
            System.out.println(s);
        }

        sc.close();
    }
}

