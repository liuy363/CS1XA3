from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_vars , name='lab7'),
]
