/* LeetCode problem 001 - Two Sum

Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.

Example:
>>>> twoSum(nums=[2, 5, 8, 21], target=13)
[1, 2].
*/

export function twoSum(
  nums: number[],
  target: number,
): [number, number] | null {
  const map = new Map<number, number>();
  for (const [i, num] of nums.entries()) {
    const diff = target - num;
    const foundDiff = map.get(diff);
    if (foundDiff !== undefined) {
      return [foundDiff, i];
    } else {
      map.set(num, i);
    }
  }
  return null;
}
