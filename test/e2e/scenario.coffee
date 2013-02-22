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
				element("a:contains('Manage')").click()
			)
			it 'should be able to transition to the quiet like horses blog home view', () ->
				expect(element(".blog-name-header").text()).toMatch(/Quiet Like Horses/i)
				current_path = browser().location().url()
				#this id comes from my fixtures
				expect(current_path).toBe("/myblog/2360593805083673688")
				expect(element(".blog-name-header").text()).toMatch(/Quiet Like Horses/i)
			it 'should contain a list of posts', () ->
				expect(repeater('.posts li').count()).toBeGreaterThan(820)
			it 'should select a post when i click on one of the posts in the list', () ->
				element("a:contains('Happy Holidays!')").click()
				expect(element(".post-title").text()).toBe('Happy Holidays!')
			it 'should filter the post list as the user types into the search box', () ->
				expect(repeater('.posts li').count()).toBeGreaterThan(820)
				input('query').enter('rings')
				expect(repeater('.posts li').count()).toBeLessThan(80)
			# it 'can sort the posts by comments', () ->
			# 	expect(element("a:contains('Happy Holidays!')")).toBe(3)
				#pause()
				# element('comments').click()
				# postSortedPost = element("a:contains('Happy Holidays!')")
				# expect(postSortedPost.position()).toNotBe(preSortedPost.position())


				# current_path = browser().location().url()
				# expect(current_path).toBe("/myblog/2360593805083673688/posts/1")



			


			
