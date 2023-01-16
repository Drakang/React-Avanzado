import AdvertPage from './AdvertPage'
import React from 'react';
import { render} from '@testing-library/react';
import { Provider } from 'react-redux';

describe('AdvertPage', () => {
  test('snapshot test', () => {
    const store = {
      getState: () => ({
        ui: {},
        adverts: {
          tags: [],
          getById: {
            name: '',
            sale: true,
            price: 0,
            tags: [],
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    }
    const root= () => 
    render(
      <Provider store={store}>
        <AdvertPage />
      </Provider>
    );


    expect(root).toMatchSnapshot()
    })
})
