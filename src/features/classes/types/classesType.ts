export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

export interface Class {
  id: string;
  name: string;
  assignments: Assignment[];
}
