document.querySelectorAll(".radio").forEach((label) => {
  // create ripple on pointerdown
  label.addEventListener("pointerdown", (e) => {
    const r = document.createElement("span");
    r.className = "ripple";
    // position at pointer location relative to label
    const rect = label.getBoundingClientRect();
    r.style.left = e.clientX - rect.left + "px";
    r.style.top = e.clientY - rect.top + "px";
    r.style.width = "22px";
    r.style.height = "22px";
    r.style.background =
      "radial-gradient(circle, rgba(124,92,255,0.22) 0%, rgba(0,212,255,0.06) 60%, transparent 100%)";
    label.appendChild(r);
    r.addEventListener("animationend", () => r.remove());
  });

  // support Enter/Space when label has tabindex (for some screen readers / focus styles)
  label.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      // toggle the associated input
      const id = label.getAttribute("for");
      const input = document.getElementById(id);
      if (input) input.checked = true;
      // dispatch change for any listeners
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });
});
