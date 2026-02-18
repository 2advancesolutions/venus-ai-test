# Demo Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the dev server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to http://localhost:5173

## What to Test

### ✅ Core Features

**Opening the Composer:**
- Click the "Open Email Composer" button
- The modal should slide in smoothly with a dark backdrop

**Header Actions:**
- Click minimize icon (logs to console)
- Click pop-out icon (logs to console)
- Click copy icon (logs to console)

**From Field:**
- Click on the sender field to see dropdown
- Shows "Olivia Rhye" with avatar and email

**Recipient Management:**
- Type an email in the "To" field and press Enter/Comma/Space
- Invalid emails won't be added (no @ symbol)
- Click X on a chip to remove it
- Click "Cc" or "Bcc" to show those fields
- Add recipients to CC/BCC the same way

**Rich Text Editor:**
- Select text and click Bold (B icon)
- Select text and click Italic (I icon)
- Click link icon and enter a URL
- Click bullet list or numbered list icons
- The demo content shows examples of formatting

**Signature:**
- Notice the character count (64) on the right
- The signature shows "Olivia Rhye"

**File Attachments:**
- A demo PDF file is automatically uploading when you open
- Watch the progress bar animate from 0% to 100%
- Click the X to remove an attachment
- Drag and drop files into the upload area
- Or click the upload area to browse files

**Action Bar:**
- Click Delete (closes modal)
- Click Attach (opens file picker)
- Click Schedule (logs to console)
- Click "Remind me" button (logs to console)
- Click "Send later" button (logs to console)
- Click "Send" (shows alert with success message)

### ⌨️ Keyboard Shortcuts

- **Cmd/Ctrl + Enter**: Send email (if valid)
- **Escape**: Close modal
- **Backspace** in empty recipient field: Remove last chip

### 🎯 Things to Notice

**Visual Design:**
- Clean, modern interface
- Smooth hover states on all buttons
- Recipient chips with rounded corners
- Progress indicator on uploading file
- Proper spacing and alignment

**User Experience:**
- Send button is disabled until there's at least one recipient
- Email validation prevents invalid addresses
- Modal traps focus (can't tab outside)
- Smooth animations throughout

**Technical Details:**
- TypeScript provides type safety
- Component architecture is modular and reusable
- State management is centralized in custom hook
- Accessibility features (ARIA labels, keyboard nav)

## Pre-populated Demo Data

The composer opens with:
- **From:** Olivia Rhye (hello@oliviarhye.com)
- **To:** phoenix@catalog.com, candice@catalog.com
- **Body:** Sample email with formatting (bold, italic, underline, links, lists, @mentions)
- **Signature:** Olivia Rhye (64 characters)
- **Attachment:** Tech design requirements.pdf (200 KB, uploading at 70%)

## Expected Behavior

✅ **Can Send When:**
- At least one recipient in "To" field
- Has body content OR has attachments

❌ **Cannot Send When:**
- No recipients
- Empty body AND no attachments

## Troubleshooting

**If dependencies fail to install:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**If the app doesn't start:**
- Make sure you're using Node.js 16+
- Check that port 5173 is available

**If styles don't load:**
- Restart the dev server
- Clear browser cache

## Production Build

To test the production build:
```bash
npm run build
npm run preview
```

This creates an optimized build in the `dist` folder.

---

Built by Venus 🌟 — Enjoy the demo!
