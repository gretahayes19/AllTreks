# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
user1 = User.create(firstname: "Greta", lastname: "Hayes", email: "greta@hayes.com", password: "Ginger125")
user2 = User.create(firstname: "Anna", lastname: "Hayes", email: "anna@hayes.com", password: "Ginger125")
user3 = User.create(firstname: "Helen", lastname: "Bright", email: "helen@bright.com", password: "Ginger125")
user4 = User.create(firstname: "Kelsey", lastname: "Heroux", email: "kelsey@heroux.com", password: "Ginger125")


Park.destroy_all

park1 = Park.create(name: "North Cascades National Park", 
                    description: "North Cascades National Park is a rugged, wilderness of conifer trees. The park features hiking trails along tree covered mountains that seem to stretch on forever, alpine meadows, impressive glaciers, the Skagit River, and stunning views of alpine lakes like Lake Ann or Diablo Lake. Scenic drives along the North Cascades Highway, boating on Ross Lake, climbing at Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak, visiting the Stehekin Valley at the northern tip of Lake Chelan, and access to viewing wildlife such as grizzly bears, beaver, gray wolves, and over than 200 bird species are just some of your options.", 
                    contact: "206-555-5555", park_type: "National", acreage: 504781, 
                    about: "Looking for a great trail in North Cascades National Park, Washington? AllTreks has many great hiking trails, trail running trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Gearing up for a challenge? There are 18 hard trails in North Cascades National Park ranging from 6.9 to 35.1 miles and from 606 to 9,101 feet above sea level. Start checking them out and you'll be out on the trail in no time!")