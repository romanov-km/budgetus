import React from 'react';
import './BankCard.scss';

interface BankCardProps {
  bankName: string;
  amount: string;
  icon?: React.ReactNode;
  actionIcon?: React.ReactNode;
  onClick?: () => void;
}

const BankCard: React.FC<BankCardProps> = ({ bankName, amount, icon, actionIcon, onClick}) => {
  return (
    <div className="bank-card" onClick={onClick}>
      <div className="bank-card__top">
        <div className="bank-card__logo">
          {icon && <span className="bank-card__icon">{icon}</span>}
          <span className="bank-card__name">{bankName}</span>
        </div>
        <div className="bank-card__action">
          {actionIcon}
        </div>
      </div>

      <div className="bank-card__bottom">
        <div className="bank-card__amount">{amount}</div>
        <div className="bank-card__label">баланс</div>
      </div>
    </div>
  );
};

export default BankCard;
