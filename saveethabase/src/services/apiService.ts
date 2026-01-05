import { supabase } from "./supabaseClient";
import { Resource } from "../types";
import { MOCK_RESOURCES } from "../constants";

export const apiService = {
  async getResources(): Promise<Resource[]> {
    const { data, error } = await supabase
      .from("resources")
      .select("*");

    if (error || !data) {
      return MOCK_RESOURCES as Resource[];
    }

    return data as Resource[];
  }
};
