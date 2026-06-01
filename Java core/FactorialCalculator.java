import java.util.*;

class Factorial {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter number:");

        int num = sc.nextInt();

        int fact = 1;

        System.out.print(num + "! = ");

        for(int i = 1; i <= num; i++) {

            fact = fact * i;

            System.out.print(i);

            if(i < num) {
                System.out.print(" x ");
            }
        }

        System.out.println(" = " + fact);

        sc.close();
    }
}