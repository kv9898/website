const DarkEvent = new CustomEvent("quarto-color-mode", { detail: { mode: "dark" }});
const LightEvent = new CustomEvent("quarto-color-mode", { detail: { mode: "light" }});

function updateAppTheme() { // dispatch events when theme needs updating
    var bodyClass = window.document.body.classList;
    const editor = document.querySelector('.shinylive-editor'); // addtional handling of editor
    const buttonSelected = document.querySelector('.editor-files button.selected');; // addtional handling of editor
    if (bodyClass.contains('quarto-light')) {
        window.dispatchEvent(LightEvent);
        editor.style.setProperty('--colors-bg', "#f9fffe");
        buttonSelected.style.color = '#000000';  // Set text to black in light mode
        editor.style.setProperty('--colors-white', "#FFFFFF");
    } else if (bodyClass.contains('quarto-dark')) {
        window.dispatchEvent(DarkEvent);
        editor.style.setProperty('--colors-bg', "#16242f");
        buttonSelected.style.color = '#ffffff';  // Set text to white in dark mode
        editor.style.setProperty('--colors-white', "#16242f");
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