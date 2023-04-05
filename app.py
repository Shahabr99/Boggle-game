from flask import Flask, render_template, redirect
from flask import session, request, jsonify, flash
from boggle import Boggle

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Whatever'

boggle_game = Boggle()


@app.route('/')
def create_board():
    board = boggle_game.make_board()
    session['gameboard'] = board
    
    return render_template('index.html', board = board)



@app.route('/result')
def handle_guess():
    guess = request.args['guess']
    board = session['gameboard']
    
    # validating user's guess
    response = boggle_game.check_valid_word(board, guess)
   
    return jsonify({'result': response})



