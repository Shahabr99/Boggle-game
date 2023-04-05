from flask import Flask, render_template, redirect, session
from boggle import Boggle

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Whatever'
boggle_game = Boggle()

@app.route('/')
def create_board():
    board = boggle_game.make_board()
    session['gameboard'] = board
    
    return render_template('game.html', board = board)