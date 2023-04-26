# Standard library imports
from random import randint, choice as rc

# Local imports
from app import app
from models import db

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")

