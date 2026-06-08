import java.io.*;
import java.util.*;

class Solution {

    static class SinglyLinkedListNode {
        public int data;
        public SinglyLinkedListNode next;

        public SinglyLinkedListNode(int nodeData) {
            this.data = nodeData;
            this.next = null;
        }
    }

    static class SinglyLinkedList {
        public SinglyLinkedListNode head;
        public SinglyLinkedListNode tail;

        public SinglyLinkedList() {
            this.head = null;
            this.tail = null;
        }

        public void insertNode(int nodeData) {
            SinglyLinkedListNode node = new SinglyLinkedListNode(nodeData);

            if (this.head == null) {
                this.head = node;
            } else {
                this.tail.next = node;
            }

            this.tail = node;
        }
    }

    public static SinglyLinkedListNode removeDuplicates(SinglyLinkedListNode llist) {
        // Delete duplicates from a sorted linked list so only distinct values remain.
        if (llist == null) return null;

        SinglyLinkedListNode current = llist;
        while (current != null && current.next != null) {
            if (current.data == current.next.data) {
                // Skip the duplicate node.
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        return llist;
    }

    public static void main(String[] args) throws Exception {
        // HackerRank style input/output.
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();

        while (t-- > 0) {
            int n = scanner.nextInt();
            SinglyLinkedList llist = new SinglyLinkedList();
            for (int i = 0; i < n; i++) {
                llist.insertNode(scanner.nextInt());
            }

            SinglyLinkedListNode res = removeDuplicates(llist.head);

            // Print result in one line.
            boolean first = true;
            while (res != null) {
                if (!first) System.out.print(" ");
                System.out.print(res.data);
                first = false;
                res = res.next;
            }
            System.out.println();
        }
        scanner.close();
    }
}

