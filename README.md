# Quizzical

A trivia game that uses questions from the [Open Trivia Database](https://opentdb.com/) API.

## Things I Learned (in progress)

- How to get a React project using TypeScript set up w/ESLint and Prettier working together using the AirBnB Style Guide
- React useCallback Hook (purpose/how to use)

## Things I Could Have Done Better

- The button component isn't the best. I had trouble getting Tailwind CSS to accept passed down props as values.

  - For example, I tried to give the button height and width props which I would use to set the button size, but Tailwind CSS didn't like it. I think React renders the components faster than Tailwind can accept the prop values and convert into proper CSS. So I ended up setting those values to 100% and using divs to size the buttons. There's probably a better way to have handled this so all those values could be kept inside the button component.
