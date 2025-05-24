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
        <div className="basis-1/2 md:basis-1/4 text-center">
          <img src={money} alt="" className="w-20 mx-auto mb-2" />
          <h1>APPLY LOAN</h1>
        </div>

        <div className="basis-1/2 md:basis-1/4 text-center">
          <img src={calender} alt="" className="w-20 mx-auto mb-2" />
          <h1>AUTO_PAYMENT</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center">
          <img src={cardpayment} alt="" className="w-20 mx-auto mb-2" />
          <h1>PAY_TO_CARD</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center">
          <img src={payment} alt="" className="w-20 mx-auto mb-2" />
          <h1>BANK_TO_BANK</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center">
          <img src={securepayment} alt="" className="w-20 mx-auto mb-2" />
          <h1>SECURE_CARDS</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center">
          <img src={cashpayment} alt="" className="w-20 mx-auto mb-2" />
          <h1>CASH_PAYMENT</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center">
          <img src={mobile} alt="" className="w-20 mx-auto mb-2" />
          <h1>UPI_PAYMENT</h1>
        </div>
        <div className="basis-1/2 md:basis-1/4 text-center">
          <img src={atm} alt="" className="w-20 mx-auto mb-2" />
          <h1>ADD_CARDS</h1>
        </div>
      </div>
    </>
  );
}

export default Service