import { useState } from 'react';
import DefaultButton from '../../../shared/UI/Buttons/DefaultButton';
import Input from '../../../shared/UI/Input/Input';

const CreateBoardModal = () => {
  const [title, setTitle] = useState('');
  return (
    <div className="flex w-72 flex-col space-y-5">
      <span className="text-xl font-bold">Create board</span>
      <Input
        label="Board title"
        placeHolder="Board title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <DefaultButton
        text="Create"
        onClick={() => {
          console.log('first');
        }}
      />
    </div>
  );
};

export default CreateBoardModal;
