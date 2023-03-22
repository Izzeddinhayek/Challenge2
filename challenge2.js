function findmissing(nums) {
    n = nums.length;
    sumOriginal = (n*n + n)/2
    const sum = nums.reduce((acc, num) => acc + num, 0);
    const missingNumber = sumOriginal - sum;
    return missingNumber;
}