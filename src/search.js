
function Node(ch){
    this.char = ch;
    this.index = null;
    this.child = new Array(26);
    for(let i=0;i<26;i++){
        this.child[i]=null;
    }
    this.words = [];
    this.isEnd = false;
}

function add(word,n){
    let node =n;
    var temp = word;
    word = word.toLowerCase();
    for(let i=0;i<word.length;i++){
        let letindx = word[i].charCodeAt(0)-97;
        if(node.child[letindx]===null){
            node.child[letindx] = new Node(word[i]);
        }
        node.index = letindx;
        node = node.child[letindx];
        node.words.push(temp);
    }
    node.isEnd = true;
}
function search(word,Node){
    let node = Node;
    word  = word.toLowerCase();
    for(let i=0;i<word.length;i++){
        let indx = word[i].charCodeAt(0)-97;
        if(node.child[indx]===null){
            return false;
        }
        node = node.child[indx];
    }
    return node.words;
}
export {Node,add,search};
