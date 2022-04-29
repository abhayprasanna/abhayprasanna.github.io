/* ======= AUTOTAG MODE  v0.3.2========
 * Pre-requisites -
   * For NLP dates: Roam42 https://roamjs.com/extensions/roam42
   * For PageSynonyms: Page Synonyms https://roamjs.com/extensions/page-synonyms
 * Hat-tips: Azlen for arrive.js idea; Tyler Wince for Unlink Finder; Chris TftHacker for Roam42; Murf for demystifying JS; David Vargas for everything!
 */
 
/* ======= OPTIONS ======= */

let caseinsensitive = !0, // change to 0 to only tag references with exact case, otherwise it will alias, e.g., [book]([[Book]])
    processdates = !0, // change to 0 to not process roam42 NLP dates
    processalias = !0, // change to 0 to not process Page Synonyms JS aliases
    minpagelength = 2; // change to whatever the minimum page length should be to be tagged

// Exclusions: Create an [[autotag-exclude]] page. Add pages you want to exclude, comma-spaced without [[ ]], to the first block on that page
// Change line 119 to change the keyboard shortcut to toggle on and off (default is alt+i)

/* ======= ARRIVE.JS v2.4.1 ======== 
 * https://github.com/uzairfarooq/arrive
 * MIT licensed
 * Copyright (c) 2014-2017 Uzair Farooq
 */

var Arrive=function(e,t,n){"use strict";function r(e,t,n){l.addMethod(t,n,e.unbindEvent),l.addMethod(t,n,e.unbindEventWithSelectorOrCallback),l.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function i(e){e.arrive=f.bindEvent,r(f,e,"unbindArrive"),e.leave=d.bindEvent,r(d,e,"unbindLeave")}if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var o=0,l=function(){var t=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector;return{matchesSelector:function(e,n){return e instanceof HTMLElement&&t.call(e,n)},addMethod:function(e,t,r){var i=e[t];e[t]=function(){return r.length==arguments.length?r.apply(this,arguments):"function"==typeof i?i.apply(this,arguments):n}},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback)},checkChildNodesRecursively:function(e,t,n,r){for(var i,o=0;i=e[o];o++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&l.checkChildNodesRecursively(i.childNodes,t,n,r)},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return n===t||"number"==typeof t.length&&t!==e||(t=[t]),t}}}(),c=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null};return e.prototype.addEvent=function(e,t,n,r){var i={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(i),this._eventsBucket.push(i),i},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null)}},e.prototype.beforeAdding=function(e){this._beforeAdding=e},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e},e}(),a=function(t,r){var i=new c,o=this,a={fireOnAttributesModification:!1};return i.beforeAdding(function(n){var i,l=n.target;(l===e.document||l===e)&&(l=document.getElementsByTagName("html")[0]),i=new MutationObserver(function(e){r.call(this,e,n)});var c=t(n.options);i.observe(l,c),n.observer=i,n.me=o}),i.beforeRemoving(function(e){e.observer.disconnect()}),this.bindEvent=function(e,t,n){t=l.mergeArrays(a,t);for(var r=l.toElementsArray(this),o=0;o<r.length;o++)i.addEvent(r[o],e,t,n)},this.unbindEvent=function(){var e=l.toElementsArray(this);i.removeEvent(function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1})},this.unbindEventWithSelectorOrCallback=function(e){var t,r=l.toElementsArray(this),o=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===o)return!0;return!1}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return!0;return!1},i.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(e,t){var r=l.toElementsArray(this);i.removeEvent(function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return!0;return!1})},this},s=function(){function e(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t}function t(e,t){e.forEach(function(e){var n=e.addedNodes,i=e.target,o=[];null!==n&&n.length>0?l.checkChildNodesRecursively(n,t,r,o):"attributes"===e.type&&r(i,t,o)&&o.push({callback:t.callback,elem:i}),l.callCallbacks(o,t)})}function r(e,t){return l.matchesSelector(e,t.selector)&&(e._id===n&&(e._id=o++),-1==t.firedElems.indexOf(e._id))?(t.firedElems.push(e._id),!0):!1}var i={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};f=new a(e,t);var c=f.bindEvent;return f.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t);var o=l.toElementsArray(this);if(t.existing){for(var a=[],s=0;s<o.length;s++)for(var u=o[s].querySelectorAll(e),f=0;f<u.length;f++)a.push({callback:r,elem:u[f]});if(t.onceOnly&&a.length)return r.call(a[0].elem,a[0].elem);setTimeout(l.callCallbacks,1,a)}c.call(this,e,t,r)},f},u=function(){function e(){var e={childList:!0,subtree:!0};return e}function t(e,t){e.forEach(function(e){var n=e.removedNodes,i=[];null!==n&&n.length>0&&l.checkChildNodesRecursively(n,t,r,i),l.callCallbacks(i,t)})}function r(e,t){return l.matchesSelector(e,t.selector)}var i={};d=new a(e,t);var o=d.bindEvent;return d.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t),o.call(this,e,t,r)},d},f=new s,d=new u;t&&i(t.fn),i(HTMLElement.prototype),i(NodeList.prototype),i(HTMLCollection.prototype),i(HTMLDocument.prototype),i(Window.prototype);var h={};return r(f,h,"unbindAllArrive"),r(d,h,"unbindAllLeave"),h}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);

/* ======= CODE ========  */

let blockUid = "initial",
  attoggle = !0,
  blockText = "initial";
function autotag() {
  (attoggle = !attoggle)
    ? ((blockUid = "initial"),
      document
        .getElementById("autotag-icon")
        .classList.replace("bp3-icon-eye-on", "bp3-icon-eye-off"))
    : document
        .getElementById("autotag-icon")
        .classList.replace("bp3-icon-eye-off", "bp3-icon-eye-on");
}
function getAllExcludes() {
  return window.roamAlphaAPI
    .q(
      '[ :find (pull ?e [* {:block/children [*]}]) :where [?e :node/title "autotag-exclude"]]'
    )[0][0]
    .children[0].string.split(",")
    .map((e) => e.trim());
}
function getAllPages() {
  return window.roamAlphaAPI
    .q("[:find ?t :where [?e :node/title ?t] ]")
    .map((e) => e[0])
    .sort(function (e, t) {
      return t.length - e.length;
    });
}
function linkReferences(e, t) {
  let o = getAllPages(), n = [],
    a = window.roamAlphaAPI
      .q(
        "[:find (pull ?t [*]) :in $ ?b :where [?e :block/uid ?b] [?e :block/refs ?t] ]",
        t
      )
      .map((e) => e[0].title);
  for (
    0 !==
      window.roamAlphaAPI.q(
        '[:find (pull ?e [*]) :where [?e :node/title "autotag-exclude"] ]'
      ).length && (n = getAllExcludes()),
      l = 0;
    l < o.length;
    l++
  )
    if (
      !(o[l].length < minpagelength) &&
      !n.includes(o[l]) &&
      !a.includes(o[l]) &&
      e.toLowerCase().includes(o[l].toLowerCase())
    ) {
      let t = 0;
      (e = e.replace(
        new RegExp(
          "\\[[^\\][]*](?:\\([^()]*\\))?|(?:\\[.*?\\])|\\{[^{}]*}|\\[\\[[^\\[\\s]*|(?!\\B\\w)(" +
            o[l].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
            ")(?!\\w)",
          "g"
        ),
        (e, n) => (void 0 === n || t ? e : ((t = !0), "[[" + n + "]]"))
      )),
        1 == caseinsensitive &&
          (e = e.replace(
            new RegExp(
              "\\[[^\\][]*](?:\\([^()]*\\))?|(?:\\[.*?\\])||\\{[^{}]*}|\\[\\[[^\\[\\s]*|(?!\\B\\w)(" +
                o[l].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
                ")(?!\\w)",
              "gi"
            ),
            (e, n) =>
              void 0 === n || t
                ? e
                : ((t = !0), "[" + n + "]([[" + o[l] + "]])")
          ));
    }
  return e;
}
function NLPdates(e) {
  return "object" == typeof roam42 && 1 == processdates
    ? roam42.dateProcessing.parseTextForDates(e)
    : e;
}
function blockUpdate(e, t) {
  window.roamAlphaAPI.updateBlock({ block: { uid: e, string: t } });
}
function blockAlias(e) {
  if (1 != processalias) return e;
  window.roamjs.extension.pageSynonyms.aliasBlock({ blockUid: e });
}
(window.onkeydown = function (e) {
  if ((e = e || event).altKey && 73 === e.keyCode) {
    if ((attoggle = !attoggle))
      (blockUid = "initial"),
        document
          .getElementById("autotag-icon")
          .classList.replace("bp3-icon-eye-on", "bp3-icon-eye-off");
    else {
      let e = window.roamAlphaAPI.ui.getFocusedBlock();
      null !== e && (blockUid = e["block-uid"]),
        document
          .getElementById("autotag-icon")
          .classList.replace("bp3-icon-eye-off", "bp3-icon-eye-on");
    }
  }
}),
  document.leave("textarea.rm-block-input", function () {
    if (!attoggle) {
      (blockText = NLPdates(
        (blockText = linkReferences(
          (blockText = window.roamAlphaAPI.q(
            " [:find ?s    :in $ ?b   :where [?e :block/uid ?b] [?e :block/string ?s]   ]",
            blockUid
          )[0][0]),
          blockUid
        ))
      )),
        blockUpdate(blockUid, blockText);
      let e = blockUid;
      setTimeout(function () {
        blockAlias(e);
      }, 100);
    }
  }),
  document.arrive("textarea.rm-block-input", function () {
    attoggle ||
      (blockUid = window.roamAlphaAPI.ui.getFocusedBlock()["block-uid"]);
  });
var nameToUse = "autotag",
  bpIconName = "eye-off",
  checkForButton = document.getElementById(nameToUse + "-icon");
if (!checkForButton) {
  var mainButton = document.createElement("span");
  (mainButton.id = nameToUse + "-button"),
    mainButton.classList.add("bp3-popover-wrapper");
  var spanTwo = document.createElement("span");
  spanTwo.classList.add("bp3-popover-target"), mainButton.appendChild(spanTwo);
  var mainIcon = document.createElement("span");
  (mainIcon.id = nameToUse + "-icon"),
    mainIcon.classList.add(
      "bp3-icon-" + bpIconName,
      "bp3-button",
      "bp3-minimal",
      "bp3-small"
    ),
    spanTwo.appendChild(mainIcon);
  var roamTopbar = document.getElementsByClassName("rm-topbar"),
    nextIconButton = roamTopbar[0].lastElementChild,
    flexDiv = document.createElement("div");
  (flexDiv.id = nameToUse + "-flex-space"),
    (flexDiv.className = "rm-topbar__spacer-sm"),
    nextIconButton.insertAdjacentElement("afterend", mainButton),
    mainButton.insertAdjacentElement("afterend", flexDiv),
    mainButton.addEventListener("click", autotag);
}
