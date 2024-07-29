<template>
  <body>
    <div class="banner">
      <img
        class="about-icon"
        sizes="(min-width: 420px) 48.48vw, 68.22vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-23icon256/page-assets/about-logo   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-23icon1710/page-assets/about-logo 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-23icon2400/page-assets/about-logo 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/about-logo"
        alt="About Me"
      />
      <div class="banner-bg"></div>
      <div class="banner-bg banner-bg-2"></div>
      <div class="banner-bg banner-bg-3"></div>
    </div>
    <div class="intro">
      <div class="text">
        Who am I? How did I get into Transformers? What is it like collecting toys? What are my
        favorite toys? I've got answers to these questions and more down below. And if the photos
        I've taken or the things I talk about here have gotten you interested in learning more about
        Transformers, I've got links to resources to help you do just that.
      </div>
    </div>
    <div class="content-body">
      <div class="about-content-wrapper">
        <button
          class="about-button"
          @click="
            !selected.includes('into')
              ? selected.push('into')
              : selected.splice(selected.indexOf('into'), 1)
          "
        >
          MY INTRO TO TRANSFORMERS
          <span>&#8628;</span>
        </button>
        <Transition>
          <div class="about-text" v-if="selected.includes('into')">
            <p>
              I was first introduced to Transformers by my dad. As a kid growing up in the 80s, he
              had a lot of Transformers toys, a few of which survived to his adulthood. When I was
              around 5 years old, he gave some of them to me to play with, and over time I was given
              more Transformers toys from the selection currently on shelves; toys from the movie
              toyline, Transformers: Cybertron, and Transformers Animated. As I got older and
              pivoted to video games, I lost interest in Transformers, and over time the notoriety
              of the Michael Bay movies blotted out anything else I knew about the brand.
            </p>
            <p>
              That lasted until 2018, when
              <a href="https://www.youtube.com/watch?v=fAIX12F6958">this trailer</a> for Bumblebee
              released, showing off character designs reminiscent of the original 80s designs. I was
              still not into Transformers at this time, but I did recognize those designs and think
              "Oh, that\'s cool. They\'re going back to the old designs....Hey, didn\'t I used to
              like this stuff?" I told my dad I was interested, and he ended up taking my brothers
              and I on a surprise theater visit to go watch it when it was released.
            </p>
            <p>
              I loved the movie, and it got me interested in getting more into the franchise. Toy
              collecting was the avenue that stuck out to me the most because I didn\'t know how I
              could read the comics or where I could stream the TV shows. Because of this, I began
              watching <a href="https://www.youtube.com/@ChrisMcFeely">Chris McFeely\'s</a> YouTube
              series, Transformers: The Basics, to learn more about the franchise. Since then, I\'ve
              continued to dive deeper into Transformers, spending hours reading
              <a href="https://tfwiki.net/wiki/Main_Page">TFWiki</a>, watching the cartoons, reading
              the comics, listening to podcasts like the brilliant
              <a href="https://www.tripletakeover.com/">Triple Takeover Toycast</a>, and of course,
              buying lots of toys.
            </p>
          </div>
        </Transition>
        <button
          class="about-button"
          @click="
            !selected.includes('journey')
              ? selected.push('journey')
              : selected.splice(selected.indexOf('journey'), 1)
          "
        >
          TOY COLLECTING
          <span>&#8628;</span>
        </button>
        <Transition>
          <div class="about-text" v-if="selected.includes('journey')">
            <p>
              When my collection began in 2019, I had no real idea of what I wanted to collect. The
              <a href="https://tfwiki.net/wiki/War_for_Cybertron_Trilogy"
                >War for Cybertron Trilogy</a
              >
              began this year with
              <a href="https://tfwiki.net/wiki/War_for_Cybertron:_Siege">Siege</a> following
              <a href="https://tfwiki.net/wiki/Power_of_the_Primes_(toyline)">Power of the Primes</a
              >, so my early collection weighed heavily in those directions. All of my figures fit
              on a single bookshelf shelf, but once I decided to commit more to the hobby I
              purchased an additional bookshelf to have space for both books and toys.
            </p>
            <p>
              <a href="https://tfwiki.net/wiki/War_for_Cybertron:_Earthrise">Earthrise</a> was the
              2nd chapter of the War for Cybertron Trilogy, and was my first experience really
              buying toys just to by toys. Additionally, I picked up many figures from older
              toylines this year, all of which ended up bloating my collection quite a bit. I still
              didn\'t know what specifically I wanted to collect, and 2020 was the year this became
              a problem.
            </p>
            <p>
              <a href="https://tfwiki.net/wiki/War_for_Cybertron:_Kingdom">Kingdom</a> closed out
              the War for Cybertron Trilogy in 2021. Upon being revealed, I wasn\'t very interested
              in the Beast Wars-focused line; but I was interested enough to give Beast Wars a try
              during that Winter Break... and after that I was completely sold. I loved the show,
              and Kingdom was the first time I collected toys of characters I cared about. That
              experience played a large factor in shaping my collecting habits for the next year and
              a half.
            </p>
            <p>
              I decided that summer to begin downsizing my collection. I bought a new, smaller
              bookshelf, sold a significant portion of my collection during this time, and used the
              money to fill out my Kingdom Beast Wars cast. Later in the year, I did the same for my
              Transformers Animated cast; guided, like with Beast Wars, by a desire to have toys of
              characters that I liked. These decisions led to a change in my attitude towards
              collecting; after this point, I was much quicker to sell toys I didn’t like or felt
              little attachment to.
            </p>
            <p>
              By the summer of 2022, my collection was approaching what I considered at the time to
              be \'complete\' status. Collecting slowed down as I spent some time trimming off the
              last bits of fat until I felt ready to start a completely new shelf. After hearing
              great things about it on the
              <a href="https://www.tripletakeover.com/">Triple Takeover Toycast</a>, and watching
              through the entire show, I decided to focus on the
              <a href="https://tfwiki.net/wiki/Transformers:_Robots_in_Disguise_(2001_toyline)"
                >Robots in Disguise</a
              >
              toyline from 2001.
            </p>
            <p>
              I soon realized I was wrong about my shelves being complete. As summer came to an end,
              I decided I needed to sell more toys; I expunged many Transformers Animated and
              Kingdom Beast Wars toys and sold almost my entire
              <a href="https://tfwiki.net/wiki/Transformers:_Cybertron_(toyline)"
                >Transformers Cybertron</a
              >
              shelf.
            </p>
            <p>
              In 2023, I mixed up things even further. Due to the Triple Takeover Toycast and my
              changing tastes, my priorities shifted entirely away from modern toys and
              character-focused collecting. I sold almost my entire War for Cybertron Trilogy
              collection to create a shelf for vintage
              <a href="https://tfwiki.net/wiki/The_Transformers_(toyline)">Generation 1</a> toys,
              reorganized to create space for toys from the
              <a
                href="https://tfwiki.net/wiki/Transformers:_Energon_(toyline)#Takara_Super_Link_toyline"
                >Super Link</a
              >
              toyline, and picked up a few holy grails. Finally truly satisfied with my collection,
              I decided in January 2024 to take a 5-month hiatus from collecting, to focus on
              graduating college and enjoying the toys I already have.
            </p>
            <p>
              This break was not to last however, as I became obsessed with Super Link toyline very
              rapidly. The combination of great feeling plastic, excellent designs, and fun gimmicks
              made me want to collect almost the entire line, and so over the course of the next 3
              months, I did just that. Moving into a new apartment was the push I needed to buy a
              second toy bookshelf, which was immediately filled up with Super Link toys, while I
              began to fill up empty space elsewhere in the apartment with Super Link packaging (the
              prettiest toy packaging ever). The stars aligned in these goals: I acquired every new
              mold toy in the entire toyline (plus a few extras), which perfectly filled the
              bookshelf I had designated for that purpose. Satisfied with my collection and having
              no desire to buy more shelving, I'm finally taking that break I planned to several
              months ago.
            </p>
          </div>
        </Transition>
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
              I started taking photos early on into collecting simply for record keeping purposes.
              As a result, I didn't put in a ton of effort: I would play with my toys for a bit and
              find a pose or situation I liked, not worrying about proper lighting, backgrounds, or
              composition. That isn't to say I had no good photos from this time, but that I just
              wasn't very concerned with quality.
            </p>
            <p>
              In August 2021, I began a mission to take photos of every toy in my collection. These
              photos were all taken outside, so the lighting and background made them look much more
              appealing, but the composition still wasn't great. Nevertheless, I liked these photos
              enough that I started posting them on Instagram. I quickly realized, however, that I
              was taking more of them than I could realistically post.
            </p>
            <p>
              This led me to build the first version of my website in January 2022. I chose to use a
              website builder to create and host it, so layout changes were relatively easy, and
              building and maintaining the site did not require much of me. However, as I continued
              to add photos, the editor slowed significantly, making updating the site a pain.
            </p>
            <p>
              It was this frustration and a desire to have my own specific URL that led me to remake
              this site from scratch. I spent about 3 weeks in January 2023 learning more about web
              development, remaking the pages in code, and improving the GUI. A year later, I took
              the time to port the website over to a Javascript framework I learned through an
              internship.
            </p>
            <p>
              This decision was prompted by a renewed interest in photography. I took a significant
              break from photos during the latter part of 2023, but getting proper indoor equipment
              finally gave me the opportunity to get back into it. Photography has made this hobby
              much more engaging, especially after I decided to take several months off of buying
              new toys. It's fun to create something with the toys I have instead of focusing on
              buying new ones.
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
              you're bound to like some more than others. I've got my own personal preferences, and
              those preferences pushed me straight into what is now my favorite toyline:
              <a
                href="https://tfwiki.net/wiki/Transformers:_Energon_(toyline)#Takara_Super_Link_toyline"
                >Super Link</a
              >. Debuting in late 2003 in Japan, Super Link was the follow-up to the massively
              successful Micron Legend/Armada toyline from the previous year, and celebrated the
              Transformers franchise's 20th anniversary by harkening back to many classic characters
              and designs. Unlike the very unified gimmickry of the Microns in Micron Legend, Super
              Link's gimmicks are split into a few different groups.
            </p>
            <p>
              The Autobots focused on combination; the smaller toys could combine in pairs by
              transforming into a 'shirt' or a 'pants' mode. The larger toys combined with their own
              components into 'Super Modes', including
              <a href="https://tfwiki.net/wiki/Optimus_Prime_(Armada)/toys#Energon">Grand Convoy</a
              >, the newest incarnation of Optimus Prime. Grand Convoy could not only combine with
              the drones included in his trailer, but also with fellow Autobots Wing Saber and Omega
              Supreme for some significant play value. The Decepticons did not combine, but instead
              had special 'Hyper Modes' with pop-out weapons, firing missiles, and lights and/or
              sounds.
            </p>
            <p>
              There were also gimmicks that were shared by both factions. Among smallest toys in the
              line were the Omni-Cons and Terror-Cons. In addition to being some of the best toys
              for their size even to date, these toys each came with a modular transparent Energon
              weapon and a small chip called an 'Energon Star.' This equipment could be mixed and
              matched between toys across the whole line, regardless of size, and they complimented
              the toyline's heavy use of decorative clear plastic extremely well. The other smallest
              toys in the line followed after the Autobots as combining teams of 5 toys each, each
              referencing the combiners from the original toyline that combined in the same
              interchangeable way, with 4 toys as the limbs and 1 as the torso. There were 3 of
              these teams, 2 of which were Decepticons, but the limbs are all compatible with each
              other.
            </p>
            <p>
              The main reason I was drawn to this toyline so significantly was it's play value.
              Unlike the lines immediately before and after, the gimmicks do not rely on plugging in
              some additional component, and the play pattern is simpler to engage with. In addition
              to the gimmicks, each toy in the line is just very satisfying to handle, with thick
              plastic and a lot of clicky ratcheted joints. They feature a degree of paint much
              lacking on modern toys, which combined with the intricate mechanical stylings creates
              a series of toys that are very good looking. And that extends to the packaging as
              well, which is gorgeously clean, colorful, and shows off the toy designs wonderfully.
            </p>
            At present I own 1 of every new toy created for the toyline save the Micron combiners
            and a Microman toy of human character Kicker Jones created to tie into Microman's 30th
            anniversary; there are several repaints of both Micron Legend toys and Super Link toys
            still in the line that I don't own, but I am extremely happy with my collection. Maybe
            someday I'll get to a point where I actually own every toy in the line, but I'm content
            to enjoy the decos I already have (and save money, because those repaints can get quite
            expensive).
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
          FAVORITE TOYS AND MEDIA
          <span>&#8628;</span>
        </button>
        <Transition>
          <div class="about-text" v-if="selected.includes('favs')">
            <p>
              There's a lot of Transformers stuff I love outside of Super Link as well! My
              collection is only about 40% Super Link, and that's split pretty evenly between 5
              other toylines, including Transformers Animated and Robots in Disguise, both of which
              are featured heavily in my gallery. Some of my favorites from this other half include:
            </p>
            <ul>
              <li>
                <a href="https://tfwiki.net/wiki/Vector_Prime#Cybertron">GC-03 Vector Prime</a> was
                released in 2004 by Hasbro\'s Japanese partner, Takara, as a part of their Galaxy
                Force toyline. His stunning paint job and fun accessories make him stand out among
                the line, and all of Transformers. He holds a special place in my heart because the
                American release of this toy was one of my earliest Transformers.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/Magna_Convoy">LG-EX Magna Convoy</a> was also
                released in 2017 as an exclusive repaints for the Transformers Legends toyline. A
                gorgeous redeco of one of the best Optimus Prime toys ever, Magna Convoy is
                extremely pricey on the aftermarket, and in one of my favorite collecting moments I
                managed to snag one for about 20% of his usual price. An absolute steal for a toy
                that is well worth calling a \'holy grail\'.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/Primus#Cybertron">Supreme Class Primus</a> was
                released in 2006 as the jewel of the Transformers: Cybertron line. Primus is the the
                creator of the Transformers, and he transforms via special mechanisms into a quite
                detailed plastic version of planet Cybertron itself. The only toy ever made of the
                planet, he was one of my earliest holy grails, and finding him for a good price was
                extremely exciting. Like, \'I stopped paying attention in my online class\'
                exciting.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/Ruination_(RID)#Robots_in_Disguise_.282001.29"
                  >D-011 Baldigus</a
                >
                was released in 2000 as a part of the Japanese Car Robots toyline. A gorgeous redeco
                of the Generation 1 toy Bruticus, Baldigus is a combiner made of a team of
                Decepticons who all transform into military vehicles. He is extremely playable
                thanks to the fun simplicity of the original molds and ability to mix and match the
                limbs, and he is one toy I expected to get much further down the line.
              </li>
            </ul>
            <p>
              The tie-in media for Super Link and it's Hasbro counterpart is notoriously bad, so I
              can't claim that to by my favorite, as much as I want to. That doesn't been there
              aren't amazing cartoons and comics out there, though! The ones that I enjoy the most
              are:
            </p>
            <ul>
              <li>
                <a href="https://tfwiki.net/wiki/Transformers_Animated_(cartoon)"
                  >Transformers Animated</a
                >, released in 2007 drew inspiration from all across the brand\'s history and
                flipped established ideas on their head, taking after superhero shows by featuring
                both human super-villains and Decepticons alike.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/Beast_Wars:_Transformers_(cartoon)"
                  >Beast Wars: Transformers</a
                >
                was among the earliest CGI cartoons when it aired in 1996, and quickly cemented
                itself as one of the best Transformers cartoons before or since, with incredibly
                written characters and surprising connections to the past.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/The_Transformers:_More_than_Meets_the_Eye"
                  >The Transformers: More Than Meets the Eye</a
                >&#47;<a href="https://tfwiki.net/wiki/The_Transformers:_Lost_Light"
                  >The Transformers: Lost Light</a
                >
                are 2 parts of the same comic book series published by IDW in 2012. These
                award-winning books are the highlight of best Transformers media, with stellar
                characters and emotional stories, including one of Transformers\' most notable
                character arcs: Autobot Megatron.
              </li>
              <li>
                <a href="https://tfwiki.net/wiki/Transformers:_Robots_in_Disguise_(2001_cartoon)"
                  >Transformers: Robots in Disguise</a
                >
                was originally developed by Takara in 2000 as a tie-in to the Car Robots toyline.
                Hasbro dubbed the lighthearted adventure comedy into English in 2001. Incredibly
                underrated within the Transformers community, Robots in Disguise is charming and
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
              If you'd like to learn more about anything you've read here, or are interested in
              diving into the cartoons or looking at some more toys, here are some links that I
              believe you'll find helpful:
            </p>
            <ul>
              <li>
                <a href="https://tfwiki.net">TFWiki</a> has all the information you\'ll ever need to
                know about Transformers, and a nice sense of humor.
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCAPhTcmL-a69jL1KWOPe7GA">Chris McFeely</a>
                is responsible for Transformers: The Basics, with crash course videos on a huge
                variety of topics.
              </li>
              <li>
                <a href="https://www.tripletakeover.com/">Triple Takeover</a> is a podcast primarily
                focused on Transformers and other vintage toylines, and their Patreon Discord server
                is the best Transformers space on the internet.
              </li>
              <li>
                <a href="https://tubitv.com/home">Tubi</a> has a ton of the older Transformers
                cartoons available to stream for free.
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=Y1ujpoDlgRU&list=PLD3dCMp2WHiwrVPo2XaZpkWp3K3xpx3h8"
                  >Generation 1</a
                >,
                <a href="https://www.youtube.com/watch?v=b1t08HCrLo4&list=PL2499FD29FD26CE9D"
                  >Robots in Disguise 2001</a
                >,and
                <a
                  href="https://www.youtube.com/watch?v=uGhSbxMhiss&list=PLNXV9Mb7egjE96pUHvWiF1TMHvvCLvqJk"
                  >Transformers Cyberverse</a
                >
                can be found on YouTube.
              </li>
              <li>
                <a href="https://hasbropulse.com/">Hasbro Pulse</a> is Hasbro\'s online store.
              </li>
              <li>
                <a href="https://www.transformerland.com/">Transformerland</a> is a great place to
                buy older figures, with a huge variety of stock.
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
.banner-bg {
  background-image: linear-gradient(70deg, rgb(174, 0, 255) 20%, rgb(255, 0, 0) 80%);
}
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
.about-icon {
  width: 40%;
  position: absolute;
  box-shadow: 0 0 0;
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
  background-image: linear-gradient(90deg, rgb(174, 0, 255), rgb(255, 0, 0));
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
@media screen and (min-width: 1600px) {
  .about-icon {
    width: 30%;
  }
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
    margin-bottom: 3vw;
    font-size: 0.6em;
  }
  .title {
    width: 80%;
  }
  .about-button::after {
    width: 66vw;
    margin-top: 12vw;
    height: 4px;
  }
}
@media screen and (max-width: 486px) {
  .about-button::after {
    margin-top: 13vw;
    height: 3px;
  }
  .about-button {
    margin-bottom: 4vw;
  }
}
@media screen and (max-width: 414px) {
  .about-icon {
    width: 55%;
  }
  .about-button {
    height: 17vw;
    text-align: left;
  }
  .about-button::after {
    margin-top: 21vw;
  }
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
    margin-top: 23vw;
  }
}
</style>
