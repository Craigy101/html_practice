from PIL import Image, ImageDraw, ImageFont
import matplotlib.pyplot as plt

# Create a new image with a white background
img = Image.new('RGB', (800, 600), color='white')
draw = ImageDraw.Draw(img)

# Draw the title text
draw.text((10, 10), 'EXPLORE EUROPEAN CITIES on a budget', fill='black' )

# Draw the index section
draw.text((10, 50), 'The Index', fill='black' )
draw.text((10, 80), 'The index was created by...', fill='black' )

# Draw the daily cost section
draw.text((400, 50), 'The daily cost covers', fill='black' )
draw.text((400, 80), '- Accommodation\n- Food\n- Transportation\n- Activities', fill='black' )

# Cities and their corresponding costs
cities = ['City1', 'City2', 'City3', 'City4', 'City5']
costs = [100, 200, 150, 300, 250]

# Create a bar graph using matplotlib
fig = plt.figure()
plt.bar(cities, costs)
plt.title('The cheapest cities')
plt.xlabel('Cities')
plt.ylabel('Cost')

# Save the bar graph as an image
fig.savefig('bargraph.png')

# Open the bar graph image and paste it onto the infographic
bargraph = Image.open('bargraph.png')
img.paste(bargraph, (10, 200))

# Save the final infographic as an image
img.save('infographic.png')

img.show()