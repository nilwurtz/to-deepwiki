# To Deepwiki

A Chrome extension that adds Deepwiki links to GitHub repository pages.

[![Version](https://img.shields.io/github/v/release/nilwurtz/to-deepwiki?include_prereleases&style=flat-square)](https://github.com/nilwurtz/to-deepwiki/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[日本語版ドキュメント](./README.ja.md)

## 📝 Description

To Deepwiki is a browser extension that enhances your GitHub experience by adding convenient Deepwiki links to repository pages. With this extension, you can quickly access the Deepwiki documentation corresponding to any GitHub repository.

## ✨ Features

- Automatically adds a "Deepwiki" link to GitHub repository navigation bars
- Opens the corresponding Deepwiki page (https://deepwiki.com/user/repo) in a new tab
- Lightweight with minimal performance impact
- Works on all GitHub repository pages

## 🚀 Installation

### Chrome Web Store

Currently, this extension is not yet available on the Chrome Web Store. We're planning to publish it soon. Please use the manual installation method below for now.

### Manual Installation

1. Download the latest release from the [releases page](https://github.com/nilwurtz/to-deepwiki/releases)
2. Extract the ZIP file
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable "Developer mode" in the top-right corner
5. Click "Load unpacked" and select the extracted folder

## 🔧 Development

This extension is built with [Plasmo](https://docs.plasmo.com/), a framework for building browser extensions.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (recommended) or npm

### Setup

```bash
# Clone the repository
git clone https://github.com/nilwurtz/to-deepwiki.git
cd to-deepwiki

# Install dependencies
pnpm install
```

### Development Server

```bash
pnpm dev
```

This will start the development server and build the extension to `build/chrome-mv3-dev`.

To load the development build:
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `build/chrome-mv3-dev` folder

### Production Build

```bash
pnpm build
```

This creates a production build in `build/chrome-mv3-prod`.

### Package

```bash
pnpm package
```

This creates a distribution ZIP file in the `build` directory.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
