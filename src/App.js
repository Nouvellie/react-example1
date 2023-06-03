import './App.css';
import { Review } from './components/review';

function App() {
  return (
    <div className='App'>
      <h1>League of legends</h1>
      <div class='main-container'>
        <Review
          name='Zed'
          skin='Project'
          image='zed.jpeg'
          text="Ruthless and merciless, Zed is the leader of the Order of Shadows, an organization he created with the intention of militarizing Ionia's martial and magical arts traditions to repel Noxian invaders. During the war, desperation drove him to reveal the secret ways of the shadows, a malevolent spiritual magic as powerful as it was corrupt and dangerous."
        />
        <Review
          name='Anivia'
          skin='Festival Queen'
          image='anivia.jpg'
          text="Anivia is a benevolent winged spirit who endures endless cycles of life, death and resurrection to protect Fréljord. Born from the union of cruel ice and piercing wind, she is a demigoddess who uses these elemental powers to thwart anyone who dares to disturb her homeland."
        />
        <Review
          name='Twisted Fate'
          skin='Default'
          image='twistedfate.jpg'
          text="Twisted Fate is a famed card expert and con man. He has gambled and used his charm on much of the known world, earning him the hatred and admiration of rich and foolish alike. Rara vez se toma las cosas en serio, despierta cada día con una burlesca sonrisa y un descuidado aire de fanfarrón."
        />
      </div>
    </div>
  );
}

export default App;
