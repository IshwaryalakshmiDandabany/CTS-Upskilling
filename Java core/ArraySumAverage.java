import java.util.Scanner;

public class ArraySumAverage {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter number of elements:");
        int n = sc.nextInt();

        if (n <= 0) {
            System.out.println("Number of elements must be positive.");
            sc.close();
            return;
        }

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");

        long sum = 0; // use long to reduce overflow risk
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }

        double average = (double) sum / n;
        System.out.println("Sum = " + sum);
        System.out.println("Average = " + average);

        sc.close();
    }
}

