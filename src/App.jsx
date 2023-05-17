import { useState } from 'react'
import animalsList from './assets/animals.json'
import styles from './App.module.css'

function App() {
  const [family, setFamily] = useState('all')

  const animalsListFiltered = family === 'all' ? animalsList : animalsList.filter(a => a.family === family)

  return (
    <div className={styles.container}>
      <h1>our zoo</h1>
      <div className={styles.filter}>
        <label htmlFor="familay"> please choose a family</label>
        <select name="family" onChange={e => setFamily(e.target.value)} >
          <option value="all">all</option>
          <option value="mammal">mammal</option>
          <option value="bird">bird</option>
        </select>
      </div>
      <ul className={styles.list}>
        {animalsListFiltered.map(a => (
          <li key={a.id}>
            <img src={a.img} alt={a.name} />
            <h2>{a.name}</h2>
            <p>{a.family}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
