const interior = [
  { img: "img/rostov-on-don-admiral.jpg" },
  { img: "img/sochi-thieves.jpg" },
  { img: "img/rostov-on-don-patriotic.jpg" },
];
const img = document.querySelector(".f");

const setInterior = (index) => {
  img.style.backgroundImage = `url(${interior[index].img})`;
};

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentIndex = 0;

prev.addEventListener("click", () => {
  setInterior(currentIndex - 1);
  currentIndex -= 1;
});
next.addEventListener("click", () => {
  setInterior(currentIndex + 1);
  currentIndex += 1;
});
