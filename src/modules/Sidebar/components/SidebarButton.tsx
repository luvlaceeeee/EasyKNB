import React, { FC } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Link } from 'react-router-dom';

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
  return (
    <Link to={link} className={`${className} pl-2`}>
      <button className="inline-flex items-center rounded-lg px-4 py-2.5 pl-2.5 text-center text-sm font-medium transition-all duration-300 ease-out hover:bg-gray-200">
        {React.createElement(icon, { size: '20', className: 'mr-4' })}
        <span className="font-bold">{title}</span>
      </button>
    </Link>
  );
};

export default SidebarButton;
