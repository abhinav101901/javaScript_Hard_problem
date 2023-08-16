/*Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

  */

function reverseKGroup(head, k) {
    let stack = [];
   let newNode = new ListNode(-1);
  ;
   let temp = newNode;
   
   while(head) {
       console.log(head)
       for(let i = 0; i < k && head; i++) {
           stack.push(head);
           head = head.next;
       }
            console.log(head , "h")
       if(stack.length === k) {
           while(stack.length > 0) {
               temp.next = stack.pop();
               temp = temp.next;
           }
           temp.next = head;
       }
   }
   return newNode.next;
};


let head = [1,2,3,4,5]
let k = 3
console.log(reverseKGroup(head, k))