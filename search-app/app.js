const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imagelist-wrapper");

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
}

function clear (){
    searchInput.value="";
    //Array.from(imageListWrapper.children).forEach((child)=>child.remove())
    imageListWrapper.innerHTML="";
}
    
   
function search(e){

    if (imageListWrapper.hasChildNodes()) {
    imageListWrapper.innerHTML = "";
  }


    const value = searchInput.value.trim();

    if (value === "") {
        // Optionally, display an error message to the user
        console.warn("Please enter a search term.");
        e.preventDefault();
        return; // Stop the function execution
    }
        
        


    //RequestParam - Spring Rest API
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID qFeU8AEHZhvImyibOnKCh2dm9oYiLe4u78KKvjeZlr8"
        }
    })
    
    .then((res)=> res.json())
    .then((data)=>{
        Array.from(data.results).forEach((image)=>{
            //console.log(image.urls.small)
            addImageToUI(image.urls.small)
        })
    })
    .catch((err)=> console.log((err)));
    

    e.preventDefault();
}

function addImageToUI(url){
    /*
    <div class="card">
                <img src="" alt="">
            </div>
         */
    console.log(imageListWrapper)
    const div = document.createElement("div");
    div.className= "card";

    const img = document.createElement("img");
    img.setAttribute("src", url);
    
    div.append(img);  
    imageListWrapper.append(div);
}