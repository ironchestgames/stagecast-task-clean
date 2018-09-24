var USER_TYPE_NORMAL = 0;
var USER_TYPE_COMPANY = 1;
var PRODUCT_TYPE_NEW = 0;
var PRODUCT_TYPE_OLD = 1;

var productTypeAdditionalPrices = {
	[PRODUCT_TYPE_NEW]: 25,
	[PRODUCT_TYPE_OLD]: 35,
}

// price, the price of the product
var calculatePrice = function (userType, productType, price, publishedDate) {

	var productTypeAdditionalPrice = productTypeAdditionalPrices[productType];

	try	{
		switch (userType) {
		case USER_TYPE_NORMAL:
			if (productType == PRODUCT_TYPE_NEW) {
				var enddateDiscount = 0;
				if (publishedDate.toDateString() == new Date().toDateString()) enddateDiscount = 10;

				return price + productTypeAdditionalPrice - enddateDiscount;
			} else if (productType == PRODUCT_TYPE_OLD) {
				return price + productTypeAdditionalPrice - 0;
			}
			break;
		case USER_TYPE_COMPANY:
			if (productType == PRODUCT_TYPE_NEW) {
				if (publishedDate.toDateString() === new Date().toDateString()) {
						return price + productTypeAdditionalPrice - 15;// Enddate discount and company discount
				}

				return price + productTypeAdditionalPrice - 5;// Only company discount
			} else if (productType == PRODUCT_TYPE_OLD) {
				return price + productTypeAdditionalPrice - 5;
			}
			break;
		}
	}	catch (ex)	{
			console.log(ex);
	}
	return 0;
}
