export type Subtask = { id: number; title: string; completed: boolean };
export type Comment = { id: number; author: string; text: string; createdAt: string };
export type Task = { id:number; title:string; description:string; priority:string; dueDate:string|null; members:string[]; labels:string[]; status:string; subtasks:Subtask[]; comments:Comment[] };
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
async function request<T>(path:string, options?:RequestInit):Promise<T>{const r=await fetch(`${API_URL}${path}`,{...options,headers:{'Content-Type':'application/json',...(options?.headers||{})}});if(!r.ok)throw new Error((await r.text())||`Request failed: ${r.status}`);return r.json();}
export function getTasks(){return request<Task[]>('/tasks',{cache:'no-store'});}
export function createTask(payload:Omit<Task,'id'|'subtasks'|'comments'|'status'|'members'|'labels'>&{members?:string[];labels?:string[];status?:string;subtasks?:Subtask[];comments?:Comment[]}){return request<Task>('/tasks',{method:'POST',body:JSON.stringify(payload)});}
export function updateTask(id:number,payload:Partial<Omit<Task,'id'>>){return request<Task>(`/tasks/${id}`,{method:'PATCH',body:JSON.stringify(payload)});}
export function deleteTask(id:number){return request<{success:boolean}>(`/tasks/${id}`,{method:'DELETE'});}
