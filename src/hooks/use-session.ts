import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { useRouter } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

/** Tracks the signed-in session in the browser and refreshes routes on change. */
export function useSession() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
      setLoading(false);
      void router.invalidate();
    });
    void supabase.auth.getSession().then(({ data: d }) => {
      setSession(d.session);
      setLoading(false);
    });
    return () => data.subscription.unsubscribe();
  }, [router]);

  return { session, user: session?.user ?? null, loading };
}
