import { FC } from 'react';
import { FiAlignLeft } from 'react-icons/fi';
import IconButton from '../../../shared/UI/Buttons/IconButton';

const SidebarHeader: FC = () => {
  return (
    <div className="flex w-full items-center justify-between text-lg">
      <span className="font-bold">Jirello</span>
      <IconButton
        icon={<FiAlignLeft size={20} color="black" />}
        handlerFn={() => console.log('hello')}
      />
    </div>
  );
};

export default SidebarHeader;
