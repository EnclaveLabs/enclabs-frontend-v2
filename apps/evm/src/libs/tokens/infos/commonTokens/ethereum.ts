import { NATIVE_TOKEN_ADDRESS } from 'constants/address';
import crvLogo from 'libs/tokens/img/crv.svg';
import crvUsdLogo from 'libs/tokens/img/crvUsd.svg';
import daiLogo from 'libs/tokens/img/dai.svg';
import eBtcLogo from 'libs/tokens/img/eBtc.png';
import eigenLogo from 'libs/tokens/img/eigen.svg';
import ethLogo from 'libs/tokens/img/eth.svg';
import ezEthLogo from 'libs/tokens/img/ezEth.png';
import fraxLogo from 'libs/tokens/img/frax.svg';
import ptWeethLogo from 'libs/tokens/img/ptWeeth.svg';
import pufEthLogo from 'libs/tokens/img/pufEth.svg';
import rsEthLogo from 'libs/tokens/img/rsEth.svg';
import sFraxLogo from 'libs/tokens/img/sFrax.svg';
import sfrxEthLogo from 'libs/tokens/img/sfrxEth.svg';
import tusdLogo from 'libs/tokens/img/tusd.svg';
import usdcLogo from 'libs/tokens/img/usdc.svg';
import usdtLogo from 'libs/tokens/img/usdt.svg';
import wBtcLogo from 'libs/tokens/img/wbtc.svg';
import weEthLogo from 'libs/tokens/img/weEth.svg';
import weEthsLogo from 'libs/tokens/img/weeths.svg';
import wethLogo from 'libs/tokens/img/weth.svg';
import wstEthLogo from 'libs/tokens/img/wstEth.svg';
import xvsLogo from 'libs/tokens/img/xvs.svg';
import type { Token } from 'types';

const ethToken: Token = {
  address: NATIVE_TOKEN_ADDRESS,
  decimals: 18,
  symbol: 'ETH',
  asset: ethLogo,
  isNative: true,
};

export const tokens: Token[] = [
  ethToken,
  {
    address: '0xd3CC9d8f3689B83c91b7B59cAB4946B063EB894A',
    decimals: 18,
    symbol: 'XVS',
    asset: xvsLogo,
  },
  {
    address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
    decimals: 18,
    symbol: 'wstETH',
    asset: wstEthLogo,
  },
  {
    address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    decimals: 8,
    symbol: 'WBTC',
    asset: wBtcLogo,
  },
  {
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    decimals: 18,
    symbol: 'WETH',
    asset: wethLogo,
    tokenWrapped: ethToken,
  },
  {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6,
    symbol: 'USDC',
    asset: usdcLogo,
  },
  {
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    decimals: 6,
    symbol: 'USDT',
    asset: usdtLogo,
  },
  {
    address: '0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E',
    decimals: 18,
    symbol: 'crvUSD',
    asset: crvUsdLogo,
  },
  {
    address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    decimals: 18,
    symbol: 'CRV',
    asset: crvLogo,
  },
  {
    address: '0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee',
    decimals: 18,
    symbol: 'weETH',
    asset: weEthLogo,
  },
  {
    address: '0x0000000000085d4780B73119b644AE5ecd22b376',
    decimals: 18,
    symbol: 'TUSD',
    asset: tusdLogo,
  },
  {
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    decimals: 18,
    symbol: 'DAI',
    asset: daiLogo,
  },
  {
    address: '0x853d955acef822db058eb8505911ed77f175b99e',
    decimals: 18,
    symbol: 'FRAX',
    asset: fraxLogo,
  },
  {
    address: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
    decimals: 18,
    symbol: 'sFRAX',
    asset: sFraxLogo,
  },
  {
    address: '0x6ee2b5e19ecba773a352e5b21415dc419a700d1d',
    decimals: 18,
    symbol: 'PT-weETH-DEC24',
    asset: ptWeethLogo,
  },
  {
    address: '0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7',
    decimals: 18,
    symbol: 'rsETH',
    asset: rsEthLogo,
  },
  {
    address: '0xac3E018457B222d93114458476f3E3416Abbe38F',
    decimals: 18,
    symbol: 'sfrxETH',
    asset: sfrxEthLogo,
  },
  {
    address: '0xbf5495Efe5DB9ce00f80364C8B423567e58d2110',
    decimals: 18,
    symbol: 'ezETH',
    asset: ezEthLogo,
  },
  {
    address: '0x917ceE801a67f933F2e6b33fC0cD1ED2d5909D88',
    decimals: 18,
    symbol: 'weETHs',
    asset: weEthsLogo,
  },
  {
    address: '0xD9A442856C234a39a81a089C06451EBAa4306a72',
    decimals: 18,
    symbol: 'pufETH',
    asset: pufEthLogo,
  },
  {
    address: '0xec53bf9167f50cdeb3ae105f56099aaab9061f83',
    decimals: 18,
    symbol: 'EIGEN',
    asset: eigenLogo,
  },
  {
    address: '0x657e8c867d8b37dcc18fa4caead9c45eb088c642',
    decimals: 8,
    symbol: 'eBTC',
    asset: eBtcLogo,
  },
];
