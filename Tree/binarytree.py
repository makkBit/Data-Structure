class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self):
        self.root = None

    def insertIteratively(self, value):
        newnode = Node(value)
        if self.root == None:
            self.root = newnode
            return
        current = self.root
        while current:
            if value < current.value:
                if current.left == None:
                    current.left = newnode
                    return
                current = current.left
            elif value > current.value:
                if current.right == None:
                    current.right = newnode
                    return
                current = current.right

    def insertRecursively(self, value):
        newnode = Node(value)
        if self.root == None:
            self.root = newnode
            return
        self.insertRecursivelyUtil(self.root, value, newnode)

    def insertRecursivelyUtil(self, node, value, newnode):
        if value < node.value:
            if node.left == None:
                node.left = newnode
                return
            self.insertRecursivelyUtil(node.left, value, newnode)
        elif value > node.value:
            if node.right == None:
                node.right = newnode
                return
            self.insertRecursivelyUtil(node.right, value, newnode)

    def delete(self, root, value):
        if root is None:
            return root

        if value < root.value:
            root.left = deleteNode(root.left, value)

        elif value > root.value:
            root.right = deleteNode(root.right, value)

        else:
            if root.left is None:
                temp = root.right
                root = None
                return temp

            elif root.right is None:
                temp = root.left
                root = None
                return temp

            # gets smallest in the right subtree of the
            # node to be deleted
            current = root.right
            while current.left is not None:
                current = current.left
            temp = current

            root.value = temp.value
            root.right = self.delete(root.right, temp.value)

    def findMin(self):
        current = self.root
        while current:
            if current.left == None:
                return current.value
            current = current.left

    def findMax(self):
        current = self.root
        while current:
            if current.right == None:
                return current.value
            current = current.right

    def findHeight(self, node):
        if node is None:
            return -1
        left = self.findHeight(node.left)
        right = self.findHeight(node.right)
        return max(left, right)+1

    def isPresent(self, node):
        current = self.root
        while current:
            if current.value == node:
                return True
            if node < current.value:
                current = current.left
            if node > current.value:
                current = current.right
        return False

    def InOrderTraversal(self, node):
        if node is None:
            return
        self.InOrderTraversal(node.left)
        print node.value
        self.InOrderTraversal(node.right)

    def preOrderTraversal(self, node):
        if node is None:
            return
        print node.value
        self.preOrderTraversal(node.left)
        self.preOrderTraversal(node.right)

    def postOrderTraversal(self, node):
        if node is None:
            return
        self.postOrderTraversal(node.left)
        self.postOrderTraversal(node.right)
        print node.value


bt = BinaryTree()
bt.insertIteratively(9)
bt.insertIteratively(4)
bt.insertIteratively(17)
bt.insertIteratively(3)
bt.insertIteratively(6)
bt.insertRecursively(22)
bt.insertRecursively(5)
bt.insertRecursively(7)
bt.insertRecursively(20)
# print(bt.root.right.value)
# print(bt.findMin())
# bt.InOrderTraversal(bt.root)
# bt.preOrderTraversal(bt.root)
# bt.postOrderTraversal(bt.root)
# print bt.findHeight(bt.root)
# print bt.isPresent(23)
# bt.delete(bt.root, 9)
