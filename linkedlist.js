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

    //
    time: O(n)
    const sumList = (head) => {
        let sum = 0;
          let current = head;
          while(current !== null){
            sum += current.val;
            current = current.next
          }
          return sum
        };
        space: n 
        const sumList = (head) => {
            if(head === null) return 0;
             return head.val + sumList(head.next)
            };
//       

//
const linkedListFind = (head, target) => {
    let current = head;
     while(current !== null){
       if(current.val === target){
         return true
       }
       current = current.next
     }
     return false
   };

   const linkedListFind = (head, target) => {
    if(head === null) return false;
    if(head.val === target) return true;
    return linkedListFind(head.next, target)
  };
   //

   //
   const getNodeValue = (head, index) => {
    let i = 0;
      let current = head;
      while(current !== null){
        if(i === index && current !== null){
          return current .val;
        } else if(i === index && current === null){
          return null
        }
        current = current.next;
        i ++
      }
      return null
    };

    const getNodeValue = (head, index) => {
        if (head === null) return null;
        if(index === 0) return head.val;
       return getNodeValue(head.next, index -1)
      };
    //