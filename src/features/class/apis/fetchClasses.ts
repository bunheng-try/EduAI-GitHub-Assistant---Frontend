import { API_BASE_URL } from "@/shared/constansts/api";
import type { Class } from "@/shared/types/types";
import axios from "axios";
import type { Classroom } from "../types/classroom";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchClasses = () =>
  new Promise<Classroom[]>(resolve =>
    setTimeout(() => {
      resolve([
        { id: "1", name: "Math" , logo: ""},
        { id: '2', name: "Physics" , logo: ""},
        { id: "3", name: "Chemistry" , logo: ""},
      ]);
    }, 1000)
  );

export const createClass = async (
  name: string
): Promise<Class> => {
  const res = await apiClient.post<Class>("/classrooms", {
    name,
  });
  return res.data;
};
