from django.urls import path
from . import views


urlpatterns = [
    path('sessionincr/', views.session_incr , name = 'auth-sesson_incr') ,
    path('sessionget/', views.session_get , name = 'auth-sesson_get') ,
    path('adduser/', views.add_user , name = 'auth-add_user') ,
    path('loginuser/', views.login_user , name = 'auth-login_user') ,
    path('userinfo/', views.user_info , name = 'auth-user_info') ,
]
