
//fetch the data from api using async & await function
async function generateFunc (){
    try {
      const data = await fetch("https://api.thecatapi.com/v1/images/search");
      const cats = await data.json(); 
      console.log(cats);
      let apiImgs = cats[0].url; // store the url from api in apiImg variable
      
      //create img element and append to div 
      let catPics = document.createElement("img"); 
      catPics.setAttribute("src" , `${apiImgs}`);
      catPics.classList.add("showcase");
    
      let catPhotos = document.querySelector(".catPhotos");
      catPhotos.appendChild(catPics);
      
    }
    //catch if any error occurs
    catch(err){
      console.log(err)
    }
  
  }