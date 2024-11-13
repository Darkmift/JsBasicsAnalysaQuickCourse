# books/serializers.py
from rest_framework import serializers
from .models import Book, Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['rating', 'comment', 'created_at']

class BookSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, required=False)
    
    class Meta:
        model = Book
        fields = ['_id', 'title', 'author', 'publication_date', 'isbn', 
                 'created_at', 'updated_at', 'description', 'genres', 
                 'reviews', 'metadata']
        read_only_fields = ['_id']