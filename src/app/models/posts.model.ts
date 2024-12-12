export interface Post {
  id?: string;
  categoryId?: string;
  title: string;
  description: string;
  categoryName?: string
}

export interface CRUDAction<T> {
  action: 'add' | 'update' | 'delete'
  data: T
}
