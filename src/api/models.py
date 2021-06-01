from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

gun_activities = db.Table('gun_activities',
    db.Column('gun_id', db.Integer, db.ForeignKey('gun.id'), primary_key=True),
    db.Column('activity_id', db.Integer, db.ForeignKey('activity.id'), primary_key=True)
)

gun_bookmarks = db.Table('gun_bookmarks',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('gun_id', db.Integer, db.ForeignKey('gun.id'), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(80), unique=False, nullable=False)
    lname = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    bookmarks = db.relationship('Gun', secondary=gun_bookmarks, lazy='subquery')

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # "first name": self.fname,
            # "last name": self.lname,
            "bookmarks": list(map(lambda x: x.serialize(), self.bookmarks))
            # do not serialize the password, its a security breach
        }

class Gun(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    manufacturer = db.Column(db.String(120))
    caliber = db.Column(db.String(120))
    barrelLength = db.Column(db.String(120))
    capacity = db.Column(db.String(120))
    category = db.Column(db.String(120))
    guntype = db.Column(db.String(120))
    weight = db.Column(db.String(120))
    activities = db.relationship('Activity', secondary=gun_activities, lazy='subquery')

    def __repr__(self):
        return '<Gun %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "manufacturer": self.manufacturer,
            "caliber": self.caliber,
            "barrelLength": self.barrelLength,
            "capacity": self.capacity,
            "category": self.category,
            "guntype": self.guntype,
            "weight": self.weight,
            "activities": list(map(lambda x: x.name, self.activities))
        }

class Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<%r>' % self.name