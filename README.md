# 💕 Valentine's Day Surprise Website

A beautiful, interactive single-page website to express your love this Valentine's Day. Create a personalized romantic experience for your special someone with elegant animations, heartfelt messages, WhatsApp sharing, and automatic data saving to Google Drive!

![Valentine's Day](https://img.shields.io/badge/Occasion-Valentine's%20Day-ff69b4)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?logo=whatsapp&logoColor=white)
![Google Drive](https://img.shields.io/badge/Google%20Drive-4285F4?logo=googledrive&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌹 Overview

This project is a romantic, fully-responsive website designed to help you express your love in a memorable way. Simply enter your partner's name, and watch as a personalized love experience unfolds with beautiful animations, heartfelt messages, and interactive elements.

**NEW FEATURES:**
- 📱 **WhatsApp Integration**: Send romantic quotes and personalized messages directly via WhatsApp
- ☁️ **Google Drive Storage**: Automatically save all responses to your Google Drive spreadsheet
- 💌 **15+ Love Quotes**: Pre-written romantic messages ready to share
- 🎯 **Personalized Messages**: Custom messages with your loved one's name

Perfect for Valentine's Day, anniversaries, or any special occasion where you want to show someone how much they mean to you.

## ✨ Features

- **🎯 Personalization**: Dynamically inserts your loved one's name throughout the experience
- **📱 WhatsApp Integration**: 
  - Send random love quotes directly via WhatsApp
  - Send personalized messages with recipient's name
  - Share the website experience with loved ones
  - Works with or without phone number input
- **☁️ Google Drive Storage**: 
  - Automatically saves all visitor data to your Google Sheet
  - Track names, timestamps, and phone numbers
  - Free and secure storage in your personal Google Drive
  - Easy setup with Google Apps Script
- **💝 Beautiful Design**: Elegant dark theme with romantic rose and gold color palette
- **🎨 Smooth Animations**: 
  - Floating hearts background
  - Gradient shifting backgrounds
  - Staggered reveal animations
  - Heart explosion particle effects
  - Hover and interaction effects
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **💌 Heartfelt Content**:
  - Personalized love letter
  - Three interactive appreciation cards
  - Special surprise message modal
  - 15+ pre-written romantic quotes
  - 8+ personalized message templates
- **🎭 Interactive Elements**:
  - Name input with validation
  - Optional sender name and phone number
  - Clickable cards with hover effects
  - Surprise button with modal popup
  - Heart explosion animation
  - Multiple WhatsApp sharing buttons
- **⚡ Single File**: Everything contained in one HTML file - no build process needed!
- **🎪 Minimal Dependencies**: Only uses Google Fonts CDN for typography

## 🚀 Quick Start

### Option 1: Simple Use (No Setup Required)
1. Download `valentines-day-enhanced.html`
2. Open it in any modern web browser
3. Enter your partner's name
4. Use WhatsApp sharing features immediately!
5. *Note: Data won't be saved to Google Drive without setup*

### Option 2: Full Setup (WhatsApp + Google Drive)
1. Download all files from this repository
2. Follow the **[SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)** guide
3. Deploy Google Apps Script (5 minutes)
4. Configure the HTML file with your Web App URL
5. Enjoy all features including automatic data saving!

### Option 3: Clone the Repository
```bash
git clone https://github.com/yourusername/valentines-day-surprise.git
cd valentines-day-surprise
# Follow SETUP_INSTRUCTIONS.md for Google Drive setup
open valentines-day-enhanced.html
```

## 💻 Usage

### Basic Usage

1. **Open the website** in your browser
2. **Fill in the form**:
   - Your loved one's name (required)
   - Your name (optional - appears in signature)
   - WhatsApp number (optional - for direct messaging)
3. **Click "Begin the Experience"** to start
4. **Let them enjoy**:
   - Personalized love letter
   - Three appreciation cards
   - WhatsApp sharing options
5. **Share via WhatsApp**:
   - Click "Send Random Love Quote" for a romantic quote
   - Click "Send Personalized Message" for a custom message
   - Click "Share This Experience" to invite them to the website
6. **Click the surprise button** for a special final message with heart explosion!

### WhatsApp Features Explained

**Send Random Love Quote:**
- Randomly selects from 15+ romantic quotes
- Opens WhatsApp with pre-filled message
- No phone number needed (can choose recipient)

**Send Personalized Message:**
- Uses your loved one's name in the message
- 8+ different message templates
- Example: "Hey Sarah! Just wanted to remind you..."

**Share This Experience:**
- Tells them about this romantic website
- Includes both sender and recipient names
- Encourages them to visit and see the full experience

### Google Drive Data Storage

When properly configured (see [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)), the website automatically saves:
- Recipient's name
- Sender's name
- Phone number (if provided)
- Timestamp of submission
- All data stored in a Google Sheet named "Valentine's Website Data"

**Privacy Note**: Only you can access this data in your personal Google Drive.

### Customization Tips

You can easily customize the content by editing the HTML file:

- **Love Letter**: Modify the text in the `.love-letter` section (around line 450)
- **Appreciation Cards**: Update the three `.card` elements with your own messages (around line 465)
- **Surprise Messages**: Edit the `messages` array in the JavaScript (around line 770)
- **Love Quotes**: Edit the `loveQuotes` array (around line 615) - add your own romantic quotes!
- **Personalized Messages**: Edit the `personalizedMessages` array (around line 632) - customize the WhatsApp templates
- **Colors**: Change CSS variables in the `:root` section for different color schemes
- **Fonts**: Replace Google Fonts links to use different typography
- **Google Apps Script URL**: Update `GOOGLE_SCRIPT_URL` constant (line 604) with your deployment URL

## 🎨 Design Features

### Color Palette
- **Rose** (#d4526e) - Primary accent
- **Deep Rose** (#a23756) - Secondary accent
- **Blush** (#f7c6d3) - Soft highlights
- **Cream** (#fff5f7) - Text on dark background
- **Burgundy** (#5d001e) - Deep backgrounds
- **Gold** (#d4af37) - Luxury accents

### Typography
- **Display Font**: Playfair Display (elegant, romantic serif)
- **Body Font**: Cormorant Garamond (refined, readable serif)

### Animations
- Gradient background shift
- Floating hearts throughout the page
- Fade-in and scale entrance animations
- Staggered reveal for content sections
- Button ripple effects
- Card hover transformations
- Heart particle explosion on surprise reveal

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Advanced animations, gradients, and responsive design
- **Vanilla JavaScript**: Interactive functionality and dynamic content
- **Google Fonts**: Playfair Display & Cormorant Garamond
- **WhatsApp Web API**: URL scheme for sharing messages (`https://wa.me/`)
- **Google Apps Script**: Server-side data storage and processing
- **Google Sheets**: Data storage in Google Drive

## 📱 Browser Support

Works on all modern browsers:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🎁 Use Cases

Perfect for:
- 💕 Valentine's Day surprises
- 💍 Anniversary celebrations
- 🎂 Birthday love messages
- 💐 Romantic gestures
- 🌹 Apology or reconciliation
- ✨ Just because moments

## 📁 Repository Files

- **valentines-day-enhanced.html** - Main website file with all features
- **GoogleAppsScript.gs** - Google Apps Script code for data storage
- **SETUP_INSTRUCTIONS.md** - Detailed setup guide for Google Drive integration
- **README.md** - This file
- **GITHUB_DESCRIPTION.md** - Repository description templates

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🎨 Improve the design
- 📝 Enhance the content
- 🌍 Add translations

### How to Contribute
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - feel free to use it for personal or commercial projects!

## 💖 Acknowledgments

- Inspired by the timeless beauty of handwritten love letters
- Built with love for all the romantics out there
- Special thanks to everyone celebrating love in all its forms

## 🌟 Show Your Support

If this project helped you express your love, please consider:
- ⭐ Starring the repository
- 🔀 Sharing it with others
- 💝 Spreading love and kindness

## 📧 Contact

Have questions or suggestions? Feel free to reach out!

---

**Made with ❤️ for Valentine's Day**

*Remember: The best gift you can give someone is making them feel loved and appreciated. This website is just a tool - your genuine feelings are what truly matter.* 💕

## 🎯 Future Enhancements

Potential features for future versions:
- [ ] Multiple language support
- [ ] Theme customization options (light/dark, color schemes)
- [ ] Photo upload capability
- [ ] Custom audio message recording
- [x] ~~WhatsApp integration~~ ✅ IMPLEMENTED
- [x] ~~Data storage to Google Drive~~ ✅ IMPLEMENTED
- [ ] Email integration
- [ ] Countdown timer to Valentine's Day
- [ ] Print-friendly version
- [ ] Instagram/Facebook sharing
- [ ] QR code generation for easy mobile sharing
- [ ] Multiple page templates (different romantic themes)

---

### Quick Links
- [View Demo](#) *(Add your demo link here)*
- [Report Bug](https://github.com/yourusername/valentines-day-surprise/issues)
- [Request Feature](https://github.com/yourusername/valentines-day-surprise/issues)

**Happy Valentine's Day! 💝**
