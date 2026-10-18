
(function () {
  function addSaheemShippingBar() {
    if (document.getElementById("saheem-shipping-bar")) return;

    var bar = document.createElement("div");
    bar.id = "saheem-shipping-bar";
    bar.textContent = "الشحن مجاني للطلبات بقيمة 300 ريال فأكثر";

    bar.style.cssText = [
      "width:100%",
      "box-sizing:border-box",
      "background:#533c29",
      "color:#F5EBE1",
      "text-align:center",
      "padding:10px 8px",
      "font-size:14px",
      "font-weight:600",
      "overflow:hidden",
      "z-index:9999"
    ].join(";");

    document.body.insertBefore(bar, document.body.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addSaheemShippingBar);
  } else {
    addSaheemShippingBar();
  }
})();
