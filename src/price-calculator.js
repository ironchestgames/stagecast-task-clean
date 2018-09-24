var USER_TYPE_NORMAL = 0;
var USER_TYPE_COMPANY = 1;
var PRODUCT_TYPE_NEW = 0;
var PRODUCT_TYPE_OLD = 1;

var productTypeAdditionalPrices = {
	[PRODUCT_TYPE_NEW]: 25,
	[PRODUCT_TYPE_OLD]: 35,
}

var userTypeDiscounts = {
	[USER_TYPE_NORMAL]: 0,
	[USER_TYPE_COMPANY]: 5,
};

var ENDDATE_DISCOUNT = 10;

// price, the price of the product
var calculatePrice = function (userType, productType, price, publishedDate) {

	var enddateDiscount = 0;
	var productTypeAdditionalPrice = productTypeAdditionalPrices[productType];
	var userTypeDiscount = userTypeDiscounts[userType];

	// calculate enddateDiscount
	if (productType == PRODUCT_TYPE_NEW &&
			publishedDate.toDateString() == new Date().toDateString()) {
		enddateDiscount = ENDDATE_DISCOUNT;
	}

	try	{
		return price + productTypeAdditionalPrice - (userTypeDiscount + enddateDiscount);
	}	catch (ex)	{
			console.log(ex);
	}
	return 0;
}
