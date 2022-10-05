// 09/30/22
time: O(n)
space: O(n)
Const romeToInt = (value) => { "MCMXCIV"
    Const key = {
I: 1,
V: 5,
X: 10,
L: 50,
C: 100,
D: 500,
M: 1000
}

Let sum = 0;
Let i = 0;

while(i > value.length){ 0, 1, 3, 5
    Let char1 = value[i]; /M, c, x, i
    Let char2 = value[i +1]; /C, m, c, v
    if(char1 + char2 === “IV’){
    Sum += 4;
    I ++
} 
    Else if (char1 + char2 === ‘IX’){
    Sum += 9
    I ++
} else if (char1 + char2 === ‘XL’){
    Sum += 40
    I ++
} else if (char1 + char2 === ‘xc’){
    Sum += 90
    I ++
} else if (char1 + char2 === ‘cd’){
    Sum += 400 
    I ++
} else if (char1 + char2 === ‘cm’){
    Sum += 900
    I ++
} else {
    Sum += key[char1];
}
//sum = 1994
    I ++
}
Return sum
}
//

// pairboarding 10/4/22
Const bst = (root) => { 
    Let queue = [root] // 2
    while(queue.length > 0){
    Let current = queue.shift(); 
    if(current.left.val >= current.val && current.val !== null){
    Return false
}
    if(current.right.val <= current.val && current.val !== null){
    Return false
}
if(current.left) queue.push(current.left)
if(current.right) queue.push(current.right)
}
Return true
}

def inOrder(self, root, output):
        if root is None:
            return
        
        self.inOrder(root.left, output)
        output.append(root.val)
        self.inOrder(root.right, output)

//