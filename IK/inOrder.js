class TreeNode {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

function levelOrderTraversal(root) {
    if (root === null) {
        return [];
    }

    const result = []; // Initialize the result array
    const queue = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelNodes = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            levelNodes.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        result.push(levelNodes);
    }

    return result;
}

// Example usage:
// Create a BST
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);

// Perform level-order traversal and print as an array of arrays
console.log("Level-order traversal as an array of arrays:");
const result = levelOrderTraversal(root);
console.log(result);
