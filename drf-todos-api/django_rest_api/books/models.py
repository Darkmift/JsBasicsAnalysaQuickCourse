# books/models.py
from djongo import models

class Review(models.Model):
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        abstract = True

class Book(models.Model):
    _id = models.ObjectIdField()
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    publication_date = models.DateField()
    isbn = models.CharField(max_length=13, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # MongoDB specific fields
    description = models.TextField(blank=True)
    genres = models.JSONField(default=list)  # Store array of genres
    reviews = models.ArrayField(
        model_container=Review,
        default=list
    )  # Embedded documents
    metadata = models.JSONField(default=dict)  # Flexible schema for additional data

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'books'