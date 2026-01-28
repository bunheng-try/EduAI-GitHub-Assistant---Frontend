export type Classroom = {
  id: string
  name: string
}

export const mockClassrooms: Classroom[] = Array.from({ length: 20 }).map((_, i) => ({
  id: String(i),
  name: `Group ${i + 1}`,
}))