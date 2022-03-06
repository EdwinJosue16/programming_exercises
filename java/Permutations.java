/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Permutation{

    public static void main (String[] args)
    {
        Permutation per = new Permutation();
    // 	per.permutation("abc", "");
    per.iterablePermutation("abc");
    }
    
    public void permutation(String str, String prefix){
     if(str.length() == 0){
         System.out.println(prefix);
     }else{
         for(int i = 0; i < str.length(); ++i ){
             String rem = str.substring(0,i) + str.substring(i + 1);
             permutation(rem, prefix + str.charAt(i));
         }
     }
     
    }
    
    public void iterablePermutation(String str){
        int size = str.length();
        int fact = this.factorial(size);
        int firstIndexLength = this.findNumber(size, fact);
        String chunk = "";
        String result = "";
        for(int i = 0; i < firstIndexLength; ++i ){
            for(int j = 0; j < size; ++j){
                chunk = str.substring(0, j) + str.substring(j + 1);
                result = str.charAt(j) + chunk;
                System.out.println(result);
            }
        
            str = this.strReverse(str);
        }
    }
    
    public String strReverse(String str){
        String strReverse = "";
        for(int a = str.length() -1; a >= 0; --a){ // 
              strReverse +=  str.charAt(a);
        }
        return strReverse;
    }
    
    public int factorial(int number){
        int fact = 1;
        for(int i = 1; i <= number ; i++){    
              fact=fact*i;    
        } 
        return fact; 
    }
    
    public int findNumber(int x, int y){
        int result = 0;
        int index = 0;
       while(result != y){
           index += 1;
           result = x*index;
       }
       return index;
    }
}
