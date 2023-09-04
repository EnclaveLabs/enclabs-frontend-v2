import { BigNumber as BN } from 'ethers';

export const fakeGetAllMarketsOutput = [
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7',
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A',
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4',
  '0x74469281310195A04840Daf6EdF576F559a3dE80',
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c',
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E',
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab',
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52',
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C',
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe',
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64',
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9',
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6',
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516',
  '0x714db6c38A17883964B68a07d56cE331501d9eb6',
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0',
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278',
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA',
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a',
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04',
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b',
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23',
];

export const fakeGetXvsPriceOutput = BN.from('0x30f7dc8a6370b000');

export const fakeGetAssetsInOutput = [
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E',
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0',
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe',
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4',
  '0x74469281310195A04840Daf6EdF576F559a3dE80',
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c',
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04',
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7',
];

export const fakeGetVaiRepayAmountOutput = BN.from('0x00');

export const fakeGetUnderlyingPriceOutputs = {
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7': BN.from('0x0c9f252afd4c2fb98f97000000'),
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A': BN.from('0x0c9f00c3826ac3b6fd38c00000'),
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4': BN.from('0x0ddfc1bd0c5de800'),
  '0x74469281310195A04840Daf6EdF576F559a3dE80': BN.from('0x037474d7e3bfac00'),
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c': BN.from('0x0ba44b0d5ad2004800'),
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E': BN.from('0x30f7dc8a6370b000'),
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab': BN.from('0x58e0a2138e84ee0000'),
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52': BN.from('0x037942fd7102be5c00'),
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C': BN.from('0x0702b820fa7ee000'),
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe': BN.from('0x057eeeebda8e17a00800'),
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64': BN.from('0x038f17ea90a62000'),
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9': BN.from('0x020a0ca01fb38684f0500000'),
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6': BN.from('0x111d7aa92d73a800'),
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516': BN.from('0x078d630446c48000'),
  '0x714db6c38A17883964B68a07d56cE331501d9eb6': BN.from('0x02ffb81ee6ee9c0000'),
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0': BN.from('0x0de0b6b3a7640000'),
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278': BN.from('0x0111d2d971bda800'),
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA': BN.from('0x01'),
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a': BN.from('0xe8d4a51000'),
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04': BN.from('0xf90a88392965357922800000'),
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b': BN.from('0x5a069df15cba8eec00'),
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23': BN.from('0x0de0b6b3a7640000'),
};

export const fakeBorrowCapsOutputs = {
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7': BN.from('0x00'),
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A': BN.from('0x00'),
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4': BN.from('0x01'),
  '0x74469281310195A04840Daf6EdF576F559a3dE80': BN.from('0x00'),
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c': BN.from('0x00'),
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E': BN.from('0x392cbab546b0ccc00000'),
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab': BN.from('0x00'),
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52': BN.from('0x00'),
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C': BN.from('0x00'),
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe': BN.from('0x00'),
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64': BN.from('0x00'),
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9': BN.from('0x00'),
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6': BN.from('0x0a968163f0a57b400000'),
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516': BN.from('0x00'),
  '0x714db6c38A17883964B68a07d56cE331501d9eb6': BN.from('0x00'),
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0': BN.from('0x00'),
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278': BN.from('0x00'),
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA': BN.from('0x00'),
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a': BN.from('0x00'),
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04': BN.from('0x00'),
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b': BN.from('0x0ad78ebc5ac6200000'),
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23': BN.from('0x7f0e10af47c1c7000000'),
};

export const fakeSupplyCapsOutputs = {
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4': BN.from('0x00'),
  '0x74469281310195A04840Daf6EdF576F559a3dE80': BN.from('0x31a6207cd74525f3dc71c0000000'),
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x714db6c38A17883964B68a07d56cE331501d9eb6': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA': BN.from('0x00'),
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a': BN.from('0x00'),
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b': BN.from('0x1043561a8829300000'),
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23': BN.from('0xd3c21bcecceda1000000'),
};

export const fakeXvsBorrowSpeedOutputs = {
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7': BN.from('0x3dadd6a60fa600'),
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A': BN.from('0x3dadd6a60fa600'),
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4': BN.from('0x00'),
  '0x74469281310195A04840Daf6EdF576F559a3dE80': BN.from('0x03157def08c0e3'),
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c': BN.from('0xb90983f22ef200'),
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E': BN.from('0x00'),
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab': BN.from('0x1ed6eb70d53800'),
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52': BN.from('0x1ed6eb70d53800'),
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C': BN.from('0x1ed6eb70d53800'),
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe': BN.from('0xb90983f22ef200'),
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64': BN.from('0x0acb38c49ea318'),
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9': BN.from('0x05a681d211373a'),
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6': BN.from('0x0acb38c49ea318'),
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516': BN.from('0x00'),
  '0x714db6c38A17883964B68a07d56cE331501d9eb6': BN.from('0x018abef7846072'),
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0': BN.from('0x00'),
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278': BN.from('0x03157def08c0e4'),
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA': BN.from('0x03157def08c0e4'),
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a': BN.from('0x04a03ce68d2156'),
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04': BN.from('0x03157def08c0e3'),
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b': BN.from('0x021e75bc475f0c'),
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23': BN.from('0xc55f7bc23039'),
};

export const fakeXvsSupplySpeedOutputs = {
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7': BN.from('0x3dadd6a60fa600'),
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A': BN.from('0x3dadd6a60fa600'),
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4': BN.from('0x00'),
  '0x74469281310195A04840Daf6EdF576F559a3dE80': BN.from('0x03157def08c0e3'),
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c': BN.from('0xb90983f22ef200'),
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E': BN.from('0x00'),
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab': BN.from('0x1ed6eb70d53800'),
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52': BN.from('0x1ed6eb70d53800'),
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C': BN.from('0x1ed6eb70d53800'),
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe': BN.from('0xb90983f22ef200'),
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64': BN.from('0x0acb38c49ea318'),
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9': BN.from('0x05a681d211373a'),
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6': BN.from('0x0acb38c49ea318'),
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516': BN.from('0x00'),
  '0x714db6c38A17883964B68a07d56cE331501d9eb6': BN.from('0x018abef7846072'),
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0': BN.from('0x00'),
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278': BN.from('0x03157def08c0e4'),
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA': BN.from('0x03157def08c0e4'),
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a': BN.from('0x04a03ce68d2156'),
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04': BN.from('0x03157def08c0e3'),
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b': BN.from('0x021e75bc475f0c'),
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23': BN.from('0xc55f7bc23039'),
};

export const fakeVTokenMetaDataAllOutput = [
  {
    vToken: '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7',
    exchangeRateCurrent: BN.from('0xc0fa8b6ae408'),
    supplyRatePerBlock: BN.from('0x0a10'),
    borrowRatePerBlock: BN.from('0x7167666a'),
    reserveFactorMantissa: BN.from('0x016345785d8a0000'),
    totalBorrows: BN.from('0xd489c1dc57bac30f'),
    totalReserves: BN.from('0x3085b251bbbc20497d'),
    totalSupply: BN.from('0x9af9c08bea9928db390d94eb'),
    totalCash: BN.from('0x086b363ad6796933676ca8'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0b3db2b55c110000'),
    underlyingAssetAddress: '0x16227D60f7a0e586C66B005219dfc887D13C9531',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x06'),
    venusBorrowSpeed: BN.from('0x3dadd6a60fa600'),
    venusSupplySpeed: BN.from('0x3dadd6a60fa600'),
    dailyBorrowXvs: BN.from('0x1b1ae4d3f9e0730000'),
    dailySupplyXvs: BN.from('0x1b1ae4d3f9e0730000'),
  },
  {
    vToken: '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A',
    exchangeRateCurrent: BN.from('0xb69ae9b152e5'),
    supplyRatePerBlock: BN.from('0x00'),
    borrowRatePerBlock: BN.from('0x71672e7f'),
    reserveFactorMantissa: BN.from('0x016345785d8a0000'),
    totalBorrows: BN.from('0x1fb2c9286ca3'),
    totalReserves: BN.from('0x1502b0ff7e'),
    totalSupply: BN.from('0x023bcb53ed1c86ac4d6bd88560168a8f640317'),
    totalCash: BN.from('0x1d63b7d09df536737b5b7b290cc73e3515'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0b1a2bc2ec500000'),
    underlyingAssetAddress: '0xA11c8D9DC9b66E209Ef60F0C8D969D3CD988782c',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x06'),
    venusBorrowSpeed: BN.from('0x3dadd6a60fa600'),
    venusSupplySpeed: BN.from('0x3dadd6a60fa600'),
    dailyBorrowXvs: BN.from('0x1b1ae4d3f9e0730000'),
    dailySupplyXvs: BN.from('0x1b1ae4d3f9e0730000'),
  },
  {
    vToken: '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4',
    exchangeRateCurrent: BN.from('0xa8257eb20e11053fa957a9'),
    supplyRatePerBlock: BN.from('0x00'),
    borrowRatePerBlock: BN.from('0x71672e81'),
    reserveFactorMantissa: BN.from('0x0de0b6b3a7640000'),
    totalBorrows: BN.from('0x030d288249edd70daa404ec793'),
    totalReserves: BN.from('0x77a5187dd6cf6eeb3d2402'),
    totalSupply: BN.from('0x3e1774b6b5b342f09d58a8b28b'),
    totalCash: BN.from('0x02f050fe9dc2aee9bfe1fde644071232c2'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0b1a2bc2ec500000'),
    underlyingAssetAddress: '0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x00'),
    venusSupplySpeed: BN.from('0x00'),
    dailyBorrowXvs: BN.from('0x00'),
    dailySupplyXvs: BN.from('0x00'),
  },
  {
    vToken: '0x74469281310195A04840Daf6EdF576F559a3dE80',
    exchangeRateCurrent: BN.from('0xbb8d253b925d5ac94ac7a0'),
    supplyRatePerBlock: BN.from('0x02703bf706'),
    borrowRatePerBlock: BN.from('0x02ae60ec2e'),
    reserveFactorMantissa: BN.from('0x016345785d8a0000'),
    totalBorrows: BN.from('0x37072b573e552e571cb340a1ce5f'),
    totalReserves: BN.from('0x928a1b215df57b6da06ec52e56'),
    totalSupply: BN.from('0x04078808a4d29ca3a1eb5b'),
    totalCash: BN.from('0x174de2635d88ec385e'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x06f05b59d3b20000'),
    underlyingAssetAddress: '0x75107940Cf1121232C0559c747A986DEfbc69DA9',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x03157def08c0e3'),
    venusSupplySpeed: BN.from('0x03157def08c0e3'),
    dailyBorrowXvs: BN.from('0x015af1d78b58c3c180'),
    dailySupplyXvs: BN.from('0x015af1d78b58c3c180'),
  },
  {
    vToken: '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c',
    exchangeRateCurrent: BN.from('0x029e2e6ef6ba32fb67a207ce'),
    supplyRatePerBlock: BN.from('0x0de7902d35'),
    borrowRatePerBlock: BN.from('0x110548c549'),
    reserveFactorMantissa: BN.from('0x03782dace9d90000'),
    totalBorrows: BN.from('0x58f60f2f3d6d0e722962'),
    totalReserves: BN.from('0x0749a90dbd1700aa8981'),
    totalSupply: BN.from('0x01b0f6045d4e14'),
    totalCash: BN.from('0x017763d45deb1c65'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0b1a2bc2ec500000'),
    underlyingAssetAddress: '0x0000000000000000000000000000000000000000',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0xb90983f22ef200'),
    venusSupplySpeed: BN.from('0xb90983f22ef200'),
    dailyBorrowXvs: BN.from('0x5150ae7beda1590000'),
    dailySupplyXvs: BN.from('0x5150ae7beda1590000'),
  },
  {
    vToken: '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E',
    exchangeRateCurrent: BN.from('0xabe826031d984edfde6568'),
    supplyRatePerBlock: BN.from('0x4fccfe5b'),
    borrowRatePerBlock: BN.from('0x0308baf4fb'),
    reserveFactorMantissa: BN.from('0x03782dace9d90000'),
    totalBorrows: BN.from('0x4c837cdf9c77a11c4ac8'),
    totalReserves: BN.from('0x052c263e4224ac3a7b7e'),
    totalSupply: BN.from('0x2d174f5344d7cf'),
    totalCash: BN.from('0x01e735dd20f358a1305882'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0853a0d2313c0000'),
    underlyingAssetAddress: '0xB9e0E753630434d7863528cc73CB7AC638a7c8ff',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x00'),
    venusSupplySpeed: BN.from('0x00'),
    dailyBorrowXvs: BN.from('0x00'),
    dailySupplyXvs: BN.from('0x00'),
  },
  {
    vToken: '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab',
    exchangeRateCurrent: BN.from('0xc576df34e5d8436230076a'),
    supplyRatePerBlock: BN.from('0x02769dfd74'),
    borrowRatePerBlock: BN.from('0x02b190505a'),
    reserveFactorMantissa: BN.from('0x016345785d8a0000'),
    totalBorrows: BN.from('0x02d3fe78f61c5783110c'),
    totalReserves: BN.from('0x0b89eabf7688840e74'),
    totalSupply: BN.from('0x32131a77e785'),
    totalCash: BN.from('0x0bf9248c53c56ce0'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0b1a2bc2ec500000'),
    underlyingAssetAddress: '0x98f7A83361F7Ac8765CcEBAB1425da6b341958a7',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x1ed6eb70d53800'),
    venusSupplySpeed: BN.from('0x1ed6eb70d53800'),
    dailyBorrowXvs: BN.from('0x0d8d727715b31c0000'),
    dailySupplyXvs: BN.from('0x0d8d727715b31c0000'),
  },
  {
    vToken: '0xAfc13BC065ABeE838540823431055D2ea52eBA52',
    exchangeRateCurrent: BN.from('0xbb570e2c93e40f459059fb'),
    supplyRatePerBlock: BN.from('0x024e370136'),
    borrowRatePerBlock: BN.from('0x029d1f9116'),
    reserveFactorMantissa: BN.from('0x016345785d8a0000'),
    totalBorrows: BN.from('0x40a2133162c8c1cc9e1c'),
    totalReserves: BN.from('0xd4cd935c64f6b7b19a'),
    totalSupply: BN.from('0x04e29d0c4a1fc6'),
    totalCash: BN.from('0x02251a182d283946c11a'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0853a0d2313c0000'),
    underlyingAssetAddress: '0x969F147B6b8D81f86175de33206A4FD43dF17913',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x1ed6eb70d53800'),
    venusSupplySpeed: BN.from('0x1ed6eb70d53800'),
    dailyBorrowXvs: BN.from('0x0d8d727715b31c0000'),
    dailySupplyXvs: BN.from('0x0d8d727715b31c0000'),
  },
  {
    vToken: '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C',
    exchangeRateCurrent: BN.from('0xc2b741dbea12b46f0e8afa'),
    supplyRatePerBlock: BN.from('0x02706da6b3'),
    borrowRatePerBlock: BN.from('0x02ae79c6f6'),
    reserveFactorMantissa: BN.from('0x016345785d8a0000'),
    totalBorrows: BN.from('0x12d221a7701c7152e7afaf'),
    totalReserves: BN.from('0x45af01efcc36f48207eb'),
    totalSupply: BN.from('0x0153c4a56bcf111f'),
    totalCash: BN.from('0x12c18a38ca99e292305f'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0853a0d2313c0000'),
    underlyingAssetAddress: '0x3022A32fdAdB4f02281E8Fab33e0A6811237aab0',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x1ed6eb70d53800'),
    venusSupplySpeed: BN.from('0x1ed6eb70d53800'),
    dailyBorrowXvs: BN.from('0x0d8d727715b31c0000'),
    dailySupplyXvs: BN.from('0x0d8d727715b31c0000'),
  },
  {
    vToken: '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe',
    exchangeRateCurrent: BN.from('0xc82b721bd45b848c721c0e'),
    supplyRatePerBlock: BN.from('0x0256a7d36b'),
    borrowRatePerBlock: BN.from('0x02a1731b25'),
    reserveFactorMantissa: BN.from('0x016345785d8a0000'),
    totalBorrows: BN.from('0x4b524261f7654a0c50'),
    totalReserves: BN.from('0x0117d43c496ca15343'),
    totalSupply: BN.from('0x054979bb8988'),
    totalCash: BN.from('0x0207c2559cd5714fdc'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0b1a2bc2ec500000'),
    underlyingAssetAddress: '0xA808e341e8e723DC6BA0Bb5204Bafc2330d7B8e4',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0xb90983f22ef200'),
    venusSupplySpeed: BN.from('0xb90983f22ef200'),
    dailyBorrowXvs: BN.from('0x5150ae7beda1590000'),
    dailySupplyXvs: BN.from('0x5150ae7beda1590000'),
  },
  {
    vToken: '0x37C28DE42bA3d22217995D146FC684B2326Ede64',
    exchangeRateCurrent: BN.from('0xae7fea42210797f86c7328'),
    supplyRatePerBlock: BN.from('0x89f8852e'),
    borrowRatePerBlock: BN.from('0x0156170cc9'),
    reserveFactorMantissa: BN.from('0x00'),
    totalBorrows: BN.from('0x07142eb241ee4a46aba4ed'),
    totalReserves: BN.from('0x00'),
    totalSupply: BN.from('0x016556dff673a618'),
    totalCash: BN.from('0x0a790313ec14f71a240668'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0853a0d2313c0000'),
    underlyingAssetAddress: '0xcD34BC54106bd45A04Ed99EBcC2A6a3e70d7210F',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x0acb38c49ea318'),
    venusSupplySpeed: BN.from('0x0acb38c49ea318'),
    dailyBorrowXvs: BN.from('0x04be4e7267b6ac0c00'),
    dailySupplyXvs: BN.from('0x04be4e7267b6ac0c00'),
  },
  {
    vToken: '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9',
    exchangeRateCurrent: BN.from('0x4e986fb0422b11'),
    supplyRatePerBlock: BN.from('0x013adb7c'),
    borrowRatePerBlock: BN.from('0x7740443b'),
    reserveFactorMantissa: BN.from('0x00'),
    totalBorrows: BN.from('0x03bef94754ab1c'),
    totalReserves: BN.from('0x00'),
    totalSupply: BN.from('0x4021e8716e4e5a69'),
    totalCash: BN.from('0x0167763204a57f0d'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0b1a2bc2ec500000'),
    underlyingAssetAddress: '0x67D262CE2b8b846d9B94060BC04DC40a83F0e25B',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x08'),
    venusBorrowSpeed: BN.from('0x05a681d211373a'),
    venusSupplySpeed: BN.from('0x05a681d211373a'),
    dailyBorrowXvs: BN.from('0x027bac0cd090c4fd00'),
    dailySupplyXvs: BN.from('0x027bac0cd090c4fd00'),
  },
  {
    vToken: '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6',
    exchangeRateCurrent: BN.from('0xc029bd80b6d47c10744b06'),
    supplyRatePerBlock: BN.from('0x01576780'),
    borrowRatePerBlock: BN.from('0x7d85ab72'),
    reserveFactorMantissa: BN.from('0x03782dace9d90000'),
    totalBorrows: BN.from('0x0aa3423642dd3802de5e'),
    totalReserves: BN.from('0x1326c93e8f34fe241c3f'),
    totalSupply: BN.from('0x35ea6a758a8d53'),
    totalCash: BN.from('0x02f312ea18e3cb03fd2e44'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0853a0d2313c0000'),
    underlyingAssetAddress: '0xe8bd7cCC165FAEb9b81569B05424771B9A20cbEF',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x0acb38c49ea318'),
    venusSupplySpeed: BN.from('0x0acb38c49ea318'),
    dailyBorrowXvs: BN.from('0x04be4e7267b6ac0c00'),
    dailySupplyXvs: BN.from('0x04be4e7267b6ac0c00'),
  },
  {
    vToken: '0x3619bdDc61189F33365CC572DF3a68FB3b316516',
    exchangeRateCurrent: BN.from('0x030bcdbe433a76d2c578c459'),
    supplyRatePerBlock: BN.from('0x5eebdb11'),
    borrowRatePerBlock: BN.from('0x016986b8ed'),
    reserveFactorMantissa: BN.from('0x016345785d8a0000'),
    totalBorrows: BN.from('0x0356f371e8bec5046ada9b'),
    totalReserves: BN.from('0x0cbaef7881d6d7dd69a9'),
    totalSupply: BN.from('0x3427a4f2d0de10'),
    totalCash: BN.from('0x082866c38f486c5f02b9e2'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0853a0d2313c0000'),
    underlyingAssetAddress: '0xcfeb0103d4BEfa041EA4c2dACce7B3E83E1aE7E3',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x00'),
    venusSupplySpeed: BN.from('0x00'),
    dailyBorrowXvs: BN.from('0x00'),
    dailySupplyXvs: BN.from('0x00'),
  },
  {
    vToken: '0x714db6c38A17883964B68a07d56cE331501d9eb6',
    exchangeRateCurrent: BN.from('0x1de688976fb7d440'),
    supplyRatePerBlock: BN.from('0x69e3bd'),
    borrowRatePerBlock: BN.from('0x15a8750c'),
    reserveFactorMantissa: BN.from('0x00'),
    totalBorrows: BN.from('0x171c1158b4540acb19'),
    totalReserves: BN.from('0x00'),
    totalSupply: BN.from('0x02319dfaa3ae004d99e3'),
    totalCash: BN.from('0x04a2ed8c0ca7b30fd39b'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x07a1fe1602770000'),
    underlyingAssetAddress: '0x4B7268FC7C727B88c5Fc127D41b491BfAe63e144',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x018abef7846072'),
    venusSupplySpeed: BN.from('0x018abef7846072'),
    dailyBorrowXvs: BN.from('0xad78ebc5ac621900'),
    dailySupplyXvs: BN.from('0xad78ebc5ac621900'),
  },
  {
    vToken: '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0',
    exchangeRateCurrent: BN.from('0x01314fb567e8e9f3c4'),
    supplyRatePerBlock: BN.from('0x00'),
    borrowRatePerBlock: BN.from('0x2cfc61'),
    reserveFactorMantissa: BN.from('0x0de0b6b3a7640000'),
    totalBorrows: BN.from('0x0d4bfe734c60b6281a06'),
    totalReserves: BN.from('0x0b5200e37319534b'),
    totalSupply: BN.from('0x03cf1cd18ee76cd98a5a5e'),
    totalCash: BN.from('0x53bf2e995a62c2dbd0d2e8'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x07a1fe1602770000'),
    underlyingAssetAddress: '0xFeC3A63401Eb9C1476200d7C32c4009Be0154169',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x00'),
    venusSupplySpeed: BN.from('0x00'),
    dailyBorrowXvs: BN.from('0x00'),
    dailySupplyXvs: BN.from('0x00'),
  },
  {
    vToken: '0x369Fea97f6fB7510755DCA389088d9E2e2819278',
    exchangeRateCurrent: BN.from('0x04c2b8bf861d4957408f020c'),
    supplyRatePerBlock: BN.from('0x23a758df94'),
    borrowRatePerBlock: BN.from('0x26d4b85b3c'),
    reserveFactorMantissa: BN.from('0x02c68af0bb140000'),
    totalBorrows: BN.from('0x8c9cebdea073f637963810b472bd'),
    totalReserves: BN.from('0x1227024fcdd4dc33753b8f0208a8'),
    totalSupply: BN.from('0x01652511b545fc2c7efc23'),
    totalCash: BN.from('0x0de24aac7ec07cd04e16726728'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0853a0d2313c0000'),
    underlyingAssetAddress: '0x19E7215abF8B2716EE807c9f4b83Af0e7f92653F',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x03157def08c0e4'),
    venusSupplySpeed: BN.from('0x03157def08c0e4'),
    dailyBorrowXvs: BN.from('0x015af1d78b58c43200'),
    dailySupplyXvs: BN.from('0x015af1d78b58c43200'),
  },
  {
    vToken: '0xF206af85BC2761c4F876d27Bd474681CfB335EfA',
    exchangeRateCurrent: BN.from('0xa5f6d606e4de8e33595baf'),
    supplyRatePerBlock: BN.from('0x00'),
    borrowRatePerBlock: BN.from('0x01db'),
    reserveFactorMantissa: BN.from('0x02c68af0bb140000'),
    totalBorrows: BN.from('0x056bf61c2f361f3919'),
    totalReserves: BN.from('0x098280f36576dd'),
    totalSupply: BN.from('0x452b4fed3e7078ff'),
    totalCash: BN.from('0x033b3164769c8c918d002d07'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x00'),
    underlyingAssetAddress: '0x5A79efD958432E72211ee73D5DDFa9bc8f248b5F',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x03157def08c0e4'),
    venusSupplySpeed: BN.from('0x03157def08c0e4'),
    dailyBorrowXvs: BN.from('0x015af1d78b58c43200'),
    dailySupplyXvs: BN.from('0x015af1d78b58c43200'),
  },
  {
    vToken: '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a',
    exchangeRateCurrent: BN.from('0x470de4df820000'),
    supplyRatePerBlock: BN.from('0x00'),
    borrowRatePerBlock: BN.from('0x71672e7f'),
    reserveFactorMantissa: BN.from('0x03782dace9d90000'),
    totalBorrows: BN.from('0x00'),
    totalReserves: BN.from('0x00'),
    totalSupply: BN.from('0x01cb72c6e02800'),
    totalCash: BN.from('0x093060233400'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x00'),
    underlyingAssetAddress: '0xf36160EC62E3B191EA375dadfe465E8Fa1F8CabB',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x06'),
    venusBorrowSpeed: BN.from('0x04a03ce68d2156'),
    venusSupplySpeed: BN.from('0x04a03ce68d2156'),
    dailyBorrowXvs: BN.from('0x02086ac35105264b00'),
    dailySupplyXvs: BN.from('0x02086ac35105264b00'),
  },
  {
    vToken: '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04',
    exchangeRateCurrent: BN.from('0x3afe70c9bd0981'),
    supplyRatePerBlock: BN.from('0x1f53b93c36'),
    borrowRatePerBlock: BN.from('0x239e70f761'),
    reserveFactorMantissa: BN.from('0x02c68af0bb140000'),
    totalBorrows: BN.from('0x01a91f5178bb'),
    totalReserves: BN.from('0x2674248187'),
    totalSupply: BN.from('0x5af73f4fe147'),
    totalCash: BN.from('0x05f5e100'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x0853a0d2313c0000'),
    underlyingAssetAddress: '0x7D21841DC10BA1C5797951EFc62fADBBDD06704B',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x06'),
    venusBorrowSpeed: BN.from('0x03157def08c0e3'),
    venusSupplySpeed: BN.from('0x03157def08c0e3'),
    dailyBorrowXvs: BN.from('0x015af1d78b58c3c180'),
    dailySupplyXvs: BN.from('0x015af1d78b58c3c180'),
  },
  {
    vToken: '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b',
    exchangeRateCurrent: BN.from('0x2253bc808bec0ff7c11088b7'),
    supplyRatePerBlock: BN.from('0x0721e0d9ec'),
    borrowRatePerBlock: BN.from('0x099879e254'),
    reserveFactorMantissa: BN.from('0x02c68af0bb140000'),
    totalBorrows: BN.from('0x4b56fc7663e6fc7b'),
    totalReserves: BN.from('0x0130aefd9fca327f'),
    totalSupply: BN.from('0x20c83f3c'),
    totalCash: BN.from('0x06f027827af17000'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x06f05b59d3b20000'),
    underlyingAssetAddress: '0xf9F98365566F4D55234f24b99caA1AfBE6428D44',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0x021e75bc475f0c'),
    venusSupplySpeed: BN.from('0x021e75bc475f0c'),
    dailyBorrowXvs: BN.from('0xee62bd3d5d44c600'),
    dailySupplyXvs: BN.from('0xee62bd3d5d44c600'),
  },
  {
    vToken: '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23',
    exchangeRateCurrent: BN.from('0x21a5d83853bb0e548f196edd'),
    supplyRatePerBlock: BN.from('0x0522c09b2c'),
    borrowRatePerBlock: BN.from('0x05b53b03e0'),
    reserveFactorMantissa: BN.from('0x016345785d8a0000'),
    totalBorrows: BN.from('0x02372fb215369e695c1b'),
    totalReserves: BN.from('0x0280cb421406ecd015'),
    totalSupply: BN.from('0xe9feab0200'),
    totalCash: BN.from('0x02a802f8630a9ec4c0'),
    isListed: true,
    collateralFactorMantissa: BN.from('0x00'),
    underlyingAssetAddress: '0xB32171ecD878607FFc4F8FC0bCcE6852BB3149E0',
    vTokenDecimals: BN.from('0x08'),
    underlyingDecimals: BN.from('0x12'),
    venusBorrowSpeed: BN.from('0xc55f7bc23039'),
    venusSupplySpeed: BN.from('0xc55f7bc23039'),
    dailyBorrowXvs: BN.from('0x56bc75e2d6310c80'),
    dailySupplyXvs: BN.from('0x56bc75e2d6310c80'),
  },
];

export const fakeVTokenBalancesAllOutput = [
  {
    vToken: '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x9c8c53'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x1365b040b675'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffe033fe072f'),
  },
  {
    vToken: '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x1a78c999e6ab'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x204fb9313b5d351530080df8'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffce4a2b7f9'),
  },
  {
    vToken: '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4',
    balanceOf: BN.from('0x06d3faf8f065d0dd'),
    borrowBalanceCurrent: BN.from('0x0b13dcc0553d80e6fecb33'),
    balanceOfUnderlying: BN.from('0x52baee784430933a367879'),
    tokenBalance: BN.from('0x2009084ac91b161262655797'),
    tokenAllowance: BN.from('0x20090a68e2fbdfcd14a55797'),
  },
  {
    vToken: '0x74469281310195A04840Daf6EdF576F559a3dE80',
    balanceOf: BN.from('0x0208887d15faa8'),
    borrowBalanceCurrent: BN.from('0x074daffe6d79bdd536'),
    balanceOfUnderlying: BN.from('0x1b7af46077c560c79148'),
    tokenBalance: BN.from('0x21412a87a401b9f52b160000'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffe51847cad389f0bfffff'),
  },
  {
    vToken: '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c',
    balanceOf: BN.from('0x0175e1ef02453e'),
    borrowBalanceCurrent: BN.from('0x0edca19edfa534de621b'),
    balanceOfUnderlying: BN.from('0x468a727f89a362ed9fdb'),
    tokenBalance: BN.from('0x8502d85123a800'),
    tokenAllowance: BN.from('0x8502d85123a800'),
  },
  {
    vToken: '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E',
    balanceOf: BN.from('0x115a3cc5cb72c6'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0xd6f3109e087d6631fe88'),
    tokenBalance: BN.from('0x04a12be2351d65639ba911'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffff'),
  },
  {
    vToken: '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x016225b3e2b944410b'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x12362de47784a9c3fad2'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffffe92d738a8db88bffff'),
  },
  {
    vToken: '0xAfc13BC065ABeE838540823431055D2ea52eBA52',
    balanceOf: BN.from('0x01b2d36ea88e5a'),
    borrowBalanceCurrent: BN.from('0x1d47e7c1c3e92ef846'),
    balanceOfUnderlying: BN.from('0x16ee00ec27a4d7bb3c05'),
    tokenBalance: BN.from('0x01ec2c6f7d657b7c0000'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffe9a35bbace13b69bffff'),
  },
  {
    vToken: '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C',
    balanceOf: BN.from('0x0107403d01589d74'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x0e6db7ca6dcbcfc66b85c8'),
    tokenBalance: BN.from('0x1622290c5ab44cf8a2a81c'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffcf44aba726fcfcc7fe2422'),
  },
  {
    vToken: '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe',
    balanceOf: BN.from('0x0af7c2457a'),
    borrowBalanceCurrent: BN.from('0x03281b30a1c48fcf08'),
    balanceOfUnderlying: BN.from('0x9e339617b3d2a0a3'),
    tokenBalance: BN.from('0x152d91cf8f2411e75394'),
    tokenAllowance: BN.from('0x32f422ece5359a9190'),
  },
  {
    vToken: '0x37C28DE42bA3d22217995D146FC684B2326Ede64',
    balanceOf: BN.from('0xb175a2881b3823'),
    borrowBalanceCurrent: BN.from('0x6d2d5e6e0d3c1b6f408f'),
    balanceOfUnderlying: BN.from('0x08b765441d7f55398fdbb9'),
    tokenBalance: BN.from('0x7e37b63bd5a17885f75356ccaf'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffff6af54bcbbd193bd7eccae'),
  },
  {
    vToken: '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9',
    balanceOf: BN.from('0xb1a6f24e960cb1'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x03ee1d736bbc63'),
    tokenBalance: BN.from('0x0b7abc62705050aaad72e1f7547bc4fd5617'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffffffffc018ef9332b14'),
  },
  {
    vToken: '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6',
    balanceOf: BN.from('0x1e4890d1667e12'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x01a354497f6ee36e5db445'),
    tokenBalance: BN.from('0x20a0cf2d039b35c0a0c97c9e'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffb3681f06dacd741d17c9d'),
  },
  {
    vToken: '0x3619bdDc61189F33365CC572DF3a68FB3b316516',
    balanceOf: BN.from('0x11c77582facc34'),
    borrowBalanceCurrent: BN.from('0x25e233441ec90ece2b5c'),
    balanceOfUnderlying: BN.from('0x03e707348a326b46bd24d6'),
    tokenBalance: BN.from('0x02f050fe93a992c1363f963c2831418000'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffff2c011f312a62621bffff'),
  },
  {
    vToken: '0x714db6c38A17883964B68a07d56cE331501d9eb6',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x7ca56f6a76'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x00'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffffa9438a1d29cefffff'),
  },
  {
    vToken: '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x22f04dd08dde193719669da5'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffe7e8f720f631e70c848'),
  },
  {
    vToken: '0x369Fea97f6fB7510755DCA389088d9E2e2819278',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x152d2c6a084fb6fc9862'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffffff21f494c589bffff'),
  },
  {
    vToken: '0xF206af85BC2761c4F876d27Bd474681CfB335EfA',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x00'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
  },
  {
    vToken: '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x00'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
  },
  {
    vToken: '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04',
    balanceOf: BN.from('0x5af4ea1f8aee'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x0182c0e5ae58'),
    tokenBalance: BN.from('0x0de0b59a796c93c0'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0a1eff'),
  },
  {
    vToken: '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x00'),
    tokenAllowance: BN.from('0x00'),
  },
  {
    vToken: '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x00'),
    tokenAllowance: BN.from('0x00'),
  },
];
