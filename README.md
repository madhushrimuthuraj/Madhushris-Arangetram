# Madhushri's Arangetram — Website

A 4-page website (Invitation, Program, Performers, Live Stream) with an
orange-and-navy theme, gold accents, and an 8-page flippable program book.

## What's in this folder

```
madhushri-arangetram/
├── index.html                     the whole website (4 pages, one file)
├── css/style.css                  colors, fonts, layout
├── js/script.js                   tab switching + flipbook logic
├── server.py                      run this to preview in your browser
├── images/
│   └── INSERT_IMAGES_HERE.txt     exact file names your photos should use
└── README.md                      this file
```

Every spot in `index.html` where you need to add a photo is marked with
an `<!-- INSERT IMAGE ... -->` comment, and shows an orange-and-navy
"INSERT IMAGE" placeholder box on the page until you add the real photo.

## 1. Download the code

Download/unzip the `madhushri-arangetram` folder to somewhere easy to
find, like your Desktop.

## 2. Open it in VSCode

1. Open **VSCode**.
2. Go to **File → Open Folder...**
3. Select the `madhushri-arangetram` folder.

## 3. View it in your browser

You have two easy options — pick whichever you like:

### Option A: Live Server extension (easiest, auto-refreshes)

1. In VSCode, go to the **Extensions** icon on the left sidebar.
2. Search for **"Live Server"** (by Ritwick Dey) and click **Install**.
3. In the file explorer on the left, right-click `index.html`.
4. Click **"Open with Live Server."**
5. Your browser will open automatically to something like
   `http://127.0.0.1:5500` showing the website.

### Option B: Python server (no extensions needed)

1. In VSCode, open a terminal: **Terminal → New Terminal**.
2. Make sure you're inside the `madhushri-arangetram` folder (the
   terminal should already be there if you opened this folder in VSCode).
3. Run:
   ```
   python3 server.py
   ```
   (On Windows, you may need `python server.py` instead.)
4. The terminal will print a link like `http://localhost:8000` and try
   to open it in your browser automatically. If it doesn't open on its
   own, copy that link into your browser's address bar.
5. To stop the server later, click back into the terminal and press
   `Ctrl+C`.

## 4. Add your photos

1. Open the `images` folder.
2. Read `INSERT_IMAGES_HERE.txt` for the exact file names to use
   (e.g. `invitation.jpg`, `dancer.jpg`, `guru.jpg`, `orchestra1.jpg`,
   `orchestra2.jpg`, `orchestra3.jpg`).
3. Drop your photos into that folder using those names. Refresh your
   browser tab and they'll appear automatically — no code editing needed.

## 5. Add your live stream link

1. Open `index.html` in VSCode.
2. Find the section commented `INSERT YOUTUBE LINK` (in the Live Stream
   page section).
3. Replace `VIDEO_ID` inside the iframe `src="https://www.youtube.com/embed/VIDEO_ID"`
   with your actual YouTube video ID — the part after `v=` in a normal
   YouTube link.
   Example: if your link is `https://www.youtube.com/watch?v=ABC12345XYZ`,
   your VIDEO_ID is `ABC12345XYZ`, so the line becomes:
   `src="https://www.youtube.com/embed/ABC12345XYZ"`

## 6. Edit the program pages

Open `js/script.js` and look for the `programPages` list near the top.
Each of the 8 entries has a `title` and `body` you can edit freely —
these are the words that appear inside the flippable program book.

## 7. Put the site online for others to see (optional)

Once you're happy with it, the simplest free option is
**[Netlify Drop](https://app.netlify.com/drop)** — just drag your whole
`madhushri-arangetram` folder onto the page and it gives you a live
public link to share with guests. GitHub Pages is another free option
if you're comfortable with GitHub.
