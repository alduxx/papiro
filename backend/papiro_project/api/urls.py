from django.urls import path, include


urlpatterns = [
    path('rest/', include('api.rest.urls')),
]
