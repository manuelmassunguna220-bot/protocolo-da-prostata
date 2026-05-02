#!/usr/bin/env node
/**
 * Post-build script for Netlify.
 * Takes the client assets from dist/client/ and generates
 * a static index.html to serve as a SPA.
 */
import { readdirSync, writeFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const CLIENT_DIR = join(ROOT, 'dist', 'client');
const OUT_DIR = join(ROOT, 'netlify-dist');

// Ensure output dir
if (existsSync(OUT_DIR)) {
  cpSync(OUT_DIR, OUT_DIR, { recursive: true }); // no-op, just to avoid errors
}
mkdirSync(OUT_DIR, { recursive: true });

// Copy all client assets
cpSync(CLIENT_DIR, OUT_DIR, { recursive: true });

// Copy public folder files (favicon, etc.)
const PUBLIC_DIR = join(ROOT, 'public');
if (existsSync(PUBLIC_DIR)) {
  for (const file of readdirSync(PUBLIC_DIR)) {
    if (file === '_redirects') continue; // we'll generate our own
    cpSync(join(PUBLIC_DIR, file), join(OUT_DIR, file), { recursive: true });
  }
}

// Find the CSS and JS entry files
const assetsDir = join(CLIENT_DIR, 'assets');
const assets = readdirSync(assetsDir);
const cssFile = assets.find(f => f.endsWith('.css'));
const jsFiles = assets.filter(f => f.endsWith('.js'));

// Generate index.html
const html = `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Protocolo de Tratamento da Próstata</title>
  <meta name="description" content="Um quiz interativo em React simula uma consulta de vendas sobre saúde da próstata masculina." />
  <meta property="og:title" content="Protocolo de Tratamento da Próstata" />
  <meta property="og:description" content="Um quiz interativo em React simula uma consulta de vendas sobre saúde da próstata masculina." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4f46b7a5-f1ee-44bc-8e92-45781378f9ce/id-preview-d5ff286f--ec974b1e-6caf-48c1-8f4d-baedf620aac6.lovable.app-1777216844866.png" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Protocolo de Tratamento da Próstata" />
  <meta name="twitter:description" content="Um quiz interativo em React simula uma consulta de vendas sobre saúde da próstata masculina." />
  <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4f46b7a5-f1ee-44bc-8e92-45781378f9ce/id-preview-d5ff286f--ec974b1e-6caf-48c1-8f4d-baedf620aac6.lovable.app-1777216844866.png" />
  ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ''}
</head>
<body>
  <div id="root"></div>
  ${jsFiles.map(f => `<script type="module" src="/assets/${f}"></script>`).join('\n  ')}
</body>
</html>`;

writeFileSync(join(OUT_DIR, 'index.html'), html);

// Write _redirects for Netlify SPA
writeFileSync(join(OUT_DIR, '_redirects'), '/*    /index.html   200\n');

console.log('✅ Netlify build ready in netlify-dist/');
console.log(`   CSS: ${cssFile || 'none'}`);
console.log(`   JS: ${jsFiles.join(', ')}`);
