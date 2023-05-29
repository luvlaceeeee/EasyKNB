import { IColumn } from '@/shared/types';
import { FC } from 'react';
import { useColumnData } from '../hooks';
import { BoardColumnHeader } from './column/board-column-header';

export const BoardColumn: FC<{ column: IColumn }> = ({ column }) => {
  const { data } = useColumnData(column.id);
  // const [isCreateMenuOpen, setCreateMenuOpen] = useState(false);
  // const menuRef = useRef<HTMLDivElement>(null);
  // const setCreateMenuOpenWithScroll = () => {
  //   menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  //   setCreateMenuOpen(true);
  // };

  // const { data } = useQuery<IColumn>(
  //   [`query-column-${column.id}`],
  //   () => ColumnService.findColumnById(userId, boardId, column.id),
  //   { suspense: true }
  // );

  // if (isLoading) return <BoardColumnLoader />;

  return (
    <div className="flex h-full w-72 shrink-0 flex-col space-y-4">
      <BoardColumnHeader
        title={data ? data.title : ''}
        id={data ? data.id : 0}
      />
      {/* <BoardColumnContent
        columnId={data?.id}
        tasks={data?.tasks}
        isCreateMenuOpen={isCreateMenuOpen}
        setCreateMenuOpen={setCreateMenuOpen}
        ref={menuRef}
      />
      <BoardColumnFooter
        id={data?.id}
        setCreateMenuOpen={setCreateMenuOpenWithScroll}
        isCreateMenuOpen={isCreateMenuOpen}
      /> */}
    </div>
  );
};
