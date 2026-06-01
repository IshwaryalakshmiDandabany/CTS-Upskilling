import java.util.Scanner;

public class TryCatchDivisionByZero {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter first integer (numerator):");
        int a = sc.nextInt();

        System.out.println("Enter second integer (denominator):");
        int b = sc.nextInt();

        try {
            int result = a / b; // may throw ArithmeticException when b == 0
            System.out.println("Result = " + result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero. Please enter a non-zero denominator.");
        }

        sc.close();
    }
}

