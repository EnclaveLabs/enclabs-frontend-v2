import { theme } from 'theme';

export const tokenType = {
    LRT: [
         ""
    ],
    PT: [
        "0xd1927b1FF6d2EE2Cb3A6B06AB4230726B4FFc816", // pt pump 26dec
        "0x2161a68cD094F47a4f86E973ff5f4af7D80Bc78d", // pt solv 26dec
        "0x2d16b3CC6b0E680e91b1A1788182Beb23ccc4078", // pt unibtc 26dec
        "0xb83D10c4CF7b4f14E3A745a25C52619B344B0B2B", // pt LBTC 26dec
        "0xe3248D189E8d02AF31B9516612fD855e959B54A5", // pt ebtc 26dec
        "0xb33808ea0e883138680BA29311a220A7377cdb92", // pt weETH-26JUN2025
    ],
    Wrapped: [
        "0xd04b37878C8dEEaEE4Ef38830e78F4BA22c7482D", // Wbtc
        "0x82af49447d8a07e3bd95bd0d56f35241523fbab1", // WETH
        "0xC024e43805aE16EC7bb8a572F4D4972489cfdc6E", // cbbtc
        "0x5979D7b546E38E414F7E9822514be443A4800529", // wstETH
        "0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe", // weETH
    ],
    aToken: [
        "0xdf500703Bc7dbC89937B40d1142acb317B34648b", // aEthcbBTC
        "0xccE9Fa110A04979eEd2E7eb51E50d6Dac3828227", // aEthWBTC
    ],
    Stable: [
        "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9", // USDT
        "0xaf88d065e77c8cc2239327c5edb3a432268e5831", // USDC
    ],
};

export const tokenTypeInfo: {
    [key: string]: {
        color: string;
        borderColor: string;
        backgroundColor: string;
        hoverColor: string;
        buttonClassName: string;
        shadowClassName: string;
        getUrl: (tokenAddress: string, chain: string) => string;
    };
} = {
    LRT: {
        color: theme.colors.tagTextOrange, // Orange
        borderColor: theme.colors.tagTextOrange,
        backgroundColor: theme.colors.tagBgOrange,
        hoverColor: theme.colors.hoverOrange,
        buttonClassName: 'bg-tagTextOrange bg-tagTextOrange border-tagTextOrange hover:border-tagTextOrange hover:bg-hoverOrange text-lightBlack',
        shadowClassName: 'shadow-md shadow-hoverOrange',
        getUrl:  (tokenAddress: string, chain: string) => 
            `https://app.uniswap.org/swap?chain=${chain}&inputCurrency=${tokenAddress}`,
    },
    PT: {
        color: theme.colors.tagTextGreen, // Green
        borderColor: theme.colors.tagTextGreen,
        backgroundColor: theme.colors.tagBgGreen,
        hoverColor: theme.colors.hoverGreen,
        buttonClassName: 'bg-tagTextGreen bg-tagTextGreen border-tagTextGreen hover:border-tagTextGreen hover:bg-hoverGreen text-lightBlack',
        shadowClassName: 'shadow-md shadow-hoverGreen',
        getUrl:  (tokenAddress: string, chain: string) => 
            `https://app.pendle.finance/trade/markets/${tokenAddress}/swap?view=pt&chain=${chain}`,
    },
    Wrapped: {
        color: theme.colors.tagTextYellow, // Yellow
        borderColor: theme.colors.tagTextYellow,
        backgroundColor: theme.colors.tagBgYellow,
        hoverColor: theme.colors.hoverYellow,
        buttonClassName: 'bg-tagTextYellow bg-tagTextYellow border-tagTextYellow hover:border-tagTextYellow hover:bg-hoverYellow text-lightBlack',
        shadowClassName: 'shadow-md shadow-hoverYellow',
        getUrl: (tokenAddress: string, chain: string) =>
            `https://app.uniswap.org/swap?chain=${chain}&inputCurrency=${tokenAddress}`,
    },
    aToken: {
        color: theme.colors.tagTextRed, // Red
        borderColor: theme.colors.tagTextRed,
        backgroundColor: theme.colors.tagBgRed,
        hoverColor: theme.colors.hoverRed,
        buttonClassName: 'bg-tagTextRed bg-tagTextRed border-tagTextRed hover:border-tagTextRed hover:bg-hoverRed text-lightBlack',
        shadowClassName: 'shadow-md shadow-hoverRed',
        getUrl:  (tokenAddress: string, chain: string) => 
            ``,
    },
    Stable: {
        color: theme.colors.tagTextBlue, // Blue
        borderColor: theme.colors.tagTextBlue,
        backgroundColor: theme.colors.tagBgBlue,
        hoverColor: theme.colors.hoverBlue,
        buttonClassName: 'bg-tagTextBlue bg-tagTextBlue border-tagTextBlue hover:border-tagTextBlue hover:bg-hoverBlue text-lightBlack',
        shadowClassName: 'shadow-md shadow-hoverBlue',
        getUrl:  (tokenAddress: string, chain: string) => 
            `https://app.uniswap.org/swap?chain=${chain}&inputCurrency=${tokenAddress}`,
    },
    Unknown: {
        color: theme.colors.tagTextGrey,
        borderColor: theme.colors.tagTextRed,
        backgroundColor: theme.colors.tagBgGrey,
        hoverColor: theme.colors.hoverGrey,
        buttonClassName: 'bg-tagTextGrey bg-tagTextGrey border-tagTextGrey hover:border-tagTextGrey hover:bg-hoverGrey text-lightBlack',
        shadowClassName: 'shadow-md shadow-hoverGrey',
        getUrl:  (tokenAddress: string, chain: string) => 
            `https://app.uniswap.org/swap?chain=${chain}&inputCurrency=${tokenAddress}`,
    }
};