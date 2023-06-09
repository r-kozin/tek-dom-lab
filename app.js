let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector("nav#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

var showingSubMenu = false;

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

for (i in menuLinks) {
  let createA = document.createElement("a");
  createA.setAttribute("href", menuLinks[i].href);
  createA.innerText = menuLinks[i].text;
  topMenuEl.append(createA);
}

let subMenuEl = document.querySelector("nav#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let topMenuLinks = document.querySelectorAll("#top-menu>a");
for (let topMenuLink of topMenuLinks) {
  console.log(topMenuLink);
}
topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    return;
  } else {
    console.log(evt.target.textContent);
    if (evt.target.classList.contains("active")) {
      // step 11.
      evt.target.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = "0";
      return;
    }
    for (let topMenuLink of topMenuLinks) {
      // loop through topMenuLinks and remove active class
      // step 12.
      topMenuLink.classList.remove("active");
      console.log(topMenuLink); // logs to make sure looping through each topmenu link
      console.log("removed active from " + topMenuLink.textContent);
    }
    evt.target.classList.add("active"); //step 13.
    const aName = evt.target.textContent; // set aName = to text content of the link we clicked
    const theLink = menuLinks.find((link) => {
      //match theLink to clicked link in menuLinks
      return link.text === aName; // returns boolean
    });
    console.log(theLink); //confirm theLink is the clicked link
    console.log(theLink.subLinks);
    if (theLink.subLinks === "undefined") {
      showingSubMenu = false; //if sublinks is undefined set to false
      return;
    }
    if (theLink.subLinks) {
      showingSubMenu = true;
    } else {
      showingSubMenu = false; //return
    }
    console.log(showingSubMenu);
    if (showingSubMenu === true) {
      buildSubMenu(theLink.subLinks);
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
    if (theLink.text === 'about'){
      mainEl.innerHTML = '<h1>' + theLink.text + '</h1>';
    }
  }
});

function buildSubMenu(arg) {
  subMenuEl.innerHTML = "";
  for (i in arg) {
    let createA = document.createElement("a");
    createA.setAttribute("href", arg[i].href);
    createA.innerText = arg[i].text;
    subMenuEl.append(createA);
  }
}

subMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    return;
  } else {
    console.log(evt.target.textContent);
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    for (let topMenuLink of topMenuLinks) {
      // loop through topMenuLinks and remove active class
      topMenuLink.classList.remove("active");
      console.log(topMenuLink); // logs to make sure looping through each topmenu link
      console.log("removed active from " + topMenuLink.textContent);
    }
    mainEl.innerHTML = "<h1>" + evt.target.innerHTML + "</h1>";
  }
});
