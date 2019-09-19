from django.core.mail import send_mail
from django.http import JsonResponse
from django.views import View

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

class Email(View):
    def post(self, request, context):
        pass
    def put(self, request):
        pass