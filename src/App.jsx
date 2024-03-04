import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className='main'>
      <Header title="Adopta un perrito"/>
      <div className='cardsContainer'>
        <MyCard
          cardImg={'https://images.pexels.com/photos/4203281/pexels-photo-4203281.jpeg?auto=compress&cs=tinysrgb&w=600'}
          cardName={'Bartolo'}
          cardDesc={'Lleno de energía y listo para jugar.¡Dale a Bartolo el hogar amoroso que se merece!'}
          tagText={'Beagle'}
          tagBackgroundColor={'success'}
        />
        <MyCard
          cardImg={'https://images.pexels.com/photos/4592868/pexels-photo-4592868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          cardName={'Messi'}
          cardDesc={'Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo'}
          tagText={'Poodle'}
          tagBackgroundColor={'primary'}
        />
          <MyCard
          cardImg={'https://images.pexels.com/photos/3498989/pexels-photo-3498989.jpeg?auto=compress&cs=tinysrgb&w=600'}
          cardName={'Gohann'}
          cardDesc={'Un perro pequeño, pero con un corazón gigante.¡Hazte amigo de Gohan y disfruta de un amor incondicional!'}
          tagText={'Chihuahua'}
          tagBackgroundColor={'danger'}
        />
        <MyCard
          cardImg={'https://www.pexels.com/es-es/foto/persona-sosteniendo-cachorro-de-pelo-corto-blanco-y-marron-en-campo-de-hierba-verde-5763575/'}
          cardName={'Princesa'}
          cardDesc={'Es una compañera leal y maravillosa.¡Comparte con princesa momentos innolvidables!'}
          tagText={'Labrador'}
          tagBackgroundColor={'warning'}
        />
      </div>
      <Footer textFooter={'Explora nuestra galeria de adopción de perros y encuentra a tu compañero perfecto. Tenemos una variedad de perros con una esencia única. Encuentra a tu mejor amigo por siempre'}/>
    </div>
  )
}

export default App;
