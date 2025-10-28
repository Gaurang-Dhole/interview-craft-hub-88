export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Link {
  text: string;
  url: string;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  links: Link[];
  completed: boolean;
  starred: boolean;
}

export interface Pattern {
  id: string;
  name: string;
  problems: Problem[];
  expanded: boolean;
}
