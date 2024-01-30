#!/usr/bin/python3
str = "Python is an interpreted, interactive, object-oriented programming\
 language that combines remarkable power with very clear syntax"
str = f"{str[39:66]}"
str += f"{str[107:111]} {0:6}"
print(str)
