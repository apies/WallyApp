require 'json'
require 'fileutils'
#require 'dir'

puts 

posts = JSON.parse(File.read(File.expand_path('./app/api/blogs/posts_list.json')))
#grouped_posts = posts.group_by {|post| post['id'] }

# grouped_posts.each do |id, posts|
# 	puts "#{id}:#{posts.count}"
# 	posts.each {|p| puts p['id']}
# end


# ids = posts.map {|post| post['id']}
# puts ids.uniq.count

# n = 0
posts.each do |post|
	File.open("#{File.expand_path('./app/api/blogs/')}/2360593805083673688/posts/#{post['id']}.json", "w") do |file|
		file.write(post.to_json)
		file.close
	end
end