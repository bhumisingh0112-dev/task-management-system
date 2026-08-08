import type { FieldName } from './FieldsMenu';
import type { Task } from '../lib/api';

export default function TaskCard({ task, selectedFields, onOpen }: { task: Task; selectedFields: FieldName[]; onOpen: (task: Task) => void }) {
  const has = (x: FieldName) => selectedFields.includes(x);
  return <button type="button" onClick={() => onOpen(task)} className="block w-full text-left rounded-xl border border-[#e7e7e7] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,.03)] transition hover:-translate-y-[1px] hover:shadow-md">
    <div className="flex items-start justify-between gap-2"><h3 className="text-[13px] font-medium leading-5">{task.title}</h3><span className="text-sm text-gray-300">•••</span></div>
    <p className="mt-1.5 line-clamp-2 text-[11px] leading-4 text-gray-400">{task.description || 'No description'}</p>
    {has('labels') && <div className="mt-3 flex flex-wrap gap-1.5">{task.labels.map(l => <span key={l} className="rounded-md bg-gray-100 px-2 py-1 text-[9px] text-gray-500">{l}</span>)}</div>}
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {has('priority') && <span className={`rounded-md px-2 py-1 text-[9px] font-medium ${task.priority === 'High' ? 'bg-red-50 text-red-600' : task.priority === 'Medium' ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'}`}>{task.priority}</span>}
      {has('dueDate') && <span className="rounded-md bg-gray-50 px-2 py-1 text-[9px] text-gray-500">{task.dueDate || 'No due date'}</span>}
      {has('members') && <div className="ml-auto flex -space-x-1.5">{task.members.map(m => <span key={m} className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-[8px] font-semibold">{m}</span>)}</div>}
    </div>
  </button>;
}
