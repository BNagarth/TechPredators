import sympy

number = 2174096211032823084932239036566496093206280423
factors = sympy.factorint(number)

print("Prime factors of", number, "are:", factors)
