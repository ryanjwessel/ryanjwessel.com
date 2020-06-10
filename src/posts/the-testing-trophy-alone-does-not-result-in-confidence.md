---
title: 'The Confidence Pedestal + The Testing Trophy'
date: '2020-06-06T09:30:00-05:00'
githubSample: 'https://github.com/ryanjwessel/confidence-pedestal-reset-password-example'
codesandboxSample: 'https://codesandbox.io/s/beautiful-dubinsky-rwi7s?file=/src/ResetPassword.js'
bannerImgSrc: 'https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
bannerImgAlt: 'Ancient Greek Building with Columns'
---

If you have been reading about test driven development in Javascript, chances
are you have come across [Kent C. Dodds](https://kentcdodds.com/), the
[Testing Trophy](https://twitter.com/kentcdodds/status/960723172591992832?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E960723172591992832&ref_url=https%3A%2F%2Fkentcdodds.com%2Fblog%2Fwrite-tests),
and the [Testing Library](https://testing-library.com/). The Testing Trophy and
Testing Library have grown significantly over the last couple of years.

You may be asking yourself, _"Self... Why are these things so great?"_. Today I
hope to answer your inner monologue.

The Testing Trophy is a guide as to what the composition of your testing suite
might look like. Each type of testing requires a different amount of effort.
Since end-to-end tests requires more effort to set up, it is not viable to write
them exclusively while omitting unit and integration tests. But, if you only
write unit tests, then you won't have confidence that larger pieces of
functionality are working each time you push new code.

This is not an exact prescription to write 50% integration tests, 30% unit
tests, and so on. Instead, it suggests that you (and your team) write tests in a
way that strikes the best possible balance between **confidence** and **level of
effort**. For frontend applications, his suggestion is that integration tests
strike the best balance between confidence and speed, so you should spend most
of your effort on writing those types of tests.

But, **how** do you achieve confidence with your tests?

If the primary goal of testing is to gain confidence in pushing code without
breaking functionality, then our tests need to be written to satisfy the
following conditions:

- They are Realistic (representative of how a user would interact with a
  component)
- They are Resilient to changes (avoiding false positives and false negatives)
- They provide adequate Coverage of your code

And yes, the order here matters!

This is the missing piece for the Testing Trophy that I have decided to call
**The Confidence Pedestal**.

![Confidence Pedestal Diagram](../diagrams/confidence-pedestal.drawio.svg)

This is the foundation of your Testing Trophy, and without it your testing suite
will have a shaky foundation. Realism and Resiliency are the ultimate foundation
for your tests. Having adequate code Coverage is good, but without those two as
your base you will end up expending a lot of effort without a solid return on
investment.

If you use snapshot testing you will gain a lot of Coverage quite easily. But,
as soon as you make a change, even if it does not break the core functionality
of the component, the snapshot test will fail. This is not a Resilient test,
because in this example it triggered a _false negative_.

Conversely, if you made a breaking change to an event handler so that the user
was unable to enter text into an input field, the snapshot test would not fail.
This is a _false positive_, and it further undermines confidence in your tests.

In addition to not being Resilient, these tests are not Realistic in that they
don't represent how a user would actually use your component.

This is what The Confidence Pedestal would look like when applied to snapshot
testing.

![Confidence Pedestal Snapshot Diagram](../diagrams/confidence-pedestal-snapshot.drawio.svg)

The Realism and Resiliency layers are pencil-thin, and your Coverage layer is
deceivingly wide. It only gives you the illusion of Confidence. When you have to
overwrite multiple thousand-line snapshot files for a seemingly minor code
change, will you actually review them all? The answer, in my experience, is
overwhelmingly no.

Allow me to demonstrate the fragility of snapshot testing with a simple
`ResetPassword` component.

```jsx
// ResetPassword.js
import React from 'react';

const initialState = {
  currentPassword: '',
  newPassword: '',
  retypePassword: '',
  isSubmitted: false,
  isValid: false,
};

const validatePasswords = (currentPassword, newPassword, retypePassword) => {
  return (
    currentPassword.length > 0 &&
    newPassword.length > 0 &&
    retypePassword.length > 0 &&
    newPassword === retypePassword
  );
};

const ResetPassword = () => {
  const [formState, setFormState] = React.useState(initialState);
  const {
    currentPassword,
    newPassword,
    retypePassword,
    isSubmitted,
    isValid,
  } = formState;

  // Validate the password fields anytime the input fields are updated.
  React.useEffect(() => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      isValid: validatePasswords(currentPassword, newPassword, retypePassword),
    }));
  }, [currentPassword, newPassword, retypePassword]);

  const handleChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setFormState({
      ...formState,
      isSubmitted: true,
    });
  };

  return (
    <>
      <div>
        <label htmlFor="currentPassword">Current Password</label>
        <input
          type="password"
          name="currentPassword"
          value={currentPassword}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="retypePassword">Retype Password</label>
        <input
          type="password"
          name="retypePassword"
          value={retypePassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={!isValid} onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default ResetPassword;
```

There are three input fields, and a submit button. As a user, we would expect to
be able to enter text into these three input fields, and then we can submit the
form once we have text in all three fields, plus the two new password fields are
matching. This is overly simplified for the sake of an easy-to-follow example.

If we were to write a snapshot test, it would be as easy as this:

```js
// ResetPassword.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ResetPassword from './ResetPassword';

describe('ResetPassword', () => {
  it('should match the snapshot', () => {
    const { container } = render(<ResetPassword />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

Our generated snapshot file looks like this:

```js
exports['ResetPassword should match the snapshot 1'] = `
<div>
  <label
    for="currentPassword"
    id="currentPasswordLabel"
  >
    Current Password
  </label>
  <input
    aria-labelledby="currentPasswordLabel"
    name="currentPassword"
    type="password"
    value=""
  />
</div>
`;
```

Triggering a _false negative_ is simple. Either of these changes will cause your
snapshot test to fail:

- Providing styles to an element

```html
<div style={{ backgroundColor: '#ccc'}}>
```

- Or, adding to the rendered output

```jsx
{
  isValid ? <p>✅ Passwords match!</p> : <p>🛑 Form is invalid.</p>;
}
```

Both of these changes did not break the behavior of this component, so the fact
that the test failed does not give us confidence in our test.

For style changes, there is a place for visual regression testing, but it should
not be in your unit and integration tests. Unless, you are making an assertion
that a specific element is rendered or not depending on received props and/or
actions from the user.

To trigger a _false positive_, try changing all uses of `currentPassword` to
`oldPassword`, but don't update the `name` property of the `<input>` element.
This would cause the state to be updated incorrectly, so the user would be
incapable of typing anything into the `oldPassword` field.

Here is what our test output looks like with that change:

```shell
FAIL src/ResetPassword.test.js
  ResetPassword
    ✓ should match the snapshot (31ms)
```

Hopefully, these examples have helped you understand the shortcomings of
snapshot testing. But, I don't want to leave you only with what **not** to do.

Let's go through the same example again, but this time we'll write our tests so
that they are Realistic and Resilient.

You may have noticed the usage of `@testing-library/react` earlier. It is
capable of creating snapshot tests, but it is not intended to be used that way.

Instead, it provides a set of utilities that closely resemble how a user would
interact with a component. The API is designed in a way that encourages
test-writing that adheres to The Confidence Pedestal principles.

We will be using the `getByLabelText` and `getByRole` queries to find the
components we need to test in the rendered output.

Let's start by thinking about some assertions we can make about the expected
behavior of this component.

- The submit button would be disabled at first since nothing is entered yet.
- Each input contains the text we entered as a value after typing in it.
- The button becomes enabled only once each field has a value, and the new and
  retyped passwords are matching.
- As an added bonus, we could verify that the button becomes disabled when the
  retyped password no longer matches.

Here is an example of what these assertions would look like:

```jsx
// ResetPassword.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ResetPassword from './ResetPassword';

describe('ResetPassword', () => {
  const mockCurrentPassword = 'oldPassword9';
  const mockNewPassword = 'newPassword10@';
  const mockNonMatchingNewPassword = 'newPassword11&';

  it('the submit button should only be enabled when the form is valid', () => {
    render(<ResetPassword />);

    const currentPassword = screen.getByLabelText('Current Password');
    const newPassword = screen.getByLabelText('New Password');
    const retypePassword = screen.getByLabelText('Retype Password');
    const submitButton = screen.getByRole('button');

    expect(submitButton).toBeDisabled();

    fireEvent.change(currentPassword, {
      target: { value: mockCurrentPassword },
    });
    expect(currentPassword.value).toEqual(mockCurrentPassword);

    fireEvent.change(newPassword, {
      target: { value: mockNewPassword },
    });
    expect(newPassword.value).toEqual(mockNewPassword);

    fireEvent.change(retypePassword, {
      target: { value: mockNewPassword },
    });
    expect(retypePassword.value).toEqual(mockNewPassword);

    // Everything is valid, button should be enabled now.
    expect(submitButton).toBeEnabled();

    fireEvent.change(retypePassword, {
      target: { value: mockNonMatchingNewPassword },
    });
    expect(retypePassword.value).toEqual(mockNonMatchingNewPassword);

    // New passwords are no longer matching. Submit button should be disabled.
    expect(submitButton).toBeDisabled();
  });
});
```

These tests validate everything the user would expect from a form like this.
They should be able to enter the values in the input fields that correspond with
what they are trying to provide, and the form should only be submittable once
the fields are valid.

Why is this a better alternative than a snapshot test? Because if we were to
make a non-behavioral change, such as replacing a `<div>` element with a
`<section>` element, the snapshot test would fail.

Additionally, if we were to make a mistake in updating the object destructuring
of our `handleChange` function, that would break the ability to enter text on
the form. A snapshot test would not surface this breakage, whereas this test
would.

Each of the examples where we caused _false negatives_ and _false positives_ for
snapshot testing are handled gracefully by this approach. _False negatives_ are
not surfaced as errors because are functionality continues to work. _False
positives_ are surfaced as errors because our component no longer works.

Our interactions and assertions make these tests Realistic, and using the
`@testing-library/react` queries makes them Resilient. Our Confidence Pedestal
is now a sturdy foundation for our testing suite!

Kent C. Dodds had all of this in mind when he wrote about the Testing Trophy.
That is why he also created the Testing Library, so that your **composition of
tests** could be supported by **The Confidence Pedestal**.

The design of the Testing Library encourages writing tests that are Realistic
and Resilient by exposing a set of utilities that more closely resemble how a
user interacts with a user interface. Also, they have the added benefit of
readability when compared to `react-test-renderer`, `enzyme`, and other
libraries.

Hopefully, this piece helped you understand why Realistic, Resilient tests are a
vital foundation for a testing suite that gives you confidence in pushing code.
Assertion-based, user-centric testing should always be your preferred approach
for writing unit and integration tests for frontend applications.
