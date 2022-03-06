/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* 1) Given 2 arrays find the numbers in common
   2) Given 2 arrays find the different numbers */
class Exercise
{
	public static void main (String[] args) throws java.lang.Exception
	{
	    int[] firstArray = { 2, 4, 1, 8};
	    int[] secondArray = { 7, 2, 5, 8};
	    
		Exercise ex = new Exercise();
		HashMap<Integer, Integer> map = ex.occurrencesOfNumbers(firstArray, secondArray);
		System.out.println("Common");
		ex.findCommonNumbers(map);
		System.out.println("Different");
		ex.findDifferentNumbers(map);
	}
	
	public  HashMap<Integer, Integer> occurrencesOfNumbers(int[] firstArray, int[]secondArray){
	    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
	    for(int index = 0; index < firstArray.length; ++index){
	        if(map.get(firstArray[index]) == null){
	            map.put(firstArray[index], 1);
	        }else{
	            map.put(firstArray[index], map.get(firstArray[index]) + 1);
	        }
	    }
	    
	    for(int index = 0; index < secondArray.length; ++index){
	        if(map.get(secondArray[index]) == null){
	            map.put(secondArray[index], 1);
	        }else{
	            map.put(secondArray[index], map.get(secondArray[index]) + 1);
	        }
	    }
	    
	    return map;
	}
	
	public void findCommonNumbers(HashMap<Integer, Integer> map){
	   for (Integer number : map.keySet()) { // obtain all the keys in hashmap
	       if(map.get(number) > 1)
                System.out.println(number);
        }
	}
	
	public void findDifferentNumbers(HashMap<Integer, Integer> map){
	   for (Integer number : map.keySet()) { // obtain all the keys in hashmap
	       if(map.get(number) == 1)
                System.out.println(number);
        }
	}
}
