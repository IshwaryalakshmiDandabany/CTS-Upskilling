public class TypeCastingExample {
    public static void main(String[] args) {
        // double to int (narrowing conversion)
        double doubleValue = 10.75;
        int intFromDouble = (int) doubleValue; // fractional part is truncated
        System.out.println("doubleValue = " + doubleValue);
        System.out.println("(int)doubleValue = " + intFromDouble);

        // int to double (widening conversion)
        int intValue = 25;
        double doubleFromInt = (double) intValue;
        System.out.println("intValue = " + intValue);
        System.out.println("(double)intValue = " + doubleFromInt);
    }
}

