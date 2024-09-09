export interface CommunityTabsModel {
  name: string;
  details: TabDetails[];
}

interface TabDetails {
  name: string;
  description: string;
  images: string[];
  members: string[];
}
