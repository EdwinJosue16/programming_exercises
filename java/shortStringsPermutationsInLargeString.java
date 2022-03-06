/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;
import java.util.Arrays;

/* Given a short string and a large string 
find the permutations of the short string 
within the large string. */
class Exercise
{
	public static void main (String[] args) 
	{
	    String shortStr = "adbc";
	    String largeStr = "aafdabcdacdbabccadbcbdadbc";
		Exercise ex = new Exercise();
		ex.permutations(shortStr, largeStr);
	}
	
	public void permutations(String shortStr, String largeStr){
	    shortStr = this.sortString(shortStr);
	    String strToCompare = "";
	    String strToCompareCopy = "";
	    for(int i = 0; i <= largeStr.length() - 4; ++i ){
	        strToCompare = largeStr.substring(i, i+ 4);
	        strToCompareCopy = this.sortString(strToCompare);
	        if(strToCompareCopy.equals(shortStr)){
	            System.out.println(strToCompare);
	        }
	    }
	}
	
	public String sortString(String inputString)
    {
        // Converting input string to character array
        char tempArray[] = inputString.toCharArray();
 
        // Sorting temp array using
        Arrays.sort(tempArray); // dual-pivot Quicksort on primitives. It offers O(n log(n)) performance 
 
        // Returning new sorted string
        return new String(tempArray);
    }
 
}
