// Scroll-triggered animations utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale"
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  return () => {
    animatedElements.forEach((el) => {
      observer.unobserve(el);
    });
  };
};

// Staggered animation utility
export const staggerAnimation = (elements, delay = 100) => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("animate");
    }, index * delay);
  });
};

// Parallax effect utility
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll(".parallax");

  const handleScroll = () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
