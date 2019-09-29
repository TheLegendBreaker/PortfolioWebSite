from djongo import models

class StringArrayManager(models.DjongoManager):
    def create_instance(self):
        return self.create(
            strings = []
        )

class Project(models.Model):
    place = models.IntegerField()
    title = models.CharField(max_length=45)
    blurb = models.ListField()
    image = models.ListField()
    links = models.ListField()
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)

    objects = models.DjongoManager()
# Rather than create another model for all projects, project controller will format all projects into a single json for the frontend.


