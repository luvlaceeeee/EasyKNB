import { useAtom } from 'jotai';
import { FC } from 'react';
import { FiAlignJustify, FiAlignLeft } from 'react-icons/fi';
import IconButton from '../../../shared/UI/Buttons/IconButton';
import { isSidebarOpen } from './Sidebar';

const SidebarHeader: FC = () => {
  const [isOpen, setOpen] = useAtom(isSidebarOpen);
  return (
    <div className="flex w-full items-center justify-between text-lg">
      <div className="pl-2">
        <IconButton
          icon={
            isOpen ? <FiAlignJustify size={20} /> : <FiAlignLeft size={20} />
          }
          handlerFn={() => setOpen(!isOpen)}
        />
      </div>
      <span
        className={`${
          isOpen ? 'opacity-100' : 'opacity-0'
        } font-bold transition-opacity duration-300 ease-out`}
      >
        Jirello
      </span>
    </div>
  );
};

export default SidebarHeader;
