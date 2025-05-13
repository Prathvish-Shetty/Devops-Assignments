from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

# Path to your chromedriver executable
chrome_driver_path = "C:\\Users\\Prathvish Shetty\\Downloads\\chromedriver-win64\\chromedriver.exe"

# Use Service class to set up the driver
service = Service(executable_path=chrome_driver_path)
driver = webdriver.Chrome(service=service)

# Open Google
driver.get("https://www.google.com")
time.sleep(2)  # Let page load

# Check for the Google Search button
try:
  search_button = driver.find_element(By.NAME, "btnK")
  print("Test Passed: Google Search button found.")
except:
  print("Test Failed: Google Search button not found.")

# Close browser
driver.quit()