// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Button } from '@tomaciello-ui/button';

import NxWelcome from './nx-welcome';
import { Footer } from '@tomaciello-ui/footer';
import { Form } from '@tomaciello-ui/form';
import { Header } from '@tomaciello-ui/header';


export function App() {
  return (
    <div>
      <Button/>
      <Footer/>
      <Form/>
      <Header/>
    </div>
  );
}

export default App;
