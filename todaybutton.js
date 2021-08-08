setTimeout(todaybutton, 400); //wait half a second just in case

function todaybutton() { //creates a new left sidebar log button above Daily Notes
  if (!document.getElementById('todayDiv')) {
    var divOne = document.createElement('div');
    divOne.classList.add('log-button');
    divOne.innerHTML = "TODAY";
    divOne.id = 'todayDiv';
    var spanTwo = document.createElement('span');
    spanTwo.classList.add('bp3-icon', 'bp3-icon-timeline-events', 'icon');
    divOne.prepend(spanTwo);
    var sidebarcontent = document.querySelector("#app > div.roam-body > div.roam-app > div.roam-sidebar-container.noselect > div"),
        sidebartoprow = sidebarcontent.childNodes[0];
    if (sidebarcontent && sidebartoprow) {
      sidebartoprow.parentNode.insertBefore(divOne, sidebartoprow.nextSibling);    
    }
    divOne.onclick = toggletoday; //run the function onclick
  }
}

//Define function to find reference section and scroll it into view
function ScrollToBottom() {
 document.querySelector(".rm-reference-main:not(.rm-query-content)").scrollIntoView();
 console.log('Scrolled to bottom!');
}

function toggletoday() { //creates the URL for today and opens it
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '-' + dd + '-' + yyyy;
  dbname = window.location.href.split('/')[5];
  let roamuri = "https://roamresearch.com/#/app/";
  let roamuritoday = roamuri+ dbname + "/page/" + today;
  window.location.assign(roamuritoday);
  //Set delay to scroll to bottom of daily note
  setTimeout(ScrollToBottom, 300);
}
