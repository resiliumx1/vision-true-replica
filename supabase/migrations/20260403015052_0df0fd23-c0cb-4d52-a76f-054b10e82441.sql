CREATE TABLE public.explorer_locations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('beaches', 'food', 'nightlife', 'historical', 'activities', 'shopping', 'accommodation')),
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  description TEXT,
  hours TEXT,
  popularity INTEGER DEFAULT 50 CHECK (popularity BETWEEN 0 AND 100),
  has_event BOOLEAN DEFAULT false,
  event_name TEXT,
  event_date TIMESTAMPTZ,
  emoji TEXT DEFAULT '📍',
  phone TEXT,
  whatsapp_link TEXT,
  website_url TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.explorer_locations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read locations" ON public.explorer_locations
  FOR SELECT USING (true);