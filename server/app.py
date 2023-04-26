# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import Project

class Projects(Resource):
    def get(self):
        project_dicts = [project.to_dict() for project in Project.query.all()]

        return make_response(
            project_dicts,
            200
        )
api.add_resource(Projects, '/projects')

class ProjectById(Resource):
    def get(self, id):
        project_dict = Project.query.filter(Project.id == id).first().to_dict()

        return make_response(
            project_dict,
            200
        )
api.add_resource(ProjectById, '/projects/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
