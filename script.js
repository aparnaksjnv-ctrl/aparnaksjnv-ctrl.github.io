const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-panel, .profile-card, .section-heading, .project-card, .skill-card, .service-card, .skill-graph-panel, .timeline-card, .education-card, .cert-card, .contact-section"
);

revealItems.forEach((item) => {
  item.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

revealItems.forEach((item) => observer.observe(item));
