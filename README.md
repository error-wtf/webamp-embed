# Webamp Embed

Minimaler Webamp-Player für GitHub Pages, optimiert für iframe-Einbettung.

## Features

- Sofort lauffähig auf GitHub Pages (keine Build-Pipeline nötig)
- iframe-freundlich (transparenter Hintergrund, kein Overflow)
- Konfigurierbar via URL-Parameter

## Einbettung per iframe

```html
<iframe
  src="https://DEIN-USERNAME.github.io/webamp-embed/"
  width="275"
  height="116"
  frameborder="0"
  allow="autoplay"
  style="border: none;"
></iframe>
```

## URL-Parameter

| Parameter | Beschreibung | Beispiel |
|-----------|-------------|---------|
| `audioUrl` | URL zur MP3-Datei | `?audioUrl=https://example.com/song.mp3` |
| `trackName` | Titelname | `?trackName=Mein%20Song` |
| `artistName` | Künstlername | `?artistName=DJ%20Test` |
| `skinUrl` | URL zu einer .wsz Skin-Datei | `?skinUrl=https://example.com/skin.wsz` |

### Beispiel mit allen Parametern

```html
<iframe
  src="https://DEIN-USERNAME.github.io/webamp-embed/?audioUrl=https://example.com/song.mp3&trackName=Cool%20Song&artistName=DJ%20Cool&skinUrl=https://example.com/skin.wsz"
  width="275"
  height="116"
  frameborder="0"
  allow="autoplay"
></iframe>
```

## Setup

1. Repo auf GitHub erstellen (z.B. `webamp-embed`)
2. Diese Dateien pushen
3. Settings → Pages → Source: "Deploy from a branch" → Branch: `main` → Folder: `/ (root)`
4. Fertig! Erreichbar unter `https://DEIN-USERNAME.github.io/webamp-embed/`

## Lizenz

Webamp ist MIT-lizenziert (captbaritone/webamp). Dieses Embed-Projekt ebenfalls MIT.
