/*==================================== TURNING HTML COLLECTIONS TO ARRAYS ==================================================

We can check if an element is an array by using the 'Array.isArray(ArrayName)'. It returns true if the element is an array.

*/ 
document.addEventListener('DOMContentLoaded', function() {






    var titles = document.getElementsByClassName('title');
    console.log(titles)// returns the HTML collections

    console.log(Array.isArray(titles))// returns fasle (titles is an HTML collection)

    titles = Array.from(titles)//converts titles to array (Generates arrays from title)
    console.log(Array.isArray(titles))



    // ```========================= HTML DOM NODES =============================

    // Nodes -------- every element is a node. there are seeral node types.
    // we can know the elements node by using Nodetype. (Visit w3 schools to know more)

    //     Node Type                       NodeName                                nodeValue

    // 1   Element                 returns element name (div,h1,etc)            returns null

    // 2   Attribute               '' attributes name                        '' attributes value

    // 3.  Text                    #text                                     '' content of node                    

    // there are several node types(check W3 schools for more)

    // ```

    console.log('\nNODETYPE IN JAVASCRIPT')
    const banner = document.querySelector('#page-banner')
    console.log('Node type:  ', banner.nodeType, 'Node name: ', banner.nodeName)//display nodeType = 1(which is an element)


    // ******************* We can investigate if the node has a child node ***********************

    console.log('Does banner have a child node?', banner.hasChildNodes())// returns true if it has a child node or false if not


    // ************************************************ We can clone nodes ************************************************
    const clonedBanner = banner.cloneNode(true)// true returns a clone with the node's decendants.


    /* ************************************************ Traversing through the Nodes ************************************************
    
    We can traverse through the parent-child nodes or vice-versa. Lets use the #page-banner (banner var)
    
    console.log('banner.parentNode) or console.log('banner.parentElement') --------- returns the parent node tag
    
    console.log('banner.childNode') --- returns the list of child nodes in the parent node
    
    
    
    */

    console.log('Parent node of #page-banner: ', banner.parentNode)
    console.log('\nUsing banner.childNodes:  ', banner.childNodes)//the text represents line breaks(new line)
    console.log('\Using banner.children:  ', banner.children)//returns the list of children elements in the parent node


    /* *******************  SIBLING TO SIBLING TRAVERSING  ********************************
    
    Sibling elements are elements on the same level.
    <p<</p>
    <p></p>         these 2 p tags are siblings
    
    
    */

    console.log('\nNext Siblings of banner', banner.nextSibling)//prints out the next sibling of the banner
    console.log('\nNext elememt sibling of banner', banner.nextElementSibling)//prints out the element of the next tag
    console.log('\nPrevious Siblings of banner', banner.previousSibling)//prints out the previous sibling
    //there was oinly one sibling in the banner so the #text represents the newlines 



    // ```  ********************************************** EVENTS IN JS ******************************************************************************************

    // .            we attach event listeners to react to click events, submit events,etc. when they occur
    // .            we then attach a callback function to execute when the user triggers the event

    // .            syntax>>>>>>>>>>>>>>> Var.addEventListener('event_type', function) <<<<<<<<<<<<<<<<<    event listener type can be click,submit,etc
    // .            (Can learn more on w3 schools) ''EVENT LISTENERS ALWAYS GO WITH A CALLBACK FUNCTION'

    // ***********************************************************************************************************************************************************
    // ```






    // var h2 = document.querySelector('#book-list h2');
    // h2.addEventListener('click', function(e){//e is our event parameter
    //     e.target//target is a property which tells us which element was triggered and gives us details

    // })




    var btns = document.querySelectorAll('#book-list span.delete')
    // NB. btns contains 4 elements(HTML collections) and hence, we need to loop through before adding event listener

    console.log('Event listeners and event bubbling')

    //*-*-*-*-*-*-*-**- In this example, we are trying to delete the book when the user clicks the delete button -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    // btns.forEach((btn) => btn.addEventListener('click', function(e){//loop through the array (we add the event listener too each element(i))
    //     const li = e.target.parentElement; //grab the parent element of the li tag we clicked (e.target refers to our current position) and stores it
    //     li.parentElement.removeChild(li)//Grabs the target child(the tag) in the parent node and removes the target child

    //     // console.log(li)--------------will only execute when clicked
    // }))

    // //TARGET is used when we want to ge a specific element


    // /* *********************************    Preventing the Default Behavior of a tag   ***************************************************************
    //     Example: An anchor tag's behavior is to redirect you to a link 

    //     This comes in handy when dealing with forms
    //      

    // */

    const link = document.querySelector('#page-banner a')
    link.addEventListener('click', (e) => {
        e.preventDefault(); //prevents default from occuring
        console.log('Navigating to...', e.target.getAttribute('href'))

    })





    // ``` ********************* EVENT BUBBLING  ************************************************

    // event bubbling-------helps us to always add events to bulk elements. 
    // it bubbles up from the target element to the parent element.

    // ******The down side of the event listener is tht we will have to attach event listeners to individual bottons
    // which becomes a difficult task if you want to assign event listeners to individual buttons ******************

    // for the bubbling, we will attach the event listener to the parent tag and we target the children from there

    // We are going to rewrite the code in the event listener example

    // _______________________________________________________________________________________________________
    // ```




    const list = document.querySelector('#book-list ul')
    list.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {//checks where the user clicks
            const li = e.target.parentElement;//stores the clicked elements' parent element
            list.removeChild(li); // removes the li(child) from the ul(parent)

        }
    })




    /* ```  *********************  Interacting with FORMS  ****************************
        we can see all forms using the *** syntax *** >>>>>  document.forms  <<<<<<<
        This provides an array of the list of forms we have 
    
    
    */
    const addForm = document.forms['add-book'] // A way of identifying form(query). ['form_id']
    addForm.addEventListener('submit', (e) => {//when we click the botton, it is a submit event in forms
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value //Grabs the value we type in an input field
        // console.log(value)

        //add a new list when we add book
        list.innerHTML += `<li>
                    <span class="name">${value}</span>
	    			<span class="delete">delete</span>
                    </li>
   `//Adds the children to the parent list


        /* Alternative way
     
        //  create Element
        const li = document.createElement('li') //This is used to creae a new element
        const bookName =  document.createElement('span') //This is used to create the first span tag which contains the bookName(value entered)
        const deleteBtn = document.createElement('span') // span element for delete
     
        // add content to elements created
             bookName.textContent =value  //<span>value</span>
             deleteBtn.textContent ='delete' //<span>delete</>
     
         // add classes to elements created
             bookName.classList.add("name")
             deleteBtns.classList.add("delete")
     
         //  append to the document(to the parent[li element created])
         li.appendChild(bookName)
         li.appendChild(deleteBtn)
         list.appendChild(li)    // append the li to the
     
        */
    })

    //***************  Going to add a change event *******0*/

    //  Hide the books
    const label = document.querySelector('label') //to change text when one item is checked
    const hideBox = document.getElementById("hide") //grabs the input tag with id=hide

    hideBox.addEventListener('change', (e) => {//applied change event (hideBox is the checkbox)
        if (hideBox.checked) {
            list.style.display = "none"
            //      label.textContent = "Unhide Books"
        }
        else { list.style.display = "block" }
        //label.textContent = "Hide Books"}

    })

    // Add Search filter


    /********************* Creating a Custom Search Filter in JS  **********************************************
    We are trying to design/ add functionalities to the search filter in the id="search-books" form
    
    */

    // Create a variable for the form that conatin' the search box

    const searchBar = document.forms['search-books'].querySelector('input[type = text]')
    searchBar.addEventListener('keyup', (e) => {         //keyup - when we click/tyoe a key
        const term = e.target.value.toLowerCase(); //grabs the val we are typing and return lowercase
        const books = list.getElementsByTagName('li')   //grabs the li tag and stores them as HTML collections
        Array.from(books).forEach(book => {
            const title = book.firstElementChild.textContent //grabs the first span tag in each li tag
            if (title.toLowerCase().indexOf(term) != -1) { //grabs the position of the val in the book title
                book.style.display = 'block';
            } else { book.style.display = 'none'; }
        })


    })


    // Add tabbed Content

    // ********************* Creating Tabbed Content **********************

    const tabs = document.querySelector('.tabs'); //grab the ul (each ul has an li which we can click on)
    const panels = document.querySelectorAll('.panel') //grabs all elements with class of panel
    tabs.addEventListener('click', (e) => {  // when the tab is clicked this is fired
        if (e.target.tagName == 'LI') {   // if the clicked item's tagName is an 'li' tag
            const targetPanel = document.querySelector(e.target.dataset.target);//Grabs the current target, look for a 
            //data attribute(data-target) and the data's name. data-target
            panels.forEach((panel) => {//iterates through panels                  //data is the data attribute(which is grabbed by dataset)
                if (panel == targetPanel) {                                    //target is the dataset's name
                    panel.classList.add('active');//if targetPanel(where we have clicked) == panel (the current list item we are iterating), add class active

                } else {
                    panel.classList.remove('active');//if targetPanel(where we have clicked) != panel (the current list item we are iterating), remove class active
                }
            })
        }
    })



})





// the panels returns a list of the individual collection of all the tags with class=panels


/* ********** DOM CONTENT LOADED EVENTS ****************
Used when the DOM content is not fully loaded. (especially when the script tag is in the heading)
Using this makes the script only active if the DOM is fully loaded

----------syntax--------------------------------
document.addEventListener('DOMContentLoaded',fucntion(){drop your code})

*/
