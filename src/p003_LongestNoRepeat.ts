/*
Given a string, find the length of the longest substring
without repeating characters.
*/

export function longestNoRepeat(word: string): number {
  const lastSeen = new Map<string, number>();
  let start = 0;
  let currMax = 0;

  for (const [i, char] of [...word].entries()) {
    const lastSeenIndex = lastSeen.get(char);
    if (lastSeenIndex !== undefined && lastSeenIndex >= start) {
      start = lastSeenIndex + 1;
    }
    currMax = Math.max(currMax, i - start + 1);
    lastSeen.set(char, i);
  }
  return currMax;
}
