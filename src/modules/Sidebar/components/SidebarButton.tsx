import { Button } from '@shared/UI';
import { useAtom } from 'jotai';
import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { isSidebarOpen } from '../store/sidebarStore';

export interface SidebarButtonProps {
  title: string;
  link: string;
  className?: string;
}

// TODO: throw isOpen as props field
export const SidebarButton: FC<PropsWithChildren<SidebarButtonProps>> = ({
  title,
  children,
  link,
  className,
}) => {
  const [isOpen] = useAtom(isSidebarOpen);

  return (
    <Link className={className} to={link}>
      <Button variant="flat">
        {children}
        <span
          className={`whitespace-pre font-bold duration-150 ${
            !isOpen &&
            'hidden translate-x-16 overflow-hidden opacity-0 transition-all'
          }}`}
        >
          {title}
        </span>
      </Button>
    </Link>
  );
};
