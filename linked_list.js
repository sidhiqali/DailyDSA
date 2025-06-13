class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    console.log('node added', data);
  }
}

// linked list traverse
function traverse(head) {
  let current = head;
  let output = [];
  while (current !== null) {
    output.push(current.data);
    current = current.next;
  }
  console.log(output.join(' -> '));
}

function reverseList (head) {
    let prev = null;
    let current = head;
    while (current != null ) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

//linked list add to head

function addToHead(head, data) {
  let newNode = new Node(data);
  if (!head) return newNode;
  newNode.next = head;
  return newNode;
}

//linked list add to tail

function addToTail(head, data) {
  let newNode = new Node(data);
  if (!head) return newNode;
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}

function deleteNode(head, target) {
  if (head.data == target) return head.next;
  let current = head;
  while (current.next !== null) {
    if (current.next.data === target) {
      current.next = current.next.next;
      return head;
    }
    current = current.next;
  }
}

let head = new Node(5);
head = addToTail(head, 15);
head = addToTail(head, 25);
head = addToTail(head, 35);
traverse(head);

head = addToHead(head, 100);
traverse(head);

head = addToTail(head, 200);
head = addToTail(head, 220);
traverse(head);

head = reverseList(head)
traverse(head);

head = deleteNode(head, 25);
traverse(head);
