export interface PiMoraModel {
  title: string;
  description: string;
  years: PiMoraYears[];
}

interface PiMoraYears {
  year: number;
  title: string;
  description: string;
  images: string[];
}
