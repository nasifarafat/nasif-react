import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl mb-4">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="https://i1.rgstatic.net/ii/profile.image/476629093883905-1490648639060_Q128/Anshumala-Das.jpg"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Anshumala Das</div>
      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Anshumala is Suar
      </a>
      <p class="mt-2 text-gray-500">
        She is Anshumala - A Suar.
      </p>
    </div>
  </div>
  
</div>
<Card name='Anshu' number='1'/>
<Card name='Mala' />
    </>
  )
}

export default App
