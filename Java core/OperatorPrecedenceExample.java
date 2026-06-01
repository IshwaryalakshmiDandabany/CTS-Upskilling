public class OperatorPrecedenceExample {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2; // * happens before +
        int result2 = (10 + 5) * 2; // parentheses override precedence

        System.out.println("Expression: 10 + 5 * 2");
        System.out.println("Result: " + result1);
        System.out.println("Explanation: Java evaluates * before +, so 5 * 2 = 10, then 10 + 10 = 20.");

        System.out.println();

        System.out.println("Expression: (10 + 5) * 2");
        System.out.println("Result: " + result2);
        System.out.println("Explanation: Parentheses are evaluated first, so (10 + 5) = 15, then 15 * 2 = 30.");
    }
}

