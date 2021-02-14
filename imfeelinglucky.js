setTimeout(randombutton, 400); //wait half a second just in case

function randombutton() { //creates a new left sidebar log button below Daily Notes
  if (!document.getElementById('randomDiv')) {
    var divRandom = document.createElement('div');
    divRandom.classList.add('log-button');
    divRandom.innerHTML = "I'M FEELING LUCKY";
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
  random = window.roamAlphaAPI.q(`[:find [(rand 1 ?blocks)] :where [?e :block/uid ?blocks]]`); //this will return both pages and blocks
//random = window.roamAlphaAPI.q('[:find [(rand 1 ?page-uid)] :where [?e :node/title] [?e :block/uid ?page-uid] ]')[0]; // Thanks to @GitMurf for this one; this will return ONLY pages, NOT blocks - comment out previous line and/or replace with this line if you want it that way
//random = window.roamAlphaAPI.q('[:find [(rand 1 ?block-uid)] :where [?e :block/page] [?e :block/uid ?block-uid] ]')[0]; // Thanks to @GitMurf for this one; this will return ONLY blocks, NOT pages - comment out previous line and/or replace with this line if you want it that way  
  dbname = window.location.href.split('/')[5];
  let roamuri = "https://roamresearch.com/#/app/";
  let roamurirandom = roamuri+ dbname + "/page/" + random[0];
  window.open(roamurirandom,"_self");
}
