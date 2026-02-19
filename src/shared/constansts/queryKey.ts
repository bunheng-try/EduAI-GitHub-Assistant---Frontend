export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
  USERS: '/users',
  RUN: '/run', // POST: {language, code}, out {jobid, status}
  RESULT: '/job/status/$id', // GET: {stdout, status}
  
  AUTH_SIGNUP: '/auth/signup',
  AUTH_LOGIN: '/auth/login',
  CLASSROOMS: '/classrooms',
};