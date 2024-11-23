(() => {
  gsap.registerPlugin(ScrollToPlugin);

  gsap.to(".hero-logo", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.3,
  });

  gsap.to(".hero-title", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.5,
  });
  gsap.to(".hero-subtitle", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.7,
  });
  gsap.to(".button", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.9,
  });

  //x-ray
  let imageCon = document.querySelector("#imageCon"),
    drag = document.querySelector(".image-drag"),
    left = document.querySelector(".image-left"),
    dragging = false,
    min = 0,
    max = imageCon.offsetWidth;

  // function
  function onDown() {
    dragging = true;
    console.log("on down Called");
  }

  function onUp() {
    dragging = false;
    console.log("on up Called");
  }

  function onMove(event) {
    if (dragging === true) {
      let x = event.clientX - imageCon.getBoundingClientRect().left;
      if (x < min) {
        x = min;
      } else if (x > max) {
        x = max - 4;
      }

      drag.style.left = x + "px";
      left.style.width = x + "px";
    }
  }

  // event listeners
  drag.addEventListener("mousedown", onDown);
  document.body.addEventListener("mouseup", onUp);
  document.body.addEventListener("mousemove", onMove);
  //animation

  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  const frameCount = 300; // 300 images in total
  const images = []; // array to hold all images
  const buds = { frame: 0 }; // object to hold the current frame

  // create images array
  for (let i = 0; i < 299; i++) {
      const img = new Image();
      img.src = `images/explode_${(i + 1).toString().padStart(5, '0')}.webp`; // Ensure correct padding
      images.push(img);
  }

  // set canvas dimensions
  canvas.width = window.innerWidth; // set canvas width to viewport width
  canvas.height = 1080; // set canvas height to a fixed value

  // GSAP animation
  gsap.to(buds, {
    frame: frameCount - 1, // animate from 0 to 299
    snap: "frame",
    scrollTrigger: {
      trigger: "#explode-view",
      pin: true,
      scrub: 1,
      markers: false,
      start: "top top"
    },
    onUpdate: render
  });

  // render the first frame
  images[0].addEventListener("load", render);

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame], 0, 0);
  }

  //-------product
  document.querySelectorAll(".product").forEach(function (button) {
    button.addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".ar-buds" });
    });
  });

  document
    .getElementById("exploreButton")
    .addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".ar-buds" });
    });

  // buy-now

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".buy-now", {
    scrollTrigger: {
      trigger: ".buy-now",
      start: "top bottom", // Adjust as needed
    },
    y: 50, // Adjust animation values as needed
    opacity: 0,
    duration: 1,
  });
  
  // end

  //  image moving
  gsap.from(".image-container img", {
    scrollTrigger: {
      trigger: ".buy-now",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 50,
    duration: 1.5,
  });

  let menu = document.querySelector("#hammenu"),
    mobileNav = document.querySelector(".mobile-menu");

  function toggleMenu() {
    mobileNav.classList.toggle("hidden");
  }

  menu.addEventListener("click", toggleMenu);

  // hotspots Selection

  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const InfoBoxes = [
    {
      title: "ear tips",
      text: "comfortable ear tips for long listening sessions",
      image: "images/emoji1.svg"
    },
    {
      title: "fast charging ",
      text: "2 min charge for 1 hour of playback",
      image: "images/emoji2.svg"
    },
    {
      title: "touch control",
      text: "to pause, play, skip tracks, and adjust volume",
      image: "images/emoji3.svg"
    },
    {
      title: "ANC and Transparency",
      text: "to cancel out background noise and let in the world around you",
      image: "images/emoji4.svg"
    }
  ];

  function modelLoaded() {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    InfoBoxes.forEach((infoBox, index)=>{
  
      let selected = document.querySelector(`#hotspot-${index+1}`);
  
      const title = document.createElement("h2");
      title.textContent= infoBox.title;
  
      const text = document.createElement("p");
      text.textContent = infoBox.text;
  
      const image = document.createElement("img"); 
        image.src = infoBox.image; 
        image.alt = infoBox.title;
        image.style.width = "100px"; 
        image.style.height = "auto";  
  
        selected.appendChild(title);
        selected.appendChild(text);
        selected.appendChild(image); 
    })
  }
  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  function moveDivisor() {
    console.log(slider.value);
    divisor.style.width = `${slider.value}%`;
  }

   function render(){
        context.clearRect(0,0, canvas.width, canvas.height);
        // console.log(buds.frame);
        console.log(images[buds.frame]);
        context.drawImage(images[buds.frame], 0, 0);
    }
  //Event Listener
  //model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

  //end-hotspots

  //home-scroll
  document.querySelectorAll(".home").forEach(function (button) {
    button.addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".hero" });
    });
  });

  //buy-scroll

  document.querySelectorAll(".buy").forEach(function (button) {
    button.addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".buynow" });
    });
  });

  // footer-nav
  gsap.from(".footer", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top bottom", // Trigger animation when the top of the footer hits the bottom of the viewport
    },
    y: 50, // Start 50 pixels below its starting position
    opacity: 0,
    duration: 1,
  });
  
})();
