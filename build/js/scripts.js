const changeReview = async (reviewId) => {
  const Reviews = await getElements();
  setActive(`review${reviewId}`, "reviews", "review__active");
  setActive(`select${reviewId}`, "review__select", "active");

  const review = Reviews.find((r) => +r.id === reviewId);

  document.getElementById("reviewName").textContent = review.name;
  document.getElementById("reviewWork").textContent =
    review.work + ", " + review.city;
  document.getElementById("reviewText").textContent = review.message;
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
  console.log(id);
  if (id) id.scrollIntoView({ block: "start", behavior: "smooth" });
};

const handleSubscribe = async (e) => {
  e.preventDefault();
  e.stopPropagation();

  let form = document.forms.subscribeForm;

  const email = form.elements.emailSubscribe.value;
  const name = form.elements.nameSuscribe.value;

  if (!email) {
    form.elements.emailSubscribe.classList.add("error");
  } else {
    form.elements.emailSubscribe.classList.remove("error");
  }

  if (!name) {
    form.elements.nameSuscribe.classList.add("error");
  } else {
    form.elements.nameSuscribe.classList.remove("error");
  }

  if (await request(name, email)) {
    form.elements.nameSuscribe.value = "";
    form.elements.emailSubscribe.value = "";

    document.getElementById("submitSubscribe").classList.add("done");
    setTimeout(() => {
      document.getElementById("submitSubscribe").classList.remove("done");
    }, 5000);
  } else {
    document.getElementById("submitSubscribe").classList.add("error__button");
    setTimeout(() => {
      document.getElementById("submitSubscribe").classList.remove("error__button");
    }, 5000);
  }
};

const request = async (name, email) => {
  try {

    let data;
    if (!!email && !!name)
    data = await fetch("http://localhost/myproject/post.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    
    return !!data?.ok;
  } catch {
    return false;
  }
};

const getElements = async () => {
  try {
    const response = await fetch("http://localhost/myproject/get.php", {
      method: "GET",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
