
const body = document.querySelector('body');
const name1 = document.querySelector('.name');
const link = document.querySelector('.link');
const bookmarkBtn = document.querySelector('.bookmarkBtn');

const arr = [{
    name1: name1.value,
    link: link.value
}];
const bookMark = () => {
    const bookmarkBtn = document.querySelector('.bookmarkBtn');
    const section = document.createElement('section');
    bookmarkBtn.value = localStorage.getItem('.name', );
bookmarkBtn.addEventListener('click', function(event){
    event.preventDefault();
    const bookmarkWrapper = document.createElement('div');
    const nameInput = document.createElement('h1');
    nameInput.innerHTML = name1.value;
    const linkInput = document.createElement('h2');
    linkInput.innerHTML = link.value;
    const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'remove'
// we will add an even listener to the remove button
        removeBtn.addEventListener('click', function(){
        bookmarkWrapper.remove();
        // console.log('deleted' + bookmarkWrapper)
})

//appending created elements to the wrapper
bookmarkWrapper.append(nameInput, linkInput, removeBtn);
//appending the wrapper to the DOM
section.append(bookmarkWrapper);
console.log(arr);
})
return section;
}

arr.map((element) => {
    const book = bookMark(element);
        body.append(book);
})


// //I want to create a page with bookmarks
// //when the submit button is pushed I want for the name and link from the input boxes to be displayed on the page

// let bookmarks = [{}];

// //first I want to create a wrapper for the inputs
//     // inside the wrapper we will have the:
//         //name input
//         //link input
//         //remove button

// const bookmarkWrapper = document.createElement('div');
// const nameInput = document.createElement('h1');
// const linkInput = document.createElement('h2');
// const removeBtn = document.createElement('button');
// removeBtn.textContent = 'submit'
// // we will add an even listener to the remove button
// removeBtn.addEventListener('click', function(){
// delete bookmarkWrapper;
// console.log('deleted' + bookmarkWrapper)
// })


// //appending created elements to the wrapper
// bookmarkWrapper.append(nameInput, linkInput, removeBtn);

// //appending the wrapper to the DOM
// body.append(bookmarkWrapper);

