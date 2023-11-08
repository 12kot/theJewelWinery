const Reviews = [
  {
    name: "Ekaterina Kuznecova",
    work: "Designer, London",
    text: " The Jewel is a luxurious wine with a complex flavor and a long finish. It is a blend of three of the world's most famous grapes, and it is aged for two years in French oak barrels. The wine is full-bodied and flavorful. It is a perfect wine for a special occasion or to enjoy on its own. ",
  },
  {
    name: "Dmitry Fomichenok",
    work: "Student, Harvard",
    text: " The Jewel Collection is a line of wines from the Global Wine Group that offers a variety of red, white, and sparkling wines. The wines are known for their quality and affordability, and they are a great option for wine lovers of all levels. ",
  },
  {
    name: "Mikita Yakaltsevich",
    work: "The Jewel Founder, Helsinki",
    text: " The Jewel: A wine to remember. The Jewel is a wine that is sure to impress. It is a full-bodied wine with a rich, complex flavor that is perfect for special occasions. I am proud to have created this wine, and I hope you enjoy it. ",
  },
];

const changeReview = (reviewId) => {
  setActive(`review${reviewId}`, "reviews", "review__active");
  setActive(`select${reviewId}`, "review__select", "active");

  document.getElementById("reviewName").textContent = Reviews[reviewId].name;
  document.getElementById("reviewWork").textContent = Reviews[reviewId].work;
  document.getElementById("reviewText").textContent = Reviews[reviewId].text;
};

const setActive = (activeRef, parentRef, handleClass) => {
  document.getElementById(activeRef).classList.add(handleClass);

  const nodes = document.getElementById(parentRef);
  for (let i = 0; i < nodes.childNodes.length; i++) {
    if (!nodes.childNodes[i].id) continue;

    if (nodes.childNodes[i].id !== activeRef) {
      nodes.childNodes[i].classList.remove(handleClass);
    }
  }
};

const scrollToElement = (id) => {
  console.log(id)
  const node = document.getElementById(id);
  if (id) id.scrollIntoView({ block: "start", behavior: "smooth" });
};
