document.addEventListener("DOMContentLoaded", function () {
  var gtm_timer,
    gtm_loaded = false;

  if (localStorage.getItem("gtm")) {
    gtm_load();
  } else {
    localStorage.setItem("gtm", 1);
    gtm_timer = setTimeout(gtm_load, 5000);
    document.body.addEventListener("click", gtm_load);
    document.body.addEventListener("mouseenter", gtm_load);
    document.body.addEventListener("touchstart", gtm_load);
  }
  function gtm_load() {
    if (gtm_loaded) {
      return;
    }
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-5MSG8LLS");
    gtm_loaded = true;
    document.body.removeEventListener("click", gtm_load);
    document.body.removeEventListener("mouseenter", gtm_load);
    document.body.removeEventListener("touchstart", gtm_load);
    clearTimeout(gtm_timer);
  }
});
