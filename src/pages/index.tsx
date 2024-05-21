import * as comp from '../components/'
import * as lay from '../components/layout/'
import * as utils from '../components/utilities'
import './index.css'

function App() {

  return (
    <section className="bg-white flex flex-col w-full gap-y-2">
      <lay.Header />
      <section className="flex flex-col gap-y-2">
        <utils.Card />
        <utils.Card />
        <utils.Card />
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <lay.Footer />
    </section>
  )
}

export default App
