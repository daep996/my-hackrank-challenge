def staircase(n: int):
    # Write your code here
    hash = n
    rta = ""
    for i in range(n):
        x = [" "] * n
        x[hash-1:n] = ["#"] * (n - hash + 1)
        rta += "".join(x) + "\n"
        hash -= 1
    print(rta)

if __name__ == "__main__":
    staircase(7)