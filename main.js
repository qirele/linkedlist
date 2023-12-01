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

  return {append, prepend, size, head, tail, at, pop};
}

function Node(value = null, next = null) {
  return {value, next}
}

let list = LinkedList();
list.append("bruh");
// list.append("babe");
// list.prepend("brochocho")
// list.append("dawg");
// console.log(list.head());
// console.log(list.size());
// console.log(list.tail());
for (let i = 0; i < list.size(); i++) {
  console.log(list.at(i).value);
}

list.pop();
console.log("popped");

for (let i = 0; i < list.size(); i++) {
  console.log(list.at(i).value);
}
