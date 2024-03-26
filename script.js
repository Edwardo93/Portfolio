const dropbtn = document.querySelector('.dropbtn')
const logo = document.querySelector('.logo')
const brand = document.querySelector('.brand')
const dot = document.querySelector('.brand span')
const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu-item a')
// Select the element with class 'hover-line' that is currently in the :hover state
const hoverLineElement = document.querySelector('.hover-line');
const dropdownContent = document.querySelector('.dropdown-content')
const bars = document.querySelectorAll('.bar');
const secondBar = bars[1]; // Access the second element (index 1)
const customCursor = document.querySelector('.custom-cursor');//The coursor
const circleCursor = document.querySelector('.custom-cursor');
const bulletCursor = document.querySelector('.bullet-cursor');
const body = document.body;

//Movin the dot while hovering
brand.addEventListener('mouseover', () => {
    dot.classList.toggle('span-move')
    // Change its background color
  });
brand.addEventListener('mouseleave', () => {
dot.classList.remove('span-move');
});
//Toggle navbar menu
dropbtn.addEventListener('click', () => {
  body.classList.toggle('overlay-active'); // Toggle the class to activate/deactivate the overlay
  secondBar.style.transition = "0s"
  dropbtn.classList.toggle('opened');
  dropdownContent.classList.toggle('menu-opened');
  brand.classList.toggle('brand-black')

  // If the viewport width is <= 500px hide Logo when dropdown is open
  const mediaQuery = window.matchMedia('(max-width: 500px)');
  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      logo.classList.toggle('logo-display');
    } 
  };
  handleMediaQueryChange(mediaQuery);
  
  //Change maneu item color when dropped down
  for(let menu of menuItems){
    menu.style.cssText= 'fontFamily: sans-serif; fontWeight:900; color:black; '
  }
});



// Hamburger Menu - Second Bar rotate
  dropbtn.addEventListener('mouseover', () => {
    secondBar.style.transition= '0.5s';
    secondBar.style.transform= 'rotate(180deg)';
    // Change its background color

  });

// -------- Iframe START--------

// & -----------Linking constants-------------
// World Map const
const worldMapDiv= document.querySelector(".worldMap-div")
const imgMapTrigger = document.querySelector('#worldMap-img')
const iframeMapDiv = document.querySelector(".iframe-worldMap-container")
const worldMapiFrame = document.getElementById("worldMapiFrame")
// Music Player const
const musicPlayerDiv= document.querySelector(".musicPlayer-div")
const imgMusicPlayerTrigger = document.querySelector('#musicPlayer-img')
const iFrameMusicPlayerDiv = document.querySelector(".iframe-musicPlayer-container")
const musicPlayeriFrame = document.getElementById("musicPlayeriFrame")
// Roll the Dice const
const rollTheDiceDiv= document.querySelector(".rollTheDice-div")
const imgRollTheDiceTrigger = document.querySelector('#rollTheDice-img')
const iFrameRollTheDiceDiv = document.querySelector(".iframe-rollTheDice-container")
const rollTheDiceiFrame = document.getElementById("rollTheDiceiFrame")
// Sticky Notes const
const stickyNotesDiv= document.querySelector(".stickyNotes-div")
const imgStickyNotesTrigger = document.querySelector('#stickyNotes-img')
const iFrameStickyNotesDiv = document.querySelector(".iframe-stickyNotes-container")
const stickyNotesiFrame = document.getElementById("stickyNotesiFrame")
// To Do List const
const toDoListDiv= document.querySelector(".toDoList-div")
const imgToDoListTrigger = document.querySelector('#toDoList-img')
const iFrameToDoListDiv = document.querySelector(".iframe-toDoList-container")
const toDoListiFrame = document.getElementById("toDoListiFrame")
 
//^ -------------START Create classes/re-usabale functions-------------
class iFrameApp{
  // ~-----------Constructor legend - substitute App with the app name added in HTML----------
    // ~iFrameAppCont = app-div
    // ~appDiv = iFrame-app-container
    // ~appIframe = appIframe 
    // ~imgAppTrigger = app-img
    
  constructor(appDiv,imgAppTrigger,iFrameAppDiv,appiFrame,appName){

    this.appDiv = appDiv;
    this.imgAppTrigger = imgAppTrigger;
    this.iFrameAppDiv = iFrameAppDiv;
    this.appiFrame = appiFrame;
    this.appName = appName;

    // bind expand to constructor
    this.imgAppTrigger.addEventListener('click', this.handleClick.bind(this));
    // bind load event to constructor
    this.appiFrame = appiFrame.addEventListener('load', this.handleiFrameLoad.bind(this))
  }
  removeIframeAppVis(iFrameAppDiv) {
    if (iFrameAppDiv) {
      this.iFrameAppDiv.classList.remove('iframe-visibility');
      this.appDiv.classList.remove('expanded')
    }
  }
  handleClick() {
    if (window.innerWidth <= 850) {
      // If the window width is below 850px, redirect the user to a new page
      window.location.href = this.appName + '/' + this.appName + '.html';
      this.removeIframeAppVis()
    } else {
      // If the window width is above 850px, expand the iframe
      this.iFrameAppDiv.classList.toggle('iframe-visibility');
      this.appDiv.classList.toggle('expanded');
    }
  };
  handleiFrameLoad () {
    if (this.appiFrame) {
        const iframeDocument = this.appiFrame.contentDocument || this.appiFrame.contentWindow.document;
        // Modify the background color of the content within the iframe
        const contentBody = iframeDocument.body;
        if (contentBody) {
            contentBody.style.backgroundColor = "transparent"; // Change to your desired color
            contentBody.style.color = "yellow"; // Change to your desired color
        }
    }
};
}

const worldMapApp = new iFrameApp(worldMapDiv,imgMapTrigger,iframeMapDiv,worldMapiFrame,'worldMap')
const musicPlayerApp = new iFrameApp(musicPlayerDiv,imgMusicPlayerTrigger,iFrameMusicPlayerDiv,musicPlayeriFrame,'musicPlayer')
const rollTheDiceApp = new iFrameApp(rollTheDiceDiv,imgRollTheDiceTrigger,iFrameRollTheDiceDiv,rollTheDiceiFrame,'rollTheDice')
const stickyNotesApp = new iFrameApp(stickyNotesDiv,imgStickyNotesTrigger,iFrameStickyNotesDiv,stickyNotesiFrame,'stickyNotes')
const toDoListApp = new iFrameApp(toDoListDiv,imgToDoListTrigger,iFrameToDoListDiv,toDoListiFrame,'toDoList')




//^ -------------END Create classes/re-usabale functions-------------



//  -------- Iframe END --------

// ------ Footer ------
    const socialMedia = document.querySelector("#test")
    const email = document.querySelector(".email")

    socialMedia.addEventListener("click", ()=>{
      email.classList.toggle("email-visibility")
    })