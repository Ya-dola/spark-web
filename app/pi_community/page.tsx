import { CommunitySectionModel } from '@/models/community/community_section_model';
import PiCommunityClient from '@/clients/pi_community/pi_community_client';
import { getJsonData } from '@/utils/json_utils';

async function PiCommunityPage() {
  const piMoraSection: CommunitySectionModel =
    await getJsonData<CommunitySectionModel>({
      page: 'community',
      fileName: 'pi_mora',
    });
  const techDemoSection: CommunitySectionModel =
    await getJsonData<CommunitySectionModel>({
      page: 'community',
      fileName: 'tech_demo',
    });
  const finalYearSection: CommunitySectionModel =
    await getJsonData<CommunitySectionModel>({
      page: 'community',
      fileName: 'final_year',
    });
  return (
    <PiCommunityClient
      piMoraData={piMoraSection}
      techDemoData={techDemoSection}
      finalYearData={finalYearSection}
    />
  );
}

export default PiCommunityPage;
