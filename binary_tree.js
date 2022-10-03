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