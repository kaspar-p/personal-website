package qrcode;

import java.awt.*;
import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;

import javax.imageio.ImageIO;
import javax.swing.*;

public class Main {

	@SuppressWarnings("unused")
	public static void main(String[] args) {
		
		Decoder decoder = new Decoder();
		Encoder encoder = new Encoder();
		
		int prime = 0x11d;
		
		Calculator.initTables(prime);

		StringBuilder inputString = new StringBuilder();
		for (String arg : args) {
			inputString.append(arg);
			inputString.append(" ");
		}
		inputString.deleteCharAt(inputString.length() - 1);
		
		int n = 48;
		String inputMessage = inputString.toString();
		int k = inputMessage.length();
		
		System.out.println((n - k) / 2);
	
		int[] asciiArr = new int[k];
		
		for(int i = 0; i < k; i++) {
			asciiArr[i] = (int) inputMessage.charAt(i);
		}

		int[] msgEnc = encoder.encodeMessage(asciiArr, (n - k));
		/*
		System.out.print("Encoded Message: ");
		for(int c : Arrays.copyOfRange(msgEnc, k, msgEnc.length)) {
			System.out.print(c + " ");
		}
		System.out.println("with length: " + (n - k));
		*/
		for(int c : msgEnc) {
			System.out.print((char) c);
		}
		System.out.println("");
		
		// mess the data up a little bit
		msgEnc[0] = 48;
		msgEnc[1] = 42;
		msgEnc[2] = 60;
		msgEnc[3] = 74;
		msgEnc[4] = 53;
		msgEnc[5] = 86;
		
		StringBuilder corrupt = new StringBuilder();
		for (int b : msgEnc) {
			corrupt.append((char) b);
		}
		
		System.out.println(corrupt);
		
		int[] erasurePos = new int[] {0, 1, 2};
		int[][] correctedPair = decoder.correctInput(msgEnc, (n - k), erasurePos);
		
		StringBuilder finalresult = new StringBuilder();
		for (int i = 0; i < correctedPair[0].length; i++) {
			finalresult.append((char) correctedPair[0][i]);
		}
		
		System.out.println(finalresult); 
		
		/*
		JFrame frame = new JFrame("QR Enc"
				+ "oder");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		Container contentFrame = frame.getContentPane();

		//3. Create components and put them in the frame.
		//...create emptyLabel...
		JPanel mainPanel = new JPanel(new BorderLayout());
		JButton b1 = new JButton("Hello");
		JButton defaultButton = new JButton("OK");
		frame.getRootPane().setDefaultButton(defaultButton);

		contentFrame.add(b1, BorderLayout.CENTER);
		
		// Size the frame
		frame.pack();
		
		// Center the frame
		frame.setLocationRelativeTo(null);

		// Show the frame
		frame.setVisible(true);
		
		*/
		
		/*
		// Show dialog box
		String imagePath = new FilePicker().chooseFile();
		// String imagePath = testPath;
		
		// As long as they chose an actual file, not cancelled		
		if (imagePath.charAt(0) != '/') {
			System.out.println("You cancelled the selection. Please restart the program to operate.");
			
			// Close the problem
			System.exit(0);
		} else {
			System.out.println("The path to the file you chose was: " + imagePath);
		}
		
		BufferedImage image = null;
		
		// read the image contents - or at least try to
		try {
			image = ImageIO.read(new File(imagePath));
			System.out.println("Successfully read image contents");
		} catch (IOException e) {
			System.out.println(e);
			System.out.println(e.getStackTrace());
		}
		
		// Give the decoder the information of the image
		decoder.fillInformation(image);
		
		System.out.println("This QR code should have a data capacity of: " + decoder.computeCapacity());
		
		// If image contents are read correctly
		 * 
		 * */
	}
}
