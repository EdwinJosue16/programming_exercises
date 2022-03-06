/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;
import java.util.Arrays;
import java.util.HashMap;

/* Given an sentence string find if you can create the sentence 
in the string using an other string*/
class Exercise
{
	public static void main (String[] args) 
	{
	    String wordsStr = "i Beautiful a girl when i i";
	    String sentenceStr = "When i was a child i used to play with a girl. We had beautiful toys.";
 		Exercise ex = new Exercise();
 		System.out.println(ex.findWords(wordsStr, sentenceStr));
	}
	
	public boolean findWords(String wordsStr, String sentenceStr){
	   wordsStr = wordsStr.toLowerCase();
	   sentenceStr = sentenceStr.toLowerCase();
	   wordsStr = wordsStr.replaceAll("[^a-zA-Z0-9]"," ");
	   sentenceStr = sentenceStr.replaceAll("[^a-zA-Z0-9]"," ");
	   String[] wordsArray = wordsStr.split(" ");
	   String[] sentenceArray = sentenceStr.split(" ");
	   HashMap<String, Integer> wordsMap = new HashMap<String, Integer>();
	   
	   boolean result = true;
	   
	   for(int i = 0; i < sentenceArray.length; ++i){
	       if(wordsMap.get(sentenceArray[i]) == null){
	           wordsMap.put(sentenceArray[i], 1);
	       }else{
	           wordsMap.put(sentenceArray[i], wordsMap.get(sentenceArray[i]) + 1);
	       }
	   }
	   
	   for(int i = 0; i < wordsArray.length; ++i ){
	       if(wordsMap.get(wordsArray[i]) == null || wordsMap.get(wordsArray[i]) == 0){
	           result = false;
	           break;
	       }else{
	          wordsMap.put(wordsArray[i], wordsMap.get(wordsArray[i]) - 1 );
	       }
	   }
	   
	   return result;
	}
	
 
}
