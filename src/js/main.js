import { log } from './util.js';
import { default as htmx } from '../dist/htmx.esm.js';
import * as F from '../dist/fabric.esm.js';

function onWindowClose() {
  Neutralino.app.exit();
}

async function main() {
  Neutralino.init();
  Neutralino.events.on('windowClose', onWindowClose);
  const neutralinoConfig = await Neutralino.app.getConfig();
  log('Neutralino', Neutralino);
  log('App', neutralinoConfig);
  log('HTMX', htmx.version);
  log('FabricJS', F.version);
}

window.onload = main;
window.log = log;
window.htmx = htmx;
