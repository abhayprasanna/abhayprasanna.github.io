# Daily Agenda for Roam using Kanban (v 0.1)

Contributors: @GitMurf
Testing and ideation: David Eaton, @dkapila

Many new note-taking apps have a calendar or agenda view for each day. This is quite helpful, e.g., to "schedule" tasks or events, as well as to organize your work or interstitial journaling for the day against timestamps.

The {{[[kanban]]}} feature in Roam is quite under-leveraged - this is an attempt to use it as the basis for a **Daily Agenda** worfklow.

![](https://github.com/abhayprasanna/abhayprasanna.github.io/blob/master/kanban%20agenda/kanban%20agenda%20screenshot.png?raw=true)

## Workflow and template

It all starts with a simply daily notes template in the format:

- [[roam/templates]]
    - Daily agenda
        - [[Daily agenda]]
            - {{[[kanban]]}}
                - All day
                - 00:00
                - 01:00
                - 02:00
                - 03:00
                - 04:00
                - 05:00
                - 06:00
                - 07:00
                - 08:00
                - 09:00
                - 10:00
                - 11:00
                - 12:00
                - 13:00
                - 14:00
                - 15:00
                - 16:00
                - 17:00
                - 18:00
                - 19:00
                - 20:00
                - 21:00
                - 22:00
                - 23:00
                - [[Need to plan]]


Activating this template in a new Daily Note will create a kanban board with each column representing an hour of your day. The cards (blocks indented directly below each timestamp) represent events, tasks, meetings, etc. You can take notes indented underneath each card as well. You can then drag and drop the cards around as you wish.

But how do we get that cool looking Kanban, you ask?

## CSS

Insert this line up top on your [[roam/css]] page along with any other @ import lines.
```
@import url('https://abhayprasanna.github.io/kanban%20agenda/kanban-agenda.css');
```
This CSS will ONLY impact kanbans nested below the [[Daily agenda]] page link.

It refactors Roam's default kanban view to appear like a Daily agenda. It's been designed to be pinned in your right sidebar every day. In the main page, the kanban will be hidden unless you zoom into the specific block it is in. This helps avoid clutter in your Daily Notes page when you're just trying to plan your day, and avoids having a duplicate view in the main page and the right sidebar.

The first and last kanban columns are reserved for all-day events and "need to plan" unscheduled events / backlog items that need to be processed. Those two will act as stickies at the top and bottom so they are always visible.

Feel free to customize the CSS yourself - I especially recommend adjusting the title of the kanban board to whatever you prefer (though if you want to change the [[Daily agenda]] page to something else you will need to replace it throughout the code). You can also highlight your working hours and change them (default is 8am to 7pm)

Do share any feedback and suggestions!

## JavaScript and Roam42 SmartBlocks

Coming soon - *Imagine being able to send a task to any hour of any day with one SmartBlock!*
