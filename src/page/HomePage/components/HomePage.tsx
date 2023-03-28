import HomeContent from '../../../modules/HomeContent/components/HomeContent';
import HomeHeader from '../../../modules/HomeHeader/components/HomeHeader';
import ContentLayout from '../../../shared/layout/ContentLayout';
import HeaderLayout from '../../../shared/layout/HeaderLayout';

const HomePage = () => {
  return (
    <ContentLayout>
      <HeaderLayout>
        <HomeHeader totalBoard={3} />
      </HeaderLayout>
      <HomeContent />
    </ContentLayout>
  );
};

export default HomePage;
