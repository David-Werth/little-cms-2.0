export type ReservationType =
	| {
			_id: string;
			name: string;
			date: string;
			time: string;
			guests: number;
			occasion: string;
			email: string;
	  }
	| undefined;
