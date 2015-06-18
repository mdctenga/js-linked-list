/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
	var head = null;
	var tail = null;
	var node = {};
	var exampleLinkedList =	{
		getHead: _getHead,
		getTail: _getTail,
		add: _add,
		remove: _remove,
		get: _get,
		insert: _insert
	};
    
    return exampleLinkedList;

    function _getHead(){
    	return head;
    }

    function _getTail(){
    	return tail;
    }

    function _add(newValue){ 
    	node = {
    		value: newValue,
			next: null
		};
		if (head === null && tail === null) {
			head = node;
			tail = node;
		} else {
			tail.next = node;
			tail = node;
		}
		return node;
    }

    function _remove(index){
    	if (index < 0) {
    		return false;
    	} else if (_get(index) === false) {
    		return false;
    	} else if (index === 0) {
    		head = _get(index + 1);
    	} else if (_get(index).next === null) {
    		_get(index - 1).next = null;
    		tail = _get(index - 1);
    	} else if (index > 0) {
    		var pre = _get(index - 1);
    		var post = _get(index + 1);
    		pre.next = post;
		}
    }

    function _get(index){
   		var currentNode = head;
   		for (var counter = 0; counter <= index; counter += 1) {
    		if (counter === index) {
    			return currentNode;
    		}
			currentNode = currentNode.next;
			if (currentNode === null) {
   				return false;
   			}
   		}

   		return currentNode;
    };

    function _insert(value, index){
    	node = {
    		value: value,
    		next: null
    	}
    	if (index < 0){
    		return false;
    	} else if (index === 0) {
    		node.next = _get(index);
    		head = node;
    	} else if (_get(index) === false) {
    		return false;
		} else {
    		var pre = _get(index - 1);
    		var post = _get(index);
    		pre.next = node;
    		node.next = post;
    	}
    	return node;
    }
};

