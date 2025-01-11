import Neutralino from '@neutralinojs/lib';
import { default as H } from 'htmx.org';
import * as F from 'fabric';
import * as S from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import 'style.css';
import { log } from './util.js';

declare global {
  interface Window {
    log: typeof log;
  }
}

function onWindowClose() {
  Neutralino.app.exit();
}

async function main() {
  log('HTMX', H.version);
  log('FabricJS', F.version);
  log('Shoelace', S.getBasePath());
  try {
    Neutralino.init();
    Neutralino.events.on('windowClose', onWindowClose);
    const neutralinoConfig = await Neutralino.app.getConfig();
    log('Neutralino', Neutralino);
    log('App', neutralinoConfig);
  } catch {
    log('Neutralino not active');
  }
}

window.onload = main;
window.log = log;
