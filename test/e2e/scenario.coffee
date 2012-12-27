describe 'WallyApp', () ->
	describe 'MyBlogs View', () ->
		beforeEach( () ->
			browser().navigateTo('../../../../index.html')
		)

		it 'should see both of sobrinas blogs', () ->
			expect(repeater('.blogs li').count()).toBe(2)
			
