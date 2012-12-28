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
			expect(element(".my-blog").text()).toMatch(/Loud Like Bulls/i)
		describe 'BlogHome View', () ->
			beforeEach( () ->
				element("a:contains('Quiet')").click()
			)
			it 'should be able to transition to the quiet like horses blog home view', () ->
				expect(element(".my-blog").text()).toMatch(/Quiet Like Horses/i)
				element("a:contains('Manage')").click()
				#pause()
				current_path = browser().location().url()
				#this id comes from my fixtures
				expect(current_path).toBe("/myblog/2360593805083673688")
				expect(element(".blog-name-header").text()).toMatch(/Quiet Like Horses/i)

			


			
