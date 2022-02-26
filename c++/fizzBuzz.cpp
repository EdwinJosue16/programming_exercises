#include <string>
#include <iostream>

std::string fizzBuzz(int limit)
{
  std::string output = "";
  for (int n = 0; n <= limit; ++n)
  {
    if (n % 3 == 0)
      output += "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    if (!(n % 3 == 0 || n % 5 == 0))
      output += std::to_string(n);
    output += "\n";
  }
  return output;
}

std::string commonFizzBuzz(int limit)
{
  int n = 0;
  std::string output = "";
  while (n < limit)
  {
    if (n % 5 == 0 && n % 3 == 0)
      output += "FizzBuzz";
    else if (n % 5 == 0)
      output += "Buzz";
    else if (n % 3 == 0)
      output += "Fizz";
    else
      output += std::to_string(n);
    output += "\n";
    ++n;
  }
  return output;
}

int main(int argc, char **argv)
{
  std::cout << fizzBuzz(15) << std::endl;
  return 0;
}
