export interface Challenge {
  id: string;
  title: string;
  description?: string;
  author: string;
  date: Date;
}

export interface Assignment {
  id: string;
  title: string;
  description?: string;
}
