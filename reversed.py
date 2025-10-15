my_list = [1, 2, 3, 4, 5]
reversed_list = []

for i in range(len(my_list) - 1, -1, -1):
    reversed_list.append(my_list[i])

print(reversed_list)
