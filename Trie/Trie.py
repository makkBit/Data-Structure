class TrieNode:
    def __init__(self):
        self.children = [None]*26
        self.isEndOfWord = Fals


class Trie:
    def __init__(self):
        self.root = self.getNode()
    def getNode(self):
        return TrieNode()
    def _charToIndex(self, ch):
        return ord(ch)-ord('a')
    def insert(self, key):
        pCrawl = self.root
        for level in range(len(key)):
            index = self._charToIndex( key[level] )
            if not pCrawl.children[index]:
                pCrawl.children[index] = self.getNode()
            pCrawl = pCrawl.children[index]
        pCrawl.isEndOfWord = True
    def search(self, key):
        pCrawl = self.root
        for level in range(len(key)):
            index = self._charToIndex( key[level] )
            if not pCrawl.children[index]:
                return False
            pCrawl = pCrawl.children[index]
        return pCrawl != None and pCrawl.isEndOfWord

t = Trie()

keys = ['the', 'there', 'a', 'answer', 'any', 'by', 'their']

for k in keys:
    t.insert(k)

print t.search('the')
print t.search('there')
print t.search('a')
print t.search('answer')
print t.search('any')
print t.search('by')
print t.search('their')
print t.search('wtf')