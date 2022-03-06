/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Prime{

    public static void main (String[] args)
    {
        Prime prime = new Prime();
        prime.findPrimes(100);
    }
    
    public void findPrimes(int number){
        for(int i = 2 ; i < number; ++i){
            if(this.isPrime(i)){
                System.out.println(i);
            }
        }
    }
    
    public boolean isPrime(int number){
        for(int i = 2; i <= Math.sqrt(number); ++i){
            if(number % i == 0){
                return false;
            }
        }
        return true;
    }
    

}
