import BoardHeader from '../../../modules/BoardHeader/components/BoardHeader';
import ContentLayout from '../../../shared/layout/ContentLayout';
import HeaderLayout from '../../../shared/layout/HeaderLayout';

const BoardPage = () => {
  return (
    <ContentLayout>
      <HeaderLayout>
        <BoardHeader />
      </HeaderLayout>
    </ContentLayout>
  );
};

export default BoardPage;
