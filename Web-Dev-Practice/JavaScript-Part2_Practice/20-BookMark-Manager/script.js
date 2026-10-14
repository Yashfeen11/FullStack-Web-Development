const addBookMarkbtn = document.getElementById("add-bookmark-button");
const addBookmarkbtnForm = document.getElementById("add-bookmark-button-form");
const viewCategorybtn= document.getElementById("view-category-button");
const formSection= document.getElementById("form-section");
const mainSection=document.getElementById("main-section");
const bookmarkListSection=document.getElementById("bookmark-list-section");
const closeFormBtn= document.getElementById("close-form-button");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.querySelector(".category-name");
const name = document.getElementById("name");
const url = document.getElementById("url");
const categoryList = document.getElementById("category-list");
const goBackbtn= document.getElementById("close-list-button");
const deleteBookmarkbtn= document.getElementById("delete-bookmark-button");


addBookMarkbtn.addEventListener("click",()=>{
  categoryName.textContent = categoryDropdown.value;
  displayOrCloseForm();

})

addBookmarkbtnForm.addEventListener("click", ()=>{
  addBookmark();
  displayOrCloseForm();
  
})

closeFormBtn.addEventListener("click", ()=>{
 displayOrCloseForm();  
})

viewCategorybtn.addEventListener("click", ()=>{
  categoryName.textContent = categoryDropdown.value;
  displayOrHideCategory();
  viewCategory();
})

goBackbtn.addEventListener("click", ()=>{
  displayOrHideCategory();
})

deleteBookmarkbtn.addEventListener("click", ()=>{
  deleteBookmark();
})

const displayOrCloseForm = ()=>{
  formSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
}
const displayOrHideCategory = ()=>{
 mainSection.classList.toggle("hidden");
 bookmarkListSection.classList.toggle("hidden");

}
let bookmarks = [];

function getBookmarks() {
  try{
  let data = JSON.parse(localStorage.getItem("bookmarks"));
  if (!Array.isArray(data)) {
    return [];
  }
  let isValid = data.every(bookmark =>
      bookmark &&
      typeof bookmark.name === "string" &&
      typeof bookmark.category === "string" &&
      typeof bookmark.url === "string"
    );

    if (!isValid) {
      return [];
    }

  return data;
  }
  catch(error){
   return [];
  }
}
function addBookmark(){
  let bookmarks = getBookmarks();

  let newBookmark = {
    name: name.value,
    category: categoryName.textContent,
    url: url.value
  };

  bookmarks.push(newBookmark);

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  name.value = "";
  url.value = "";
}

function viewCategory() {
  let data = getBookmarks();
  let found = false;

  categoryList.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].category === categoryDropdown.value) {
      found = true;

      categoryList.innerHTML += `
        <label for="${data[i].name}">
          <input
            type="radio"
            id="${data[i].name}"
            value="${data[i].name}"
            name="bookmarkCategory"
          >
          <a href="${data[i].url}">${data[i].name}</a>
        </label>
      `;
    }
  }

  if (!found) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  }
}

function deleteBookmark(){
    let radio= document.querySelector('input[name="bookmarkCategory"]:checked');
    if (!radio) return;
    let data = getBookmarks();
    const arrIndex = data.findIndex(bookmark =>
    bookmark.name === radio.value &&
    bookmark.category === categoryDropdown.value
  );
    if(arrIndex!==-1){
    data.splice(arrIndex,1);
    localStorage.setItem("bookmarks", JSON.stringify(data));
    viewCategory();
    }
}
