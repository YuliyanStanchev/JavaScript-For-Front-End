function create(words) {
   let parentContainer = document.getElementById("content");
   
   for (let index = 0; index < words.length; index++) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = words[index];
      p.style.display = "none";
      div.addEventListener("click", showtext);
      div.appendChild(p);
      parentContainer.appendChild(div);
   }

   function showtext(e) {
      
      let p = this.children[0];
      p.style.display = "block";
   }

}