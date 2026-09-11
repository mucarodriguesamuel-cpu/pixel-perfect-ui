import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type Service = {
  id: string;
  name: string;
  description: string;
  duration_minutes: number;
  price: number | null;
  active: boolean;
  sort_order: number;
};

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: async (): Promise<Service[]> => {
      const { data, error } = await supabase
        .from("services")
        .select("id,name,description,duration_minutes,price,active,sort_order")
        .eq("active", true)
        .order("sort_order");
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useAvailableSlots(date: string | null) {
  return useQuery({
    queryKey: ["available-slots", date],
    enabled: !!date,
    queryFn: async (): Promise<string[]> => {
      const { data, error } = await supabase.rpc("available_slots", { _date: date! });
      if (error) throw error;
      return (data ?? []).map((r: { slot: string }) => r.slot);
    },
  });
}
