console.log('panels.js loaded');
const panels = document.querySelectorAll('.panel')
const panelsArray = Array.from(panels)

panelsArray.forEach((panel) => {
  panel.addEventListener('click', (event) => {
    let hiddenTextElements = panel.querySelectorAll('p.hidden')

    // Making Panels bigger by adding the toggling open/closed classes
    panelsArray.forEach((otherPanel) => {
      if (otherPanel !== event.currentTarget) {
        otherPanel.classList.remove('open')
      } else {
        event.currentTarget.classList.toggle('open');
      }
    });

    // Turning text back on
    hiddenTextElements.forEach(elem => elem.classList.toggle('hidden'));
  });
});
