FROM alpine:3.16.2

WORKDIR /

RUN apk add --no-cache git build-base cmake

RUN git clone --recursive https://github.com/fhanau/Efficient-Compression-Tool app

RUN mkdir app/build && cd app/build && cmake ../src && make

# command: /app/build/ect

CMD ["ash"]
