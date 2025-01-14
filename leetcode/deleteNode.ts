function deleteNode(root: ListNode | null): void {
  if (root && root.val && root.next) {
    root.val = root.next.val
    root.next = root.next.next
  }
};

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}