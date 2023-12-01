function LinkedList() {
  let head = null;

  const getHead = () => head;

  const append = (value) => {
    if (head === null) {
      head = Node(value);
      return;
    }

    let cur = head;
    let prev = null;
    while (cur !== null) {
      prev = cur;
      cur = cur.next;
    }

    prev.next = Node(value);
  }


  return {getHead, append};
}

function Node(value = null, next = null) {
  // let obj = {};
  // obj.value = value;
  // obj.next = next;
  // return obj;
  return {value, next}
}

let list = LinkedList();
list.append("bruh");
list.append("babe");
list.append("dawg");
console.log(list.getHead());
