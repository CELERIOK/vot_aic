import type { ReactNode } from "react";

export interface Service {
  name: string;
  icon: ReactNode;
  description: string;
  path: string;
}

export interface FormValues {
  form_name: string;
  form_email: string;
  form_phone?: string;
  form_service: string;
}