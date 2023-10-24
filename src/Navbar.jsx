import Globe from './assets/Fill 213.svg'
import './style.css'

export default function Navbar(){
    return (
        <div className='nav'>
            <img src={Globe}></img>
            <h2>my travel journal.</h2>
        </div>
    )
}