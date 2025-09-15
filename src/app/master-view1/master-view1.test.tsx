import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MasterView1 from './master-view1';
import 'element-internals-polyfill';

test('renders MasterView1 component', () => {
  const wrapper = render(<MasterView1 />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});