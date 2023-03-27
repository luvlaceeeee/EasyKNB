import HomeHeader from '../../../modules/HomeHeader/components/HomeHeader';
import ColumnLayout from '../../../shared/layout/ColumnLayout';
import ContentLayout from '../../../shared/layout/ContentLayout';
import HeaderLayout from '../../../shared/layout/HeaderLayout';

const HomePage = () => {
  return (
    <ContentLayout>
      <HeaderLayout>
        <HomeHeader />
      </HeaderLayout>
      <ColumnLayout>HomeColumn</ColumnLayout>
    </ContentLayout>
  );
};

export default HomePage;
