export interface Client {
  slug: string;
  name: string;
  logoSrc: string;
  website?: string;
  description: string;
  industry: string;
  services: string[];
  tags?: string[];
}