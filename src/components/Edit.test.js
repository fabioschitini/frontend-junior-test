import React from 'react';
import { render, screen,fireEvent,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App'
import { createMemoryHistory } from 'history';
import {Router,Route,Routes,MemoryRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Add from './Add'

test('render input with the value of the token you want to edit', async() => {
    const tokens=[{id:'1',name:'KLV',balance:'10,250.50'},{id:'2',name:'DVK',balance:'50,250.71'},
    {id:'3',name:'KFI',balance:'10'}]
    localStorage.setItem('tokens', JSON.stringify(tokens));
    const history = createMemoryHistory({initialEntries:['/update/5']});
    render(
<MemoryRouter initialEntries={['/edit/1']}> <Add /> </MemoryRouter>
    )
    expect(await screen.getByPlaceholderText('Token...')).toHaveValue('KLV')
    expect(await screen.getByPlaceholderText('Balance...')).toHaveValue('10,250.50')
});