from django.http import JsonResponse
from django.views import View
import json

from .models import Project

class Projects(View):
    def get(self, request):
        formatted = []
        projects = Project.objects.all()
        for project in projects:
            formatted.append({
                'id': project.id,
                'place':project.place,
                'title': project.title,
                'blurb': project.blurb[0],
                'image': project.image[0],
                'links': project.links,
                  })
        return JsonResponse({'all':'working', 'projects': formatted})

class ProjectDetails(View):
    def get(self, request, proj_id):

        project = Project.objects.get(id=proj_id)
        formatted = {
            'place': project.place,
            'id': project.id,
            'title' : project.title,
            'blurb' : project.blurb,
            'image' : project.image,
            'links' : project.links,
        }
        return JsonResponse({'get_one': 'working', project.title: formatted})
        
    # def post(self, request, proj_id, token):
    #     return JsonResponse({'post_one':'working'})
    # def put(self, request, proj_id, token):
    #     return JsonResponse({'put_one':'working'})
    # def delete(self, request, proj_id, token):
    #     return JsonResponse({'delete_one': 'working'})
