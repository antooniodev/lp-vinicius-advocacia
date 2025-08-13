const menuButton = document.querySelector(".container-header-menu-button")
const arrowButton = document.querySelector(".menu-arrow")
const dropdown = document.querySelector(".container-header-dropdown")

menuButton.addEventListener("click", () => {
  dropdown.classList.toggle("show")

  const headerHeight = dropdown.classList.contains("show")
    ? dropdown.offsetHeight
    : 0
  header.style.height = headerHeight + "px"

  arrowButton.classList.add("rotated")
})

document.addEventListener("DOMContentLoaded", function () {
  let aboutUsLink = document.getElementById("about-us-link")
  let aboutMeLink = document.getElementById("about-me-link")
  let areasLink = document.getElementById("areas-link")
  let bookLink = document.getElementById("book-link")
  let contactsLink = document.getElementById("contacts-link")

  aboutUsLink.addEventListener("click", function () {
    document.getElementById("about-us").scrollIntoView({ behavior: "smooth" })
  })

  aboutMeLink.addEventListener("click", function () {
    document.getElementById("about-me").scrollIntoView({ behavior: "smooth" })
  })

  areasLink.addEventListener("click", function () {
    document
      .getElementById("section-areas")
      .scrollIntoView({ behavior: "smooth" })
  })

  bookLink.addEventListener("click", function () {
    document.getElementById("book").scrollIntoView({ behavior: "smooth" })
  })

  contactsLink.addEventListener("click", function () {
    document.getElementById("contacts").scrollIntoView({ behavior: "smooth" })
  })

  const animatedElements = document.querySelectorAll(
    ".animate, .animate-left, .animate-right"
  )
  const observer = new window.IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.15,
    }
  )
  animatedElements.forEach((el) => {
    observer.observe(el)
  })
})
