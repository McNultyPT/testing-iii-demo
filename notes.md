# Testing III Notes

## What to test?

- does it render without failing?
- does it render the expected output?
- does it render with the correct values based on props/state?
- does it handle events correctly?
- what about invalid input?

## Good Unit Tests

- independent of other tests
- run fast (ms not seconds)
- test one thing, one unit of functionality
- don't have unnecessary assertions

## Steps

- `yarn add react-test-renderer`
- 