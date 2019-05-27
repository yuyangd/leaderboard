FROM python:3.6

WORKDIR /work

COPY ./requirements.txt ./

RUN pip install -r requirements.txt

COPY ./main.py ./
COPY ./racersheet.py ./
COPY ./credentials.json ./

EXPOSE 5000
