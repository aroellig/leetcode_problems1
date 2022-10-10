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

      //
      time: O(n)
      space: O(n)
      const treeMinValue = (root) => {
        let min = Infinity;
          let stack = [root];
          while(stack.length > 0){
            let current = stack.pop();
            if(current.val < min){
              min = current.val
            }
            if(current.right) stack.push(current.right)
            if(current.left) stack.push(current.left)
          }
          return min
        };
        //

        //
        time:O(n)
        space:O(n)
        const maxPathSum = (root) => {
          if(root === null) return -Infinity
          if(root.left === null && root.right === null) return root.val;
         const maxChild = Math.max(maxPathSum(root.left),maxPathSum(root.right));
          return root.val + maxChild
        
        };
        //

        //
        time: O(n)
        space: O(n)
        const pathFinder = (root, target) => {
          const result = pathFinderHelper(root, target);
          if (result === null) {
            return null;
          } else {
            return result.reverse();
          }
        };
        
        const pathFinderHelper = (root, target) => {
          if (root === null) return null;
          if (root.val === target) return [ root.val ];
          
          const leftPath = pathFinderHelper(root.left, target);
          if (leftPath !== null) {
            leftPath.push(root.val);
            return leftPath;
          }
          
          const rightPath = pathFinderHelper(root.right, target);
          if (rightPath !== null) {
            rightPath.push(root.val);
            return rightPath;
          }
          
          return null;
        };
        //

        //
        time: O(n)
        space: O(n)
        const treeValueCount = (root, target) => {
          if(root === null) return 0
        let count = 0;
          let stack = [root];
          while(stack.length > 0){
            let current = stack.pop();
            if(current.val === target){
              count ++
            }
            if(current.right) stack.push(current.right);
            if(current.left) stack.push(current.left)
          }
          return count
        };

        //

        //
        time: O(n)
        space: O(n)
        const howHigh = (node) => {
          if(node === null) return -1
            let leftHeight = howHigh(node.left);
            let rightHeight = howHigh(node.right);
            return (1 + Math.max(leftHeight, rightHeight))
          };
          //