import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('get state value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        userEvent.click(screen.getByTestId('inc-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        userEvent.click(screen.getByTestId('decr-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})
