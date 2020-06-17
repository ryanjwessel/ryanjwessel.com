---
title: 'Building the Perfect Software for GTD'
date: '2020-06-17T09:00:00-05:00'
bannerImgSrc: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
bannerImgAlt:
  'Graph Paper With Line Chart Showing Progress From Sucking To Not Sucking'
---

At the beginning of 2020, I started reading David Allen's Getting Things Done.
The lessons I have distilled from this book have helped me balance the work from
my job, staying in touch with family and friends, and completing side projects.
The website this is published on is evidence of that.

I could dedicate several posts exclusively towards the Getting Things Done
system, and maybe I will. But, not today. Instead, I will outline the
requirements for the perfect GTD application. Today marks the beginning of our
journey of building it together.

Those that know me would say I tend to experiment with software, and I am always
seeking "the ideal setup." In my quest to implement GTD this year, I have
migrated my system between Todoist, Bear, Notion, Calendars 5, Google Calendar,
Trello, and Evernote. They are all good at a few particular things, but I was
not completely satisfied with what I was hoping to accomplish.

So, I have decided that I am going to build the software that satisfies my
needs. Hopefully, this tool will enable other people to implement the GTD system
effectively in their own lives. Also, documenting my progress on this blog will
serve as a guide to the product life cycle, from ideation and iteration to
deploying it in the wild.

Without further adieu, let's go through the requirements I have compiled for the
ideal GTD productivity software.

## Mobile-first

A fundamental tenet of GTD is capturing all of your "open loops" in a trusted
system. If functionality is only available on the desktop version of your
software, it is incapable of serving as your trusted source of truth for all of
the open loops in your life.

Thus, we need to build this software with mobile as our foundational experience.

## Kanban

Humans are bad at multi-tasking. Another tenet of GTD is being aware of all of
your open loops and not doing other things while you focus on one of them. The
Kanban concept of limiting Work-In-Progress aligns with this principle.

Also, since I work in the field of software, I am used to the Kanban workflow.
Keeping my productivity system aligned with my professional workflow will limit
any cognitive overhead when switching between them.

Implementing Kanban means our application would need to support:

- Board(s)
- List(s) on each Board
- Card(s) on each List
- Each List can have a defined Card limit

## Context-Driven

Defining priorities for your actions is a discouraged practice within GTD, as is
defining arbitrary due dates. Instead, you should review your actions based on
your current context.

Are you in a highly productive mood, or are you feeling lethargic? Some tasks
require deep focus, while others require limited attention from you. While
you're not feeling 100%, it is better to knock out some low-energy tasks than
trying to power through a mentally-intensive endeavor.

Do you have a laptop with an internet connection, or are you on-the-go? You
cannot do the tasks that require a computer if you do not have one. But, if you
have some time to make some calls, it would be helpful to view all of your
planned calls in one place.

To make context-based decisions on our actions, we will need to add a tagging
system to our application.

## Vertical Alignment

The intent of GTD is not just mindlessly marking items as complete. Instead, it
should help you align your work with your Purpose, Vision, and Goals.

Actions could be a part of a Project. A Project should align with an Area of
Focus in your life. Your Goals should align with your Vision of where you want
to be in five years.

Therefore, our application will need to support parent-child relationships
between cards.

## Reviewable

The Weekly Review is another fundamental pillar of the GTD system. Viewing your
weekly completed actions at-a-glance will make it easier to "Get Current, Get
Clear, and Get Creative."

The user should be able to see their completed Projects and Actions in one place
before archiving them. I like the concept of "weekly velocity" to see your
ability to complete Actions and Projects improve over time.

This requirement can get complicated, especially when you consider that it
should also support higher-level reviews that take place less frequently. An
example of this would be a Monthly or Quarterly Review. For right now, I will
leave this section as-is, and we can iterate upon it later.

Nice! We successfully outlined some definite requirements for what this product
should do!

![Colbert Success](https://media2.giphy.com/media/zaqclXyLz3Uoo/giphy.gif?cid=ecf05e4731278b36dfe42d52b1cacd50c3c117fcc1ea58f7&rid=giphy.gif)

- Mobile-first
- Kanban
- Context-Driven
- Vertical Alignment
- Reviewable

Other software matches three out of these five criteria at best. Our end goal is
to build a solution that focuses on these principles at its core.

This journey will help us learn how to take a product from an idea to deployed
and in-use. It will help us implement GTD more effectively, as it will be the
system that drives this project forward. And it will help us learn how to build
it with some exciting new technologies.

Stay tuned for the next update on this!
