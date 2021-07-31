// const aboutDiv = document.querySelector('.about');

// const aboutObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             petObserver.observe(petDiv);
//         }
//         else {
//             return;
//         }
//     });
// }, {});

// aboutObserver.observe(aboutDiv);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const petDiv = document.querySelector(".info_card");
const options = {};
const petObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      increase();
      petObserver.unobserve(entry.target);
    } else {
      return;
    }
  });
}, options);

petObserver.observe(petDiv);

/////////////////////////////////////////////////////////// number increment function /////////////////////////////////////////

function increase() {
  let petElement = document.querySelectorAll(".info_card h2")[0];
  let clientElement = document.querySelectorAll(".info_card h2")[1];
  let professionalElement = document.querySelectorAll(".info_card h2")[2];

  const pNumber = Number(
    document
      .querySelectorAll(".info_card h2")[0]
      .getAttribute("data-petNumbers")
  );
  const cNumber = Number(
    document
      .querySelectorAll(".info_card h2")[1]
      .getAttribute("data-clientNumbers")
  );
  const proNumber = Number(
    document
      .querySelectorAll(".info_card h2")[2]
      .getAttribute("data-clientNumbers")
  );

  let i = 0;
  let c = 0;
  let f = 0;

  ////////////////////// pet number

  setInterval(() => {
    if (i <= pNumber) {
      petElement.innerHTML = `${i}`;
      i++;
    } else {
      clearInterval();
    }
  }, 90);

  ////////////////////// customer number

  setInterval(() => {
    if (c <= cNumber) {
      clientElement.innerHTML = `${c}+`;
      c++;
    } else {
      clearInterval();
    }
  }, 100);

  /////////////////////// professionals number

  setInterval(() => {
    if (f <= proNumber) {
      professionalElement.innerHTML = `${f}+`;
      f++;
    } else {
      clearInterval();
    }
  }, 30);
}

///////////////////////////////////////////////// owl carousel script ////////////////////////////////////////////////////////////////

const nextIcon = '<i class="bi bi-arrow-right custom_bi"></i>';
const prevIcon = '<i class="bi bi-arrow-left custom_bi"></i>';

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: true,
    navText: [prevIcon, nextIcon],
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

//////////////////////////////////////////////////////////// Copyright date /////////////////////////////////////////////////////////
const latestDate = new Date().getFullYear();

const copyrightDiv = document.querySelector(".copyright_date");
copyrightDiv.innerHTML = latestDate;

// //////////////////////////////////////////////////////////// time picker for form script //////////////////////////////////////////
$(document).ready(function () {
  $("input#contact_time").timepicker({
    timeFormat: "h:mm p",
    interval: 60,
    minTime: "10",
    maxTime: "6:00pm",
    startTime: "10:00",
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });
});

// ////////////////////////////////////////////////////////// date picker for the form script //////////////////////////////////////
var picker = new Pikaday({ field: document.getElementById("contact_date") });

////////////////////////////////////////////////// sticky navigation bar scrip //////////////////////////////////////////////////////
const navigation = document.querySelector(".custom_navigation");

const aboutDiv = document.querySelector(".about .about_content p ");
const servicesDiv = document.querySelector(".services");
const pricingDiv = document.querySelector(".pricing");
const infoDiv = document.querySelector(".info");
const testemonialsDiv = document.querySelector(".testemonials");
const teamsDiv = document.querySelector(".teams");
const contactsDiv = document.querySelector(".contacts");
const footer_navigationDiv = document.querySelector(".footer_navigation");
const footerDiv = document.querySelector(".footer");

const aboutObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navigation.classList.add("fixed-navigation");

        if (navMenu.classList.value === "custom_nav_menu show_nav") {
          navMenu.classList.remove("show_nav");
        }
      } else {
        return;
      }
    });
  },
  { rootMargin: "-100px" }
);

aboutObserver.observe(aboutDiv);
aboutObserver.observe(servicesDiv);
aboutObserver.observe(pricingDiv);
aboutObserver.observe(infoDiv);
aboutObserver.observe(testemonialsDiv);
aboutObserver.observe(teamsDiv);
aboutObserver.observe(contactsDiv);
aboutObserver.observe(footer_navigationDiv);
aboutObserver.observe(footerDiv);

const homeDiv = document.querySelector(".home .home_content p");

const homeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (navigation.classList.value === "custom_navigation fixed-navigation") {
        navigation.classList.remove("fixed-navigation");
      }
    } else {
      return;
    }
  });
}, {});

homeObserver.observe(homeDiv);

//////////////////////////////////////////////////////// nav toggle ////////////////////////////////////////////////////////////

let executed = false;

const navMenu = document.querySelector(".custom_nav_menu");
const navMenuItems = document.querySelectorAll(".custom_nav_menu li a");

function navToogle() {
  navMenu.classList.toggle("show_nav");
  if (!executed) {
    navMenuItems.forEach((element) => {
      element.addEventListener("click", () => {
        navMenu.classList.remove("show_nav");
      });
    });
    executed = true;
  }
}
