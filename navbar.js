export function navbar() {
  const navClose = document.getElementById("navi-toggle");
  const navHome = document.getElementById("nav-home");
  const navAbout = document.getElementById("nav-about");
  const navServices = document.getElementById("nav-services");
  const navTeam = document.getElementById("nav-team");
  const navBlogs = document.getElementById("nav-blogs");
  const navMeetings = document.getElementById("nav-meetings");

  const navItems = [
    navHome,
    navAbout,
    navServices,
    navTeam,
    navBlogs,
    navMeetings,
  ];

  for (let i in navItems) {
    navItems[i].addEventListener("click", function () {
      navClose.checked = false;
    });
  }

  const navbar = document.querySelector(".navigation");
  const landing = document.querySelector(".landing");

  const landingOptions = {
    rootMargin: "-80% 0px 0px 0px",
  };

  const landingObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.add("navScrolled");
      } else {
        navbar.classList.remove("navScrolled");
      }
    });
  }, landingOptions);

  landingObserver.observe(landing);
}
