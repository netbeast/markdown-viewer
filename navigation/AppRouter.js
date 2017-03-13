import {
  createRouter,
} from '@expo/ex-navigation';

import MarkdownPage from '../screens/MarkdownPage';

const AppRouter = createRouter(() => ({
  markDownPage: () => MarkdownPage,
}));

export default AppRouter;
