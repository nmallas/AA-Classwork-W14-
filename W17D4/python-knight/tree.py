class Node:
    def __init__(self, value):
        self._value = value
        self._parent = None
        self._children = []

    @property
    def value(self):
        return self._value

    @property
    def children(self):
        return self._children

    @property
    def parent(self):
        return self._parent

    def add_child(self, node):
        if node not in self._children:
            node._parent = self
            self._children.append(node)

    def remove_child(self, node):
        self._children = [n for n in self._children if n != node]
        node._parent = None

    @parent.setter
    def parent(self, node):
        if (self._parent is not None) and (node in self._parent.children):
            self._parent.remove_child(node)
        self._parent = node
        if not node:
            return
        node.add_child(self)


# node1 = Node("root1")
# node2 = Node("root2")
# node3 = Node("root3")

# node3.parent = node1
# node3.parent = node2

# print(node1.children)
# print(node2.children)
