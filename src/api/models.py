from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import Column, ForeignKey, Integer, String, Float

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(256), nullable=False)
    last_name = db.Column(db.String(256), nullable=False)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Meal_planner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    days_of_the_week = db.Column(db.String(120), unique=False, nullable=False)
    breakfast = db.Column(db.String(80), unique=False, nullable=True)
    lunch = db.Column(db.String(80), unique=False, nullable=True)
    dinner = db.Column(db.String(80), unique=False, nullable=True)

    def __repr__(self):
        return f'<Meal_planner {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "days_of_the_week": self.days_of_the_week,
            "breakfast": self.breakfast,
            "lunch": self.lunch,
            "dinner": self.dinner,
            # do not serialize the password, its a security breach
        }


class Meal_shop(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    days_of_the_week = db.Column(db.String(120), unique=False, nullable=False)
    healthyfat = db.Column(db.String(80), unique=False, nullable=True)
    protein = db.Column(db.String(80), unique=False, nullable=True)
    dairy = db.Column(db.String(80), unique=False, nullable=True)
    grainscarbohydrates = db.Column(db.String(80), unique=False, nullable=True)
    vegetables = db.Column(db.String(80), unique=False, nullable=True)
    fruits = db.Column(db.String(80), unique=False, nullable=True)

    def __repr__(self):
        return f'<Meal_shop {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "days_of_the_week": self.days_of_the_week,
            "healthyfat": self.healthyfat,
            "protein": self.protein,
            "dairy": self.dairy,
            "grainscarbohydrates": self.grainscarbohydrates,
            "vegetables": self.vegetables,
            "fruits": self.fruits,
            # do not serialize the password, its a security breach
        }
