import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class HashMapStudentIdToName {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<Integer, String> map = new HashMap<>();

        System.out.println("Add student ID and name.");
        System.out.println("Type -1 for ID to stop adding entries.");

        while (true) {
            System.out.print("Enter student ID: ");
            int id = sc.nextInt();

            if (id == -1) {
                break;
            }

            sc.nextLine(); // consume leftover newline
            System.out.print("Enter student name: ");
            String name = sc.nextLine().trim();

            map.put(id, name);
            System.out.println("Saved: " + id + " -> " + name);
        }

        System.out.println("\nEnter a student ID to retrieve the name:");
        int searchId = sc.nextInt();

        String found = map.get(searchId);
        if (found != null) {
            System.out.println("Student name for ID " + searchId + " is: " + found);
        } else {
            System.out.println("No student found for ID " + searchId);
        }

        // Optional: show map size or contents
        System.out.println("Total stored students: " + map.size());

        sc.close();
    }
}

