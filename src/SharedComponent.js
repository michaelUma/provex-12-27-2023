// SharedComponent.js
import React from 'react';
import { getUsdtTrc20Data, getUsdtErc20Data, getBtcData } from './API';

const SharedComponent = () => {
  const handleUsdtTrc20Click = async () => {
    try {
      const response = await getUsdtTrc20Data();
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching USDT TRC20 data', error);
    }
  };

  const handleUsdtErc20Click = async () => {
    try {
      const response = await getUsdtErc20Data();
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching USDT ERC20 data', error);
    }
  };

  const handleBtcClick = async () => {
    try {
      const response = await getBtcData();
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching BTC data', error);
    }
  };

  return (
    <div>
      <button onClick={handleUsdtTrc20Click}>Get USDT TRC20 Data</button>
      <button onClick={handleUsdtErc20Click}>Get USDT ERC20 Data</button>
      <button onClick={handleBtcClick}>Get BTC Data</button>
    </div>
  );
};

export default SharedComponent;
