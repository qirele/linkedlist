function LinkedList() {
  let list = null;

  const head = () => list;

  const tail = () => {
    let cur = list;
    let prev = null;
    while (cur !== null) {
      prev = cur;
      cur = cur.next;
    }

    return prev;
  };

  const append = (value) => {
    if (list === null) {
      list = Node(value);
      return;
    }

    let cur = list;
    let prev = null;
    while (cur !== null) {
      prev = cur;
      cur = cur.next;
    }

    prev.next = Node(value);
  }

  const prepend = (value) => {
    list = Node(value, list);
  }

  const size = () => {
    let cur = list;
    let counter = 0;
    while (cur !== null) {
      counter++;
      cur = cur.next;
    }
    return counter;
  }

  const at = (index) => {
    let cur = list;
    let counter = 0;
    while (cur !== null) {
      if (index === counter) return cur;
      counter++;
      cur = cur.next;
    }

    return -1; // not found
  }

  const pop = () => {
    if (size() >= 2) { // delete the last element by assigning null to 2nd to last element
      const secondToLast = at(size() - 2);
      secondToLast.next = null;
    } else { // only one element in the list, just remove the head
      list = null;
    }
  }

  const contains = (value) => {
    let cur = list;
    while (cur !== null) {
      if (cur.value === value) return true;
      cur = cur.next;
    }

    return false; // not found
  }

  const find = (value) => {
    let cur = list;
    let counter = 0;
    while (cur !== null) {
      if (cur.value === value) return counter;
      cur = cur.next;
      counter++;
    }

    return null;
  }
  
  function toString(current = list) {
    if (current === null) {
      return "null";
    }

    return `( ${current.value} ) -> ${toString(current.next)}`;
  }

  const insertAt = (value, index) => {
    if (at(index) === -1) {
      console.log(`can't insert '${value}', there is no element at index ${index}`);
      return -1;
    } 

    if (index === 0) {
      prepend(value);
      return;
    }

    // point the newNode at the same thing as the node behind at(index)
    const newNode = Node(value, at(index));  
    // point the preceding Node at the newNode instead
    const preceding = at(index - 1);
    preceding.next = newNode;
  }

  return {append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt};
}

function Node(value = null, next = null) {
  return {value, next}
}

let list = LinkedList();
list.append("bruh");
list.append("babe");
list.prepend("brochocho")
list.append("dawg");

console.log(list.toString());

list.insertAt("Q-Tip", 3);

console.log(list.toString());


// for (let i = 0; i < list.size(); i++) {
//   console.log(list.at(i).value);
// }
//
// console.log(`is 'dawg' in list? ${list.contains("dawg")}`);
// list.pop();
// console.log("\npopped\n");
//
// for (let i = 0; i < list.size(); i++) {
//   console.log(list.at(i).value);
// }
// console.log(`is 'dawg' in list? ${list.contains("dawg")}`);
//
//
