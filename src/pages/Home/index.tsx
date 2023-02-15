import { CoffeeList } from '../../components/CoffeeList'
import { IntroHome } from '../../components/IntroHome'
import { v4 as uuidv4 } from 'uuid'
import expressoTradicional from '../../assets/expressoTradicional.svg'
import expressoAmericano from '../../assets/expressoAmericado.svg'
import expressoCremoso from '../../assets/expressoCremoso.svg'
import expressoGelado from '../../assets/expressoGelado.svg'
import cafeComLeite from '../../assets/cafeComLeite.svg'
import latte from '../../assets/latte.svg'
import cappucino from '../../assets/capucciono.svg'
import macchiato from '../../assets/macchiato.svg'
import mocaccino from '../../assets/mocaccino.svg'
import chocolateQuente from '../../assets/chocolateQuente.svg'
import cubano from '../../assets/Cubano.svg'
import havaiano from '../../assets/havaiano.svg'
import arabe from '../../assets/arabe.svg'
import irlandes from '../../assets/irlandes.svg'

export function Home() {
  return (
    <div>
      <IntroHome />
      <CoffeeList />
    </div>
  )
}
