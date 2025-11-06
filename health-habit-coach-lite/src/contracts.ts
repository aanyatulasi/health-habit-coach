export type Id = string;
export type Mood = "🙂" | "😐" | "🙁";

export interface CoachGoals { waterMl: number; steps: number; }
export interface CoachEntry { id: Id; date: string; waterMl: number; steps: number; mood: Mood; }
