from django.http import JsonResponse
from django.core import mail
from django.views import View
import json

class Projects(View):
    def get(self, request):
        return JsonResponse({'all':'working'})

class ProjectDetails(View):
    def get(self, request, proj_id ):
        return JsonResponse({'get_one':'working'})
    def post(self, request, proj_id, token):
        return JsonResponse({'post_one':'working'})
    def put(self, request, proj_id, token):
        return JsonResponse({'put_one':'working'})
    def delete(self, request, proj_id, token):
        return JsonResponse({'delete_one': 'working'})
