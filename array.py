import array as arr

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.pop(6)
print(arr)
a = arr[2]
b = arr[6]
a, b = b, a
arr.insert(2, a)
arr.insert(6, b)
arr.pop(3)
arr.pop(7)
print(arr)