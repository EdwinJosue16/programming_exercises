/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 *
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int number1 = this.convertToNumber(l1);
        int number2 = this.convertToNumber(l2);
        System.out.println(number1);
        return this.convertToReverseList(number1 + number2);
    }
    
    public int convertToNumber(ListNode l){
        int factor = 1;
        int number = 0;
        while(l != null){
            number += l.val * factor;
            l = l.next;
            factor *= 10;
        }
        return number; 
    }
    
    public ListNode convertToReverseList(int number){
        ListNode result = new ListNode(){};
        ListNode current = result;
        while (number > 0) {
            current.val = number % 10;
            number = number / 10;
            if(number > 0){
                current.next = new ListNode(){};
                current = current.next;
            }
        }
        return result;
    }
}
