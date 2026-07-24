const categoryCountMap = {
  "飲食・接客": "#count-food",
  "美容・理容": "#count-beauty",
  "事務・オフィス": "#count-office",
  "製造・工場": "#count-factory",
  "介護・福祉": "#count-care",
  "配送・物流": "#count-delivery"
};

Object.entries(categoryCountMap).forEach(([category, selector]) => {
  const node = document.querySelector(selector);
  if (node) node.textContent = `${jobs.filter(job => job.category === category).length}件`;
});

document.querySelector("#categoryCards")?.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  const category = button.dataset.category;
  state.category = category;
  document.querySelector("#categoryFilter").value = category;
  document.querySelectorAll(".category-card").forEach(card => {
    card.classList.toggle("active", card.dataset.category === category);
  });
  renderJobs();
  document.querySelector("#jobs").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#resetFilters")?.addEventListener("click", () => {
  document.querySelectorAll(".category-card").forEach(card => card.classList.remove("active"));
});

document.querySelector("#categoryFilter")?.addEventListener("change", event => {
  document.querySelectorAll(".category-card").forEach(card => {
    card.classList.toggle("active", card.dataset.category === event.target.value);
  });
});
