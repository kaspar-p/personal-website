// package qrcode;

// import java.util.ArrayList;

// public class CalculatorFlex {

// public static int[] generateGenerator(int numSymbols) {
// // Generate the irreducible polynomial that is required for RS encoding

// ArrayList<Integer> generator = new ArrayList<Integer>();
// generator.add(1);

// for (int i = 0; i < numSymbols; i++) {
// System.out.println("2 ^ " + i + ": " + GF_pow_flex(2, i));
// ArrayList<Integer> term2 = new ArrayList<Integer>();
// term2.add(1);
// term2.add(GF_pow_flex(2, i));

// generator =
// Decoder.convertBack(polynomial_mult(Decoder.convertList(generator),
// Decoder.convertList(term2)));
// }

// return Decoder.convertList(generator);
// }
// }
