export interface Message {
  value: string;
  author: boolean;
  button: boolean;
  delayCount: number;
}

export type Messages = Array<Message>;
