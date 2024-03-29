import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Speaker from './Speaker';

describe('<Speaker />', () => {
    it('should call the speak function passed as a prop', () => {
        //making sure speak function is wired to the button properly
        const speak = jest.fn();
       
        const { getByText } = render(<Speaker speak={speak} />);
       
        fireEvent.click(getByText(/speak/i));
        expect(speak).toHaveBeenCalled();
    });

    it('', () => {
        
    });
});