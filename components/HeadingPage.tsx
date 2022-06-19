import React from "react";
import Link from "next/link";

export const HeadingPage = () => {
  return (
    <div className="h-[27px] px-[16px] py-[4px] border-[1px] border-[#eff2f5]">
      <div className="px-[16px] flex justify-between">
        <div className="flex space-x-[16px]">
          <span>
            Cryptos:
            <span className="text-[#3861fb] ml-[16px]">19,929</span>
          </span>
          <span>
            Exchanges:
            <span className="text-[#3861fb] ml-[16px]">528</span>
          </span>
          <span>
            Market Cap:
            <span className="text-[#3861fb] ml-[16px]">
              $856,398,936,606.636
            </span>
          </span>
          <span>
            24h Vol:
            <span className="text-[#3861fb] ml-[16px]">$93,756,868,248.76</span>
          </span>
          <span>
            Dominance:
            <span className="text-[#3861fb] ml-[16px]">
              BTC: 43.1% ETH: 14.6%
            </span>
          </span>
          <span>
            ETH Gas:
            <span className="text-[#3861fb] ml-[16px]"></span>
            18 Gwei
          </span>
        </div>
        <div className="flex space-x-[6px]">
          <div>English</div>
          <div>USD</div>
        </div>
      </div>
    </div>
  );
};
