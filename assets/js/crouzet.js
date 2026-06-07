(function () {
  var header = document.getElementById("siteHeader");
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("primaryMenu");
  var form = document.getElementById("quoteForm");

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.classList.toggle("menu-open", isOpen);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var formData = new FormData(form);
      var name = (formData.get("name") || "anh/chị").toString().trim();
      alert("Cảm ơn " + name + ". Crouzet Vietnam đã nhận yêu cầu và sẽ liên hệ lại trong giờ làm việc.");
      form.reset();
    });
  }
})();
