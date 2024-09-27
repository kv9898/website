const DarkEvent = new Event("dark");
const LightEvent = new Event("light");

function updateAppTheme() {
    var bodyClass = window.document.body.classList;
    if (bodyClass.contains('quarto-light')) {
        window.dispatchEvent(LightEvent);
    } else if (bodyClass.contains('quarto-dark')) {
        //Shiny.setInputValue("theme_mode", "light", {priority: "event"});
        //alert("light-parent");
        window.dispatchEvent(DarkEvent);
    }
  }
  
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        updateAppTheme();
      }
    });
  });
  
observer.observe(window.document.body, {
    attributes: true
});

// updateAppTheme();

window.onmessage = function(e) {
  if (e.data == 'TellMeColor') {
    var bodyClass = window.document.body.classList;
    if (bodyClass.contains('quarto-light')) {
        window.dispatchEvent(LightEvent);
    } else if (bodyClass.contains('quarto-dark')) {
        window.dispatchEvent(DarkEvent);
    }
  }
};