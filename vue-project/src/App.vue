<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

// Practice
import { ref, reactive } from 'vue'
const rawHmtl = ref("<h3>Red</h3>")
const classred = ref('red')
const isButtonDisabled = ref(false)
const url = '#'
const dynamicUrl = 'href'
const dynamicEvent = 'click'

function notice () {
  console.log('Clicked')
}

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
// Ref Unwrapping in Templates
const res = { foo: ref(1) }

const state = reactive({ 
  count: 0,
  arr: ['foo', 'bar']
})
function increment() {
  state.count++
  res.foo.value++
}

const raw = {}
const proxy = reactive(raw)
// proxy is NOT equal to the original.
console.log(proxy === raw) // false



</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>


    <!-- Practice vue -->
    <a @[dynamicEvent]="notice" :[dynamicUrl]="url" v-html="rawHmtl" :class="classred"></a>
    <button @click="increment" :="objectOfAttrs" :disabled="isButtonDisabled" >{{ state.count }}</button> 
    <button @click="increment" :="objectOfAttrs" :disabled="isButtonDisabled" >{{ res.foo }}</button> 

    <span>{{ ok ? 'YES' : 'NO' }}</span>



  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

/* Practice */
.red {
  color:red;
}

#container {
  
}

.wrapper {

}
</style>
