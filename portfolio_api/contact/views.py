from django.http import JsonResponse
from django.views import View
from django.core import mail
import json

def bodyFormatter(request):
    return json.loads(request.body.decode())

class Email(View):
    #contact me
    def post(self, request):
        # need to make sure the contact form follows the format needed for mail.send_mail()
        email = bodyFormatter(request)
        email['subject'] = "email from " + email['from']
        email['to'] = 'hector.g.diaz.the.3rd@gmail.com'
        mail.send_mail(email['subject'], email['content'], email['from'], [email['to']])

        return JsonResponse({'email_post': 'working', 'request': email})

    #send yourself a copy of my resume
    def put(self, request):

        email = request.body.decode()
        email = json.loads(email);
        email = {
            'subject': "Hector G. Diaz's Resume",
            'content': 'my cover letter and resume',
            'from': 'from <hector.g.diaz.the.3rd@gmail.com>',
            'to': [email['from']]
        }
        msg = mail.EmailMessage(email['subject'], email['content'], email['from'], email['to'])
        msg.content_subtype = "html"
        msg.attach_file("contact/static/contact/pdfs/cover_letter_and_resume.pdf")
        msg.send()

        return JsonResponse({'email_post': 'working', 'request': email})