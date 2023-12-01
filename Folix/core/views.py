from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm

# Create your views here.

#! ---------- VISTAS --------------


def home(request):
    return render(request, "core/cuenta.html")
