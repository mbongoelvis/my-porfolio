const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// mobile menu
const menu = document.querySelector(".menu")
const closemenu = document.querySelector(".closemenu")
const openmenu = document.querySelector(".openmenu")

openmenu.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  }
});

closemenu.addEventListener("click", () => {
  if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});