export interface IconButtonProps {
  icon: React.ReactNode;
  handlerFn: () => void;
  className?: string;
}

export interface HeaderButtonProps {
  handlerFn: () => void;
  text: string;
  className?: string;
}
