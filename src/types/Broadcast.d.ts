type BroadcastListItem = {
  id: number;
  created_at: string;
  subject: string;
};

type Broadcast = {
  id: number;
  created_at: string;
  published_at: string;
  subject: string;
  public: boolean;
  thumbnail_url: url | null;
  content: string;
};
