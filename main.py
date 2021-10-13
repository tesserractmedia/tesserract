import tkinter
import json

'''PATH = "src/data.json"

file = open(PATH, 'r')

bfile = open('src/backup-data.json', 'w')

bfile.write(file.read())

data = json.load(file)
file.close()
bfile.close()


print(data)
'''

window = tkinter.Tk()
window.title("Tesserract Green Screen")
window.geometry('500x500')
window.resizable(False,False)
titleVar = tkinter.StringVar()
urlVar = tkinter.StringVar()
dateVar = tkinter.StringVar()
tags = tkinter.StringVar()

title = tkinter.Entry(window, textvariable=titleVar,font = ('calibre',12,'normal'))
url = tkinter.Entry(window, textvariable=urlVar,font = ('calibre',10,'normal'))
date = tkinter.Entry(window, textvariable=dateVar,font = ('calibre',10,'normal'))
tags = tkinter.Entry(window, textvariable=tags,font = ('calibre',10,'normal'))

titleLabel = tkinter.Label(window,text='Title')
urlLabel = tkinter.Label(window,text="url")
dateLabel = tkinter.Label(window,text="date")
tagsLabel = tkinter.Label(window,text="tags")

titleLabel.grid(row=0,column=0,)
urlLabel.grid(row=1,column=0)
dateLabel.grid(row=2,column=0)
tagsLabel.grid(row=3,column=0)

title.grid(row=0, column=1,sticky="e")
url.grid(row=1, column=1)
date.grid(row=2, column=1)
tags.grid(row=3, column=1)

window.mainloop()
