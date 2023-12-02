# Generated by Django 4.2.7 on 2023-12-02 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('cod', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=36)),
                ('paternal_surname', models.CharField(max_length=36)),
                ('maternal_surname', models.CharField(max_length=36)),
                ('user', models.CharField(max_length=36, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=128)),
            ],
        ),
    ]
