import { Expense } from "app/model/expense";
import moment from 'moment';

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  export const getUniqueMonths = (data: any[]) => {
    const months = data.map((item) => {
      const date = moment(item.createTime, 'DD-MM-YYY').toDate();
      const monthName = date.toLocaleString('default', { month: 'short' }); 
      const year = date.getFullYear();
      return `${monthName} ${year}`;
    });
    
    // Return unique months
    return Array.from(new Set(months));
  };