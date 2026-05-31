import java.util.Scanner;

public class CustomExceptionAgeCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter your age:");
        int age = sc.nextInt();

        try {
            if (age < 18) {
                throw new InvalidAgeException("Invalid age! Age must be 18 or above.");
            }
            System.out.println("Valid age. Welcome!");
        } catch (InvalidAgeException e) {
            System.out.println("Error: " + e.getMessage());
        }

        sc.close();
    }
}


