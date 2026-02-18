import { useState } from 'react';
import { X, FileText, Trophy, Signal, Code2, Tag, ChevronDown } from 'lucide-react';


export const AddNewChallengeModal = ({ isOpen, onClose, onAdd }: any) => {
  const [form, setForm] = useState({
    title: '', score: '10', level: 'Easy', language: 'C++', topic: ''
  });

  if (!isOpen) return null;

  
  const handleCreate = () => {
    if (!form.title || !form.topic) return alert("Please fill all fields");
    onAdd({
      id: crypto.randomUUID(),
      ...form,
      date: new Date(),
      author: "Admin"
    });
    onClose();
  };


  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
      <div className="bg-white rounded-2xl w-full max-w-[480px] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#F0EDFF] rounded-lg flex items-center justify-center text-[#7B57E0]"><Code2 size={18} /></div>
            <h2 className="text-[18px] font-bold text-[#1e293b]">Add New Challenge</h2>
          </div>
          <button onClick={onClose} className="text-gray-400"><X size={20} /></button>
        </div>

        <div className="p-6 space-y-5">
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-[#64748b]">Challenge Name</label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="text" placeholder="e.g. Binary Search" 
                onChange={(e) => setForm({...form, title: e.target.value})}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:outline-none" 
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-[#64748b]">Score Points</label>
              <div className="relative">
                <Trophy className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  type="number" defaultValue="10" 
                  onChange={(e) => setForm({...form, score: e.target.value})}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:outline-none" 
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-[#64748b]">Difficulty</label>
              <div className="relative">
                <Signal className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <select 
                  onChange={(e) => setForm({...form, level: e.target.value})}
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-[14px] appearance-none bg-white font-medium"
                >
                  <option>Easy</option><option>Medium</option><option>Hard</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-[#64748b]">Language</label>
              <div className="relative">
                <select 
                  onChange={(e) => setForm({...form, language: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] appearance-none bg-white font-medium"
                >
                  <option>C++</option><option>Python</option><option>Java</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-[#64748b]">Topic / Tag</label>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  type="text" placeholder="e.g. Array2D" 
                  onChange={(e) => setForm({...form, topic: e.target.value})}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:outline-none" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 pt-2 flex justify-end gap-3">
          <button onClick={onClose} className="px-7 py-2.5 border border-gray-200 rounded-xl text-gray-500 font-bold text-[14px]">Cancel</button>
          <button onClick={handleCreate} className="px-7 py-2.5 bg-[#7B57E0] text-white rounded-xl font-bold text-[14px]">Create Exercise</button>
        </div>
      </div>
    </div>
  );
};