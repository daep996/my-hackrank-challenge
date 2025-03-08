#
# Complete the 'migratoryBirds' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def migratoryBirds(arr):
    # Write your code here
    map_birds = dict()
    for bird in arr:
        if bird in map_birds:
            map_birds[bird] += 1
        else:
            map_birds[bird] = 1
    maxi = max(map_birds, key=map_birds.get)
    max_values = [key for key, value in map_birds.items() if value == map_birds[maxi]]
    return min(max_values)

print(migratoryBirds([1, 4, 4, 4, 5, 3])) # 4
print(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])) # 3
print(migratoryBirds([1, 1, 2, 2, 3])) # 1
print(migratoryBirds([1, 1, 0, 0, 3])) # 0