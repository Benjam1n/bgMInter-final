import React from 'react';
import Select from 'react-select';
import ETH from "../Assets/Chains/eth.webp";
import BNB from "../Assets/Chains/bnb.svg";
import ARBITRUM from "../Assets/Chains/arbitrum.svg";
import POLYGON from "../Assets/Chains/polygon.svg";
import OPTIMISM from "../Assets/Chains/optimism.svg"
import OPBNB from "../Assets/Chains/opbnb.png";
import BASE from "../Assets/Chains/base.webp";
import MANTA from "../Assets/Chains/manta.svg";
import OKTC from "../Assets/Chains/oktc.svg";
import SOLANA from "../Assets/Chains/solana.png";
import FANTUM from "../Assets/Chains/fantom.png";
import AVA from "../Assets/Chains/avalanche.svg";
import BITGERT from "../Assets/Chains/bitgert.png";
import TRON from "../Assets/Chains/tron.png";
import AURORA from "../Assets/Chains/aurora.svg"
import CONFLUX from "../Assets/Chains/confluxespace.svg"
import LINEA from "../Assets/Chains/linea.webp"
import SCROLL from "../Assets/Chains/scroll.webp"
import MANTLE from "../Assets/Chains/mantle.svg"
import X1TESTNET from "../Assets/Chains/x1testnet.svg"
import Info from "../Assets/info.png"

export let chain;

const options = [
  { value: 'eth', label: 'Ethereum', logo: ETH },
  { value: 'bnb', label: 'BNB Chain TestNet', logo: BNB },
  { value: 'arb', label: 'Arbitrum', logo: ARBITRUM },
  { value: 'polygon', label: 'Polygon', logo: POLYGON },
  { value: 'optimism', label: 'Optimism', logo: OPTIMISM },
  { value: 'opbnb', label: 'Obbnb', logo: OPBNB },
  { value: 'aurora', label: 'Aurora', logo: AURORA },
  { value: 'base', label: 'Base', logo: BASE },
  { value: 'confluxespace', label: 'Conflux eSpace', logo: CONFLUX },
  { value: 'sol', label: 'Solana', logo: SOLANA },
  { value: 'fantum', label: 'Fantum', logo: FANTUM },
  { value: 'ava', label: 'Avalanche', logo: AVA },
  { value: 'manta', label: 'Manta', logo: MANTA },
  { value: 'scroll', label: 'Scroll', logo: SCROLL },
  { value: 'okc', label: 'OKTC', logo: OKTC },
  { value: 'linea', label: 'Linea', logo: LINEA },
  { value: 'bitgert', label: 'Bitgert', logo: BITGERT },
  {value:  'x1testnet',label:'X1 Testnet',logo:X1TESTNET},
  { value: 'mantle', label: 'Mantle', logo: MANTLE },
  { value: 'tron', label: 'Tron', logo: TRON },
];

const ChainsDropdown = () => {
  return (
    <div className="field">
      <label className="label flex items-center text-lg text-white">
                                <h1 className="mb-1 font-bold">
                                Network
                                </h1>
                                <div className="group flex items-center">

                                <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4"/>
                                <span className="hidden text-xs font-bold mb-1 text-blue group-hover:inline border border-white bg-white p-1 ml-2 rounded">Choose a Network</span>
                                </div>
                            </label>
      <Select
        options={options}
        getOptionLabel={option => (
          
          <div className='flex gap-2 font-font-1'>
            <img src={option.logo} alt={option.label} className='sool w-6' />
            {option.label}
            
          </div>
          
        )
      }
        getOptionValue={option => option.value}
        className='w-64'
      />
      
    </div>
  );
};

export default ChainsDropdown;
