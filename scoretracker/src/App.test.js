import React from "react";
import renderer  from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import App from "./App";

// afterEach(cleanup);
// beforeAll/Each afterAll/Each

// afterEach(() => {
//   cleanup();
//   console.log(document.body.outerHTML);
// });

describe("App Component", () => {
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<App />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  describe('speak()', () => {
    it('updates the message when speak button is clicked', () => {
      const { getByText, queryByText } = render(<App />);

      const button = getByText(/speak/i);
      expect(queryByText(/you are not mocking me/i)).toBeFalsy();

      fireEvent.click(button);
      expect(queryByText(/you are not mocking me/i)).toBeTruthy();
    });
  });

  describe('mocking', () => {
    it('is mocking me', () => {
      const mock = jest.fn(() => 'hello');
      // const mock = jest.fn().mockImplementation(() => 'hello')
      // const mock = jest.fn(); mock.mockReturnValue('hello')

      const actual = mock('smile');
      // mock('another smile');

      expect(actual).toBe('hello');
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledTimes(1);
      expect(mock).toHaveBeenCalledWith('smile');
    });
  });
});
