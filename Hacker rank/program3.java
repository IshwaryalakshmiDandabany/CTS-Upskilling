import java.util.*;

class Solution3 {

    static class SinglyLinkedListNode {
        public int data;
        public SinglyLinkedListNode next;

        public SinglyLinkedListNode(int nodeData) {
            this.data = nodeData;
            this.next = null;
        }
    }

    // Cycle Detection using Floyd's Tortoise and Hare algorithm.
    // Returns true if there is a cycle.
    public static boolean hasCycle(SinglyLinkedListNode head) {
        if (head == null) return false;

        SinglyLinkedListNode slow = head;
        SinglyLinkedListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int n = sc.nextInt();

        int[] a = new int[n];
        for (int i = 0; i < n; i++) a[i] = sc.nextInt();

        int pos = sc.nextInt(); // 0-based index to connect tail to, or -1 for no cycle

        SinglyLinkedListNode head = null, tail = null;
        SinglyLinkedListNode[] nodes = new SinglyLinkedListNode[n];

        for (int i = 0; i < n; i++) {
            SinglyLinkedListNode node = new SinglyLinkedListNode(a[i]);
            nodes[i] = node;
            if (head == null) {
                head = tail = node;
            } else {
                tail.next = node;
                tail = node;
            }
        }

        if (pos >= 0 && pos < n) {
            tail.next = nodes[pos];
        }

        System.out.println(hasCycle(head) ? 1 : 0);
        sc.close();
    }
}

