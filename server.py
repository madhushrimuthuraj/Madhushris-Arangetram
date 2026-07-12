"""
Madhushri's Arangetram — local preview server.

Run this file (see README.md for exact steps), and it will:
  1. Start a local web server for this website folder
  2. Print a link you can click/open in your browser
  3. Try to open that link in your default browser automatically

To stop the server, go back to the terminal and press Ctrl+C.
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

# Make sure the server serves files from this project folder,
# no matter where the script is run from.
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

def main():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 50)
        print("  Madhushri's Arangetram — website preview")
        print(f"  Open this link in your browser: {url}")
        print("  Press Ctrl+C in this terminal to stop the server.")
        print("=" * 50)
        try:
            webbrowser.open(url)
        except Exception:
            pass
        httpd.serve_forever()

if __name__ == "__main__":
    main()
