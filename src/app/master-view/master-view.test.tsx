import { expect, test } from 'vitest';
import { GlobalContext } from '../hooks/context-hooks';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MasterView from './master-view';
import 'element-internals-polyfill';

const mockGlobalState: any = {};
const mockSetGlobalState = () => {};

test('renders MasterView component', () => {
  const wrapper = render(
    <GlobalContext.Provider value={{ globalState: mockGlobalState, setGlobalState: mockSetGlobalState }}>
      <MasterView />
    </GlobalContext.Provider>,
    { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});