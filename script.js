const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


// =========================
// MOBILE MENU
// =========================

menuBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});


// =========================
// SCROLL ANIMATIONS
// =========================

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      observer.unobserve(entry.target);
    }

  });

}, {
  threshold: 0.08
});


document
  .querySelectorAll(".skill-card, .project, .process-step, .quote-box")
  .forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(15px)";
    element.style.transition =
      "opacity .55s ease, transform .55s ease";

    observer.observe(element);

  });


// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form");
const formSuccess = document.querySelector("#formSuccess");
const formError = document.querySelector("#formError");
const sendAnother = document.querySelector("#sendAnother");


if (contactForm) {

  contactForm.addEventListener("submit", async (event) => {

    // Prevent Formspree from redirecting away
    event.preventDefault();


    const submitButton =
      contactForm.querySelector("button[type='submit']");


    const originalButtonText =
      submitButton.textContent;


    // Hide previous messages
    formSuccess.style.display = "none";
    formError.style.display = "none";


    // Loading state
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;


    const formData = new FormData(contactForm);


    try {

      const response = await fetch(
        contactForm.action,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );


      if (response.ok) {

        // Clear form
        contactForm.reset();


        // Hide form
        contactForm.classList.add("is-hidden");


        // Show success message
        formSuccess.style.display = "block";


      } else {

        throw new Error("Form submission failed");

      }


    } catch (error) {

      // Show error message
      formError.style.display = "block";


      // Restore button
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;

    }

  });

}


// =========================
// SEND ANOTHER MESSAGE
// =========================

sendAnother?.addEventListener("click", () => {

  // Hide messages
  formSuccess.style.display = "none";
  formError.style.display = "none";


  // Show form again
  contactForm.classList.remove("is-hidden");


  // Reset button
  const submitButton =
    contactForm.querySelector("button[type='submit']");

  submitButton.textContent = "Send message ↗";
  submitButton.disabled = false;


  // Scroll back to form
  contactForm.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});