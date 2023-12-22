import classes from './NavBar.module.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    console.log(classes)
    return (
        <nav>
            <h1 className={classes.logo}>La Magica</h1>
            <section>
            
                <Button label={'cositas'} hiceClick={() => console.log('cositas')}/>
                <Button label={'remeras'} hiceClick={() => console.log('remeras')}/>
                <Button label={'pantalones'} hiceClick={() => console.log('pantalones')}/>
                <Button label={'zapatillas'} hiceClick={() => console.log('zapatillas')}/>

                
                <CartWidget/>
            </section>
        </nav>
    )
}

export default NavBar