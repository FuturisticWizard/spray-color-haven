
export const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((element) => {
    observer.observe(element);
  });
};
