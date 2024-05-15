import Home from './pages/Home/Home';
import {SnackbarProvider} from 'notistack';

function App() {
  return (
    <SnackbarProvider>
      <Home />
    </SnackbarProvider>
  );
}

export default App;
