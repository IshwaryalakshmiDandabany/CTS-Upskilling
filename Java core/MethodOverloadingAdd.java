import java.util.Scanner;

public class MethodOverloadingAdd {

    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter two integers:");
        int i1 = sc.nextInt();
        int i2 = sc.nextInt();
        System.out.println("add(int, int) = " + add(i1, i2));

        System.out.println("Enter two doubles:");
        double d1 = sc.nextDouble();
        double d2 = sc.nextDouble();
        System.out.println("add(double, double) = " + add(d1, d2));

        System.out.println("Enter three integers:");
        int i3 = sc.nextInt();
        int i4 = sc.nextInt();
        int i5 = sc.nextInt();
        System.out.println("add(int, int, int) = " + add(i3, i4, i5));

        sc.close();
    }
}

