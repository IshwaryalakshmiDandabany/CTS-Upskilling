import java.util.*;

class Solution2 {

    static class SinglyLinkedListNode {
        public int data;
        public SinglyLinkedListNode next;

        public SinglyLinkedListNode(int nodeData) {
            this.data = nodeData;
            this.next = null;
        }
    }

    // Delete a node at a given position (0-based). If position is out of bounds, returns original head.
    public static SinglyLinkedListNode deleteNode(SinglyLinkedListNode llist, int position) {
        if (llist == null) return null;
        if (position == 0) return llist.next;

        SinglyLinkedListNode prev = llist;
        int idx = 0;
        while (prev != null && idx < position - 1) {
            prev = prev.next;
            idx++;
        }

        if (prev == null || prev.next == null) return llist;
        prev.next = prev.next.next;
        return llist;
    }

    // Local quick test: input format: n values... position
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int n = sc.nextInt();
        SinglyLinkedListNode head = null, tail = null;
        for (int i = 0; i < n; i++) {
            int v = sc.nextInt();
            SinglyLinkedListNode node = new SinglyLinkedListNode(v);
            if (head == null) {
                head = tail = node;
            } else {
                tail.next = node;
                tail = node;
            }
        }
        int pos = sc.nextInt();

        SinglyLinkedListNode res = deleteNode(head, pos);
        boolean first = true;
        while (res != null) {
            if (!first) System.out.print(" ");
            System.out.print(res.data);
            first = false;
            res = res.next;
        }
        System.out.println();
        sc.close();
    }
}

