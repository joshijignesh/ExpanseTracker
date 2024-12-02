export interface PreferenceState {
  categoryColors: Record<string, string>;
  weeklyLimit: string;
  monthlyLimit: string;
  error: string | null;
}
