import type { ReactNode } from "react";
export interface Challenge {
  level: string;
  topic: ReactNode;
  language: ReactNode;
  score: ReactNode;
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
