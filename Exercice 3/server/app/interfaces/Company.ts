export interface Location {
  country: string;
  countryCode: string;
  city: string;
  region: string;
  hidden: boolean;
}

export interface JobDetails {
  title: string;
  shortcode: string;
  code: string | null;
  employment_type: string;
  telecommuting: boolean;
  department: string;
  url: string;
  shortlink: string;
  application_url: string;
  published_on: string;
  created_at: string;
  country: string;
  city: string;
  state: string;
  education: string | null;
  experience: string;
  function: string;
  industry: string;
  locations: Location[];
  description: string;
}

export interface Company {
  name: string,
  description: string,
  jobs: JobDetails[],
}
