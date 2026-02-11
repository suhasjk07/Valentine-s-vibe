# 🔧 Setup Instructions - Valentine's Website with Google Drive Integration

This guide will walk you through setting up the Valentine's website with WhatsApp sharing and Google Drive data saving features.

---

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Google Drive Setup (Detailed)](#google-drive-setup-detailed)
3. [Configuring the Website](#configuring-the-website)
4. [WhatsApp Features](#whatsapp-features)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Option 1: Use Without Google Drive (Simplest)
1. Open `valentines-day-enhanced.html` in a browser
2. Data won't be saved to Google Drive, but all other features work
3. WhatsApp sharing works immediately with no setup needed!

### Option 2: Full Setup with Google Drive
Follow the detailed instructions below to enable data saving.

---

## 📊 Google Drive Setup (Detailed)

### Step 1: Create Google Apps Script

1. **Go to Google Apps Script**
   - Visit: https://script.google.com
   - Make sure you're logged into the Google account where you want to save data

2. **Create a New Project**
   - Click on **"New Project"** (+ icon in top left)
   - You'll see a blank script editor

3. **Copy the Script Code**
   - Open the file `GoogleAppsScript.gs`
   - Copy ALL the code from that file
   - Paste it into the Google Apps Script editor (replace any existing code)

4. **Name Your Project**
   - Click on "Untitled project" at the top
   - Rename it to something like "Valentine Website Data Saver"
   - Click outside to save

### Step 2: Deploy the Web App

1. **Click "Deploy" → "New Deployment"**
   
2. **Configure Deployment Settings**
   - Click the gear icon ⚙️ next to "Select type"
   - Choose **"Web app"**
   
3. **Set Deployment Configuration**
   - **Description**: "Valentine's Data Collector v1"
   - **Execute as**: Select **"Me (your-email@gmail.com)"**
   - **Who has access**: Select **"Anyone"**
   
   ⚠️ **IMPORTANT**: Must select "Anyone" for the website to work!

4. **Click "Deploy"**
   - You may see an "Authorize access" prompt
   - Click **"Authorize access"**

5. **Review Permissions**
   - Google will show a warning: "Google hasn't verified this app"
   - Click **"Advanced"** (at the bottom)
   - Click **"Go to Valentine Website Data Saver (unsafe)"**
   - Click **"Allow"**
   
   ℹ️ This is safe - you're authorizing your own script!

6. **Copy the Web App URL**
   - After deployment, you'll see a **"Web app URL"**
   - It looks like: `https://script.google.com/macros/s/ABC123.../exec`
   - **Copy this entire URL** - you'll need it in the next step!
   - Click "Done"

### Step 3: Find Your Deployment URL (If You Lost It)

1. Go to **"Deploy" → "Manage deployments"**
2. Find your active deployment
3. Copy the **"Web app URL"** from there

---

## 🌐 Configuring the Website

### Update the HTML File

1. **Open** `valentines-day-enhanced.html` in a text editor (Notepad, VS Code, etc.)

2. **Find Line 604** (approximately) - look for this:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```

3. **Replace** `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web App URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/ABC123.../exec';
   ```

4. **Save the file**

### That's It! 🎉

Your website is now fully configured and will save data to Google Drive!

---

## 📱 WhatsApp Features

The website includes three WhatsApp sharing options that work **immediately without any setup**:

### 1. **Send Random Love Quote**
- Sends one of 15 pre-written romantic quotes
- No phone number needed
- Opens WhatsApp with a ready-to-send message

### 2. **Send Personalized Message**
- Uses the recipient's name in the message
- Randomly selects from 8 personalized templates
- Example: "Hey Sarah! Just wanted to remind you how incredibly special you are to me..."

### 3. **Share This Experience**
- Shares a message about the website itself
- Includes both names (recipient and sender)
- Great for inviting them to visit the website

### How WhatsApp Sharing Works

**If you entered a phone number:**
- Opens WhatsApp with message pre-filled for that specific number
- Format: `+1234567890` (include country code)

**If no phone number:**
- Opens WhatsApp with the message ready to send
- You can choose the recipient from your contacts

---

## 🧪 Testing

### Test Google Drive Integration

1. **Open the website** in your browser
2. **Enter test data**:
   - Name: "Test Person"
   - Your Name: "Test Sender"
   - Phone: "+1234567890"
3. **Click "Begin the Experience"**

4. **Check Google Drive**:
   - Go to https://drive.google.com
   - Find the spreadsheet: **"Valentine's Website Data"**
   - Open it
   - You should see your test data in a new row!

### Test WhatsApp Sharing

1. **Navigate through** the website to the WhatsApp section
2. **Click any WhatsApp button**
3. **WhatsApp should open** in a new tab/window with a pre-filled message
4. **Verify the message** looks correct (don't have to send it)

### Verify the Spreadsheet

Your Google Sheet should have these columns:
- **Timestamp**: When the form was submitted
- **Recipient Name**: The loved one's name
- **Sender Name**: Your name (or "Your Secret Admirer")
- **Phone Number**: WhatsApp number (if provided)
- **Server Timestamp**: When Google received the data

---

## 🐛 Troubleshooting

### Google Drive Not Saving Data

**Problem**: Data not appearing in Google Sheet

**Solutions**:
1. **Check the URL**: Make sure you copied the ENTIRE Web App URL
2. **Check Browser Console**:
   - Press F12 to open Developer Tools
   - Look for errors in the Console tab
3. **Redeploy**: 
   - Go to your Apps Script project
   - Deploy → Manage deployments
   - Create a "New Deployment"
   - Use the new URL in your HTML file

**Problem**: "Authorization required" error

**Solutions**:
1. Make sure "Execute as" is set to "Me"
2. Make sure "Who has access" is set to "Anyone"
3. Re-authorize the script

### WhatsApp Not Opening

**Problem**: WhatsApp button doesn't work

**Solutions**:
1. **Check if WhatsApp is installed** (for mobile)
2. **Check WhatsApp Web**: Make sure you can access https://web.whatsapp.com
3. **Disable popup blockers**: Some browsers block new tabs
4. **Try different browser**: Chrome/Firefox usually work best

**Problem**: Phone number not working

**Solutions**:
1. **Include country code**: +1234567890 (not just 1234567890)
2. **Remove spaces/dashes**: Use +1234567890 (not +1 234-567-890)
3. **Verify number exists** on WhatsApp

### Website Not Loading

**Problem**: Blank page or errors

**Solutions**:
1. **Clear browser cache**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Try different browser**: Chrome, Firefox, Safari, Edge
3. **Check file location**: Make sure HTML file is accessible
4. **View Console**: Press F12 → Console tab for error messages

---

## 🎨 Customization

### Change Love Quotes

Edit the `loveQuotes` array in the HTML file (around line 615):

```javascript
const loveQuotes = [
    "Your own custom quote here! 💕",
    "Another romantic message! ✨",
    // Add more quotes...
];
```

### Change Personalized Messages

Edit the `personalizedMessages` array (around line 632):

```javascript
const personalizedMessages = [
    "Hey {name}! Your custom message here...",
    // {name} will be replaced with recipient's name
];
```

### Change Colors

Edit CSS variables at the top of the `<style>` section:

```css
:root {
    --rose: #d4526e;        /* Change to your color */
    --gold: #d4af37;        /* Change to your color */
    /* etc. */
}
```

---

## 📊 Viewing Your Data

### Access Your Spreadsheet

1. Go to https://drive.google.com
2. Search for **"Valentine's Website Data"**
3. Open the spreadsheet

### Download Data

1. Open the spreadsheet
2. **File → Download → Microsoft Excel (.xlsx)**
   OR
3. **File → Download → CSV**

### Share Access

1. Open the spreadsheet
2. Click **"Share"** button (top right)
3. Add email addresses of people you want to share with
4. Set their permission level (Viewer/Editor)

---

## 🔒 Privacy & Security

### Data Privacy

- Data is saved to **your personal Google Drive**
- Only you can access it (unless you share the spreadsheet)
- Data includes: names, phone numbers, timestamps
- **No sensitive data** like passwords or credit cards

### Security Best Practices

1. **Don't share your Web App URL** publicly
2. **Keep the Google Sheet private**
3. **Review who has access** to your Google Drive regularly
4. **Delete old data** you no longer need

### HTTPS

- WhatsApp links use HTTPS (encrypted)
- Google Apps Script uses HTTPS (encrypted)
- All data transmission is secure

---

## 📞 Support

### Need Help?

1. **Check Troubleshooting section** above
2. **Review Google Apps Script logs**:
   - Go to your script project
   - Click "Executions" (left sidebar)
   - View recent execution logs
3. **Test with simple data** first
4. **Browser Console**: Press F12 to see detailed error messages

### Common Questions

**Q: Is this free?**
A: Yes! Google Apps Script is free, WhatsApp is free. No costs involved.

**Q: How many responses can I collect?**
A: Google Sheets supports up to 10 million cells. That's thousands of responses!

**Q: Can I use this for multiple people?**
A: Yes! Each person's data is saved as a new row in the sheet.

**Q: Will they know I'm tracking this?**
A: The data is saved silently in the background. Only you see it in your Google Drive.

---

## ✅ Checklist

Before launching your Valentine's website:

- [ ] Google Apps Script deployed successfully
- [ ] Web App URL copied and pasted into HTML file
- [ ] Tested with sample data - appears in Google Sheet
- [ ] WhatsApp buttons tested and working
- [ ] Customized messages/quotes (optional)
- [ ] Customized colors/design (optional)
- [ ] All links working properly
- [ ] Tested on mobile device
- [ ] Ready to share! 💕

---

## 🎉 You're All Set!

Your Valentine's website is ready to spread love! Share it with your special someone and make their day unforgettable! ❤️

**Happy Valentine's Day! 💝**
