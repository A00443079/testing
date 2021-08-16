import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen,  waitFor, fireEvent } from '@testing-library/react';
import Provinces from './components/Provinces'
import Province from './components/Province';
import Territories from './components/Territories';
import { getProvincesData } from './api';
import App from './App';
import provinces from './data/provinces-data';



const provinces_data = [
    {
   name: 'Saskatchewan',
        capital: 'Regina',
        flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_Saskatchewan.svg'
    }
]

jest.mock('./api')

// Test 1 and 2-> Testing Province Name and capital show hide button in single testing function
test('Testing Text and button functionality', async () => {
    getProvincesData.mockResolvedValueOnce(provinces_data)
    const { getByText, getByTestId, queryByText } = render(<Provinces />)
    await waitFor(() => expect(getProvincesData).toHaveBeenCalledTimes(1))
    expect(getByText('Saskatchewan')).toBeTruthy()

    const button = getByTestId("button-test")
    expect(button.innerHTML).toBe("Show Capital")
    fireEvent.click(button)
    expect(button.innerHTML).toBe("Hide Capital")
    expect(getByText('Regina')).toBeTruthy()
    fireEvent.click(button)
    expect(queryByText('Regina')).toBeFalsy()

    // clearing 
    getProvincesData.mockReset()
})



