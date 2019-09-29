from djongo import models


class StringArrayManager(models.DjongoManager):
    def create_instance(self):
        return self.create(
            strings = []
        )

class Project(models.Model):
    # id
    title = models.CharField(max_length=45)
    blurbs = models.ListField()
    images = models.ListField()
    links = models.ListField()
     
    
    objects = models.DjongoManager()
# Rather than create another model for all projects, project controller will format all projects into a single json for the frontend.


