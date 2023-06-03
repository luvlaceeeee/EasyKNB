// interface TaskModalTagsProps {
// 	tags?: []
// }

import { Button } from '@/shared/ui/button';
import { Plus } from 'lucide-react';
import { FC } from 'react';

export const TaskModalTags: FC = () => {
  return (
    <div>
      <p className="mb-1 text-sm text-muted-foreground">Tags</p>
      <Button variant="outline" className="h-auto p-1">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};
