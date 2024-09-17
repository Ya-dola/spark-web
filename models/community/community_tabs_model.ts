export interface CommunityTabsModel {
  name: string;
  details: TabDetails[];
}

export interface TabDetails {
  name: string;
  description: string;
  images: string[];
  members: string[];
}
