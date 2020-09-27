# 🧛🏿‍♂️ Dracula Pro - Dark Age Roam Theme

Welcome to the Dracula Pro-inspired color theme for Roam Research, which includes a ton of customizations building off @shodty's  [Dark Age theme](https://github.com/shodty/) + various RoamCult contributions.

![](Dracula%20Pro%20-%20Screenshot.jpg)

Love this theme? Say thanks to [@shodty](https://twitter.com/shodty) via [Paypal](https://paypal.me/RobertLandsburg)

Other acknowledgements: Jack Laing, @linuz90, Hasan Yalcinkaya, Palash Karia, and many others!

# Instructions for Installation

Copy the following code and paste it into a css code block in your [[roam/css]].
Feel free to customize the fonts, colors, etc. and add any other code you like below this as needed.

    @import url('https://abhayprasanna.github.io/better-dark-age.css');

    /* IMPORT FONTS */
    @import url('https://fonts.googleapis.com/css?family=Nunito|Cutive+Mono');

    :root {
      /* FONTS */
      --global-font             : 'Nunito', sans-serif;
      --secondary-font          : 'Cutive Mono', serif;
      /* WIDTH FIXES - default 568px,1032px - increase to increase WIDTH */
      --reduce-padding-right    : 3400px;
      --reduce-padding-left     : 3400px;
      /* COLORS (HT: Jack Laing for Dracula Pro color theme) */
      --page-links              : #9580FF;
      --attributes-color        : #FF9580;
      --external-links          : #8AFF80;
      --links-hover             : #F2F2F2;
      --hashtags                : #FE7FBF;
      --body-text               : #F2F2F2;
      --italics-color           : #92FFFF;
      --bold-color              : #FF9580;
      --highlight-text-color    : #1B1A23;
      --highlighter             : #FEFF80;
      --background              : #1B1A23;
      --sidebar-background      : #2B2640;
      --sidebar-text            : #F2F2F2;
      --page-heading            : #9580FF;
      --daily-heading           : #9580FF;
      --headings                : #F2F2F2;
      --bullets                 : #9580FF;
      --closed-bullets          : #2A2C37;
      --references              : #7C6EAD;
      --block-reference-text    : #FF9580;
      --namespaces              : #81FFEA;
      --all-pages-mentions      : #FF9580;
      --cursor                  : #F2F2F2;
      --icons                   : #7C6EAD;
      --icons-hover             : #81FFEA;
      --filter-icon             : #8AFF80;
      /* FONT SIZES */
      --main-font-size          : 1em;
      --page-head-font-size     : 34px;
      --h1-font-size            : 2em;
      --h2-font-size            : 1.6em;
      --h3-font-size            : 1.2em;
      --sidebar-h1-size         : 26px;
      /* DROPDOWN MENU */
      --dropdown-menu-background: #2B2640;
      --dropdown-menu-highlight : #1B1A23;
      --dropdown-menu-text      : #F2F2F2;
      --dropdown-newpage        : #9580FF;
      /* SEARCH BAR */
      --search-bar-background   : #1B1A23;
      --search-bar-text         : #F2F2F2;
      /* KANBAN CARD COLORS */
      --kanban-main-background  : #1B1A23;
      --kanban-column-background: #2A2C37;
      --kanban-card-background  : #1B1A23;
      --kanban-text-hover       : #81FFEA;
    }
    /* OPTIONAL CUSTOMIZATIONS */

    /* Separators in the sidebar (change position or add more as needed) */
    .starred-pages a:nth-child(2):after {
      content    : '____________________________';
      color      : #394B59;
      font-weight: bold;
    }

    /* Dracula Pro easter egg */
    .bp3-icon-large.bp3-icon-help:before {
      content  : '🧛🏿‍♂️';
      font-size: 25px;
    }

    /* Add emoji in front of external links
    HT: Can Sar */
    .rm-alias-external:before {
      content: '🔗 ';
    }

This works by linking to an outside .css file, actually located [here](https://abhayprasanna.github.io/better-dark-age.css) to handle all the styling, as it keeps the roam/css page much cleaner/faster.

If you do in fact want to manipulate the source code, just [navigate to the source .css file](https://abhayprasanna.github.io/better-dark-age.css) manually, copy it, and paste it all into your roam/css page.

### How to setup your roam/css page:

[Applying custom themes in Roam Research](https://www.youtube.com/watch?v=UY-sAC2eGyI)

Please feel free to reach out to me via Roam Slack (@abhay) or Twitter (@AbhayPrasanna) if you have any questions/suggestions/requests!

Cheers!
