import { TabDetails } from '../community/community_tabs_model';

export interface ChallengeTabsModel {
  tabs: ChallengeTab[];
}

export interface ChallengeTab {
  name: string;
  description: string;
  winnerTeam: TabDetails;
  runnerUpTeams: TabDetails[];
}

// export interface ChallengeTeam {
//   name: string;
//   description: string;
//   images: string[];
//   members: string[];
// }
