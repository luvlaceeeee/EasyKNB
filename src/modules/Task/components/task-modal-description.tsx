import { Textarea } from '@/shared/ui/textarea';
import { FC, useState } from 'react';

interface TaskModalDescriptionProps {
  desc: string;
}

export const TaskModalDescription: FC<TaskModalDescriptionProps> = ({
  desc,
}) => {
  const [description, setDescription] = useState(desc);
  return (
    <div>
      <h4 className="mb-1 scroll-m-20 text-lg font-semibold tracking-tight">
        Description
      </h4>
      <Textarea
        placeholder="Type your message here."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
