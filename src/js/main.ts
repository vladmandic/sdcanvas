import Neutralino from '@neutralinojs/lib';
import { default as H } from 'htmx.org';
import * as F from 'fabric';
import * as S from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/themes/light.css';
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

async function initCanvas() {
  const inEl = document.getElementById('inCanvas') as HTMLCanvasElement;
  const inCanvas = new F.Canvas(inEl);
  const inCtx = inCanvas.getContext();
  const img = await F.FabricImage.fromURL('https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&sat=-100&bri=-5');
  inCanvas.add(img);

  const ouEl = document.getElementById('ouCanvas') as HTMLCanvasElement;
  const ouCanvas = new F.Canvas(ouEl);
  const ouCtx = ouCanvas.getContext();
  const ouImage = await F.FabricImage.fromURL('https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80');
  ouCanvas.add(ouImage);
  // const ouImage = document.getElementById('output') as HTMLImageElement;
  // inImage.replaceWith(inCanvas.getElement());
  // const ouCanvas = new F.Canvas(ouEl);
  // const ouCtx = ouEl.getContext('2d');
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
  document.documentElement.classList.add('sl-theme-dark');

  initCanvas()
}

window.onload = main;
window.log = log;
