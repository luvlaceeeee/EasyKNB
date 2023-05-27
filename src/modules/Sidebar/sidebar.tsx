import { Button } from '@/shared/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip';
import { Home } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { SidebarFooter } from './components/sidebar-footer';

export const Sidebar = () => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 bottom-0 w-24 border-r-2 border-zinc-400 border-opacity-20 bg-white p-6 transition-all duration-300 ease-out dark:border-zinc-700 dark:bg-zinc-900`}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            {/* <SidebarHeader className={'pb-5'} /> */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="w-10 p-0">
                    <Home className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Go to home page</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <SidebarFooter />
        </div>
      </div>
      <Outlet />
    </>
  );
};
