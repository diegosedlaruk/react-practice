import { runWithAdal } from 'react-adal';
import { authContext } from './AzureOauthIntegration/adalConfig';
import AADService from './AzureOauthIntegration/AADService'  

const DO_NOT_LOGIN = false;
let azureADService = new AADService();

console.log('usuario logeado -> ', azureADService.loggedIn())

runWithAdal(authContext, () => {
  // eslint-disable-next-line
  require('./indexApp.js');
  
},DO_NOT_LOGIN);