import { render, screen} from '@testing-library/react';
import App from './App';
import Provinces from './components/Provinces';
import Province from './components/Province';
import { getProvincesData, getTerritories } from "./api"
import Territories from './components/Territories';
import provinces from './data/provinces-data';


jest.mock('./api', () => {
  return {
    getProvincesData: () => Promise.resolve([{
      name: 'British Columbia',
      capital: 'Victoria',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_British_Columbia.svg'
  }])
}})


// Test 3 testing title retuns true
test('Testing title functionality', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Canada/i);
  expect(linkElement).toBeInTheDocument();
});

// Test 4 testing province renders correct name
test('Testing Province renders province name', async () => {  
  render(<Provinces />)
  let ele = await screen.findByText('British Columbia')
  expect(ele).toBeTruthy()
})


