function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}
let myList = new initList();
console.log(myList)
add(myList,42);
add(myList,43);
add(myList,44);
console.log(myList);

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head;

  while (current !== null) {
    if (current.element === element) {
      return true;
    }

    current = current.next;
  }

  return false;
}
console.log(contains(myList,42));

function getAt(list, index) {
 let current = list.head;
 let count =0;
 while(current!=null){
  if(list.length<=index || index<0){
    return undefined;
  }
  if(count===index){
    return current.element;
  }
  count++;
  current = current.next
 }
}
console.log(getAt(myList,1))

function insertAt(list, index, element) {
element = {
  element: element,
  next: null
};
  let current = list.head;
  let previous = null;
  let position = 0;
  if(index>list.length){
      return;
    }
  if(index==0){
      element.next = list.head;
      list.head = element;
      list.length++;
      return;
    }
  while(current!==null){
    
    if(position==index){
      element.next = current;
      previous.next = element;
      list.length++;
      return;
      
    }
    if(index == list.length && current.next==null){
      element.next = null;
      current.next = element;
      list.length++;
      return;
    
    }
    position++;
    previous = current;
    current = current.next;
  }
}
insertAt(myList, 1, 15);

console.log(myList);

function removeAt(list, index) {
 let previous = null;
 let current = list.head;
 let position=0;

 if (index < 0 || index >= list.length) {
    return;
  }
 if (index === 0) {
  list.head = current.next;
  list.length--;
  return;
}

 while(current!==null){
  if(index===position){
    previous.next = current.next;
    list.length--;
    return
  }
  position++
  previous = current;
  current = current.next;
 }
}
removeAt(myList, 2);
console.log(myList);

function clear(list) {
 list.head = null;
 list.length = 0;
}
(clear(myList));
console.log(myList);