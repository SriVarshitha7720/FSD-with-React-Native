def gcd_modulus(a, b):
    while b != 0:
        a, b = b, a % b
    return a

# Example usage:
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
print("GCD is", gcd_modulus(a, b))
