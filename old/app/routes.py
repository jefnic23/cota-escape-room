from flask import render_template, url_for
from random import shuffle
from app import app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/password')
def password():
    return render_template('password.html')

@app.route('/quiz')
def quiz():
    pics = ["lion.jpg", "roosters.jpg", "donkeys.jpg", "turtles.jpg", "elephant.jpg", "kangaroos.jpg", "aquarium.jpg", 
    "long ears.jpg", "cuckoo.jpg", "aviary.jpg", "pianists.jpg", "fossils.jpg", "swan.jpg"
    ]
    answers = ["lion.jpg", "roosters.jpg", "donkeys.jpg", "turtles.jpg", "elephant.jpg", "kangaroos.jpg", "aquarium.jpg", "swan.jpg"]
    shuffle(answers)
    music = [f[:-3] + 'ogg' for f in answers]
    return render_template('quiz.html', pics=pics, answers=answers, music=music)

@app.route('/escaped')
def escaped():
    return render_template('escaped.html')

if __name__ == '__main__':
    app.run()