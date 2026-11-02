"""Keep the portfolio's Streamlit demos awake.

Streamlit Community Cloud puts free apps to sleep after a period with no
visitors. A plain HTTP request doesn't count as a visit, so this opens each
app in a headless browser, clicks the wake-up button if the app is asleep,
and waits until the app itself has loaded.

Run by .github/workflows/keep-streamlit-awake.yml every 6 hours.
"""
import sys

from playwright.sync_api import TimeoutError as PlaywrightTimeout
from playwright.sync_api import sync_playwright

APPS = {
    "Voice comparison": "https://voice-comparison-gafkqkg4wzbdsahpvj6x3v.streamlit.app/",
    "House price monitor": "https://uk-house-price-dashboard-3kxstxtkpbp5hqpsdbglyf.streamlit.app/",
    "Crime trends": "https://uk-crime-trends-forecast-2km7uvnzwmqwdkwnj6xu4s.streamlit.app/",
    "Stock NL-to-SQL": "https://stock-nl-sql-demo-dwy26ueqy4gb3ybcbdohuk.streamlit.app/",
}

WAKE_BUTTON = "Yes, get this app back up!"
# The app runs inside an iframe; this element exists once it has rendered
APP_READY = '[data-testid="stApp"]'

def wake(page, name, url):
    page.goto(url, wait_until="domcontentloaded", timeout=60_000)
    page.wait_for_timeout(5_000)

    button = page.get_by_role("button", name=WAKE_BUTTON)
    was_asleep = button.count() > 0
    if was_asleep:
        button.click()

    # Waking can take a minute or two; an awake app loads in a few seconds
    page.frame_locator("iframe").first.locator(APP_READY).wait_for(timeout=240_000)
    print(f"{name}: {'woken up' if was_asleep else 'already awake'}")

def main():
    failed = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for name, url in APPS.items():
            page = browser.new_page()
            try:
                wake(page, name, url)
            except PlaywrightTimeout:
                print(f"{name}: did not load in time - {url}")
                failed.append(name)
            finally:
                page.close()
        browser.close()

    if failed:
        sys.exit(f"Not confirmed awake: {', '.join(failed)}")

if __name__ == "__main__":
    main()
