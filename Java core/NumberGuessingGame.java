import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int targetNumber = (int) (Math.random() * 100) + 1; 
        int guess;

        System.out.println("=== Number Guessing Game ===");
        System.out.println("Guess the number between 1 and 100.");

        while (true) {
            System.out.print("Enter your guess: ");
            if (!sc.hasNextInt()) {
                System.out.println("Invalid input. Please enter an integer.");
                if (!sc.hasNext()) {
                    break;
                }

                sc.next();
                continue;
            }

            guess = sc.nextInt();


            if (guess > targetNumber) {
                System.out.println("Too high! Try again.");
            } else if (guess < targetNumber) {
                System.out.println("Too low! Try again.");
            } else {
                System.out.println("Correct! You guessed the number: " + targetNumber);
                break;
            }
        }


        sc.close();
    }
}

