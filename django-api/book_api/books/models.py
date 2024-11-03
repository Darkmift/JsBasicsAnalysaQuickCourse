from django.db import models

class Book(models.Model):
    book_title = models.CharField(max_length=255)
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.book_title
