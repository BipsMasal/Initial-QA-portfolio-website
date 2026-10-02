```javascript
// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


menuBtn?.addEventListener("click", () => {

  const isOpen =
    navLinks.classList.toggle("open");

  menuBtn.setAttribute(
    "aria-expanded",
    isOpen
  );

});


// Close mobile menu after clicking a link

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


// =========================
// SCROLL ANIMATIONS
// =========================

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.08
    }
  );


document
  .querySelectorAll(
    ".skill-card, .project, .process-step, .quote-box"
  )
  .forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(15px)";

    element.style.transition =
      "opacity .55s ease, transform .55s ease";

    observer.observe(element);

  });


// =========================
// CONTACT FORM
// =========================

const contactForm =
  document.querySelector(".contact-form");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function () {

      const button =
        contactForm.querySelector(
          "button[type='submit']"
        );

      if (button) {

        button.textContent =
          "Sending...";

        button.disabled = true;

      }

    }
  );

}
```
