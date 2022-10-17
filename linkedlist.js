//
const linkedListValues = (head) => {
    let arr = [];
    let current = head;
      while(current !== null){
        arr.push(current.val)
        current = current.next;
      }
      return arr
    };
    //