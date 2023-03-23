import Sidebar from './modules/Sidebar/components/Sidebar';
import ColumnLayout from './shared/layout/ColumnLayout';
import ContentLayout from './shared/layout/ContentLayout';
import HeaderLayout from './shared/layout/HeaderLayout';

const App = () => {
  return (
    <>
      <Sidebar />
      <ContentLayout>
        <HeaderLayout>
          <span>Hello</span>
        </HeaderLayout>
        <ColumnLayout>
          <span>World!</span>
        </ColumnLayout>
      </ContentLayout>
    </>
  );
};

export default App;
