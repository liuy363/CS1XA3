from django.urls import path
from . import views

urlpatterns = [
	path('' , views.hello_world , name = "helloapp-hello_world") ,
	path("gettest/", views.get_test , name = "helloapp-get_test") ,
	path("posttest/",views.get_test , name = "helloapp-posttest") 
]

