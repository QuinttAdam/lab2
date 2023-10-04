import Island from "./Island.js";
export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }
  
    hookEvents() {
      // hook events like clicking buttons to a specific function
      // add event listener to the button with id="btnAddIsland"
      document.querySelector("#btnAddIsland")
        .addEventListener("click", (e) => {
          e.preventDefault();
          this.addIsland();
        });
    }
  
    save() {
      // save array islands to localstorage as string
      // loop over all this.islands and save the names
    }
  
    load() {
      // load islands from localstorage into array
      // loop over the array and addIslands()
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
      // let circle= new Island();
      // circle.getRandomColor();
      // circle.getRandomName()
      this.getCoordinates();
      this.moveIsland();
    }
  
    moveIsland(island) {
      // this might be a good point to animate the islands with JS Animations API
      let div = document.createElement("div");
        div.classList.add("island");
        //append to body
        document.body.appendChild(div);
        
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
  