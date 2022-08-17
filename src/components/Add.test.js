import React from 'react';
import { render, screen,fireEvent,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Add from './Add'
import { createMemoryHistory } from 'history';
import {MemoryRouter,BrowserRouter as Router} from 'react-router-dom'


test('renders the input and the save button', async() => {
    const history = createMemoryHistory({initialEntries:['/yolo']});
    const { getByText,getAllByRole,getByLabelText } =  render(
        <Router location={history.location} ><Add/></Router>);
    expect(getByLabelText("Token")).toBeTruthy();
    expect(getByLabelText("Balance")).toBeTruthy();
    expect(getAllByRole('button')[1]).toHaveTextContent('Save');
    });


    test('Whenc submit the token, if the token info is valid, then redirect to /home page', async() => {
        const tokens=[{id:'1',name:'KLV',balance:'10,250.50'},{id:'2',name:'DVK',balance:'50,250.71'},
        {id:'3',name:'KFI',balance:'10'}]
        localStorage.setItem('tokens', JSON.stringify(tokens));
        const history = createMemoryHistory({initialEntries:['/yolo']});
        const {getAllByRole,getByLabelText } =  render(
        <Router location={history.location} ><Add/></Router>);
        expect(getAllByRole('button')[1]).toHaveTextContent('Save');
        const tokenFiled=screen.getByPlaceholderText('Token...')
        const balanceFiled=screen.getByPlaceholderText('Balance...')
        fireEvent.change(tokenFiled,{target:{value:'ZXY'}})
        fireEvent.change( balanceFiled,{target:{value:'110,25.20'}})
          fireEvent.submit(getAllByRole('button')[1]);
          await waitFor(() =>{ expect(window.location.pathname).toBe('/home');})
        });

        test('When you submit the token, if token field is blank show the aproprate error info ', async() => {
            const tokens=[{id:'1',name:'KLV',balance:'10,250.50'},{id:'2',name:'DVK',balance:'50,250.71'},
            {id:'3',name:'KFI',balance:'10'}]
            localStorage.setItem('tokens', JSON.stringify(tokens));
            const history = createMemoryHistory({initialEntries:['/yolo']});
            const {getAllByRole,getByLabelText } =  render(
            <Router location={history.location} ><Add/></Router>);
            expect(getAllByRole('button')[1]).toHaveTextContent('Save');
            const tokenFiled=screen.getByPlaceholderText('Token...')
            const balanceFiled=screen.getByPlaceholderText('Balance...')
            fireEvent.change(tokenFiled,{target:{value:''}})
            fireEvent.change( balanceFiled,{target:{value:''}})
              fireEvent.submit(getAllByRole('button')[1]);
              await waitFor(() =>{ expect(screen.getAllByText('Esse campo é obrigatorio')[0]).toBeInTheDocument()})
            await waitFor(() =>{ expect(screen.getAllByText('Esse campo é obrigatorio')[1]).toBeInTheDocument()})
            });

            test('When you submit the token, if token name was alredy on the array, return the apropriate error message ', async() => {
                const tokens=[{id:'1',name:'KLV',balance:'10,250.50'},{id:'2',name:'DVK',balance:'50,250.71'},
                {id:'3',name:'KFI',balance:'10'}]
                localStorage.setItem('tokens', JSON.stringify(tokens));
                const history = createMemoryHistory({initialEntries:['/yolo']});
                const {getAllByRole,getByLabelText } =  render(
                <Router location={history.location} ><Add/></Router>);
                expect(getAllByRole('button')[1]).toHaveTextContent('Save');
                const tokenFiled=screen.getByPlaceholderText('Token...')
                const balanceFiled=screen.getByPlaceholderText('Balance...')
                fireEvent.change(tokenFiled,{target:{value:'KLV'}})
                fireEvent.change( balanceFiled,{target:{value:'10,33'}})
                  fireEvent.submit(getAllByRole('button')[1]);
                  await waitFor(() =>{ expect(screen.getByText('This token name is already being used, please choose another!')).toBeInTheDocument()})
                });