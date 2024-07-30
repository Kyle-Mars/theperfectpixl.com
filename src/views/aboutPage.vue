<template>
  <body>
    <div class="banner">
      <img
        class="icon"
        sizes="(min-width: 800px) 49.95vw, (min-width: 500px) 62.5vw, (min-width: 400px) 75vw, 81.25vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-logo256/page-assets/about-logo-new   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-logo1710/page-assets/about-logo-new 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-logo2400/page-assets/about-logo-new 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/about-logo-new"
        alt="About Me"
      />
      <!-- <a href="https://www.textstudio.com/">Font generator</a> -->
      <div class="banner-background">
        <div class="grid"></div>
      </div>
    </div>
    <div class="intro">
      <div class="text">
        Who am I? How did I get into Transformers? Why do I do photography? What's my favorite
        toyline? (hint: it's scrolling past you) I've got answers to these questions and more down
        below. If my photos or the things I talk about here have gotten you interested in learning
        more about Transformers, I've also got links to resources just for you.
      </div>
    </div>
    <div class="content-body">
      <div class="about-content-wrapper">
        <button
          class="about-button"
          @click="
            !selected.includes('history')
              ? selected.push('history')
              : selected.splice(selected.indexOf('history'), 1)
          "
        >
          HISTORY
          <span>&#8628;</span>
        </button>
        <Transition>
          <div class="about-text" v-if="selected.includes('history')">
            <p>
              I was first introduced to Transformers by my dad, who as a child of the 80s had a lot
              of Transformers toys of his own growing up. When I was around 5 years old, he passed
              some of his surviving toys down to me to play with, and over time I was given
              Transformers toys from the selection currently on shelves, including the movie
              toyline, Transformers: Cybertron, and Transformers Animated. I was very much a fan,
              having at least 1 Transformers themed birthday party and wearing a homemade Optimus
              Prime costume for Halloween one year. Unfortunately, as I got older and pivoted to
              video games, I lost all interest in Transformers; over time, the notoriety of the
              Michael Bay movies made me forget I was ever interested in it all (no shade on those
              movies though! ...not for that specific reason, at least).
            </p>
            <p>
              That lasted until 2018, when
              <a href="https://www.youtube.com/watch?v=fAIX12F6958">this trailer</a> for Bumblebee
              released, showing off character designs reminiscent of the original 80s designs. I was
              still only barely familiar with Transformers at this time, but I recognized those
              designs enough to think "Oh, that's cool. They're going back to the old designs
              ...Hey, didn't I used to like this stuff?" I told my dad I was interested, and he
              ended up taking my brothers and I on a surprise theater visit to go watch it when it
              was released. I loved the movie, and it completely reignited my interest in the
              franchise. Toy collecting was the avenue that stuck out to me the most because while I
              wasn't up to date on how I could read the comics or where I could stream the TV shows,
              I was able to dive right into buying toys.
            </p>

            <p>
              When my collection began, I had no idea what I wanted. The
              <a href="https://tfwiki.net/wiki/War_for_Cybertron_Trilogy"
                >War for Cybertron Trilogy</a
              >
              began in 2019 with
              <a href="https://tfwiki.net/wiki/War_for_Cybertron:_Siege">Siege</a> following
              <a href="https://tfwiki.net/wiki/Power_of_the_Primes_(toyline)">Power of the Primes</a
              >, so my early collection leaned heavily on those toylines. All of my figures fit on a
              single shelf at first, but after filling that up by the end of the year, I bought
              another bookshelf in order to have space for both books and toys.
            </p>
            <p>
              <a href="https://tfwiki.net/wiki/War_for_Cybertron:_Earthrise">Earthrise</a> was the
              2nd chapter of the War for Cybertron Trilogy the following year, and was my first
              experience really buying toys just to buy toys. In addition to picking up several
              Earthrise toys I didn't really care about, I also delved more heavily into older
              toylines after incorporating some of my childhood toys into my collection, resulting
              in a very ...bloated collection. I still didn't know what specifically I wanted to
              collect, and 2020 was the year this became a problem.
            </p>
            <p>
              <a href="https://tfwiki.net/wiki/War_for_Cybertron:_Kingdom">Kingdom</a> closed out
              the War for Cybertron Trilogy in 2021 by celebrating the 25th anniversary of the
              <a href="https://tfwiki.net/wiki/Beast_Wars:_Transformers_(toyline)">Beast Wars</a>
              toyline. Despite little enthusiasm on my part following the reveal, I was interested
              enough to give the Beast Wars cartoon a watch during that Winter Break... and after
              that I was completely sold. The show is one of the best pieces of Transformers media,
              and afterward I had to get me some toys of those characters. Kingdom was the first
              time I collected toys based on the specific character, and that would be the main
              driving force in picking out the toys I wanted for the next year and a half.
            </p>
            <p>
              I decided that summer to finally start downsizing, selling a significant portion of my
              collection and intentionally picking up a new, smaller bookshelf to display my toys
              with. The main purpose of this clean-out was to help focus my collection to only toys
              I actually enjoyed, but the extra money helped me fill out the rest of Kingdom Beast
              Wars cast and the rest of my Transformers Animated cast; another toyline I focused
              heavily on due to a desire to have toys of characters that I liked. This process led
              to a significant change in my attitude towards collecting; from this point continuing
              to now, I'm quick to sell toys I don't like or feel little attachment to.
            </p>
            <p>
              By the summer of 2022, my collection was approaching what I considered at the time to
              be 'complete' status. Collecting slowed down as I spent some time trimming off the
              last bits of fat until I felt ready to start a completely new shelf, and after hearing
              great things about it on the
              <a href="https://www.tripletakeover.com/">Triple Takeover Toycast</a> and watching
              through the entire show, I decided that shelf would be for the
              <a href="https://tfwiki.net/wiki/Transformers:_Robots_in_Disguise_(2001_toyline)"
                >Robots in Disguise</a
              >.
            </p>
            <p>
              I soon realized I was wrong about my shelves being complete (kind of a running theme).
              Although in this case, it wasn't that I was missing something major, but that I was at
              a surplus again. As summer came to an end, I decided I needed to sell more toys,
              including many Animated and Kingdom toys and almost my entire
              <a href="https://tfwiki.net/wiki/Transformers:_Cybertron_(toyline)"
                >Transformers Cybertron</a
              >
              shelf.
            </p>
            <p>
              In 2023, I mixed up things even further, shifting my priorities entirely away from
              modern toys and character-focused collecting due to the influence of the Triple
              Takeover Toycast and my own changing tastes. I sold almost my entire War for Cybertron
              Trilogy collection to create a shelf for
              <a href="https://tfwiki.net/wiki/The_Transformers_(toyline)">Generation 1</a> toys,
              reorganized to create space for toys from the
              <a
                href="https://tfwiki.net/wiki/Transformers:_Energon_(toyline)#Takara_Super_Link_toyline"
                >Super Link</a
              >
              toyline (f o r e s h a d o w i n g), and was lucky enough to find several of my
              grails, which are a collector's most sought after toys, usually being rare and /or
              expensive. Once again satisfied with my collection, I decided in January 2024 to take
              a 5-month hiatus from collecting to focus on graduating college and enjoying the toys
              I already had.
            </p>
            <p>
              This break did not last before, several months late for some reason, I became obsessed
              with Super Link. You can read more about it specifically below, but tl;dr the
              combination of great feeling plastic, excellent designs, and fun gimmicks made me want
              to collect almost the entire line. Over the course of the next 3 months, I did just
              that (along with successfully graduating college, wohoo!). Moving into a bigger
              apartment was the push I needed to buy a second toy bookshelf, since I had kinda been
              storing a lot of toys, mostly Super Link, in a side table drawer. I immediately filled
              the shelf up with Super Link toys, and filled up space elsewhere in the apartment with
              Super Link packaging (in addition to being good toys, they come in my favorite
              packaging ever). The stars aligned in these goals: I acquired almost every non-recolor
              toy in the entire toyline (plus a few extras), perfectly filling the bookshelf I had
              bought for that purpose. Satisfied with my collection (for real this time, I swear)
              and having no desire to buy more shelving, I'm finally taking that break I planned to
              several months ago.
            </p>
          </div>
        </Transition>
        <!-- <button
          class="about-button"
          @click="
            !selected.includes('collection')
              ? selected.push('collection')
              : selected.splice(selected.indexOf('collection'), 1)
          "
        >
          COLLECTION
          <span>&#8628;</span>
        </button>
        <Transition>
          <div class="about-text" v-if="selected.includes('collection')"></div>
        </Transition> -->
        <button
          class="about-button"
          @click="
            !selected.includes('photo')
              ? selected.push('photo')
              : selected.splice(selected.indexOf('photo'), 1)
          "
        >
          PHOTOGRAPHY
          <span>&#8628;</span>
        </button>
        <Transition>
          <div class="about-text" v-if="selected.includes('photo')">
            <p>
              I started taking pictures early into collecting mostly for record keeping purposes,
              not really putting in a ton of effort: I would play with my toys for a bit and find a
              pose or situation I liked, and not worry about proper lighting, backgrounds, or
              composition. That isn't to say I had no good photos from this time, but I just wasn't
              very concerned with quality.
            </p>
            <p>
              In August 2021, I began a mission to take photos of every toy in my collection in an
              identical format. Thanks to a location outdoors on my college campus, the lighting and
              background were much improved, but the composition still wasn't great. Nevertheless, I
              liked these photos enough that I started posting them on Instagram and quickly
              realized that I was taking more of them than I could realistically post.
            </p>
            <p>
              This led me to build a website in January 2022 using the website builder Weebly to
              create and host it. Layout changes were relatively easy and building and maintaining
              the site did not require much of me, but I continued to add photos the editor slowed
              significantly, making updating the site a pain.
            </p>
            <p>
              It was this frustration and a desire to have my own specific URL that led me to remake
              this site from scratch, taking the skills I was learning in Computer Science courses
              in college and putting them to use for a proper project. I spent about 3 weeks in
              January 2023 learning more about web development, remaking my existing pages in HTML,
              and improving the GUI. A year later, I took the time to port the website over to a
              Javascript framework I learned through an internship.
            </p>
            <p>
              This decision was prompted by a renewed interest in photography. I took a significant
              break from photos at the end of 2023, but getting proper indoor equipment finally gave
              me the opportunity to get back into it. Photography has made this hobby much more fun,
              especially when I decide to take a break from buying new toys, and it allows me to
              engage with the toys I already have in a more meticulous way than regular play does.
            </p>
          </div>
        </Transition>
        <button
          class="about-button"
          @click="
            !selected.includes('superLink')
              ? selected.push('superLink')
              : selected.splice(selected.indexOf('superLink'), 1)
          "
        >
          SUPER LINK
          <span>&#8628;</span>
        </button>
        <Transition>
          <div class="about-text" v-if="selected.includes('superLink')">
            <p>
              With the huge variety of shows, toylines, comics, and characters in Transformers,
              every fan is bound to like some more than others. I've got my own personal
              preferences, and those preferences tossed me straight into my favorite toyline:
              <a
                href="https://tfwiki.net/wiki/Transformers:_Energon_(toyline)#Takara_Super_Link_toyline"
                >Super Link</a
              >. Debuting in late 2003 in Japan, Super Link (known as Energon in Hasbro markets) was
              the follow-up to the massively successful Micron Legend/Armada toyline from the
              previous year, and celebrated the Transformers franchise's 20th anniversary by
              harkening back to many classic characters and designs. Unlike the very unified
              gimmickry of the Microns in Micron Legend, Super Link's gimmicks are split between
              groups.
            </p>
            <p>
              The Autobots focus on combination; the smaller toys can combine in pairs by
              transforming into a 'shirt' or a 'pants' mode. The larger toys combine with their own
              components into 'Super Modes', including
              <a href="https://tfwiki.net/wiki/Optimus_Prime_(Armada)/toys#Energon">Grand Convoy</a
              >, the newest incarnation of Optimus Prime, who can not only combine with the drones
              included in his trailer, but also with fellow Autobots Wing Saber and Omega Supreme
              for some significant play value. The Decepticons do not combine, but instead have
              special 'Hyper Modes' with pop-out weapons, firing missiles, and lights and/or sounds.
            </p>
            <p>
              There are also gimmicks that are shared by both factions. Among smallest toys in the
              line are the Omni-Cons and Terror-Cons. In addition to being some of the best toys for
              their size even to date, these toys each come with a modular transparent Energon
              weapon and a small chip called an 'Energon Star.' This equipment can be mixed and
              matched between toys across the whole line, regardless of size, and they compliment
              the toyline's heavy use of decorative clear plastic extremely well. The other smallest
              toys in the line follow after the Autobots as combining teams of 5 toys each, each
              referencing the combiners from the original toyline that combined in the same
              interchangeable way, with 4 toys as the limbs and 1 as the torso. There are 3 of these
              teams, 2 of which are Decepticons, but the limbs are all compatible with each other.
            </p>
            <p>
              The main reason I was drawn to this toyline so significantly was it's play value.
              Unlike the lines immediately before and after, the gimmicks do not rely on plugging in
              some additional component so the play pattern is simpler to engage with. The toys in
              the line are also quite satisfying to handle, with proper thick plastic and a lot of
              clicky ratcheted joints. Visually they have a combo of molded details and paint much
              lacking on modern toys, resulting in toys that not only are fun to play with, but look
              great on display as well. And the latter extends to the packaging as well, which is
              gorgeously clean, colorful, and shows off the toy designs wonderfully.
            </p>
            <p>
              The final tally for my Super Link collection includes 1 of every new toy created for
              the toyline save the Micron combiners and a Microman toy of human character Kicker
              Jones (which was created to tie into Microman's 30th anniversary as a double
              celebration). Additionally, I have a few toys that weren't released in Japan normally,
              coming instead in exclusive 'USA Edition' packaging imported from ...well, you know.
              Among these is one of my 2 rarest figures: Unicron Black Version, limited to 3000
              pieces (my other rarest is also 1 of 3000 from Super Link, funnily enough). While
              there are several repaints of both Micron Legend and Super Link toys still in the line
              that I don't own, I am extremely happy with my collection. Maybe someday I'll get to a
              point where I actually own every toy in the line, but I'm content to enjoy the decos I
              already have (and save money, because those repaints can get super pricey).
            </p>
          </div>
        </Transition>
        <button
          class="about-button"
          @click="
            !selected.includes('favs')
              ? selected.push('favs')
              : selected.splice(selected.indexOf('favs'), 1)
          "
        >
          FAVORITES
          <span>&#8628;</span>
        </button>
        <Transition>
          <div class="about-text" v-if="selected.includes('favs')">
            <p>
              There's a lot of Transformers stuff I love outside of Super Link as well! My
              collection is only about 40% Super Link, with the rest split pretty evenly between 5
              other toylines, including Transformers Animated and Robots in Disguise, both of which
              are featured heavily in my gallery. Some of my favorites from this other half include:
            </p>
            <ul>
              <li>
                <a href="https://tfwiki.net/wiki/Vector_Prime#Cybertron">GC-03 Vector Prime</a>, who
                was released in 2004 by Takara, as a part of the Galaxy Force toyline. His stunning
                paint job, unique 'clockwork shapeship knight' design, and cool accessories make him
                a stand out among the line, and he holds a special place in my heart because the
                American release of this toy was one of my earliest Transformers, which stayed in my
                collection until I purchased this version.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/Magna_Convoy">LG-EX Magna Convoy</a>, a toy that
                was released in 2017 as an exclusive repaints in the Japanese-only Transformers
                Legends toyline. A gorgeous redeco of one of the best Optimus Prime toys ever in the
                colors of a pre-Transformers toy, Magna Convoy is super duper expensive on the
                aftermarket, and in one of my favorite collecting moments I managed to snag one for
                about 20% of his usual price. An absolute steal for a toy that is well worth calling
                a 'holy grail.'
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/Primus#Cybertron">Supreme Class Primus</a>, the
                jewel of the Cybertron toyline (the Hasbro version of Galaxy Force). Primus
                transforms via special mechanisms into a quite detailed plastic version of the
                planet Cybertron itself. As the only toy ever made of the planet, he was one of my
                earliest holy grails, and finding him for a good price was extremely exciting. Like,
                'I stopped paying attention in my online class' exciting.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/Ruination_(RID)#Robots_in_Disguise_.282001.29"
                  >D-011 Baldigus</a
                >, a gorgeous redeco of the Generation 1 combiner Bruticus released in 2000 as a
                part of the Japanese Car Robots toyline. Baldigus is made up of a team of
                Decepticons who all transform into military vehicles, and is extremely playable
                thanks to the fun simplicity of the original molds and ability to mix and match the
                limbs; one of the more expensive toys in Car Robots, he is one toy I expected to get
                much further down the line.
              </li>
            </ul>
            <p>
              The tie-in cartoon for Super Link and its Hasbro counterpart are notoriously bad, so I
              can't claim them to be my favorite, as much as I want to. That doesn't been there
              isn't amazing Transformers media out there, though! The ones that I enjoy the most
              are:
            </p>
            <ul>
              <li>
                <a href="https://tfwiki.net/wiki/Transformers_Animated_(cartoon)"
                  >Transformers Animated</a
                >, which released in 2007 and drew inspiration from all across the brand's history
                and flipped established ideas on their head, taking after superhero shows by
                featuring both human super-villains and Decepticons alike. I had the first season of
                this show on DVD growing up. Not the first 3 episodes though, because that was a
                separate DVD. Annoying.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/Beast_Wars:_Transformers_(cartoon)">Beast Wars</a>,
                among the earliest CGI cartoons when it aired in 1996. Despite early outrage at the
                idea of realistic animal Transformers, it quickly cemented itself as one of the best
                Transformers cartoons before or since, with incredibly written characters and
                surprising connections to the past.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/The_Transformers:_More_than_Meets_the_Eye"
                  >More Than Meets the Eye</a
                >/<a href="https://tfwiki.net/wiki/The_Transformers:_Lost_Light">Lost Light</a>, 2
                parts of the same comic published by IDW in 2012. These award-winning books are the
                highlight of Transformers media, with deep characters, amazing art, and emotional
                stories, including one of Transformers' most notable character arcs: Autobot
                Megatron.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/Transformers:_Robots_in_Disguise_(2001_cartoon)"
                  >Robots in Disguise</a
                >
                (often called 'RID2001' so as not to confuse it with
                <a href="https://tfwiki.net/wiki/Transformers:_Robots_in_Disguise_(2015_cartoon)"
                  >Robots in Disguise</a
                >
                or
                <a href="https://tfwiki.net/wiki/The_Transformers:_Robots_in_Disguise"
                  >Robots in Disguise</a
                >), which was originally developed by Takara in 2000 as a tie-in to the Car Robots
                toyline. Hasbro dubbed the lighthearted adventure comedy into English in 2001,
                resulting in one of the most underrated Transformers cartoons that is charming and
                goofy in all the best ways.
              </li>
            </ul>
          </div>
        </Transition>
        <button
          class="about-button"
          @click="
            !selected.includes('more')
              ? selected.push('more')
              : selected.splice(selected.indexOf('more'), 1)
          "
        >
          LEARN MORE
          <span>&#8628;</span>
        </button>
        <Transition>
          <div class="about-text" v-if="selected.includes('more')">
            <p>
              If you'd like to learn more about anything you've read about here, are interested in
              diving into the cartoons, want to look at some more toys, or need a good podcast to
              listen to, here are some helpful links. If you want more specific questions, you can
              also shoot me an email
              <a href="mailto:kylelmars@gmail.com">here</a>.
            </p>
            <ul>
              <li>
                <a href="https://tfwiki.net">TFWiki</a> has almost all the information you'll ever
                need to know about Transformers, and a nice sense of humor.
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCAPhTcmL-a69jL1KWOPe7GA">Chris McFeely</a>
                is responsible for Transformers: The Basics, a series of crash course videos on a
                huge variety of Transformers topics.
              </li>
              <li>
                <a href="https://www.tripletakeover.com/">Triple Takeover</a> is a podcast primarily
                focused on Transformers and other vintage toylines, and their Patreon Discord server
                is the best Transformers space on the internet. Give them a listen!
              </li>
              <li>
                <a href="https://tubitv.com/home">Tubi</a> has a ton of the older Transformers
                cartoons available to stream for free, and
                <a
                  href="https://www.youtube.com/watch?v=Y1ujpoDlgRU&list=PLD3dCMp2WHiwrVPo2XaZpkWp3K3xpx3h8"
                  >Generation 1</a
                >,
                <a href="https://www.youtube.com/watch?v=b1t08HCrLo4&list=PL2499FD29FD26CE9D"
                  >RID2001</a
                >, and
                <a
                  href="https://www.youtube.com/watch?v=uGhSbxMhiss&list=PLNXV9Mb7egjE96pUHvWiF1TMHvvCLvqJk"
                  >Transformers Cyberverse</a
                >
                can be found on YouTube.
              </li>
              <li>
                <a href="https://www.transformerland.com/">Transformerland</a> is a great place to
                buy older figures, with a huge variety of stock, although you can find better prices
                elsewhere.
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  </body>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref([])
</script>

<style scoped>
.about-content-wrapper {
  padding: 2vw;
  margin-top: 2vw;
  margin-bottom: 2vw;
  background-color: white;
  height: auto;
  font-size: 2em;
  text-align: left;
  display: block;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.about-text {
  font-family: 'Droid Sans', 'Open Sans', sans-serif;
  color: #515151;
  background-color: white;
  line-height: 175%;
  padding: 1vw;
  font-size: 0.5em;
  text-align: left;
  height: auto;
  text-indent: 1em;
  overflow: hidden;
}
.about-button {
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  color: #515151;
  width: 70vw;
  height: 5vw;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1vw;
  margin-bottom: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about-button:hover {
  box-shadow:
    3px 3px 3px rgba(0, 0, 0, 0.1),
    -2px -2px 2px white;
  transition: box-shadow 0.2s ease;
  border-radius: 10px;
  background-color: #f6f6f6;
}
.about-button::after {
  content: '';
  position: absolute;
  display: inline;
  width: 68vw;
  height: 5px;
  margin-top: 7vw;
  background-image: linear-gradient(90deg, rgb(140, 0, 255), rgb(255, 0, 0));
  border-radius: 10px;
}
.v-enter-active,
.v-leave-active {
  transition: max-height 1s ease;
}
.v-enter-from,
.v-leave-to {
  max-height: 0vh;
}
.v-enter-to,
.v-leave-from {
  max-height: 400vh;
}
@media screen and (max-width: 1000px) {
  .about-text {
    font-size: 0.5em;
  }
  .about-button {
    font-size: 0.7em;
    height: 7vw;
  }
  .about-button::after {
    margin-top: 9vw;
    height: 4px;
  }
}
@media screen and (max-width: 768px) {
  .about-button {
    padding: 2vw;
    width: 100%;
    height: 8vw;
    margin-bottom: 3vw;
    font-size: 0.6em;
  }
  .title {
    width: 80%;
  }
  .about-button::after {
    width: 66vw;
    margin-top: 11vw;
    height: 4px;
  }
}
@media screen and (max-width: 486px) {
  .about-button::after {
    margin-top: 15vw;
    height: 3px;
  }
  .about-button {
    height: 11vw;
    padding: 3vw;
    margin-bottom: 4vw;
    text-align: left;
  }
}
@media screen and (max-width: 414px) {
}
@media screen and (max-width: 390px) {
  .title {
    width: 85%;
  }
  .about-button {
    padding: 3vw;
    margin-bottom: 6vw;
  }
  .about-button::after {
    margin-top: 17vw;
  }
}
</style>
