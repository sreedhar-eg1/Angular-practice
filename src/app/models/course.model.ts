export interface Course {
  title: string;
  isActive: boolean;
}

export type Status = "active" | "inActive" | "draft"

export interface ICourse {
  name: string,
  description: string,
  status: Status
}
