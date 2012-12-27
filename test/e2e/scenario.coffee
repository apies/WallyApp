describe 'WallyApp', () ->
	describe 'MyBlogs View', () ->
		beforeEach( () ->
			browser().navigateTo('../../../../index.html')
		)

		it 'should see both of sobrinas blogs', () ->
			expect(repeater('.blogs li').count()).toBe(2)
		it 'should be able to select one of sobrinas blogs', () ->
			element("a:contains('Loud')").click()
			expect(element(".active").text()).toMatch(/Loud Like Bulls/i)
			
