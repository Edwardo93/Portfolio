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

// Hamburger Menu - Second Bar rotate
  dropbtn.addEventListener('mouseleave', () => {
    secondBar.style.transition= '0.5s';
    secondBar.style.transform= 'rotate(-180deg)';
    // Change its background color
  });





// -------- Iframe START--------
  const mapIframe = document.getElementById("mapIframe")
  const flipIframe = document.getElementById("flipIframe")
  const iframeMapDiv = document.querySelector(".iframe-map-container")
  const iframeFlipDiv = document.querySelector(".iframe-flip-container")
  const expandMap= document.querySelector("#iframe-map")
  const expandFlip= document.querySelector("#iframe-flip")
  const worldMapDiv= document.querySelector(".world-map-div")
  const flipCardDiv= document.querySelector(".flip-card-div")
  const expandLinkMap = document.querySelector('#iframe-map');
  const expandLinkFlip = document.querySelector('#iframe-flip');
  const imgMapTrigger = document.querySelector('#world-map-img')
  const imgFlipTrigger = document.querySelector('#flip-card-img')
  const h1FlipCard = document.querySelector("#h1FlipCard")


  // ---Iframe MAP START ---
    // Iframe MAP visibility

    // Creates a function to remove the visibility and exapnded class
    function removeIframeMapVis() {
      if (iframeMapDiv) {
        iframeMapDiv.classList.remove('iframe-visibility');
        worldMapDiv.classList.remove('expanded')
      }
    }
    imgMapTrigger.addEventListener('click', () => {
      if (window.innerWidth <= 850) {
        // If the window width is below 850px, redirect the user to a new page
        window.location.href = 'worldMap/world-map.html';
      } else {
        // If the window width is above 850px, expand the iframe
        iframeMapDiv.classList.toggle('iframe-visibility');
        worldMapDiv.classList.toggle('expanded');
      }
    });
    // Listen for the window resize event
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 850) {
        // If the window width is below 850px, remove the class
        removeIframeMapVis();
      }
    });
    // Iframe Transparent

      // Wait for the iframe to load
        mapIframe.addEventListener("load", () => {
        // Access the contentDocument of the iframe
        const iframeDocument = mapIframe.contentDocument || mapIframe.contentWindow.document;

        // Modify the background color of the content within the iframe
        const contentBody = iframeDocument.body;
        if (contentBody) {
            contentBody.style.backgroundColor = "transparent"; // Change to your desired color
            contentBody.style.color = "yellow"; // Change to your desired color

        }
      });



      // Add a click event listener to the "Expand" link


  //  --- Iframe MAP END ---

  //  --- Iframe FLIP START ---
    // Iframe FLIP visibility

        // Creates a function to remove the visibility and exapnded class
        function removeIframeFlipVis() {
          if (iframeFlipDiv) {
            iframeFlipDiv.classList.remove('iframe-visibility');
            flipCardDiv.classList.remove('expanded')
          }
        }
        imgFlipTrigger.addEventListener('click', () => {
          if (window.innerWidth <= 850) {
            // If the window width is below 850px, redirect the user to a new page
            window.location.href = 'flipCard/flipCard.html';
          } else {
            // If the window width is above 850px, expand the iframe
            iframeFlipDiv.classList.toggle('iframe-visibility');
            flipCardDiv.classList.toggle('expanded');
          }
        });
        // Listen for the window resize event
        window.addEventListener('resize', () => {
          if (window.innerWidth <= 850) {
            // If the window width is below 850px, remove the class
            removeIframeFlipVis();
          }
        });
        window.addEventListener('resize', () => {
          if (window.innerWidth <= 500) {
            // If the window width is below 850px, remove the class
            h1FlipCard.innerHTML = '#2 FlipCard Game'
          }
          else{
            h1FlipCard.innerHTML = '#2 FlipCard Game/WorkInProgress'

          }
        });
    // Iframe Transparent

    // Wait for the iframe to load
      flipIframe.addEventListener("load", () => {
      // Access the contentDocument of the iframe
      const iframeDocument = flipIframe.contentDocument || flipIframe.contentWindow.document;

      // Modify the background color of the content within the iframe
      const contentBody = iframeDocument.body;
      if (contentBody) {
          contentBody.style.backgroundColor = "transparent"; // Change to your desired color
          contentBody.style.color = "yellow"; // Change to your desired color

      }
    });



  //  --- Iframe Flip END ---

//  -------- Iframe END --------

// ------ Footer ------
    const socialMedia = document.querySelector("#test")
    const email = document.querySelector(".email")
    
      
    socialMedia.addEventListener("click", ()=>{
      email.classList.toggle("email-visibility")
    })