export type OrderType =
	| {
			_id: string;
			userDetails: {
				name: string;
				street: string;
				additional: string;
				city: string;
				email: string;
			};
			cart: {
				itemId: string;
				itemCount: number;
			}[];
			paymentMethod: string;
			total: number;
			date: string;
	  }
	| undefined;
