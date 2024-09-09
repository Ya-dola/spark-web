import { CommunitySectionModel } from '@/models/community/community_section_model';
import PiCommunityClient from '@/clients/pi_community/pi_community_client';
import { getJsonData } from '@/utils/json_utils';

async function PiCommunityPage() {
  const piMoraSection: CommunitySectionModel =
    await getJsonData<CommunitySectionModel>({
      page: 'community',
      fileName: 'pi_mora',
    });

  return <PiCommunityClient piMoraData={piMoraSection} />;
}

export default PiCommunityPage;
