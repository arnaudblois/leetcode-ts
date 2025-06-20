/* LeetCode 002 - Add two numbers

We are given two linked lists representing two non-negative numbers.
The digits are stored in reverse order and each of their ListNodes contain
a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8
*/

export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }

  static fromArray(values: number[]): ListNode {
    const head = new ListNode(values[0]);
    let curr = head;
    for (const value of values.slice(1)) {
      curr.next = new ListNode(value, null);
      curr = curr.next;
    }
    return head;
  }

  toArray(): number[] {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let curr: ListNode = this;
    const array = [curr.value];
    while (curr?.next) {
      curr = curr.next;
      array.push(curr.value);
    }
    return array;
  }
}

export function sumNumbers(num1: ListNode, num2: ListNode): ListNode {
  let curr1: ListNode | null = num1;
  let curr2: ListNode | null = num2;

  // We use a dummy head to reduce branching by having everything meaningful
  // initialised within the loop. We then return dummy.next.
  const dummy = new ListNode(0);
  let carry = 0;
  let tail = dummy;

  while (curr1 || curr2 || carry) {
    const sum = (curr1?.value ?? 0) + (curr2?.value ?? 0) + carry;
    carry = sum >= 10 ? 1 : 0;
    tail.next = new ListNode(sum % 10, null);
    tail = tail.next;

    curr1 = curr1?.next ?? null;
    curr2 = curr2?.next ?? null;
  }
  return dummy.next ?? new ListNode(0);
}
