import React, { useState, useEffect } from 'react';
import { FormDialog } from '@/shared/components/design/dialog';
import { createClass } from '../apis/fetchClasses';

interface ClassroomFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ClassroomFormModal: React.FC<ClassroomFormModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [classname, setClassName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
      setError('Class name cannot be empty');
      return;
    }

    setLoading(true);
    try {
      await createClass(classname);
      onOpenChange(false);
      setClassName('');
      setError(null);
    } catch (err: any) {
       setError(err.response?.message || "Failed to create class. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Create New Class"
      onSubmit={handleSubmit}
      submitText={loading ? 'Creating...' : 'Create Class'}
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
