export interface Review {
  author: string;
  rating: number;
  comment: string;
  commentEn: string;
  image?: string; // opcional, por si quieres avatar
  avatarLetter?: string;
  avatarColor?: string;
}
