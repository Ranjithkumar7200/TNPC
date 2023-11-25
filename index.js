// index.js

import { registerRootComponent } from 'expo';
import App from './App'; // assuming your main component is in App.js
import { name as appName } from './app.json';

// Use either this line or the one below, but not both
registerRootComponent(App);

// The rest of your code can be for configuring other libraries or initializing something
