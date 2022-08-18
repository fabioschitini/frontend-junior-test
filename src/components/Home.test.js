import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'


test('renders the main heading, the search input', () => {

    const { getByText,getByRole } =  render(<Home  />);
      expect(getByText("Klever")).toBeTruthy();
    });
    
test('render the list from the tokens arrayon the local storage', async() => {
    const tokens=[{id:'1',name:'KLV',balance:'10,250.50'},{id:'2',name:'DVK',balance:'50,250.71'},
    {id:'3',name:'KFI',balance:'10'}]
    localStorage.setItem('tokens', JSON.stringify(tokens));
   render(<Home  />);
  const tokenItems =  await screen.findAllByRole('heading');
  console.log(tokenItems.filter(token=>token.id==='1'))
   expect(tokenItems.filter(token=>token.id==='1')[0]).toHaveTextContent('KLV');
   expect(tokenItems.filter(token=>token.id==='2')[0]).toHaveTextContent('DVK');
   expect(tokenItems.filter(token=>token.id==='3')[0]).toHaveTextContent('KFI');
});

