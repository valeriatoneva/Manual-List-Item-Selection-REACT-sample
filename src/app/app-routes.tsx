import { redirect } from 'react-router-dom';
import MasterView from './master-view/master-view';
import MasterView1 from './master-view1/master-view1';

export const routes = [
  { index: true, loader: () => redirect('master-view') },
  { path: 'master-view', element: <MasterView />, text: 'Master View' },
  { path: 'master-view1', element: <MasterView1 />, text: 'Master View1' }
];
