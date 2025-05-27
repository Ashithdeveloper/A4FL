import React from 'react';
import atm from '../../assets/atm-card.png';
import calender from '../../assets/calendar.png';
import cardpayment from '../../assets/card-payment.png';
import cashpayment from '../../assets/cash-payment.png';
import mobile from '../../assets/mobile-banking.png';
import money from '../../assets/money.png';
import payment from '../../assets/payment.png';
import securepayment from '../../assets/secure-payment.png';


const Service = () => {
  return (
    <>
      <div className="flex flex-wrap mx-10 my-10 gap-y-6">
        {/* Each item takes 1/4 of the row (4 per row) */}
        <div className="basis-1/2 md:basis-1/4 text-center py-6 hover:cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <img src={money} alt="" className="w-20 mx-auto mb-2 " />
          <h1>APPLY LOAN</h1>
        </div>

        <div className="basis-1/2 md:basis-1/4 text-center py-6 hover:cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <img src={calender} alt="" className="w-20 mx-auto mb-2" />
          <h1>AUTO_PAYMENT</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center py-6 hover:cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <img src={cardpayment} alt="" className="w-20 mx-auto mb-2" />
          <h1>PAY_TO_CARD</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center py-6 hover:cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <img src={payment} alt="" className="w-20 mx-auto mb-2" />
          <h1>BANK_TO_BANK</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center py-6 hover:cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <img src={securepayment} alt="" className="w-20 mx-auto mb-2" />
          <h1>SECURE_CARDS</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center py-6 hover:cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <img src={cashpayment} alt="" className="w-20 mx-auto mb-2" />
          <h1>CASH_PAYMENT</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center opy-6 hover:cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <img src={mobile} alt="" className="w-20 mx-auto mb-2" />
          <h1>UPI_PAYMENT</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center py-6 hover:cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <img src={atm} alt="" className="w-20 mx-auto mb-2" />
          <h1>ADD_CARDS</h1>
        </div>
      </div>
    </>
  );
}

export default Service