import java.util.*;

class Solution4 {

    static class SinglyLinkedListNode {
        public int data;
        public SinglyLinkedListNode next;

        public SinglyLinkedListNode(int nodeData) {
            this.data = nodeData;
            this.next = null;
        }
    }

    // Find the merge point of two linked lists.
    // If the lists do not merge, returns null.
    // This assumes they may share nodes by reference.
    public static SinglyLinkedListNode findMergePoint(SinglyLinkedListNode headA, SinglyLinkedListNode headB) {
        if (headA == null || headB == null) return null;

        SinglyLinkedListNode a = headA;
        SinglyLinkedListNode b = headB;

        // Two-pointer technique: when pointers traverse equal total lengths,
        // they meet at merge node (or both become null).
        while (a != b) {
            a = (a == null) ? headB : a.next;
            b = (b == null) ? headA : b.next;
        }
        return a;
    }

    public static void main(String[] args) {
        // This is a lightweight local harness.
        // Input format (local):
        // n m idxA idxB intersectionIndex
        // Then n values for A, m values for B, then intersection node value.
        // (This is not HackerRank exact I/O; keep the findMergePoint method for submission.)

        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int m = sc.nextInt();
        int intersect = sc.nextInt(); // index within A where merge node occurs (0-based), -1 means no merge
        int j = sc.nextInt(); // index within B where merge node should occur (0-based)
        int interVal = sc.nextInt();

        SinglyLinkedListNode[] nodesA = new SinglyLinkedListNode[n];
        SinglyLinkedListNode headA = null, tailA = null;
        for (int i = 0; i < n; i++) {
            int v = sc.nextInt();
            nodesA[i] = new SinglyLinkedListNode(v);
            if (headA == null) headA = tailA = nodesA[i];
            else {
                tailA.next = nodesA[i];
                tailA = nodesA[i];
            }
        }

        SinglyLinkedListNode[] nodesB = new SinglyLinkedListNode[m];
        SinglyLinkedListNode headB = null, tailB = null;
        for (int i = 0; i < m; i++) {
            int v = sc.nextInt();
            nodesB[i] = new SinglyLinkedListNode(v);
            if (headB == null) headB = tailB = nodesB[i];
            else {
                tailB.next = nodesB[i];
                tailB = nodesB[i];
            }
        }

        SinglyLinkedListNode mergeNode = null;
        if (intersect >= 0 && intersect < n) mergeNode = nodesA[intersect];
        if (mergeNode != null && j >= 0 && j < m) {
            // Redirect B's node at j to A's merge node.
            SinglyLinkedListNode prevB = headB;
            for (int i = 0; i < j - 1; i++) prevB = prevB.next;
            if (j == 0) headB = mergeNode;
            else prevB.next = mergeNode;
        }

        SinglyLinkedListNode res = findMergePoint(headA, headB);
        System.out.println(res == null ? "null" : res.data);
        sc.close();
    }
}

