import { Button } from '@/shared/ui/button';
import MDEditor from '@uiw/react-md-editor';
import { FC, useState } from 'react';

interface TaskModalDescriptionProps {
  desc: string;
}

export const TaskModalDescription: FC<TaskModalDescriptionProps> = ({
  desc,
}) => {
  const [openMDEditor, setOpenMDEditor] = useState(false);
  const [description, setDescription] = useState<string | undefined>(desc);

  //TODO Change MD editor on Rich editor
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Description
        </h4>
        {description && !openMDEditor ? (
          <Button
            size={'sm'}
            variant={'ghost'}
            className="h-auto p-0.5 px-1 text-xs font-normal text-muted-foreground"
            onClick={() => setOpenMDEditor(true)}
          >
            Change description
          </Button>
        ) : null}
      </div>

      {openMDEditor ? (
        <>
          <MDEditor
            height={200}
            value={description}
            onChange={(description, e) => setDescription(e?.target.value)}
          />
          <div className="mt-2">
            <Button
              variant={'secondary'}
              size={'sm'}
              onClick={() => {
                setOpenMDEditor(false);
              }}
              className="mr-2"
            >
              Save
            </Button>
            <Button
              variant={'outline'}
              size={'sm'}
              onClick={() => {
                setOpenMDEditor(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </>
      ) : description ? (
        <MDEditor.Markdown
          source={description}
          className="bg-transparent py-2"
        />
      ) : (
        <Button
          variant={'secondary'}
          size={'xs'}
          onClick={() => {
            setOpenMDEditor(true);
          }}
        >
          Add description
        </Button>
      )}
    </div>
  );
};
