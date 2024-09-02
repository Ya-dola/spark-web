import { PiMoraModel } from '@/models/pi_mora/pi_mora_model';
import PiCommunityClientPage from '@/pages/pi_community_page/pi_community_page';
import { getJsonData } from '@/utils/json_utils';

async function CommunityPage() {
  const piMoraModel: PiMoraModel = await getJsonData<PiMoraModel>('pi_mora');

  return <PiCommunityClientPage piMoraData={piMoraModel} />;
}

export default CommunityPage;
