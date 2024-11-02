function updateAppTheme() { // dispatch events when theme needs updating
    var bodyClass = window.document.body.classList;
    var iframe = document.getElementById('shinyapp');
    if (bodyClass.contains('quarto-light')) {
        iframe.contentWindow.postMessage("light-mode", 'https://kv9898.shinyapps.io/switch_challenge/');
    } else if (bodyClass.contains('quarto-dark')) {
        iframe.contentWindow.postMessage("dark-mode", 'https://kv9898.shinyapps.io/switch_challenge/');
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

window.addEventListener('message', function(e) {
  // Check the origin of the sender
  if (e.data === 'ShinyColorQuery') {
    updateAppTheme();
    }
}, false);