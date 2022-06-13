/**
 * ABC
 */
public class ABC {

    public static void main(String[] args) {
        // 555.444.22.777.2.777.999 : LIBRARY
        // int n = 8;
        int n = guessTheNumber();
        nextClue(n);

    }

    public static int guessTheNumber() {
        // Steve Jobs once said CONNECT THE DOTS
        // We take it seriously.

        // You have to write the correct value of n to proceed
        // TODO
        int n = 8; 
        return n;
    }

    public static void nextClue(int n) {
        printing(n % 5, 5);
        printing(n % 5, 4);
        printing(n / 2 - 2, 2);
        printing(n / 5 + 2, 7);
        printing(n / 4 - 1, 2);
        printing((n + 1) / 3, 7);
        printing((n + 4) / 4, 9);
    }

    public static void printing(int n, int k) {
        for (int j = 0; j < n; j++) {
            System.out.print(k);
        }
    }
}