import HomeContent from '../../../modules/HomeContent/components/HomeContent';
import HomeHeader from '../../../modules/HomeHeader/components/HomeHeader';
import ContentLayout from '../../../shared/layout/ContentLayout';
import HeaderLayout from '../../../shared/layout/HeaderLayout';

const HomePage = () => {
  return (
    <ContentLayout>
      <HeaderLayout>
        <HomeHeader />
      </HeaderLayout>
      {/* <ColumnLayout> */}
      <HomeContent />
      {/* </ColumnLayout> */}
    </ContentLayout>
  );
};

export default HomePage;
