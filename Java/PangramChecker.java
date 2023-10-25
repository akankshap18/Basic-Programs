import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();

        boolean isPangram = checkIfPangram(input.toLowerCase());

        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }

    public static boolean checkIfPangram(String sentence) {
        boolean[] alphabetCheck = new boolean[26];
        int index;

        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if ('a' <= ch && ch <= 'z') {
                index = ch - 'a';
                alphabetCheck[index] = true;
            }
        }

        for (boolean b : alphabetCheck) {
            if (!b) {
                return false;
            }
        }

        return true;
    }
}
