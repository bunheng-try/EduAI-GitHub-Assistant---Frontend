import React, { useState, useEffect } from 'react';
import { FormDialog } from '@/shared/components/design/dialog';
import { useCreateClass } from '../hooks/useCreateClass';
import type { Classroom } from '../types/classroom';

interface ClassroomFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated: (classroom: Classroom) => void;
}

const ClassroomFormModal: React.FC<ClassroomFormModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [classname, setClassName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const { mutateAsync, isPending } = useCreateClass();
  
  useEffect(() => {
    if (!open) {
      setClassName('');
      setError(null);
    }
  }, [open]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClassName(event.target.value);
    if (error) setError(null);
  }

  const handleSubmit = async () => {
    if (!classname.trim()) {
      setError("Class name cannot be empty");
      return;
    }

    try {
      await mutateAsync(classname);
      onOpenChange(false);
    } catch (err: any) {
      setError(
        err?.response?.message ||
        "Failed to create class. Please try again."
      );
    }
  };


  return (
    <FormDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Create New Class"
      onSubmit={handleSubmit}
      submitText={isPending ? 'Creating...' : 'Create Class'}
    >
      <div className="py-2 text-sm text-gray-600">
        Make changes to your classes list here. Click save when you're done.
      </div>

      <div className="flex flex-col gap-2 py-4">
        <label htmlFor="class" className="font-medium">
          Name
        </label>
        <input
          id="class"
          type="text"
          value={classname}
          placeholder="Class Name"
          onChange={handleChange}
          className={`
            px-4 py-2 border rounded-lg outline-none
            ${error ? 'border-red-500' : 'border-gray-300'}
            focus:border-blue-500
          `}
        />
        {error && (
          <p className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </div>
    </FormDialog>
  );
};

export default ClassroomFormModal;
