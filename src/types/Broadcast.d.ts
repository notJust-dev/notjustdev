type Broadcast = {
  id: number;
  created_at: string;
  subject: string;
  description: string;
  content: string;
  public: boolean;
  published_at: string;
  send_at: string;

  thumbnail_url: string | null;
  thumbnail_alt: string;
  email_address: string;
  preview_text?: string;

  email_template: {
    id: number;
    name: string;
  };
  // subscriber_filter: [{
  //   all: boolean;
  //   type: string;
  // }]
};

// type Broadcast = {
//   id: number;
//   created_at: string;
//   published_at: string;
//   subject: string;
//   public: boolean;
//   thumbnail_url: url | null;
//   content: string;
// };
