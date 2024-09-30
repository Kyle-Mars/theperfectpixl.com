<template>
  <Transition name="review-card">
    <div v-if="props.showList" class="review-card" @click="emits('open', 'chromhorn')">
      <div class="review-card-title">
        <div class="name">SD-16 CHROMHORN</div>
        <div class="row">
          <div class="toyline">SUPERLINK</div>
          /
          <div class="year">2004</div>
        </div>
      </div>
      <img
        class="review-card-image"
        sizes="(min-width: 1260px) 350px, 20vw"
        :srcset="
          'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-square256/chromhorn-profile4.jpg' +
          ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-square700/chromhorn-profile4.jpg' +
          ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-square1000/chromhorn-profile4.jpg' +
          ' 1000w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-square1220/chromhorn-profile4.jpg' +
          ' 1220w'
        "
        :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn-profile4.jpg'"
        height="400"
        width="400"
        :alt="'Superlink Chromhorn\'s headshot'"
      />
    </div>
  </Transition>
  <Transition name="review">
    <div v-if="props.selectedReview === 'chromhorn'" class="review">
      <div class="review-title">
        <div class="review-back-button" @click="emits('close')">⇤</div>
        SUPERLINK SD-16 CHROMHORN
      </div>
      <div class="review-text">
        <p>
          Transformers is no stranger to characters with animal alternate modes, whether they be
          mammal, reptile, insect, etc. Some of the earliest of these were the Decepticon subgroup
          aptly named the 'Insecticons' for their… you know, insect modes. Introduced in the second
          year of The Transformers toyline, this group included Bombshell and Barrage, both of whom
          transformed into robotic rhinoceros beetles, and are therefore automatically the coolest
          Insecticons (sorry, I don't make the rules).
        </p>
        <p>
          Decades later, on the franchise's 20th anniversary, store shelves would be graced with
          another rhinoceros beetle Transformer (possibly homaging Barrage directly), who in
          Hasbro's Transformers Energon toyline was named 'Insecticon' after the iconic group. A few
          months later across the ocean, Insecticon was made available with little alteration as a
          part of the ninth wave of Takara's version of the line, 'Superlink'. Named Chromhorn in
          this version of the line, he's an amazing little toy, and I want to tell you why I adore
          him.
        </p>
        <img
          class="large-review-image"
          sizes="(min-width: 1260px) 350px, 20vw"
          :srcset="
            'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/chromhorn-run7.jpg' +
            ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/chromhorn-run7.jpg' +
            ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/chromhorn-run7.jpg' +
            ' 1000w'
          "
          :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn-run7.jpg'"
          height="400"
          width="300"
          :alt="'Superlink Chromhorn running towards the camera'"
          @click="selected = 'chromhorn-run'"
        />
        <Transition name="lightbox">
          <div
            v-if="selected === 'chromhorn-run'"
            :class="{ background: selected === 'chromhorn-run' }"
            @click="selected = null"
          >
            <img
              class="selected"
              :src="'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size940/chromhorn-run7.jpg'"
              height="400"
              width="300"
              :alt="'Superlink Chromhorn running towards the camera'"
            />
          </div>
        </Transition>
        <p>
          The first thing I love about Chromhorn is immediately apparent upon looking at him: he has
          immense brawler energy, being almost as wide as he is tall and having fists larger than
          his head. In fact, he's a quite cute brawler because of how small he actually is. As the
          smallest size class in the range (the 'Energon' Class in Hasbro markets), he clocks in at
          approximately 4 inches from his feet to the top of his head. I have a particular soft spot
          for these sorts of characters in Transformers, particularly green ones (hi Bulkhead), and
          Chromhorn fits that archetype to a tee, while also being pocket-sized.
        </p>
        <p>
          Color wise, Chromhorn is a solid mix of dark green, yellow, and brown, which fits an
          insect robot very well. The standout element is his vibrant purple face, which provides
          excellent contrast to the yellow head crest. He has a good amount of paint applications in
          addition to his face, with silver and purple highlights on his arms and some green and
          bronze-y highlights on his yellow legs. Both of these do a good job of breaking up the
          plastic and providing additional visual interest. Not to say he's otherwise lacking in
          that area though, as the whole toy is covered in the mechanical detail typical of this era
          of Transformers, with sharp angles throughout to give him a menacing appearance.
        </p>
        <img
          class="small-review-image"
          sizes="(min-width: 1260px) 350px, 20vw"
          :srcset="
            'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size256/chromhorn7.jpg' +
            ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size700/chromhorn7.jpg' +
            ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/chromhorn7.jpg' +
            ' 1000w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/chromhorn7.jpg' +
            ' 1220w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/chromhorn7.jpg' +
            ' 1410w'
          "
          :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn7.jpg'"
          height="400"
          width="300"
          :alt="'Superlink Chromhorn facing forwards'"
          @click="selected = 'chromhorn'"
        />
        <Transition name="lightbox">
          <div
            v-if="selected === 'chromhorn'"
            :class="{ background: selected === 'chromhorn' }"
            @click="selected = null"
          >
            <img
              class="selected"
              :src="'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size940/chromhorn7.jpg'"
              height="400"
              width="300"
              :alt="'Superlink Chromhorn facing forwards'"
            />
          </div>
        </Transition>
        <img
          class="small-review-image"
          sizes="(min-width: 1260px) 350px, 20vw"
          :srcset="
            'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size256/chromhorn-back5.jpg' +
            ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size700/chromhorn-back5.jpg' +
            ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/chromhorn-back5.jpg' +
            ' 1000w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/chromhorn-back5.jpg' +
            ' 1220w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/chromhorn-back5.jpg' +
            ' 1410w'
          "
          :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn-back5.jpg'"
          height="400"
          width="300"
          :alt="'Superlink Chromhorn facing backwards'"
          @click="selected = 'chromhorn-back'"
        />
        <Transition name="lightbox">
          <div
            v-if="selected === 'chromhorn-back'"
            :class="{ background: selected === 'chromhorn-back' }"
            @click="selected = null"
          >
            <img
              class="selected"
              :src="'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size940/chromhorn-back5.jpg'"
              height="400"
              width="300"
              :alt="'Superlink Chromhorn facing backwards'"
            />
          </div>
        </Transition>
        <p>
          Owing to his simple and clever transformation, Chromhorn has very little extraneous
          kibble, especially for an insect Transformer. It's not uncommon for characters with insect
          alternate modes to have insect limbs splayed out in various locations in robot mode;
          Chromhorn has his beetle horn poking above his head and 2 insect legs mounted on his back,
          which are seemingly designed to look like shoulder mounted guns. The other insect legs
          fold neatly away into his robot legs, and you might not even know he has a beetle shell at
          first glance.
        </p>
        <p>
          In terms of articulation, he is limited in several ways. His leg movement is restricted to
          hips which move forwards, backwards, and only slightly outwards. His arms fare slightly
          better, with a standard range of motion in the shoulders and a bicep swivel; however, he
          lacks any form of elbow. His head and waist can swivel, but only through an
          auto-transforming mechanism which causes his head to rotate simultaneously with his waist.
          Of course this is a net loss compared to an independent neck and waist, but it's an
          improvement over some of his Energon Class contemporaries, and means he can get slightly
          more dynamic, especially when posing with his weapons.
        </p>
        <p>
          As an Energon Class toy, Chromhorn comes with a set of combining Energon weapons and a
          decorative Energon Star, both of which can be mixed and matched between Superlink toys. In
          contrast to the Hasbro release's yellowish-green, Chromhorn's accessories are a lovely
          shade of light green. The first is the 'Horn Shot', a gatling cannon with a rotating
          barrel, and the second is the 'Horn Spear', a multi-edged drill sword. Both of these
          complement his bruiser design very well, and despite his limited articulation, he can look
          cool holding either of them.
        </p>
        <img
          class="small-review-image"
          sizes="(min-width: 1260px) 350px, 20vw"
          :srcset="
            'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size256/chromhorn-gun4.jpg' +
            ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size700/chromhorn-gun4.jpg' +
            ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/chromhorn-gun4.jpg' +
            ' 1000w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/chromhorn-gun4.jpg' +
            ' 1220w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/chromhorn-gun4.jpg' +
            ' 1410w'
          "
          :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn-gun4.jpg'"
          height="400"
          width="300"
          :alt="'Superlink Chromhorn holding his gun'"
          @click="selected = 'chromhorn-gun'"
        />
        <Transition name="lightbox">
          <div
            v-if="selected === 'chromhorn-gun'"
            :class="{ background: selected === 'chromhorn-gun' }"
            @click="selected = null"
          >
            <img
              class="selected"
              :src="'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size940/chromhorn-gun4.jpg'"
              height="400"
              width="300"
              :alt="'Superlink Chromhorn holding his gun'"
            />
          </div>
        </Transition>
        <img
          class="small-review-image"
          sizes="(min-width: 1260px) 350px, 20vw"
          :srcset="
            'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size256/chromhorn-sword5.jpg' +
            ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size700/chromhorn-sword5.jpg' +
            ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/chromhorn-sword5.jpg' +
            ' 1000w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/chromhorn-sword5.jpg' +
            ' 1220w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/chromhorn-sword5.jpg' +
            ' 1410w'
          "
          :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn-sword5.jpg'"
          height="400"
          width="300"
          :alt="'Superlink Chromhorn holding his sword'"
          @click="selected = 'chromhorn-sword'"
        />
        <Transition name="lightbox">
          <div
            v-if="selected === 'chromhorn-sword'"
            :class="{ background: selected === 'chromhorn-sword' }"
            @click="selected = null"
          >
            <img
              class="selected"
              :src="'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size940/chromhorn-sword5.jpg'"
              height="400"
              width="300"
              :alt="'Superlink Chromhorn holding his sword'"
            />
          </div>
        </Transition>
        <img
          class="small-review-image"
          sizes="(min-width: 1260px) 350px, 20vw"
          :srcset="
            'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size256/chromhorn-gun-action5.jpg' +
            ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size700/chromhorn-gun-action5.jpg' +
            ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/chromhorn-gun-action5.jpg' +
            ' 1000w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/chromhorn-gun-action5.jpg' +
            ' 1220w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/chromhorn-gun-action5.jpg' +
            ' 1410w'
          "
          :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn-gun-action5.jpg'"
          height="400"
          width="300"
          :alt="'Superlink Chromhorn holding his gun in an action pose'"
          @click="selected = 'chromhorn-gun-action'"
        />
        <Transition name="lightbox">
          <div
            v-if="selected === 'chromhorn-gun-action'"
            :class="{ background: selected === 'chromhorn-gun-action' }"
            @click="selected = null"
          >
            <img
              class="selected"
              :src="'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size940/chromhorn-gun-action5.jpg'"
              height="400"
              width="300"
              :alt="'Superlink Chromhorn holding his gun in an action pose'"
            />
          </div>
        </Transition>
        <img
          class="small-review-image"
          sizes="(min-width: 1260px) 350px, 20vw"
          :srcset="
            'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size256/chromhorn-sword-action7.jpg' +
            ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size700/chromhorn-sword-action7.jpg' +
            ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/chromhorn-sword-action7.jpg' +
            ' 1000w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/chromhorn-sword-action7.jpg' +
            ' 1220w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/chromhorn-sword-action7.jpg' +
            ' 1410w'
          "
          :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn-sword-action7.jpg'"
          height="400"
          width="300"
          :alt="'Superlink Chromhorn holding his sword in an action pose'"
          @click="selected = 'chromhorn-sword-action'"
        />
        <Transition name="lightbox">
          <div
            v-if="selected === 'chromhorn-sword-action'"
            :class="{ background: selected === 'chromhorn-sword-action' }"
            @click="selected = null"
          >
            <img
              class="selected"
              :src="'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size940/chromhorn-sword-action7.jpg'"
              height="400"
              width="300"
              :alt="'Superlink Chromhorn holding his sword in an action pose'"
            />
          </div>
        </Transition>
        <p>
          Chromhorn's transformation is simple and elegant, befitting his size. After a torso
          rotation, his arms collapse together to form his beetle shell, and his lower legs splay
          out into his back insect legs, after which his front legs and horn can be adjusted however
          you see fit.
        </p>
        <p>
          The result of this transformation is a fantastic robotic beetle mode. He maintains a
          similar color configuration to the robot mode, with a dark green shell and a yellow
          underbelly, and some of the sharper angles from his robot mode disappear for a more
          streamlined, slightly rounder look, while still maintaining the toy's general boxiness.
          The painted details on his arms come together very nicely for the shell, breaking up the
          back and helping expose details that might otherwise be harder to see amidst the dark
          green. It's a great little thing, and my only real complaint is that his head is a bit
          indistinct; I will admit it took me a bit to even notice his insect eyes were painted
          blue. Otherwise though, amazing.
        </p>
        <p>
          Articulation in this mode is limited to the horn and the legs, which I suppose is all the
          articulation you would expect from an insect like this. The horn can move up and down just
          shy of 90°, although generally that is mostly used for the armored up mode, more on that
          later. I tend to leave his horn in its topmost position (which is ironically not pictured
          below). His front legs are on ball joints allowing for a full range of movement, while his
          back legs are limited to only horizontal movement between the middle and the back of his
          body.
        </p>
        <p>
          You may recall that Chromhorn's weapons can combine, and the beetle mode is where that
          primarily comes in. The Horn Spear pegs into the rotating barrel of the Horn Shot to form
          the 'Energy Tornado', a spinning drill weapon that Chromhorn can mount to the top of his
          head. It's pretty cool weapon integration, even if I kinda prefer how he looks without it.
          (In robot mode, the Energy Tornado can be stored in the same location, where it would be
          behind his head, or he can hold it in one of his hands).
        </p>
        <img
          class="small-review-image"
          sizes="(min-width: 1260px) 350px, 20vw"
          :srcset="
            'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size256/chromhorn-alt4.jpg' +
            ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size700/chromhorn-alt4.jpg' +
            ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/chromhorn-alt4.jpg' +
            ' 1000w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/chromhorn-alt4.jpg' +
            ' 1220w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/chromhorn-alt4.jpg' +
            ' 1410w'
          "
          :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn-alt4.jpg'"
          height="400"
          width="300"
          :alt="'Superlink Chromhorn in his insect mode'"
          @click="selected = 'chromhorn-alt'"
        />
        <Transition name="lightbox">
          <div
            v-if="selected === 'chromhorn-alt'"
            :class="{ background: selected === 'chromhorn-alt' }"
            @click="selected = null"
          >
            <img
              class="selected"
              :src="'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size940/chromhorn-alt4.jpg'"
              height="400"
              width="300"
              :alt="'Superlink Chromhorn in his insect mode'"
            />
          </div>
        </Transition>
        <img
          class="small-review-image"
          sizes="(min-width: 1260px) 350px, 20vw"
          :srcset="
            'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size256/chromhorn-drill4.jpg' +
            ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size700/chromhorn-drill4.jpg' +
            ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/chromhorn-drill4.jpg' +
            ' 1000w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/chromhorn-drill4.jpg' +
            ' 1220w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/chromhorn-drill4.jpg' +
            ' 1410w'
          "
          :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn-drill4.jpg'"
          height="400"
          width="300"
          :alt="'Superlink Chromhorn in his armored-up alt mode'"
          @click="selected = 'chromhorn-drill'"
        />
        <Transition name="lightbox">
          <div
            v-if="selected === 'chromhorn-drill'"
            :class="{ background: selected === 'chromhorn-drill' }"
            @click="selected = null"
          >
            <img
              class="selected"
              :src="'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size940/chromhorn-drill4.jpg'"
              height="400"
              width="300"
              :alt="'Superlink Chromhorn in his armored-up alt mode'"
            />
          </div>
        </Transition>
        <p>
          Overall, Chromhorn is an stellar little dude. He's a part of an archetype I'm a massive
          fan of, executed with clever engineering in a solid color scheme. His limited articulation
          doesn't detract from the fun I have playing with him thanks to his striking design and
          very versatile combining weapons, and I give credit to him and his fellow Terror-Cons (and
          their opposite Omni-Cons) for really opening me up more to enjoying figures that don't
          stack up to modern (or even 2010s) articulation. I would absolutely recommend picking up a
          Chromhorn/Insecticon yourself; He's one of my favorite Energon Class toys in Superlink,
          and one of my favorite small (non-Mini-Con) Transformers toys ever.
        </p>
        <img
          class="large-review-image"
          sizes="(min-width: 1260px) 350px, 20vw"
          :srcset="
            'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/chromhorn-attack4.jpg' +
            ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/chromhorn-attack4.jpg' +
            ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/chromhorn-attack4.jpg' +
            ' 1000w'
          "
          :src="'https://ik.imagekit.io/theperfectpixl/review-photos/chromhorn-attack4.jpg'"
          height="400"
          width="300"
          :alt="'Superlink Chromhorn in attack mode'"
          @click="selected = 'chromhorn-attack'"
        />
        <Transition name="lightbox">
          <div
            v-if="selected === 'chromhorn-attack'"
            :class="{ background: selected === 'chromhorn-attack' }"
            @click="selected = null"
          >
            <img
              class="selected"
              :src="'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size940/chromhorn-attack4.jpg'"
              height="400"
              width="300"
              :alt="'Superlink Chromhorn in attack mode'"
            />
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const props = defineProps({ showList: Boolean, selectedReview: String })
const emits = defineEmits(['close'])
const selected = ref(null)
</script>

<style scoped>
.review-card {
  width: 90%;
  height: 22vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  margin-bottom: 50px;
  padding: 20px;
}
.review-card:hover {
  background-color: #f6f6f6;
  box-shadow:
    0 0.15vw 0.3vw rgba(0, 0, 0, 0.2),
    0 0.25vw 0.8vw rgba(0, 0, 0, 0.19);
  transition: box-shadow 0.2s ease;
}
.review-card::after {
  content: '';
  position: absolute;
  display: inline;
  width: 68vw;
  height: 5px;
  margin-top: calc(22vh + 80px);
  background-image: linear-gradient(90deg, rgb(140, 0, 255), rgb(255, 0, 0));
  border-radius: 10px;
}
.review-card-image {
  width: 35%;
  height: 100%;
  border-radius: 10px;
  box-shadow:
    0 0.15vw 0.3vw rgba(0, 0, 0, 0.2),
    0 0.25vw 0.8vw rgba(0, 0, 0, 0.19);
}
.review-card-title {
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  color: #515151;
  width: 85%;
  height: 100%;
  line-height: 150%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}
.small-review-image {
  width: 48%;
  border-radius: 7px;
  box-shadow: 0 0 0 0;
}
.large-review-image {
  width: 96%;
  border-radius: 7px;
  box-shadow: 0 0 0 0;
}
.review-title {
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  color: #515151;
  width: 80%;
  height: 5vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.toyline {
  margin-right: 40px;
}
.year {
  margin-left: 40px;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.review-back-button {
  margin-right: 20px;
  cursor: pointer;
}
.review-text {
  font-family: 'Droid Sans', 'Open Sans', sans-serif;
  color: #515151;
  background-color: white;
  line-height: 175%;
  padding: 1vw;
  width: 90%;
  font-size: 0.5em;
  text-align: left;
  height: auto;
  text-indent: 1em;
  overflow: hidden;
}
.review {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  position: relative;
}
@media screen and (max-width: 1000px) {
  .review-title,
  .review-card-title {
    font-size: 0.7em;
    height: 7vw;
  }
  .review-card {
    height: 10vh;
  }
  .review-card::after {
    margin-top: calc(10vh + 90px);
  }
  .review-card-image {
    width: 40%;
    height: 100%;
  }
}
@media screen and (max-width: 768px) {
  .review-text {
    font-size: 0.4em;
  }
  .review-title,
  .review-card-title {
    padding-top: 2vw;
    width: 100%;
    height: 8vw;
  }
}
@media screen and (max-width: 486px) {
  .review-card {
    flex-direction: column;
    justify-content: space-between;
    height: 19vh;
  }
  .review-card::after {
    margin-top: calc(19vh + 40px);
  }
  .review-card-image {
    width: 100%;
    height: 50%;
  }
  .review-title {
    height: 11vw;
    padding-top: 3vw;
    text-align: left;
    font-size: 0.6em;
  }
  .review-card-title {
    height: 11vw;
    padding-top: 0;
    text-align: left;
    font-size: 0.6em;
  }
}
</style>
