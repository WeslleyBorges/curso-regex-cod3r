import re

text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

pattern9 = re.compile('9')

match = re.search(pattern9, text)
print('From index %s to %s; Value: %s' % (match.start(), match.end(), match.group()))

values = re.findall('[9-c]', text)

print('Values: %s' % values)