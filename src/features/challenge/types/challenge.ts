export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Challenge {
    id: string;

    title: string;
    description: string;

    language: string;
    difficulty: Difficulty;

    category: string;
    points: number;

    starterCode?: string;
}
