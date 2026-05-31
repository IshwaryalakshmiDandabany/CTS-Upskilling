import java.util.Scanner;

public class Calculator {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter first number:");
        double num1 = sc.nextDouble();

        System.out.println("Enter second number:");
        double num2 = sc.nextDouble();

        System.out.println("Choose operation:");
        System.out.println("+");
        System.out.println("-");
        System.out.println("*");
        System.out.println("/");

        char choice = sc.next().charAt(0);

        switch(choice) {

            case '+':
                System.out.println("Result = " + (num1 + num2));
                break;

            case '-':
                System.out.println("Result = " + (num1 - num2));
                break;

            case '*':
                System.out.println("Result = " + (num1 * num2));
                break;

            case '/':
                if(num2 != 0) {
                    System.out.println("Result = " + (num1 / num2));
                } else {
                    System.out.println("Division by zero is not possible");
                }
                break;

            default:
                System.out.println("Invalid Choice");
        }

        sc.close();
    }
}