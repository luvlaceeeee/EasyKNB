import { useAtom } from 'jotai';
import React, { FC } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { isSidebarOpen } from '../store/sidebarStore';

export interface SidebarButtonProps {
  title: string;
  icon: React.FunctionComponent<IconBaseProps>;
  link: string;
  className?: string;
}

const SidebarButton: FC<SidebarButtonProps> = ({
  title,
  icon,
  link,
  className,
}) => {
  const [isOpen] = useAtom(isSidebarOpen);
  return (
    <Link to={link}>
      <button
        className={`inline-flex items-center rounded-lg ${
          isOpen ? 'px-5 py-3 pl-2.5' : 'px-2.5 py-3'
        } text-center text-sm font-medium transition-all duration-300 ease-out hover:bg-gray-200 ${className} `}
      >
        {React.createElement(icon, {
          size: '20',
          className: `${isOpen ? 'mr-4' : ''}`,
        })}
        <span
          className={`whitespace-pre font-bold duration-500 ${
            !isOpen &&
            'hidden translate-x-28 overflow-hidden opacity-0 transition-all'
          }}`}
        >
          {title}
        </span>
      </button>
    </Link>
  );
};

export default SidebarButton;
