export type User = {
  id: number;
  telegram_id: bigint;
  username: string | null;
  created_at: Date;
  vip_expires_at: Date | null;
  balance: number;
  frozen_balance: number;
  connect_code: string | null;
  connect_code_expires_at: Date | null;
};

export type UserSettings = {
    id: number;
    user_id: number;
    language: string;
    currency: string;
    timezone: number;
    notify_news: boolean;
    notify_payments: boolean;
    is_stealth: boolean;
    updated_at: Date;
}