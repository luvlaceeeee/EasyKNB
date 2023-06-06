// interface TaskModalTagsProps {
// 	tags?: []
// }

import { Button } from '@/shared/ui/button';
import { Tag } from '@/shared/ui/tag';
import { Plus } from 'lucide-react';
import { FC } from 'react';

export const TaskModalTags: FC = () => {
  return (
    <div>
      <p className="mb-1 text-sm text-muted-foreground">Tags</p>
      <div className="flex flex-wrap items-center gap-1">
        <Tag>Backendasdasdadsadsadsa</Tag>
        <Tag>Backendasdasdadsadsadsa</Tag>
        <Tag>Backendasdasdadsadsadsa</Tag>
        <Tag>Backenda</Tag>
        <Tag>Backendasdasdadsadsadsa</Tag>
        <Tag>Backendasdasdadsadsadsa</Tag>
        <Button variant="outline" className="h-auto p-1">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
