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

class Email(View):
    def post(self, request):
        # need to make sure the contact form follows the format needed for mail.send_mail()
        email = request.body.decode()
        email = json.loads(email);
        email['subject'] = "Hector G. Diaz's Resume"
        email['to'] = 'hector.g.diaz.the.3rd@gmail.com'
        print('*' * 100, 'this is the formatted request', type(email))
        mail.send_mail(email['subject'], email['content'], email['email'], [email['to']])
        return JsonResponse({'email_post': 'working', 'request': email})
        
    def put(self, request):
        pass