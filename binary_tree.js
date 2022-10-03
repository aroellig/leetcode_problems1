//
const depthFirstValues = (root) => {
    if(root === null) return []
    const stack = [root];
    let result = []
    while(stack.length > 0){
      const current = stack.pop();
      result.push(current.val)
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left);
    }
    return result;
  };

  const depthFirstValues = (root) => {
    if (root === null) return [];
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);
    return [root.val, ...leftValues, ...rightValues];
  };
  //
  
  //
  const breadthFirstValues = (root) => {
    if(root === null) return [];
    let result = [];
    let queue = [root];
    while(queue.length > 0){
      let current = queue.shift();
      result.push (current.val)
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return result
  }
  //

  //
  const treeSum = (root) => {
    if(root === null) return 0;
      let sum = 0;
      let stack = [root];
      while(stack.length > 0){
        let current = stack.pop();
        sum += current.val
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left)
      }
      return sum
    };
    //

    //
    const treeIncludes = (root, target) => {
        if(root === null) return false
        let stack = [root];
        while(stack.length > 0){
          let current = stack.pop();
          if(current.val === target){
            return true
          }
          if(current.right) stack.push(current.right);
          if(current.left) stack.push(current.left)
        }
        return false
      };
      //