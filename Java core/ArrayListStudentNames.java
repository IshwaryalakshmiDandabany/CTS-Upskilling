import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListStudentNames {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> names = new ArrayList<>();

        System.out.println("Add student names to the list.");
        System.out.println("Type 'done' to finish and display all names.");

        while (true) {
            System.out.print("Enter student name: ");
            String name = sc.nextLine().trim();

            if (name.equalsIgnoreCase("done")) {
                break;
            }
            if (!name.isEmpty()) {
                names.add(name);
            } else {
                System.out.println("Empty input ignored.");
            }
        }

        System.out.println("\nAll student names:");
        for (int i = 0; i < names.size(); i++) {
            System.out.println((i + 1) + ". " + names.get(i));
        }

        sc.close();
    }
}

