# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
demo = User.create(firstname: "Demo", lastname: "User", email: "demo@alltreks.com", password: "password123")
user1 = User.create(firstname: "Greta", lastname: "Hayes", email: "greta@hayes.com", password: "Ginger125")
user2 = User.create(firstname: "Anna", lastname: "Hayes", email: "anna@hayes.com", password: "Ginger125")
user3 = User.create(firstname: "Helen", lastname: "Bright", email: "helen@bright.com", password: "Ginger125")
user4 = User.create(firstname: "Kelsey", lastname: "Heroux", email: "kelsey@heroux.com", password: "Ginger125")


Park.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('parks')
park1 = Park.create(name: "North Cascades National Park", 
                    description: "North Cascades National Park is a rugged, wilderness of conifer trees. The park features hiking trails along tree covered mountains that seem to stretch on forever, alpine meadows, impressive glaciers, the Skagit River, and stunning views of alpine lakes like Lake Ann or Diablo Lake. Scenic drives along the North Cascades Highway, boating on Ross Lake, climbing at Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak, visiting the Stehekin Valley at the northern tip of Lake Chelan, and access to viewing wildlife such as grizzly bears, beaver, gray wolves, and over than 200 bird species are just some of your options.", 
                    contact: "206-555-5555", park_type: "National", acreage: 504781, lat: 48.7718, lng: -121.2985,
                    about: "Looking for a great trail in North Cascades National Park, Washington? AllTreks has many great hiking trails, trail running trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Gearing up for a challenge? There are 18 hard trails in North Cascades National Park ranging from 6.9 to 35.1 miles and from 606 to 9,101 feet above sea level. Start checking them out and you'll be out on the trail in no time!")


Hike.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('hikes')
hike1 = Hike.create(name: "Blue Lake Trail", 
                    description: "Blue Lake Trail is a 4.6 mile heavily trafficked out and back trail located near Chelan, Washington that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from July until November. Dogs are also able to use this trail but must be kept on leash.",
                    difficulty: "moderate", 
                    distance: 4.6, 
                    route_type: "Out & back",
      
                    park_id: park1.id)

hike1_cover = open("https://all-treks-seeds.s3.amazonaws.com/IMG_1113.jpeg")
hike1.coverPhoto.attach(io: hike1_cover, filename: "IMG_1113.jpeg")

hike2 = Hike.create(name: "Cascade Pass and Sahale Arm Trail", 
                    description: "Cascade Pass and Sahale Arm Trail is a 11.6 mile heavily trafficked out and back trail located near Rockport, Washington that features a lake and is rated as difficult. The trail is primarily used for hiking and is best used from June until October.",
                    difficulty: "hard", 
                    distance: 11.6, 
                    route_type: "Out & back",

                    park_id: park1.id)

hike2_cover = open("https://all-treks-seeds.s3.amazonaws.com/IMG_1037.jpeg")
hike2.coverPhoto.attach(io: hike2_cover, filename: "IMG_1037.jpeg")


hike3 = Hike.create(name: "Cascade Pass Trail", 
                    description: "Cascade Pass Trail is a 6.5 mile heavily trafficked out and back trail located near Rockport, Washington that features a great forest setting and is rated as moderate. The trail is primarily used for hiking and is best used from June until September.",
                    difficulty: "moderate", 
                    distance: 6.5, 
                    route_type: "Out & back",

                    park_id: park1.id)

hike3_cover = open("https://all-treks-seeds.s3.amazonaws.com/IMG_1818.jpeg")
hike3.coverPhoto.attach(io: hike3_cover, filename: "IMG_1818.jpeg")


hike4 = Hike.create(name: "Sourdough Mountain Trail", 
                    description: "Sourdough Mountain Trail is a 11.2 mile moderately trafficked out and back trail located near Marblemount, Washington that features a river and is rated as difficult. The trail is primarily used for hiking, nature trips, and bird watching and is best used from May until October.",
                    difficulty: "hard", 
                    distance: 11.2, 
                    route_type: "Out & back",

                    park_id: park1.id)

hike4_cover = open("https://all-treks-seeds.s3.amazonaws.com/IMG_1655.jpeg")
hike4.coverPhoto.attach(io: hike4_cover, filename: "IMG_1655.jpeg")