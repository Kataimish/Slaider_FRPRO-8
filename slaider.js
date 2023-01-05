const interior = [
  {
    city: "Rostov-on-Don <br/>  LCD admiral",
    apartment: "81m2",
    repairTime: "3.5 months",
    RepairCost: "Upon request",
    img: "img/rostov-on-don-admiral.jpg",
  },
  {
    city: "Sochi <br/> Thieves",
    apartment: "105m2",
    repairTime: "4 months",
    RepairCost: "Upon request",
    img: "img/sochi-thieves.jpg",
  },
  {
    city: "Rostov-on-Don <br/>  Patriotic",
    apartment: "93m2",
    repairTime: "3 months",
    RepairCost: "Upon request",
    img: "img/rostov-on-don-patriotic.jpg",
  },
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
