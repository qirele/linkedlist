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


  return {append, prepend, size, head, tail};
}

function Node(value = null, next = null) {
  return {value, next}
}

let list = LinkedList();
list.append("bruh");
list.append("babe");
list.prepend("brochocho")
list.append("dawg");
// list.prepend("muhnuck");
// list.prepend("brodie");
// list.prepend("homie");
console.log(list.head());
console.log(list.size());
console.log(list.tail());
