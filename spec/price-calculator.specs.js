describe('price calculator', function(){

	it('should calc price right for new product, today', function(){
		var userType = 0;
		var productType = 0;
		var price = 1;
		var publishedDate = new Date();

		var expected = 16;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right for old product, today', function(){
		var userType = 0;
		var productType = 1;
		var price = 1;
		var publishedDate = new Date();

		var expected = 36;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right, new product and company discount, today', function(){
		var userType = 1;
		var productType = 0;
		var price = 1;
		var publishedDate = new Date();

		var expected = 11;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right, old product and company discount, today', function(){
		var userType = 1;
		var productType = 1;
		var price = 1;
		var publishedDate = new Date();

		var expected = 31;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right for new product, yesterday', function(){
		var userType = 0;
		var productType = 0;
		var price = 1;
		var publishedDate = new Date();
		publishedDate.setDate(publishedDate.getDate() - 1); // NOTE: set to yesterday

		var expected = 26;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right for old product, yesterday', function(){
		var userType = 0;
		var productType = 1;
		var price = 1;
		var publishedDate = new Date();
		publishedDate.setDate(publishedDate.getDate() - 1); // NOTE: set to yesterday

		var expected = 36;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right, new product and company discount, yesterday', function(){
		var userType = 1;
		var productType = 0;
		var price = 1;
		var publishedDate = new Date();
		publishedDate.setDate(publishedDate.getDate() - 1); // NOTE: set to yesterday

		var expected = 21;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right, old product and company discount, yesterday', function(){
		var userType = 1;
		var productType = 1;
		var price = 1;
		var publishedDate = new Date();
		publishedDate.setDate(publishedDate.getDate() - 1); // NOTE: set to yesterday

		var expected = 31;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

});