public class TwoThreadsPrintMessages {

    private static class PrinterA implements Runnable {
        @Override
        public void run() {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Thread A - message " + i);
            }
        }
    }

    private static class PrinterB implements Runnable {
        @Override
        public void run() {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Thread B - message " + i);
            }
        }
    }

    public static void main(String[] args) {
        Thread t1 = new Thread(new PrinterA());
        Thread t2 = new Thread(new PrinterB());

        t1.start();
        t2.start();
    }
}

