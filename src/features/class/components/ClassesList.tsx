// features/class/components/ClassesList.tsx
import React, { useState } from 'react';
import { useGlobalStore } from '@/shared/store/useStore';
import { useClassesQuery } from '../hooks/useClassesQuery';
import { useDeleteClass } from '../hooks/useDeleteClass';
import { Trash2 } from 'lucide-react';

const ClassesList: React.FC = () => {
  const { data: classes, isLoading, isError } = useClassesQuery();
  const { mutate: deleteClass, isPending: isDeleting } = useDeleteClass();
  
  const selectedClassId = useGlobalStore((s) => s.selectedClassId);
  const setSelectedClassId = useGlobalStore((s) => s.setSelectedClassId);
  const setMainBarAction = useGlobalStore((s) => s.setMainBarAction);

  const handleClassClick = (id: number) => {
    setSelectedClassId(id);
    setMainBarAction("class");
  };

  const handleDelete = (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent selecting the class
    if (window.confirm(`Are you sure you want to delete this class?`)) {
      deleteClass(id);
    }
  };

  if (isLoading) return <p className="p-4">Loading classes...</p>;
  if (isError) return <p className="p-4 text-red-500">Failed to load classes</p>;

  return (
    <div className="flex flex-col gap-2">
      {classes?.map((cls) => (
        <div
          key={cls.id}
          className={`group flex items-center justify-between p-2 rounded hover:bg-gray-100 cursor-pointer ${
            selectedClassId === cls.id ? "bg-gray-200 font-bold" : ""
          }`}
          onClick={() => handleClassClick(cls.id)}
        >
          <span className="text-[12px]">{cls.name}</span>
          
          <button
            onClick={(e) => handleDelete(cls.id, e)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded text-red-500 hover:text-red-700"
            disabled={isDeleting}
            title={`Delete ${cls.name}`}
          >
            <Trash2 className="h-3 w-3" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ClassesList;