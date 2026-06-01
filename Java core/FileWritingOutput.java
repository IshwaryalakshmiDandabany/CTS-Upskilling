import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileWritingOutput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a string to write to output.txt:");
        String input = sc.nextLine();

        // Creates/overwrites output.txt in the project working directory
        // (typically CTS-Java-Core when run from there).
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write(input);
            writer.write(System.lineSeparator());
            System.out.println("Data has been written to output.txt successfully.");
        } catch (IOException e) {
            System.out.println("Failed to write to output.txt: " + e.getMessage());
        }

        sc.close();
    }
}

