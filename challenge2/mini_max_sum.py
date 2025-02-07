def miniMaxSum(arr) -> None:
    # Write your code here1
    sumas: list[int] = []
    for i in range(len(arr)):
        temp_arr = arr.copy()
        temp_arr.pop(i)
        sumas.append(sum(temp_arr))
    print(f"{min(sumas)} {max(sumas)}")

if __name__ == "__main__":
    miniMaxSum([1,2,3,4,5]); # 10 14
    # miniMaxSum('1 3 5 7 9'); # 16 24
    # miniMaxSum('7 69 2 221 8974'); # 299 9271