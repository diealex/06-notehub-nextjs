export interface Note {
  id: number;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
}

export interface AddNote {
  title: string;
  content?: string;
  tag?: string;
}
