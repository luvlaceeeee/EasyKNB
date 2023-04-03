import { useAtom } from 'jotai';
import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { isSidebarOpen } from '../store/sidebarStore';

export interface SidebarButtonProps {
  title: string;
  link: string;
  className?: string;
}

export const SidebarButton: FC<PropsWithChildren<SidebarButtonProps>> = ({
  title,
  children,
  link,
  className,
}) => {
  const [isOpen] = useAtom(isSidebarOpen);
  return (
    <Link to={link}>
      <button
        className={`inline-flex items-center rounded-lg ${
          isOpen ? 'px-5 py-3 pl-2.5' : 'px-2.5 py-3'
        } text-center text-sm font-medium transition-all duration-300 ease-out hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-zinc-800 ${className}`}
      >
        {children}
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
