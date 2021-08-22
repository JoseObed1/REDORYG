/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

key = "<paste-your-face-key-here>"
endpoint = "<paste-your-face-endpoint-here>"

AppRegistry.registerComponent(appName, () => App);
