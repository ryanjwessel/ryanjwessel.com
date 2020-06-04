---
title: "The Testing Trophy + The Confidence Pedestal"
date: "2020-06-04T09:30:00-05:00"
---

If you have been reading about test driven development in Javascript, chances are you have come across [Kent C. Dodds](https://kentcdodds.com/), the [Testing Trophy](https://twitter.com/kentcdodds/status/960723172591992832?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E960723172591992832&ref_url=https%3A%2F%2Fkentcdodds.com%2Fblog%2Fwrite-tests), and the [Testing Library](https://testing-library.com/). The Testing Trophy and Testing Library have grown signficantly over the last couple of years. You may be asking yourself, "Self... Why are these things so great?", and today I hope to answer your inner monologue.

The Testing Trophy is a guide as to what the composition of your testing suite might look like. Each layer of the trophy, from static typing to end-to-end testing, requires a different amount of effort. Since end-to-end testing requires more effort to set up and administer, it is not viable to write end-to-end tests for your entire app and completely forego unit and integration tests. But, if you only write unit tests, then your test suite won't give you confidence that larger pieces of functionality are working as expected each time you push new code.

This is not an exact prescription to write 50% integration tests, 30% unit tests, and so on. Instead, it suggests that you (and your team) write tests across these layers in a way that strikes the best possible balance between **confidence** and **level of effort**. For frontend applications, his suggestion is that integration tests strike the best balance between confidence and speed, so you should spend most of your effort on writing those types of tests.

The Testing Library is a family of packages that help you test UI components in a user-centric way. This aligns with its Guiding Principles, ["The more your tests resemble the way your software is used, the more confidence they can give you."](https://testing-library.com/docs/guiding-principles). For React, there is React Testing Library. There are also versions built for Angular, Vue, React Native, and more.

All of them are lightweight packages that provide utility functions that encourage better testing practices. Meaning, the methods it provides to query your rendered output for a component mirror how a user would find an element on a page.

For example, say you have a reset password form with a current password input, two new password inputs, and a submit button. Which is a better method to find the current password field, A) to find the input field based on the CSS ID `#currentPassword`, or B) based on a label that says `Current Password`?

If you answered B, then you are correct!
