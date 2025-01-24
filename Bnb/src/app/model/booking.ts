export interface booking {
  bookingId: string;
  checkinDate: string;
  checkoutDate: string;
  fullname: string;
  email: string;
  phone: string;
  guests: string;
}

export interface bookingResponse{
    message: string //expected message from the server
    bookingId?: string
}