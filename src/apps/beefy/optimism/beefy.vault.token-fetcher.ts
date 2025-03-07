import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { BeefyVaultTokenFetcher } from '../common/beefy.vault-token-fetcher';

@PositionTemplate()
export class OptimismBeefyVaultTokenFetcher extends BeefyVaultTokenFetcher {
  groupLabel = 'Vaults';
}
