import Island from "./Island.js";
const island= new Island();
export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      console.log(this.islands);
      this.hookEvents(); // let's kick things of by hooking up events
    }
  
    hookEvents() {
      // hook events like clicking buttons to a specific function
      // add event listener to the button with id="btnAddIsland"
      document.querySelector("#btnAddIsland")
        .addEventListener("click", (e) => {
          e.preventDefault();
          this.addIsland(island);
        });
      document.querySelector("#btnSave")
        .addEventListener("click", (e) => {
          e.preventDefault();
          this.save();
      });
      document.querySelector("#btnLoad")
        .addEventListener("click", (e) => {
          e.preventDefault();
          this.load();
      });
    }
  
    save() {
      // save array islands to localstorage as string
      // loop over all this.islands and save the names
      localStorage.setItem("islands", JSON.stringify(this.islands));
      console.log(localStorage.getItem("islands"));
    }
  
    load() {
      let existingIslands = document.querySelectorAll(".island");
      existingIslands.forEach(existingIsland => {
        existingIsland.remove();
      });
      // load islands from localstorage into array
      // loop over the array and addIslands()
      let storedArrayString = localStorage.getItem("islands");
      let storedislands = JSON.parse(storedArrayString);
      // console.log(storedArray);
      storedislands.forEach(storedisland => {
        let div = document.createElement("div");
        div.classList.add("island");
        div.style.backgroundColor = storedisland.color;
        div.innerHTML = storedisland.name; 
        //append to body
        document.body.appendChild(div);
        this.moveIsland(div);        
      });

      
    }
  
    getCoordinates() {
      // return coordinates within the screen at random, feel free to change it up!
      let randomSign = Math.random() < 0.5 ? -1 : 1;
      return {
        x: ((Math.random() * window.innerWidth) / 2) * randomSign,
        y: ((Math.random() * window.innerHeight) / 2) * randomSign
      };
    }
  
    addIsland(island) {
      // add the islands to the DOM
      
      let div = document.createElement("div");
      div.classList.add("island");
      let color= island.getRandomColor();
      let name= island.getRandomName();
      div.style.backgroundColor = color;
      div.innerHTML = name; 
      //append to body
      document.body.appendChild(div);
      this.moveIsland(div);
      //add to array
      this.islands.push({name, color});
    }
  
    moveIsland(div) {
      // this might be a good point to animate the islands with JS Animations API
        let coords = this.getCoordinates();
        //use js web animations api to animate the island to coords
        div.animate([
            {transform: `translate(0px, 0px)`},
            {transform: `translate(${coords.x}px, ${coords.y}px)`}
        ], {
            duration: 1000,
            iterations : 1,
            fill : "forwards",
            
        });
    }
  }
  