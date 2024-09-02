export interface PiMoraModel {
  title: string;
  description: string;
  years: PiMoraYears[];
}

interface PiMoraYears {
  year: number;
  description: string;
  images: string[];
}
