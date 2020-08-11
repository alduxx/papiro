from django.test import TestCase

from .models import Api


class ApiModelTests(TestCase):
    """
    Tests if the API was created succesfully
    """

    def test_api_was_created(self):
        api = Api(name='Example',
                  description='An example api for testing purposes').save()

        api_list = Api.objects.all()

        self.assertIs(len(api_list), 1)
