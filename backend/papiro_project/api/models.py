from django.db import models

from django.utils.translation import gettext_lazy as _


class Api(models.Model):
    """
    Describes an API model witch contains the services and its parameters
    """
    name = models.CharField(_('name'), max_length=60, unique=True)
    description = models.TextField(_('description'), blank=True)
    enabled = models.BooleanField(_('enabled'), default=True)

    def __str__(self):
        return self.name
