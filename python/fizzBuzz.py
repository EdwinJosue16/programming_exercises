def fizzBuzz(limit):
  output = "";
  for n in range (0, limit):
    if n % 3 == 0 :output += "Fizz"
    if n % 5 == 0: output += "Buzz"
    if not (n % 3 == 0 or n % 5 == 0): output += str(n)
    output += '\n'
  return output

def commonFizzBuzz(limit):
  n = 0
  output = ""
  while n < limit:
    if n % 5 == 0 and n % 3 == 0: output += 'FizzBuzz'
    elif n % 5 == 0: output += 'Buz'
    elif n % 3 == 0: output += 'Fiz'
    else: output +=str(n)
    output += '\n'
    n+=1
  return output

print(fizzBuzz(20))
