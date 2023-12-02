from django.db import models


# Create your models here.
class Usuario(models.Model):
    cod = models.AutoField(primary_key=True)
    name = models.CharField(max_length=36)
    paternal_surname = models.CharField(max_length=36)
    maternal_surname = models.CharField(max_length=36)
    user = models.CharField(max_length=36, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
