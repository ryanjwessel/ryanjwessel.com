# Ryan Wessel's Personal Portfolio Site

This repository contains the code for my personal portfolio site hosted at [ryanwessel.com](https://ryanwessel.com). I built this project based on my [react-webpack-babel-scaffolding](https://github.com/rynjwssl/react-webpack-babel-scaffolding) repository.

## Project Structure

At the top-level of the project I have my config files for ESLint, Babel, Webpack (dev and production versions) and the package.json file. The root of the application is found at **src/index.js**. This is where the React app is instantiated, and where the Router and Redux store are included.

The Redux code can be found in the **actions/**, **reducers/**, and **store/** directories. The logic for this does not deviate very far from the [Advanced Walkthrough](https://redux.js.org/advanced) found in the Redux documentation, but I altered it to work with the portfolio data I am reading from the Firebase database. As I continue to add to this I might separate the actions and reducers into separate files based on how the data for this site evolves.

The **components/** directory contains, you guessed it, components. These aren't overly complicated. The **Portfolio** component is probably the most complex example. It contains a container and presentational component along with some lifecycle methods and dispatched Redux actions.

The **styles/** directory contains [Normalize.css](https://github.com/necolas/normalize.css), [Flexbox Grid](http://flexboxgrid.com/), and some top-level variables and styles used throughout the project.

## Technologies Used

First and foremost, I used React as my view library and Redux for my state management. I did my best to follow the best practices set forth by Dan Abramov from the [Redux documentation](https://redux.js.org/) and his courses available on [egghead.io](https://egghead.io): [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) and [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux).

Next, I used [Firebase](https://firebase.google.com/) because: 1) it is a great (and *FREE*!) service for including a Realtime Database, 2) I wanted to showcase my portfolio work without hardcoding things, and 3) I want to become a full-stack developer, so I saw this as a good entry-point to gain some experience with database management and user authentication.

Another great tool that I used is [ESLint](https://eslint.org/). This is great because it keeps me honest with my coding, and including packages such as [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) ensure that I am adhering to general best practices when it comes to coding for JSX and React.

[Babel](https://babeljs.io/) is a fantastic add because it allows me to leverage some of the great features that are available in ES6/ES2015 and beyond such as arrow functions, and rest parameters/spread operators while still supporting legacy browsers.

[Webpack](https://webpack.js.org/) is something that really confused me when I was first trying to develop for React. I saw all of these tutorials for it, but I still didn't quite understand what it actually did and why I would need it. Nowadays the documentation is a lot better, but essentially it looks at what dependencies are needed throughout your entire project (starting from the top level) and bundles all of it into one Javascript file. You can do a lot more with Webpack so that you have development/production versions, separating your CSS and Javascript, and much more, but I'm not going to explain all of that here. :)

Lastly, I used [SCSS](https://sass-lang.com/) for my styles. This may be a little old-school, but I am still working on learning styled-components and planning on improving this in the future.

## Thought Process on UI Design
My thought process behind the design for this site was that I didn't want it to be another "traditional hamburger-menu at the top of the page on mobile and a fixed navigation bar at the top of the page"-type portfolio site.

First of all, I think the hamburger menu on mobile at the top-left of the screen is counter-intuitive. It is the farthest point for your thumb to reach on a mobile device for a right-handed user. Also, the general smartphone user is accustomed to a navigation bar that is fixed to the bottom of their screen.

I looked to the Spotify mobile and desktop applications as inspiration for the dark color palette and as a general layout for each device view. I drew wireframes for each page while considering how to best utilize reusable components throughout each page on the site. I also drew some inspiration from [Justin Mare's](http://justinmares.com) personal site for the minimalist approach to the content on the site.

My thoughts behind putting the navigation menu on the right-hand side for anything larger than a tablet was that most of my users would come from countries where they traditionally read content from left-to-right. This way, their attention is immediately focused on my content instead of the different pages that are available on the site.

## Future Additions

I plan on continuing to leverage Firebase as I expand some of the functionality on this site. I'd like to include an admin dashboard so that I can write to the database to add new technologies, projects, and eventually blog posts that would appear on the home page. This will require adding user authentication, so I am excited about that.

Also, I am going to add Google Analytics so that I can monitor how much traffic I am getting (and the sources of traffic), and so I can stay up-to-date on GA.