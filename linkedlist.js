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

    //
    const reverseList = (head) => {
        let prev = null;
      let current = head;
        while(current !== null){
          const next = current.next
          current.next = prev;
          prev = current;
          current = next;
        }
        return prev;
      };

      const reverseList = (head, prev = null) => {
        if(head === null) return prev;
        const next = head.next;
        head.next = prev;
        return reverseList(next, head)
      };
//      

//
const zipperLists = (head1, head2) => {
    let tail = head1;
    let current1 = head1.next;
      let current2 = head2;
      let count= 0;
      while(current2 !== null && current1 !== null){
        if(count % 2 === 0){
          tail.next = current2;
          current2 = current2.next
        } else {
          tail.next = current1;
          current1 = current1.next;
        }
        tail = tail.next
        count ++
      }
      if(current1 !== null) tail.next = current1;
      if(current2 !== null) tail.next = current2;
      return head1;

      const zipperLists = (head1, head2) => {
        if(head1 === null && head2 === null) return null;
          if(head1 === null) return head2;
          if(head2 === null) return head1;
          const next1 = head1.next;
          const next2 = head2.next;
          head1.next = head2;
          
          head2.next = zipperLists(next1, next2);
          
          return head1;
        };
    };
    //

    //
    const mergeLists = (head1, head2) => {
        const dummyHead = new Node(null);
          let tail = dummyHead;
          let current1= head1;
          let current2 = head2;
          
          while(current1 !== null && current2 !== null){
            if(current1.val < current2.val){
              tail.next = current1;
              current1 = current1.next;
            } else {
              tail.next = current2;
              current2 = current2.next;
            }
            tail = tail.next;
          }
          if(current1 !== null) tail.next = current1;
          if(current2 !== null) tail.next = current2;
          return dummyHead.next;
        };
        const mergeLists = (head1, head2) => {
            if(head1 === null && head2 === null) return null;
              if(head1 === null) return head2;
              if(head2 === null) return head1;
              if(head1.val < head2.val){
                const next1 = head1.next;
                head1.next = mergeLists(next1, head2);
                return head1
              } else {
                const next2 = head2.next;
                head2.next = mergeLists(head1, next2);
                return head2;
              }
            };
            
    //

    //
    const isUnivalueList = (head) => {
        let current = head;
          while(current !== null){
            if(current.val !== head.val){
              return false
            }
            current = current.next;
          }
          return true
        };

        const isUnivalueList = (head, prevVal = null) => {
            if(head === null) return true;
              if(prevVal !== null && head.val !== prevVal){
                return false
              }
              return isUnivalueList(head.next, head.val);
            };
            
        //