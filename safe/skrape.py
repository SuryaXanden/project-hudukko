#import sys
#url = sys.argv[1]
#print("<br><h1>Trying scraping from python from this URL : " + url + "</h1>")

#Python program to scrape website 
#and save quotes from website
import requests
from bs4 import BeautifulSoup
'''
URL = "http://www.google.com/search?q=suryaxanden"
r = requests.get(URL) 
soup = BeautifulSoup(r.content, 'html5lib')
print(soup.prettify())

quotes=[]  # a list to store quotes
 
table = soup.find('div', attrs = {'id':'container'})
 
for row in table.findAll('div', attrs = {'class':'quote'}):
    quote = {}
    quote['theme'] = row.h5.text
    quote['url'] = row.a['href']
    quote['img'] = row.img['src']
    quote['lines'] = row.h6.text
    quote['author'] = row.p.text
    quotes.append(quote)
 
filename = 'inspirational_quotes.csv'
with open(filename, 'wb') as f:
    w = csv.DictWriter(f,['theme','url','img','lines','author'])
    w.writeheader()
    for quote in quotes:
        w.writerow(quote)
'''

item = "shoes"
URL = "https://www.snapdeal.com/search?sort=rlvncy&keyword="
URL += item

r = requests.get(URL)
soup = BeautifulSoup(r.content, 'html5lib')

el = soup.select('#content_wrapper > div.col-xs-24.reset-padding.marT22 > div.col-xs-19.reset-padding > div.comp.comp-right-wrapper.ref-freeze-reference-point.clear')[0].get_text()

#flipkart = soup.select('#container > div > div.t-0M7P._2doH3V > div._3e7xtJ > div > div._1HmYoV.hCUpcT > div._1HmYoV._35HD7C.col-10-12')[0].get_text()



print(el)

#print(soup.get_text())#working