from rest_framework.generics import ListAPIView, RetrieveAPIView

from api.models import Api
from .serializers import ApiSerializer


class ApiListView(ListAPIView):
    queryset = Api.objects.all()
    serializer_class = ApiSerializer


class ApiDetailView(RetrieveAPIView):
    queryset = Api.objects.all()
    serializer_class = ApiSerializer
