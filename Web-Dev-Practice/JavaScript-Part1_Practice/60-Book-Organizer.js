let books = [
  {
    title: "Wings of Valour",
    authorName: "Swapnil Pandy",
    releaseYear: 2025
    
  },
  {
    title: "The Jungle Book",
    authorName: "Rudyard Kipling",
    releaseYear: 1894
  },
  {
    title: "The Kite Runner",
    authorName: "Khaled Hussaini",
    releaseYear: 2003
  }
  
];
function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  }
  else if (book1.releaseYear > book2.releaseYear){
    return 1;
  }
  else{
    return 0;
  }
}
let filteredBooks = books.filter(book => book.releaseYear<=1950)
console.log(filteredBooks);
let sorted = (filteredBooks.sort(sortByYear));
console.log(sorted);
