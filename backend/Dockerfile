FROM python:3.6

WORKDIR /work

COPY ./main.py ./
COPY ./racersheet.py ./
COPY ./credentials.json ./
COPY ./requirements.txt ./

RUN pip install -r requirements.txt

EXPOSE 5000
