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
user3 = User.create(firstname: "Helen", lastname: "Sturgis-Bright", email: "helen@bright.com", password: "Ginger125")
user4 = User.create(firstname: "Kelsey", lastname: "Heroux", email: "kelsey@heroux.com", password: "Ginger125")


Park.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('parks')
park1 = Park.create(name: "North Cascades National Park", 
                    description: "North Cascades National Park is a rugged, wilderness of conifer trees. The park features hiking trails along tree covered mountains that seem to stretch on forever, alpine meadows, impressive glaciers, the Skagit River, and stunning views of alpine lakes like Lake Ann or Diablo Lake. Scenic drives along the North Cascades Highway, boating on Ross Lake, climbing at Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak, visiting the Stehekin Valley at the northern tip of Lake Chelan, and access to viewing wildlife such as grizzly bears, beaver, gray wolves, and over than 200 bird species are just some of your options.", 
                    contact: "206-555-5555", park_type: "National", acreage: 504781, lat: 48.7718, lng: -121.2985,
                    about: "Looking for a great trail in North Cascades National Park, Washington? AllTreks has many great hiking trails, trail running trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Gearing up for a challenge? There are 18 hard trails in North Cascades National Park ranging from 6.9 to 35.1 miles and from 606 to 9,101 feet above sea level. Start checking them out and you'll be out on the trail in no time!")
park2 = Park.create(name: "Acadia National Park", 
                    description: "Acadia National Park attracts more than two million visitors each year. With many different facilities and attractions in the park, there is something to interest everyone. Hiking and mountain biking are among the most popular activities in Acadia National Park. There are freshwater, estuary, forest, and intertidal habitats and 158 miles of hiking trails.", 
                    contact: "207-555-5555", park_type: "National", acreage: 49076, lat: 44.3386, lng: -68.2733,
                    about: "Looking for a great trail in Acadia National Park, Maine? AllTreks has many great hiking trails, trail running trails, mountain biking trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Ready for some activity? There are 124 moderate trails in Acadia National Park ranging from 0.9 to 27.1 miles and from 16 to 1,525 feet above sea level. Start checking them out and you'll be out on the trail in no time!")


Hike.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('hikes')

#north cascades
hike1 = Hike.create(name: "Blue Lake Trail", 
                    summary: "Blue Lake Trail is a 4.6 mile heavily trafficked out and back trail located near Chelan, Washington that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from July until November. Dogs are also able to use this trail but must be kept on leash.",
                    description: "A moderately easy and extremely beautiful hike through sub-alpine forest to a iridescent blue lake with water as clear as gin. Sit and watch the native cutthroat trout feed as you sit atop one of many boulders that line the lake's banks.",
                    difficulty: "moderate", 
                    distance: 4.6, 
                    route_type: "Out & back",
                    lat: 48.51979,
                    lng: -120.67439,
                    elevation: 921,
                    park_id: park1.id)

hike1_cover = URI.open("https://all-treks-seeds.s3.amazonaws.com/IMG_1113.jpeg")
hike1.coverPhoto.attach(io: hike1_cover, filename: "IMG_1113.jpeg")

hike2 = Hike.create(name: "Cascade Pass and Sahale Arm Trail", 
                    summary: "Cascade Pass and Sahale Arm Trail is a 11.6 mile heavily trafficked out and back trail located near Rockport, Washington that features a lake and is rated as difficult. The trail is primarily used for hiking and is best used from June until October.",
                    description: "The first several miles of this hike were some relatively easy switchbacks. The wildlife is beautiful and users may see marmots, mountain goats, a black bear, pica, mule deer, and grouse.",
                    difficulty: "hard", 
                    distance: 11.6, 
                    route_type: "Out & back",
                    lat: 48.47553,
                    lng: -121.07498,
                    elevation: 4083,
                    park_id: park1.id)

hike2_cover =  URI.open("https://all-treks-seeds.s3.amazonaws.com/IMG_1037.jpeg")
hike2.coverPhoto.attach(io: hike2_cover, filename: "IMG_1037.jpeg")


hike3 = Hike.create(name: "Cascade Pass Trail", 
                    summary: "Cascade Pass Trail is a 6.5 mile heavily trafficked out and back trail located near Rockport, Washington that features a great forest setting and is rated as moderate. The trail is primarily used for hiking and is best used from June until September.",
                    description: "The Cascade Pass Trail is a great day hike with spectacular views of peaks and glaciers. The trail climbs steadily to the pass, with views of peaks such as Eldorado, Johannesburg, Magic, Mixup and McGregor. This trail provides the shortest and easiest access in the park to the alpine environment. As a result, Cascade Pass is the most popular day hike in the national park and can be quite busy on summer weekends.",
                    difficulty: "moderate", 
                    distance: 6.5, 
                    route_type: "Out & back",
                    lat: 48.47497,
                    lng: -121.07505,
                    elevation: 1781,
                    park_id: park1.id)

hike3_cover =  URI.open("https://all-treks-seeds.s3.amazonaws.com/IMG_1818.jpeg")
hike3.coverPhoto.attach(io: hike3_cover, filename: "IMG_1818.jpeg")


hike4 = Hike.create(name: "Sourdough Mountain Trail", 
                    summary: "Sourdough Mountain Trail is a 11.2 mile moderately trafficked out and back trail located near Marblemount, Washington that features a river and is rated as difficult. The trail is primarily used for hiking, nature trips, and bird watching and is best used from May until October.",
                    description: "Sourdough is one of the oldest established U.S. Forest Service lookout sites and has been a muse for poets including Philip Whalen and Gary Snyder. The views from the summit of the North Cascades and Hozomeen are spectacular but you’ll have to climb nearly 5,000′ to get there.",
                    difficulty: "hard", 
                    distance: 11.2, 
                    route_type: "Out & back",
                    lat: 48.71784,
                    lng: -121.14496,
                    elevation: 5985,
                    park_id: park1.id)

hike4_cover =  URI.open("https://all-treks-seeds.s3.amazonaws.com/IMG_1655.jpeg")
hike4.coverPhoto.attach(io: hike4_cover, filename: "IMG_1655.jpeg")


# acadia
hike5 = Hike.create(name: "The Beehive Loop Trail", 
                    summary: "The Beehive Loop Trail is a 1.4 mile heavily trafficked loop trail located near Bar Harbor, Maine that features a lake and is rated as difficult. The trail is primarily used for hiking and is best used from May until October.",
                    description: "The Beehive Trail is a very popular moderate to difficult out and back or loop trail using iron rungs on ledges of exposed cliffs, and is very steep, offering spectacular views of Sand Beach and the surrounding area at Acadia National Park.  Start just north of and across the One way loop road from the Sand Beach parking area, climbing steps and through the forest to some exposed fairly flat rocky areas and a tall cairn of rocks marking your next steps.  Be sure to look for the light blue (Carolina Blue) trail markers as the trail can be quickly lost in your enthusiasm to scale the cliffs.  Stay on trail as strategically placed iron rungs, bridges and hand and foot holds take the technical part out of the climb.  Once at the top you can opt to go down the back side and make it a loop or go down the way you came.",
                    difficulty: "hard", 
                    distance: 1.4, 
                    route_type: "Loop",
                    lat: 44.333805,
                    lng: -68.188822,
                    elevation: 488,
                    park_id: park2.id)

hike5_cover = URI.open("https://all-treks-seeds.s3.amazonaws.com/acadia4.png")
hike5.coverPhoto.attach(io: hike5_cover, filename: "acadia4.png")

hike6 = Hike.create(name: "Cadillac North Ridge Trail", 
                    summary: "Cadillac North Ridge Trail is a 4 mile heavily trafficked out and back trail located near Bar Harbor, Maine that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.",
                    description: "Acadia National Park charges a fee to enter. Fees are $30 per vehicle or $25 per motorcycle. If you are entering on foot, horse, or bike the fee is $15 per person. You can also purchase a park specific annual pass for $55.",
                    difficulty: "moderate", 
                    distance: 4, 
                    route_type: "Out & back",
                    lat: 44.366689,
                    lng: -68.230524,
                    elevation: 1118,
                    park_id: park2.id)

hike6_cover =  URI.open("https://all-treks-seeds.s3.amazonaws.com/acadia3.png")
hike6.coverPhoto.attach(io: hike6_cover, filename: "acadia3.png")


hike7 = Hike.create(name: "Jordan Pond Full Loop Trail", 
                    summary: "Jordan Pond Full Loop Trail is a 3.4 mile heavily trafficked loop trail located near Mount Desert, Maine that features a lake and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.",
                    description: "Great views on a lot of the walk around the lake. This trail can get crowded at points, especially on the parts where there were narrower wooden walkways for paths. Go early, as it can be difficult to find a parking spot due to its traffic. The backdrop of the pond and bubbles are beautiful as you meander through the woods along the pond. The boardwalks are unique, and outside of a couple muddy spots, a trail that is very enjoyable and easy.",
                    difficulty: "moderate", 
                    distance: 3.4, 
                    route_type: "Loop",
                    lat: 44.334128,
                    lng: -68.257149,
                    elevation: 95,
                    park_id: park2.id)

hike7_cover =  URI.open("https://all-treks-seeds.s3.amazonaws.com/acadia2.png")
hike7.coverPhoto.attach(io: hike7_cover, filename: "acadia2.png")


hike8 = Hike.create(name: "Thunder Hole to Sand Beach", 
                    summary: "Thunder Hole to Sand Beach is a 1.7 mile heavily trafficked loop trail located near Bar Harbor, Maine that offers the chance to see wildlife and is good for all skill levels. The trail is primarily used for walking, nature trips, and bird watching and is best used from April until October.",
                    description: "Thunder Hole is the place in Acadia National Park to experience the thunder of the sea against the rocky shores of Maine! On calm days you may wonder what the fuss is all about. But wait until the waves kick up a few notches. Thunder Hole is a small inlet, naturally carved out of the rocks, where the waves roll into. At the end of this inlet, down low, is a small cavern where, when the rush of the wave arrives, air and water is forced out like a clap of distant thunder. Water may spout as high as 40 feet with a thunderous roar! Hence the name: Thunder Hole.",
                    difficulty: "easy", 
                    distance: 1.7, 
                    route_type: "Loop",
                    lat: 44.320732,
                    lng: -68.188341,
                    elevation: 180,
                    park_id: park2.id)

hike8_cover =  URI.open("https://all-treks-seeds.s3.amazonaws.com/acadia1.jpg")
hike8.coverPhoto.attach(io: hike8_cover, filename: "acadia1.jpg")

Review.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('reviews')

#cascades
review1 = Review.create(rating: 4, review_text: "This hike was just ok! I got tired halfway through and forgot water", activity_date: "2018-01-23", user_id: user1.id, hike_id: hike4.id)
review2 = Review.create(rating: 5, review_text: "Great Hike! Had so much fun.", activity_date: "2016-02-23", user_id: user2.id, hike_id: hike4.id)
review3 = Review.create(rating: 5, review_text: "My dog loves this hike and so do I! Incredible views", activity_date: "2017-03-23", user_id: user3.id, hike_id: hike4.id)
review4 = Review.create(rating: 2, review_text: "Bad Hike.  I hate exercise.", activity_date: "2021-04-23", user_id: user4.id, hike_id: hike4.id)
review5 = Review.create(rating: 4, review_text: "Don't forget sunscreen!", activity_date: "2021-05-23", user_id: user1.id, hike_id: hike3.id)
review6 = Review.create(rating: 5, review_text: "The views were ok.  My backyard is better", activity_date: "2021-06-23", user_id: user2.id, hike_id: hike3.id)
review7 = Review.create(rating: 5, review_text: "I got lost for 6 hours, but otherwise had a great time", activity_date: "2021-07-23", user_id: user3.id, hike_id: hike3.id)
review8 = Review.create(rating: 2, review_text: "Wow so much fun! I want to do this every weekend", activity_date: "2021-08-23", user_id: user4.id, hike_id: hike3.id)
review9 = Review.create(rating: 4, review_text: "A marmot stole my lunch! Bummer, but fun otherwise", activity_date: "2021-09-23", user_id: user1.id, hike_id: hike2.id)
review10 = Review.create(rating: 5, review_text: "We crushed miles today. Good times!", activity_date: "2018-10-23", user_id: user2.id, hike_id: hike2.id)
review11 = Review.create(rating: 5, review_text: "Don't forget a snack!", activity_date: "2019-02-23", user_id: user3.id, hike_id: hike2.id)
review12 = Review.create(rating: 2, review_text: "This hike was uphill both ways.  Don't recommend.", activity_date: "2021-11-23", user_id: user4.id, hike_id: hike2.id)
review13 = Review.create(rating: 4, review_text: "It's true, the lake is blue!", activity_date: "2020-12-23", user_id: user1.id, hike_id: hike1.id)
review14 = Review.create(rating: 5, review_text: "I could not find the lake.  I also can't find my car.  It's getting dark. Send help!", activity_date: "2021-01-23", user_id: user2.id, hike_id: hike1.id)
review15 = Review.create(rating: 5, review_text: "This one was a piece of cake!", activity_date: "2021-02-23", user_id: user3.id, hike_id: hike1.id)
review16 = Review.create(rating: 2, review_text: "Too many trees, wouldn't recommend", activity_date: "2017-03-23", user_id: user4.id, hike_id: hike1.id)


#acadia
review17 = Review.create(rating: 4, review_text: "Almost fell off a cliff! Worth it!", activity_date: "2021-04-23", user_id: user1.id, hike_id: hike5.id)
review18 = Review.create(rating: 5, review_text: "Don't go if you're scared of heights!", activity_date: "2021-05-23", user_id: user2.id, hike_id: hike5.id)
review19 = Review.create(rating: 5, review_text: "I had so much fun!", activity_date: "2019-06-23", user_id: user3.id, hike_id: hike5.id)
review20 = Review.create(rating: 2, review_text: "Not sure why this is rated hard, I did it backwards, in heels, with my eyes closed.", activity_date: "2014-08-23", user_id: user4.id, hike_id: hike5.id)
review21 = Review.create(rating: 4, review_text: "Great sunrise views!", activity_date: "2021-07-23", user_id: user1.id, hike_id: hike6.id)
review22 = Review.create(rating: 5, review_text: "Make sure you pack a picnic, there are no restaurants at the summit", activity_date: "2021-09-23", user_id: user2.id, hike_id: hike6.id)
review23 = Review.create(rating: 5, review_text: "Too steep!!! I got scared", activity_date: "2017-10-23", user_id: user3.id, hike_id: hike6.id)
review24 = Review.create(rating: 2, review_text: "Don't do this hike in January, too much snow", activity_date: "2021-11-23", user_id: user4.id, hike_id: hike6.id)
review25 = Review.create(rating: 4, review_text: "A nice gentle stroll!", activity_date: "2016-12-23", user_id: user1.id, hike_id: hike7.id)
review26 = Review.create(rating: 5, review_text: "Too many tourists on this one. Crowded.", activity_date: "2021-01-23", user_id: user2.id, hike_id: hike7.id)
review27 = Review.create(rating: 5, review_text: "Perfect after-lunch walk", activity_date: "2021-02-23", user_id: user3.id, hike_id: hike7.id)
review28 = Review.create(rating: 2, review_text: "I saw a fish!", activity_date: "2018-03-23", user_id: user4.id, hike_id: hike7.id)
review29 = Review.create(rating: 4, review_text: "Don't swim here, trust me.  You will die.", activity_date: "2021-04-23", user_id: user1.id, hike_id: hike8.id)
review30 = Review.create(rating: 5, review_text: "I saw thunder hole, now how do I get to lightning hole?", activity_date: "2021-05-23", user_id: user2.id, hike_id: hike8.id)
review31 = Review.create(rating: 5, review_text: "Big waves! Cool.", activity_date: "2019-06-23", user_id: user3.id, hike_id: hike8.id)
review32 = Review.create(rating: 2, review_text: "Bring your rain jacket, you will get wet!", activity_date: "2020-07-23", user_id: user4.id, hike_id: hike8.id)

