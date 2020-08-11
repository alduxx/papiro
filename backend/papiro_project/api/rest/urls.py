from django.urls import path

from .views import ApiListView, ApiDetailView

urlpatterns = [
    path('', ApiListView.as_view()),
    path('<pk>', ApiDetailView.as_view()),
]
