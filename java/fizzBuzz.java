class Excercises{

  public static String fizzBuzz(int limit) {
    String output = "";
    for (int n = 0; n <= limit; ++n) {
      if (n % 3 == 0) output += "Fizz";
      if (n % 5 == 0) output += "Buzz";
      if (!(n % 3 == 0 || n % 5 == 0)) output +=  n;
      output += "\n";
    }
    return output;
  }

  public static String commonFizzBuzz(int limit) {
    int n = 0;
    String output = "";
    while (n < limit) {
      if (n % 5 == 0 && n % 3 == 0) output += "FizzBuzz";
      else if (n % 5 == 0) output += "Buzz";
      else if (n % 3 == 0) output += "Fizz";
      else output += n;
      output += "\n";
      ++n;
    }
    return output;
  }
  public static void main(String [] argv){
    System.out.println(fizzBuzz(15));
  }
}



// console.log(commonFizzBuzz(20));
