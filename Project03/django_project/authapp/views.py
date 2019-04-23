from django.shortcuts import render

# Create your views here.
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from authapp.models import Score
#from authapp.forms import ScoreForm
from django import forms
from django.http import HttpResponse, HttpResponseRedirect

import json

# Create your views here.
def mainpage(request):
    return HttpResponseRedirect("https://mac1xa3.ca/u/liuy363/project3.html")



def userlogin(request):
    print('fda')
    json_req = json.loads(request.body.decode('utf-8'))
    username = json_req.get('username','')
    password = json_req.get('password','')
    if request.method == 'POST':
        print('safdfgfs')
        user = authenticate(request, username=username, password=password)
        print('hereeeeee')
        if user is None:
            print('whattt')
            return HttpResponse('LoginFailed')
        else:
            print('??????')
            login(request, user)
            return HttpResponseRedirect("https://mac1xa3.ca/u/liuy363/clientside.html")  #####to the game page  

    else:
        print('nonono')
        return HttpResponseRedirect("https://mac1xa3.ca/u/liuy363/login.html") ####TODO


def userlogout(request):
    logout(request)
    return HttpResponseRedirect("https://mac1xa3.ca/u/liuy363/project3.html")


def adduser(request):
    print('11')
    json_req = json.loads(request.body.decode('utf-8'))
    username = json_req.get('username','')
    password = json_req.get('password','')

    if username != '':
        user = User.objects.create_user(username=username,
                                        password=password)

        login(request,user)
        return HttpResponse('LoggedIn')

    else:
        return HttpResponse('LoggedOut')   


def user_info(request):
    """serves content that is only available to a logged in user"""

    if not request.user.is_authenticated:
        return HttpResponse("LoggedOut")
    else:
        # do something only a logged in user can do
        return HttpResponse("Hello " + request.user.username)






def myscore(request):
    print('heresdfdsadfdgssasdafeejdsk')
    if request.method == 'POST':
        score_data = json.loads(request.body)
        print(str(score_data))

        return HttpResponse (str(score_data))
    
    else:
        return HttpResponse ('nottttt')




