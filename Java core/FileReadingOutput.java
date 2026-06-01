import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileReadingOutput {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("output.txt"))) {
            String line;
            System.out.println("Contents of output.txt:");
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Failed to read output.txt: " + e.getMessage());
        }
    }
}

