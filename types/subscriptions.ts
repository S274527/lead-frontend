export type TSubscription = {
  id?: number;
  plan_id?: number;
  active?: boolean;
  type?: "trial" | "premium" | "";
  total?: string;
  plan_name?: string;
  time_limit?: number;
  time_type?: "monthly";
  plan_amount?: string;
  plan_details?: string;
  expiry_date?: Date;
  subscribed_at?: Date;
  unsubscribed_at?: Date | null;
  paid_on?: Date;
  sms_per_day_allowed?: number;
  sms_alerts_used?: number;
  sms_last_received_at: Date;
  email_per_day_allowed?: number;
  email_alerts_used?: number;
  email_last_received_at: Date;
  charts_allowed?: number;
  charts_used?: number;
  paypal_subscription_id?: string;
  status?: "pending" | "canceled" | "active" | "paused";
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  user_id?: number;
};
