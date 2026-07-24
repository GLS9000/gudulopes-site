SELF-HOSTED FONTS — what to drop in this folder
================================================
The site currently loads fonts from Google's servers. To make it fully
GDPR-friendly (no visitor data sent to Google) and a bit faster, put the
three font files below in THIS folder, named EXACTLY as shown, then tell
Claude — Claude will switch the CSS over and remove the Google link.

Files needed (WOFF2 format, "latin" subset):
  1. cinzel-400.woff2   (Cinzel, Regular / 400)
  2. lato-400.woff2     (Lato,   Regular / 400)
  3. lato-700.woff2     (Lato,   Bold / 700)

Easiest way to get them (free, no signup):
  1. Go to  https://gwfh.mranftl.com  (google-webfonts-helper)
  2. Search "Cinzel"  -> tick weight 400 (regular) -> under "Copy CSS" pick
     "Modern Browsers" -> in the "Download files" box, download the .zip.
     Inside is a .woff2 file — rename it to  cinzel-400.woff2
  3. Search "Lato" -> tick 400 (regular) and 700 (bold) -> download the .zip.
     Rename the two .woff2 files to  lato-400.woff2  and  lato-700.woff2
  4. Put all three files in this folder (assets/fonts/).
  5. Tell Claude "fonts are in" — Claude does the rest.

(Alternatively just send the three files to Claude in chat and Claude will
place them.)
