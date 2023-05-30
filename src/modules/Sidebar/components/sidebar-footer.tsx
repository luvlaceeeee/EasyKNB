import { useAuthStore } from '@/shared/store';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip';
import { LogOut, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';

export const SidebarFooter = () => {
  const [theme, toggleTheme] = useDarkMode();

  const user = useAuthStore((s) => s.user);
  return (
    <div>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="mb-2 w-10 p-0"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Switch to {`${theme === 'dark' ? 'light' : 'dark'}`} mode</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              className="mb-2 w-10 rounded-full p-0"
              asChild
            >
              <Link to="/profile">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user.avatar}
                    // alt="@shadcn"
                  />
                  <AvatarFallback>
                    {user.name.charAt(0) + user.surname.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{user.fullName}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'outline'}
              className="mb-2 w-10 border-red-900/30 p-0 hover:bg-red-900/30"
              asChild
            >
              <Link to="/">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Log out</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
