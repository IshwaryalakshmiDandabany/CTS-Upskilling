import java.util.Scanner;

public class StringReversal {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a string:");
        String s = sc.nextLine();

        StringBuilder sb = new StringBuilder(s);
        String reversed = sb.reverse().toString();

        System.out.println("Reversed string: " + reversed);
        sc.close();
    }
}

