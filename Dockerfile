FROM alpine:latest

RUN apk --no-cache add g++ gcc git make musl-dev ruby-dev ruby-full

ARG UID=1000
ARG GID=1000
ARG NAME=juser

RUN addgroup --system --gid ${GID} ${NAME}
RUN adduser --system --uid ${UID} --ingroup ${NAME} ${NAME}

WORKDIR /home/${NAME}

USER ${NAME}

ENV GEM_HOME="/home/${NAME}/gems"
ENV PATH="/home/${NAME}/gems/bin:$PATH"
ENV PS1="\[\e[1;36m\]`whoami`\[\e[0;37m\]:\[\e[1;33m\]\w\[\e[0;37m\]\$ "

RUN gem install jekyll bundler
