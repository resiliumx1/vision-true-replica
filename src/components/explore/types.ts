export interface ExplorerLocation {
  id: string;
  name: string;
  category: string;
  latitude: number;
  longitude: number;
  description: string | null;
  hours: string | null;
  popularity: number;
  has_event: boolean;
  event_name: string | null;
  event_date: string | null;
  emoji: string;
  phone: string | null;
  whatsapp_link: string | null;
  website_url: string | null;
  image_url: string | null;
  is_featured: boolean;
}

export const categoryColors: Record<string, string> = {
  beaches: "#00d4aa",
  food: "#ff8c42",
  nightlife: "#c77dff",
  historical: "#d4ad7c",
  activities: "#4ecdc4",
  shopping: "#ff6b9d",
  accommodation: "#6b8afd",
};
