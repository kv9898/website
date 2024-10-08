const DarkEvent = new CustomEvent("quarto-color-mode", { detail: { mode: "dark" }});
const LightEvent = new CustomEvent("quarto-color-mode", { detail: { mode: "light" }});

function updateAppTheme() { // dispatch events when theme needs updating
    var bodyClass = window.document.body.classList;
    if (bodyClass.contains('quarto-light')) {
        window.dispatchEvent(LightEvent);
    } else if (bodyClass.contains('quarto-dark')) {
        window.dispatchEvent(DarkEvent);
    }
  }
  
var observer = new MutationObserver(function(mutations) { // listen for theme changes
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        updateAppTheme();
      }
    });
  });
  
observer.observe(window.document.body, { // enable observer
    attributes: true
});

window.onmessage = function(e) { // update theme when receives querry
  if (e.data == 'ShinyColorQuery') {
    updateAppTheme();
  }
};