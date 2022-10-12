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

          //
          time: O(n);
          space: O(n);
          const bottomRightValue = (root) => {
            let queue = [root];
              let current = null;
              while(queue.length > 0){
                 current = queue.shift();
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right)
              }
              return current.val
            };
            //

            //
            time: O(n)
            space: O(n)
            const allTreePaths = (root) => {
              if(root === null) return []; 
             if(root.left === null && root.right === null) return [[root.val]];
               const paths = [];
              const leftSubPaths = allTreePaths(root.left);
               for(let subPath of leftSubPaths){
                 paths.push([root.val, ...subPath]);
               }
              const rightSubPaths = allTreePaths(root.right);
               for(let subPath of rightSubPaths){
                 paths.push([root.val, ...subPath])
               }
               
               return paths;
             };
            //

            //
            time: O(n)
            space: O(n)
            const treeLevels = (root) => {
              if(root === null) return [];
              const levels = []
              const stack = [{node:root, levelNum: 0}];
              while(stack.length > 0){
               const {node, levelNum} = stack.pop();
                if(levels.length === levelNum){
                  levels.push([node.val])
                } else{
                  levels[levelNum].push(node.val);
                }
                if(node.right !== null) stack.push({node: node.right, levelNum: levelNum + 1})
                if(node.left !== null) stack.push({node: node.left, levelNum: levelNum + 1})
              }
              return levels;
            };
            const treeLevels = (root) => {
              if(root === null) return [];
              const levels = []
              const queue = [{node:root, levelNum: 0}];
              while(queue.length > 0){
               const {node, levelNum} = queue.shift();
                if(levels.length === levelNum){
                  levels.push([node.val])
                } else{
                  levels[levelNum].push(node.val);
                }
                if(node.left !== null) queue.push({node: node.left, levelNum: levelNum + 1})
                if(node.right !== null) queue.push({node: node.right, levelNum: levelNum + 1})
              }
              return levels;
            };
            const treeLevels = (root) => {
              const levels = [];
                fillLevels(root, levels, 0);
                return levels
              };
              
              const fillLevels = (root, levels, levelNum) => {
                if(root === null) return;
                if(levels.length === levelNum){
                  levels.push([root.val]);
                } else {
                  levels[levelNum].push(root.val)
                }
                fillLevels(root.left, levels, levelNum + 1);
                fillLevels(root.right, levels, levelNum + 1);
              }
            //

            //
            time: O(n)
            space: O(n)
            const levelAverages = (root) => {
              const levels = [];
                fillLevels(root, levels, 0)
                const avgs = [];
                for(let level of levels){
                  getAvg(level);
                  avgs.push(getAvg(level))
                }
                return avgs
              };
              
              const getAvg = (array) => {
                let sum = 0;
                for(let num of array){
                  sum += num;
                }
                return sum / array.length
              }
              
              const fillLevels = (root, levels, levelNum) => {
                if(root === null) return;
                if(levels.length === levelNum){
                  levels.push([root.val]);
                } else {
                  levels[levelNum].push(root.val);
                }
                
                fillLevels(root.left, levels, levelNum + 1)
                fillLevels(root.right, levels, levelNum + 1)
              }
            //

            //
            time: O(n)
            space: O(n)
            const leafList = (root) => {
              if(root === null) return [];
              const leaves = [];
              const stack = [root];
              while(stack.length > 0){
               const current = stack.pop();
                if (current.left === null && current.right === null){
                  leaves.push(current.val)
                }
                if(current.right !== null) stack.push(current.right);
                if(current.left !== null) stack.push(current.left);
              }
              return leaves
            };
            //