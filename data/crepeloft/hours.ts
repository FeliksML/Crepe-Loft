export interface BusinessHours {
  day: string;
  time: string;
}

export const businessHours: BusinessHours[] = [
  { day: 'Monday', time: '5:00 AM - 7:00 PM' },
  { day: 'Tuesday', time: '5:00 AM - 7:00 PM' },
  { day: 'Wednesday', time: '5:00 AM - 7:00 PM' },
  { day: 'Thursday', time: '5:00 AM - 7:00 PM' },
  { day: 'Friday', time: '5:00 AM - 9:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 7:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export const contactInfo = {
  phone: '+1 800 225-7770',
  website: 'www.crepeloft.com',
  address: '123 Magnolia Blvd, Burbank, CA 91502',
};
