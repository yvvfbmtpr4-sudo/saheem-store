
(function () {
  "use strict";

  function addSaheemShippingBar() {
    if (!document.body) return;

    var oldBar = document.getElementById("saheem-shipping-bar");
    if (oldBar) return;

    var bar = document.createElement("div");
    bar.id = "saheem-shipping-bar";

    var text = document.createElement("div");
    text.textContent = "الشحن مجاني للطلبات بقيمة 300 ريال فأكثر";

    bar.appendChild(text);

    bar.style.cssText = [
      "width:100%",
      "box-sizing:border-box",
      "background:#533c29",
      "color:#F5EBE1",
      "overflow:hidden",
      "padding:10px 0",
      "position:relative",
      "z-index:9999",
      "direction:rtl"
    ].join(";");

    text.style.cssText = [
      "display:inline-block",
      "white-space:nowrap",
      "padding-right:100%",
      "font-size:15px",
      "font-weight:600",
      "animation:saheemShippingMove 14s linear infinite"
    ].join(";");

    if (!document.getElementById("saheem-shipping-style")) {
      var style = document.createElement("style");
      style.id = "saheem-shipping-style";
      style.textContent =
        "@keyframes saheemShippingMove {" +
        "0% { transform: translateX(-100%); }" +
        "100% { transform: translateX(100vw); }" +
        "}";

      document.head.appendChild(style);
    }

    document.body.insertBefore(bar, document.body.firstChild);
  }

  function startSaheemShippingBar() {
    addSaheemShippingBar();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      startSaheemShippingBar
    );
  } else {
    startSaheemShippingBar();
  }
})();
