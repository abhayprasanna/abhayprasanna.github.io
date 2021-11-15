setTimeout(randombutton, 400); //wait half a second just in case

function randombutton() { //creates a new left sidebar log button below Daily Notes
  if (!document.getElementById('randomDiv')) {
    var divRandom = document.createElement('div');
    divRandom.classList.add('log-button');
    divRandom.innerHTML = "I'm Feeling Lucky";
    divRandom.id = 'randomDiv';
    var spanRandom = document.createElement('span');
    spanRandom.classList.add('bp3-icon', 'bp3-icon-random', 'icon');
    divRandom.prepend(spanRandom);
    var sidebarcontent = document.querySelector("#app > div.roam-body > div.roam-app > div.roam-sidebar-container.noselect > div"),
        sidebartoprow = sidebarcontent.childNodes[1];
    if (sidebarcontent && sidebartoprow) {
      sidebartoprow.parentNode.insertBefore(divRandom, sidebartoprow.nextSibling);    
    }
    divRandom.onclick = togglerandom; //run the function onclick
  }
}

function togglerandom() { //creates the URL for random page or block and opens it
  random = window.roamAlphaAPI.q('[:find [(rand 1 ?block-uid)] :where [?e :block/page] [?e :block/uid ?block-uid] ]')[0];
  window.roamAlphaAPI.ui.mainWindow
    .openBlock({block:
		{uid: random[0]}});
}
