FROM alpine:3.11

# Github labels
LABEL "com.github.actions.name"="Backblaze B2 Upload Action"
LABEL "com.github.actions.description"="Triggering CURL"
LABEL "com.github.actions.icon"="upload-cloud"
LABEL "com.github.actions.color"="red"

LABEL "repository"="https://github.com/yamatt/backblaze-b2-upload-action"
LABEL "homepage"="https://github.com/yamatt/backblaze-b2-upload-action"
LABEL "maintainer"="Matt Copperwaite <matt@copperwaite.net>"

RUN apk add --update --no-cache py3-pip
RUN python3 -m pip install b2==2.5.0

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
