import { Provider } from 'jotai';
import Sidebar from './modules/Sidebar/components/Sidebar';
import ColumnLayout from './shared/layout/ColumnLayout';
import ContentLayout from './shared/layout/ContentLayout';
import HeaderLayout from './shared/layout/HeaderLayout';

const App = () => {
  return (
    <>
      <Provider>
        <Sidebar />
        <ContentLayout>
          <HeaderLayout>
            <span>Hello</span>
          </HeaderLayout>
          <ColumnLayout>
            <span>World!</span>
          </ColumnLayout>
        </ContentLayout>
      </Provider>
    </>
  );
};

export default App;
