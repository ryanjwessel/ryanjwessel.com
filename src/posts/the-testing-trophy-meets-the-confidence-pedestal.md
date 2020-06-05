<!-- ---
title: "The Testing Trophy + The Confidence Pedestal"
date: "2020-06-04T09:30:00-05:00"
--- -->

# How To Achieve Confidence With The Testing Trophy

## June 4th, 2020

If you have been reading about test driven development in Javascript, chances
are you have come across [Kent C. Dodds](https://kentcdodds.com/), the [Testing Trophy](https://twitter.com/kentcdodds/status/960723172591992832?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E960723172591992832&ref_url=https%3A%2F%2Fkentcdodds.com%2Fblog%2Fwrite-tests), and the [Testing Library](https://testing-library.com/). The Testing Trophy and Testing Library have grown significantly over the last couple of years. You may be asking yourself, "Self... Why are these things so great?", and today I hope to answer your inner monologue.

The Testing Trophy is a guide as to what the composition of your testing suite might look like. Each type of testing requires a different amount of effort. Since end-to-end tests requires more effort to set up, it is not viable to write them exclusively while omitting unit and integration tests. But, if you only write unit tests, then you won't have confidence that larger pieces of functionality are working each time you push new code.

This is not an exact prescription to write 50% integration tests, 30% unit tests, and so on. Instead, it suggests that you (and your team) write tests in a way that strikes the best possible balance between **confidence** and **level of effort**. For frontend applications, his suggestion is that integration tests strike the best balance between confidence and speed, so you should spend most of your effort on writing those types of tests.

But, **how** do you achieve confidence with your tests?

If the primary goal of testing is to gain confidence in pushing code without breaking functionality, then our tests need to be written so that they are Realistic, Resilient to changes, and provide adequate Coverage of your code (in that order).

This is the missing piece of the Testing Trophy that I have decided to call **The Confidence Pedestal**. This is what your Testing Trophy rests upon, and without it your confidence will topple over.

<p style="text-align:center;margin:20px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="137px"
    height="182px" viewBox="-0.5 -0.5 137 182">
    <defs />
    <g>
      <path d="M 3 50 L 29 0 L 107 0 L 133 50 Z" fill="#ffffff" stroke="#000000" stroke-miterlimit="10"
        transform="rotate(-180,68,25)" pointer-events="all" />
      <rect x="3" y="0" width="130" height="50" fill="none" stroke="none" pointer-events="all" />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
            <div xmlns="http://www.w3.org/1999/xhtml"
              style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 128px; height: 1px; padding-top: 25px; margin-left: 4px;">
              <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                <div
                  style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                  Coverage
                </div>
              </div>
            </div>
          </foreignObject>
          <text x="68" y="29" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">
            Coverage
          </text>
        </switch>
      </g>
      <rect x="28" y="50" width="80" height="80" fill="#ffffff" stroke="#000000" pointer-events="all" />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
            <div xmlns="http://www.w3.org/1999/xhtml"
              style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 78px; height: 1px; padding-top: 90px; margin-left: 29px;">
              <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                <div
                  style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                  Resiliency
                </div>
              </div>
            </div>
          </foreignObject>
          <text x="68" y="94" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">
            Resiliency
          </text>
        </switch>
      </g>
      <path d="M 0.5 180 L 27.5 130 L 108.5 130 L 135.5 180 Z" fill="#ffffff" stroke="#000000" stroke-miterlimit="10"
        pointer-events="all" />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
            <div xmlns="http://www.w3.org/1999/xhtml"
              style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 133px; height: 1px; padding-top: 155px; margin-left: 2px;">
              <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                <div
                  style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                  Realism
                </div>
              </div>
            </div>
          </foreignObject>
          <text x="68" y="159" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">
            Realism
          </text>
        </switch>
      </g>
    </g>
    <switch>
      <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" />
      <a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487"
        target="_blank">
        <text text-anchor="middle" font-size="10px" x="50%" y="100%">
          Viewer does not support full SVG 1.1
        </text>
      </a>
    </switch>
  </svg>
</p>

As you can see, Realism and Resiliency are the ultimate foundation for your tests.

If you use snapshot testing you will gain a lot of coverage quite easily. But, as soon as you make a change, even if it does not break the core functionality of the component, the snapshot test will fail. This is not a resilient test, because in this example it triggered a __false negative__.

<!-- The Testing Library is a family of packages that help you test UI components in a user-centric way. This aligns with its Guiding Principles,

> ["The more your tests resemble the way your software is used, the more confidence they can give you."](https://testing-library.com/docs/guiding-principles)

For React, there is [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). There are also versions built for [Angular](https://testing-library.com/docs/angular-testing-library/intro), [Vue](https://testing-library.com/docs/vue-testing-library/intro), [React Native](https://testing-library.com/docs/native-testing-library/intro), and more.

All of them are lightweight packages that provide utility functions that encourage better testing practices. Meaning, the methods it provides to query your rendered output for a component mirror how a user would find an element on a page. They also have the added benefit of making your tests much easier to read due to the API design.

For example, say you have a reset password form with a current password input, two new password inputs, and a submit button. Which is a better method to find the current password field, A) to find the input field based on the CSS ID `#currentPassword`, or B) based on a label that says `Current Password`?

If you answered B, then you are correct! Let me explain why. -->
