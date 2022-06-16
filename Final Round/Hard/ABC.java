
/* Name of the class has to be "Main" only if the class is public. */
/**
 * ABC
 */
class ABC {

    public static void main(String[] args) {
        // 555.444.22.777.2.777.999. : LIBRARY
        int n = guessTheNumber();
        nextClue(n);

    }

    public static int guessTheNumber() {
        // Steve Jobs once said CONNECT THE DOTS
        // We take it seriously.

        // You have to write the correct value of n to proceed
        int n = ?; // n ??????????????????????????????????????????
        return n;
    }

    public static void nextClue(int n) {
        printing(n / 4 - 1, 4);
        printing(n % 5, 4);
        printing(n % 2 +1, 8);
        printing(n % 3, 4);
        printing(n % 3 * 2 / 2, 8);
        printing(n / 2 - 2, 2);


    }

    public static void printing(int n, int k) {
        for (int j = 0; j < n; j++) {
            System.out.print(k);
        }
        System.out.print(".");
    }
}