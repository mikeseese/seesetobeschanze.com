var bridesmaid_idx = 0;
var groomsman_idx = 5;

var people = []; // empty array

// bridesmaids
people.push({ person_name: 'Morgan Shaffer', person_class: 'Maid of Honor', person_image: "/img/morgan.jpg",  person_text: "<strong>How do you know the bride/groom?</strong><br>"
    + "Kirsten is my very first best friend! We met as babies in the cry room at church and have been a part of each other’s lives ever since. I can’t imagine my life without her.<br>"
    + "<br>"
    + "<strong>What’s your favorite memory with the bride/groom?</strong><br>"
    + "There are honestly so many memories to choose from! The one our families laugh about to this day is when we were about four years old when we were sledding in Breckenridge after a day of skiing. Our families found out that we could just ride the bus from the bottom of the run to the top again, so we would sled all the way down and ride back up. Kirsten and I got a little sled all to ourselves and, even though we were told by our moms to stop about halfway down, went all the way down, and then, proceeded to try to get on the bus by ourselves. Luckily our moms caught us before we did!<br>"
    + "<br>"
    + "<strong>If you were shipped off to a deserted island and could only bring 3 items with you, what would they be and why?</strong><br>"
    + "First item: a device that filters sea water to make drinkable fresh water. I know that’s so boring and practical for this type of question, but hey, everyone needs fresh, preferably not salty, water to survive!<br>"
    + "Second item: How To Build An Escape Raft For Dummies: Desert Island Edition, by the Mythbusters team. I think they did a desert island escape episode, so they should know what will definitely work, and what is just a myth, right?<br>"
    + "Third Item: SPF 50 sunscreen. Y’all, I make milk look tan, this is necessary."});
people.push({ person_name: 'Laura Seese', person_class: 'Bridesmaid', person_image: "/img/laura.jpg", person_text: "<strong>How do you know the bride/groom?</strong><br>"
    + "Unfortunately, I was forced to live with Michael Seese my whole life because I am his sister (KIDDING). Yes I am his sister, but it definitely wasn’t a misfortune. Michael has been an amazing brother (aside from picking on me and not playing Barbie dolls with me when we were younger). I met Kirsten when I was still in high school, and I can say confidently that Kirsten has been the best thing that has happened to Mike. I am so happy that Kirsten has not only been placed into Michael’s life, but brought into mine as well.<br>"
    + "<br>"
    + "<strong>What’s your favorite memory with the bride/groom?</strong><br>"
    + "There are so many memories Kirsten and I have shared. Whether it’s baking during the holidays, playing Phase 10 and SpaceTeam, or even jumping off the side of the house boat we vacationed on, I always am having a good time with her. If I had to choose one day in the past, it would be the day of Ronnie’s wedding last year. Kirsten, Holly, and I spent the day together getting pampered and going to the wedding together. We took pictures with my dad’s new selfie stick and saw the breathtaking west coast together. But if I had to choose one day in the future, it would be 5-14-16. I can’t wait to share this amazing day with my sister to be.<br>"
    + "<br>"
    + "<strong>What was the last picture you took with your phone?</strong><br>"
    + "The last picture I took on my phone was a panorama of my beautiful school, Florida Gulf Coast University. I started Spring semester classes just yesterday and forgot how much beauty there is to FGCU. The picture is of the library and the lake that sits just across. Sometimes you can see the school alligator swimming right past all the lillypads! Facing the lake is my favorite place to study!"});
people.push({ person_name: 'Liz Tippy', person_class: 'Bridesmaid', person_image: "/img/liz.jpg", person_text: "<strong>How do you know the bride/groom?</strong><br>"
    + "I met Kirsten while we were both working at Disney! We bonded in the break room over our job and our master's program.<br>"
    + "<br>"
    + "<strong>What’s your favorite memory with the bride/groom?</strong><br>"
    + "My coffee dates with Kirsten helped keep me sane last semester.<br>"
    + "<br>"
    + "<strong>What was the last picture you took with your phone?</strong><br>"
    + "A cat picture. This should not be a surprise to anyone."});
people.push({ person_name: 'Kathleen O\'Leary', person_class: 'Bridesmaid', person_image: "/img/kathleen.jpg", person_text: "<strong>How do you know the bride/groom?</strong><br>"
    + "I know the bride and groom through Kirsten. I was Kirsten's random roommate in college, and we ended up becoming real-life friends! I probably know more about Kirsten's hygiene/eating habit than anyone besides Mike.<br>"
    + "<br>"
    + "<strong>What’s your favorite memory with the bride/groom?</strong><br>"
    + "I have two favorite memories about the bride and groom. Although I didn't actually get to witness it, I heard all about Mike's slick move with the business card. Kirsten called me after with all the details. I also remember their first real date. After all sorts of awkward frozen yogurt and Gator Nights first dates, Kirsten and I complained that all we wanted was intellectual conversation over Olive Garden breadsticks. One evening over the summer, Kirsten texted me a picture of breadsticks. That's when I knew that Kirsten had found The One.<br>"
    + "<br>"
    + "<strong>Describe your perfect pizza.</strong><br>"
    + "My perfect pizza is the Trader Joes pesto flatbread. It's cheap, easy, and I always have one in my freezer!"});
people.push({ person_name: 'Holly Soltis', person_class: 'Bridesmaid', person_image: "/img/holly.jpg", person_text: "<strong>How do you know the bride/groom?</strong><br>"
    + "Groom: I went to high school with Mike, he is a fellow gator, and I have been dating his brother John for 6 years.<br>"
    + "Bride: Kirsten is a fellow Gator, but I also had the wonderful opportunity to know her better through all the Seese family events she came to with Mike.<br>"
    + "<br>"
    + "<strong>What’s your favorite memory with the bride/groom?</strong><br>"
    + "My favorite time with the bride and groom would have to be hanging out with them before/at/after Ronnie's wedding.<br>"
    + "<br>"
    + "<strong>Describe your perfect pizza.</strong><br>"
    + "My perfect pizza is a thin crust pizza with spinach, feta, Gouda, and mozzarella cheese."});

// groomsmen
people.push({ person_name: 'John Seese', person_class: 'Best Man', person_image: "/img/john.jpg", person_text: "<strong>How do you know the bride/groom?</strong><br>"
    + "Having known Michael ever since I was born, I'm glad to know him as my brother and best friend. We've been through much of our lives together, and I can't wait to play video games and eat pizza  till four in the morning with him and my new sister!<br>"
    + "<br>"
    + "<strong>What’s your favorite memory with the bride/groom?</strong><br>"
    + "Well I’m saving my favorite memories with the both of them for the wedding, but definitely at the top of the list is a trip on a houseboat we all took where Kirsten proceeded to demolish each of us at every card and board game we played. The. Entire. Trip.<br>"
    + "<br>"
    + "<strong>If you were shipped off to a deserted island and could only bring 3 items with you, what would they be and why?</strong><br>"
    + "The US Constitution – because it’s awesome.<br>"
    + "Industrial size packet of mechanical pencils and lead – so I can catalog my adventures.<br>"
    + "Similarly sized packet of waterproof paper – so that I have something to write my adventures on."});
people.push({ person_name: 'Ronnie Seese', person_class: 'Groomsman', person_image: "/img/ronnie.jpg", person_text: "<strong>How do you know the bride/groom?</strong><br>"
    + "As the groom's older brother, I know him since more or less his time zero at Los Robles Regional Medical Center. It was an exciting day when Mike entered the world, and I remember it vividly!<br>"
    + "<br>"
    + "<strong>What’s your favorite memory with the bride/groom?</strong><br>"
    + "Some of my favorite memories are Mike's piano recitals when he was little and now watching him smile. Have you ever seen the groom smile? Just you wait -- it's literally the most enchanting smile walking the Earth this century. I encourage him regularly to capitalize on this gift by auditioning for toothpaste advertisements, but to no avail. While I'm just getting to know Kirsten, by far my favorite memory is when she was kind enough to give me dinosaur socks for Christmas one year. She has no idea how awesome those are and how regularly I obsess over wearing them. I am so excited to welcome her into the family!<br>"
    + "<br>"
    + "<strong>If you were shipped off to a deserted island and could only bring 3 items with you, what would they be and why?</strong><br>"
    + "This is easy: I would bring my stunningly beautiful wife and our two cat boys, Apollo and Beau. I can't imagine a world (or island) without our small and magical family, and I know together we can -- and will -- overcome anything, including survival on a deserted island! Also, after now experiencing my first real winter, moving with Laura and the cats to a deserted island may already be part of my new retirement plan."});
people.push({ person_name: 'Louis Rivera', person_class: 'Groomsman', person_image: "/img/louis.jpg", person_text: "<strong>How do you know the bride/groom?</strong><br>"
    + "I had the great opportunity of meeting Mike while working at Lockheed Martin back in the Summer of 2013. Naturally, I then met Kirsten during after work happy hours and hangouts.<br>"
    + "<br>"
    + "<strong>What’s your favorite memory with the bride/groom?</strong><br>"
    + "My favorite memory of the bride and groom is when they first got Oso. We were at work and Mike and I had been talking about Oso and how they were thinking of adopting him, but weren't 100% sure yet. Then he randomly said he had to leave work early. Turns out it was because Kirsten had already gone and gotten Oso!<br>"
    + "<br>"
    + "<strong>What was the last picture you took with your phone?</strong><br>"
    + "The last picture taken on my phone is of the Baltimore Harbor, taken from within the National Aquarium. It was my first time seeing snow, so it was pretty exciting (although from the picture you can hardly see the snowfall)."});
people.push({ person_name: 'Jose Castillo', person_class: 'Groomsman', person_image: "/img/jose.jpg", person_text: "<strong>How do you know the bride/groom?</strong><br>"
    + "I had the unfortunate pleasure of having to sit next to Mike at work for like a year in a half when he first started at work. He somehow got less annoying over time, which was helped when he eventually was able to drink legally after working for like a year already.<br>"
    + "<br>"
    + "<strong>What’s your favorite memory with the bride/groom?</strong><br>"
    + "China Town, ask Mike for the story, me for the video.<br>"
    + "<br>"
    + "<strong>What was the last picture you took with your phone?</strong><br>"
    + "A picture of my lovely girlfriend Lauren and me. A good 95% of the pictures I take with my phone are with my girlfriend in some way because she loves photos and my phone has a better camera."});
people.push({ person_name: 'Justin Schanze', person_class: 'Groomsman', person_image: "/img/justin.jpg", person_text: "<strong>How do you know the bride/groom?</strong><br>"
    + "My sister is the bride. Mike is cool I guess.<br>"
    + "<br>"
    + "<strong>What’s your favorite memory with the bride/groom?</strong><br>"
    + "Drinking in an Irish pub and club hopping with Kirsten in Peru; I learned Kirsten has some nasty Spanish insults that day.<br>"
    + "My favorite memories of Mike usually involve nerding out: Mike and I helping my dad put together a TV, discussing the science of tri-vection microwaves, and surely many to come.<br>"
    + "<br>"
    + "<strong>If you were shipped off to a (dessert)ed island and could only bring 3 items with you, what would they be and why?</strong><br>"
    + "A bottle of chocolate syrup, some rainbow sprinkles, and a big spoon."});

function change_slider(group, index) {
    var element = document.getElementById(group + "_person_name");
    element.innerHTML = people[index].person_name; 
    element = document.getElementById(group + "_person_class");
    element.innerHTML = people[index].person_class; 
    element = document.getElementById(group + "_person_description");
    element.innerHTML = people[index].person_text; 
    element = document.getElementById(group + "_clip_circle_large");
    element.src = people[index].person_image; 
}

function change_bridesmaids(index) {
    change_slider("bridesmaids", index);
}

function change_morgan() {
    bridesmaid_idx = 0;
    change_bridesmaids(bridesmaid_idx);
}

function change_laura() {
    bridesmaid_idx = 1;
    change_bridesmaids(bridesmaid_idx);
}

function change_liz() {
    bridesmaid_idx = 2;
    change_bridesmaids(bridesmaid_idx);
}

function change_kathleen() {
    bridesmaid_idx = 3;
    change_bridesmaids(bridesmaid_idx);
}

function change_holly() {
    bridesmaid_idx = 4;
    change_bridesmaids(bridesmaid_idx);
}

function change_groomsmen(index) {
    change_slider("groomsmen", index);
}

function change_john() {
    groomsman_idx = 5;
    change_groomsmen(groomsman_idx);
}

function change_ronnie() {
    groomsman_idx = 6;
    change_groomsmen(groomsman_idx);
}

function change_louis() {
    groomsman_idx = 7;
    change_groomsmen(groomsman_idx);
}

function change_jose() {
    groomsman_idx = 8;
    change_groomsmen(groomsman_idx);
}

function change_justin() {
    groomsman_idx = 9;
    change_groomsmen(groomsman_idx);
}

function change_prev_bridesmaid() {
    bridesmaid_idx = bridesmaid_idx - 1;
    if(bridesmaid_idx < 0)
        bridesmaid_idx = 4;

    change_bridesmaids(bridesmaid_idx);
}

function change_next_bridesmaid() {
    bridesmaid_idx = bridesmaid_idx + 1;
    if(bridesmaid_idx > 4)
        bridesmaid_idx = 0;

    change_bridesmaids(bridesmaid_idx);
}

function change_prev_groomsman() {
    groomsman_idx = groomsman_idx - 1;
    if(groomsman_idx < 5)
        groomsman_idx = 9;

    change_groomsmen(groomsman_idx);
}

function change_next_groomsman() {
    groomsman_idx = groomsman_idx + 1;
    if(groomsman_idx > 9)
        groomsman_idx = 5;

    change_groomsmen(groomsman_idx);
}