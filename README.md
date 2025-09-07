# Snapchat Utils Chrome Extension

A Chrome extension that adds useful utilities to Snapchat Web, starting with a custom download button for snaps.

## 🚀 Features

- **Custom Download Button**: Easily download snaps directly from Snapchat Web
- **More utilities coming soon!** 🔥

## 📥 Installation

### Option 1: Download from GitHub Releases (Recommended)

1. Go to the [GitHub Releases page](https://github.com/sqnder0/snap-utils/releases)
2. Download the latest release `.zip` file
3. Extract the downloaded file to a folder on your computer
4. Follow the "Load Unpacked Extension" steps below

### Option 2: Install as Unpacked Extension

#### Step-by-Step Installation Guide:

1. **Download the Extension**

   - Clone this repository or download it as a ZIP file
   - Extract the files to a folder on your computer

2. **Open Chrome Extensions Page**

   - Open Google Chrome
   - Type `chrome://extensions/` in the address bar and press Enter
   - Or go to Chrome Menu (⋮) → More Tools → Extensions

3. **Enable Developer Mode**

   - In the top right corner of the Extensions page, toggle **"Developer mode"** ON
   - You should see new buttons appear: "Load unpacked", "Pack extension", and "Update"

4. **Load the Extension**

   - Click the **"Load unpacked"** button
   - Navigate to the folder where you extracted the extension files
   - Select the folder containing the `manifest.json` file
   - Click **"Select Folder"** (Windows) or **"Open"** (Mac)

5. **Verify Installation**

   - You should see "Snapchat Utils" appear in your extensions list
   - The extension icon should appear in your Chrome toolbar
   - Make sure the extension is **enabled** (toggle switch should be blue/on)

6. **Test the Extension**
   - Navigate to [Snapchat Web](https://web.snapchat.com)
   - Log in to your account
   - The extension should now be active and ready to use!

## 🎯 Usage

1. **Navigate to Snapchat Web**: Go to [web.snapchat.com](https://web.snapchat.com)
2. **Log in** to your Snapchat account
3. **Look for the download button** when viewing snaps
4. **Click the download button** to save snaps to your device

## 🛠️ Development

### Project Structure

```
snapchat-utils/
├── manifest.json       # Extension configuration
├── content.js         # Script that runs on the snapchat pages
├── icon_x.png         # The icons for the extension
└── README.md          # This file
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 🔧 Troubleshooting

### Extension Not Working?

1. **Check if you're on Snapchat Web**

   - Make sure you're on `https://snapchat.com/web`
   - The extension only works on the official Snapchat Web platform

2. **Reload the Extension**

   - Go to `chrome://extensions/`
   - Find "Snapchat Utils" and click the refresh/reload button
   - Refresh the Snapchat Web page

3. **Check Developer Console**

   - Press `F12` on Snapchat Web to open Developer Tools
   - Go to the "Console" tab
   - Look for any error messages related to "Snapchat Utils"

4. **Reinstall the Extension**
   - Remove the extension from `chrome://extensions/`
   - Follow the installation steps again

### Common Issues

- **"This site can't be reached"**: Make sure you have an internet connection
- **Extension icon not visible**: Check if the extension is enabled in `chrome://extensions/`
- **Download not working**: Ensure you're logged into Snapchat Web and viewing actual snaps

## 📋 Requirements

- **Google Chrome** (Version 88 or higher)
- **Snapchat Account** (for accessing Snapchat Web)
- **Internet Connection**

## 🔒 Privacy & Security

- This extension only works on Snapchat Web (`snapchat.com/web`)
- No data is collected or sent to external servers
- All functionality runs locally in your browser
- Source code is open and available for review

## 📝 Changelog

### Version 1.0.0

- ✨ Initial release
- ➕ Added custom download button for snaps
- 🔧 Basic extension framework established

## 🚧 Upcoming Features

- 🎨 Custom themes for Snapchat Web
- And much more!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- **Issues**: Report bugs or request features on our [GitHub Issues page](https://github.com/sqnder0/snap-utils/issues)
- **Discussions**: Join the conversation in [GitHub Discussions](https://github.com/sqnder0/snap-utils/discussions)

## ⭐ Show Your Support

If you find this extension useful, please consider:

- ⭐ Starring this repository
- 🐛 Reporting any bugs you find
- 💡 Suggesting new features
- 📢 Sharing with friends

---

**Disclaimer**: This extension is not affiliated with or endorsed by Snap Inc. Snapchat is a trademark of Snap Inc.

Made with ❤️ by sqnder0.
