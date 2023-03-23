import Sidebar from './modules/Sidebar/components/Sidebar';
import ContentLayout from './shared/layout/ContentLayout';

const App = () => {
  return (
    <>
      <Sidebar />
      <ContentLayout>
        <span>hello</span>
      </ContentLayout>
    </>
  );
};

export default App;
