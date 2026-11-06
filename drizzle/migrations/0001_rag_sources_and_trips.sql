ALTER TABLE public.chat_messages ADD COLUMN sources jsonb NOT NULL DEFAULT '[]'::jsonb;

CREATE TABLE public.trips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  title text NOT NULL,
  request jsonb NOT NULL,
  plan jsonb NOT NULL,
  sources jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, DELETE ON public.trips TO authenticated;
GRANT ALL ON public.trips TO service_role;
ALTER TABLE public.trips ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own trips select" ON public.trips FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "own trips insert" ON public.trips FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "own trips delete" ON public.trips FOR DELETE TO authenticated USING (auth.uid() = user_id);
CREATE INDEX trips_user_idx ON public.trips(user_id, created_at DESC);