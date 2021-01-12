import Moment from 'moment-timezone'; 
class Order {
	constructor(id , items , totalAmount , date ){ 

		this.id  =id ;
		this.items = items ;
		this.totalAmount = totalAmount ;
		this.date = date ;


	}

	get readableDate (){
		//return this.date.toLocaleDateString('en-EN' , {
		//	year: 'numeric' ,
		//	month: 'long' ,
		//	day: 'numeric',
		//	hour: '2-digit' ,
		//	minute: '2-digit'

		//});
		return Moment(this.date).format('YYYY/MM/DD , hh:mm')
	}
}


export default Order  ;
