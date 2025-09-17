def getGCD(a: int, b: int) -> int:
  while b != 0:
    a, b = b, a % b
  return a
 
def getLCM(a: int, b: int) -> int:
  return a * b // getGCD(a, b)
 
a, b = map(int, input().split())
print(f'GCD of {a} and {b} is {getGCD(a, b)}')
print(f'LCM of {a} and {b} is {getLCM(a, b)}')