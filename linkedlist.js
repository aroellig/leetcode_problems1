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

    const linkedListValues = (head) => {
        let arr = [];
          fillValues(head, arr);
          return arr
        };
        
        const fillValues = (head, arr) => {
          if(head === null) return;
          arr.push(head.val);
          fillValues(head.next, arr);
        }
        
    //